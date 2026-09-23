<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

$requestMethod = $_SERVER['REQUEST_METHOD'] ?? 'GET';
file_put_contents(__DIR__ . '/debug.log', date('[Y-m-d H:i:s] ') . "Script started. Request Method: " . $requestMethod . " | POST keys: " . implode(',', array_keys($_POST)) . " | FILES keys: " . implode(',', array_keys($_FILES)) . "\n", FILE_APPEND);

function json_response($statusCode, $payload) {
    file_put_contents(__DIR__ . '/debug.log', date('[Y-m-d H:i:s] ') . "Responding with $statusCode: " . json_encode($payload) . "\n", FILE_APPEND);
    http_response_code($statusCode);
    echo json_encode($payload);
    exit;
}

if ($requestMethod === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($requestMethod === 'GET') {
    json_response(200, [
        'success' => true,
        'status' => 'ready',
        'message' => 'Worexa contact form mail backend is active and ready.'
    ]);
}

if ($requestMethod !== 'POST') {
    json_response(405, [
        'success' => false,
        'message' => 'Only POST requests are allowed.'
    ]);
}

$rawInput = file_get_contents('php://input');
$jsonInput = json_decode($rawInput, true);
$data = is_array($jsonInput) ? $jsonInput : $_POST;

function clean_value($value) {
    return trim(str_replace(["\r", "\n"], ' ', (string) $value));
}

function load_env_file($path) {
    if (!is_readable($path)) {
        return [];
    }

    $values = [];
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    foreach ($lines as $line) {
        $line = trim($line);

        if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) {
            continue;
        }

        [$key, $value] = explode('=', $line, 2);
        $key = trim($key);
        $value = trim($value);

        if ($key === '') {
            continue;
        }

        if (
            strlen($value) >= 2 &&
            (($value[0] === '"' && substr($value, -1) === '"') ||
            ($value[0] === "'" && substr($value, -1) === "'"))
        ) {
            $value = substr($value, 1, -1);
        }

        $values[$key] = $value;
    }

    return $values;
}

function smtp_config_from_env($env) {
    $host = !empty($env['SMTP_HOST']) ? $env['SMTP_HOST'] : 'smtp.gmail.com';
    $username = !empty($env['SMTP_USER']) ? $env['SMTP_USER'] : 'worexatechnologies@gmail.com';
    $password = !empty($env['SMTP_PASSWORD']) ? $env['SMTP_PASSWORD'] : 'xexitywvmvpugals';
    $fromEmail = !empty($env['MAIL_FROM']) ? $env['MAIL_FROM'] : $username;

    if ($host === '' || $username === '' || $password === '' || $fromEmail === '') {
        return null;
    }

    return [
        'host' => $host,
        'port' => (int) ($env['SMTP_PORT'] ?? 587),
        'secure' => $env['SMTP_SECURE'] ?? 'tls',
        'username' => $username,
        'password' => $password,
        'from_email' => $fromEmail,
        'from_name' => $env['MAIL_FROM_NAME'] ?? 'Worexa Website',
        'timeout' => (int) ($env['SMTP_TIMEOUT'] ?? 10),
    ];
}

function smtp_send($config, $to, $subject, $body, $replyToEmail, $replyToName, $attachment = null) {
    $host = $config['host'] ?? '';
    $port = (int) ($config['port'] ?? 587);
    $username = $config['username'] ?? '';
    $password = $config['password'] ?? '';
    $fromEmail = $config['from_email'] ?? $username;
    $fromName = $config['from_name'] ?? 'Worexa Website';
    $secure = strtolower($config['secure'] ?? 'tls');
    $timeout = max(5, min(15, (int) ($config['timeout'] ?? 8)));

    if ($host === '' || $username === '' || $password === '' || $fromEmail === '') {
        return [false, 'SMTP is not configured. Add smtp-config.php with host, username, password, and from_email.'];
    }

    $socketHost = $secure === 'ssl' ? 'ssl://' . $host : $host;
    $socket = @fsockopen($socketHost, $port, $errno, $errstr, $timeout);

    if (!$socket) {
        return [false, "Could not connect to SMTP server: {$errstr}"];
    }

    stream_set_timeout($socket, $timeout);

    $read = function () use ($socket) {
        $data = '';
        while ($line = fgets($socket, 515)) {
            $data .= $line;
            if (isset($line[3]) && $line[3] === ' ') {
                break;
            }
        }
        return $data;
    };

    $send = function ($command, $expectedCodes) use ($socket, $read) {
        fwrite($socket, $command . "\r\n");
        $response = $read();
        $code = (int) substr($response, 0, 3);
        return [in_array($code, (array) $expectedCodes, true), $response];
    };

    $initial = $read();
    if ((int) substr($initial, 0, 3) !== 220) {
        fclose($socket);
        return [false, 'SMTP server did not respond correctly.'];
    }

    [$ok, $response] = $send('EHLO ' . ($_SERVER['SERVER_NAME'] ?? 'localhost'), 250);
    if (!$ok) {
        fclose($socket);
        return [false, 'SMTP EHLO failed: ' . trim($response)];
    }

    if ($secure === 'tls') {
        [$ok, $response] = $send('STARTTLS', 220);
        if (!$ok || !stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            fclose($socket);
            return [false, 'SMTP STARTTLS failed: ' . trim($response)];
        }

        [$ok, $response] = $send('EHLO ' . ($_SERVER['SERVER_NAME'] ?? 'localhost'), 250);
        if (!$ok) {
            fclose($socket);
            return [false, 'SMTP EHLO after TLS failed: ' . trim($response)];
        }
    }

    [$ok, $response] = $send('AUTH LOGIN', 334);
    if (!$ok) {
        fclose($socket);
        return [false, 'SMTP auth start failed: ' . trim($response)];
    }

    [$ok, $response] = $send(base64_encode($username), 334);
    if (!$ok) {
        fclose($socket);
        return [false, 'SMTP username failed: ' . trim($response)];
    }

    [$ok, $response] = $send(base64_encode($password), 235);
    if (!$ok) {
        fclose($socket);
        return [false, 'SMTP password failed. Use a Gmail app password, not your normal Gmail password.'];
    }

    [$ok, $response] = $send('MAIL FROM: <' . $fromEmail . '>', 250);
    if (!$ok) {
        fclose($socket);
        return [false, 'SMTP sender failed: ' . trim($response)];
    }

    [$ok, $response] = $send('RCPT TO: <' . $to . '>', [250, 251]);
    if (!$ok) {
        fclose($socket);
        return [false, 'SMTP recipient failed: ' . trim($response)];
    }

    [$ok, $response] = $send('DATA', 354);
    if (!$ok) {
        fclose($socket);
        return [false, 'SMTP DATA failed: ' . trim($response)];
    }

    $headers = [
        'MIME-Version: 1.0',
        'From: ' . $fromName . ' <' . $fromEmail . '>',
        'Reply-To: ' . $replyToName . ' <' . $replyToEmail . '>',
        'To: ' . $to,
        'Subject: ' . $subject,
    ];

    if ($attachment && !empty($attachment['tmp_name'])) {
        $boundary = md5(uniqid((string)time()));
        $headers[] = 'Content-Type: multipart/mixed; boundary="' . $boundary . '"';

        $file_name = $attachment['name'];
        $file_content = chunk_split(base64_encode(file_get_contents($attachment['tmp_name'])));
        $file_type = $attachment['type'] ?: 'application/octet-stream';

        $final_body = "--" . $boundary . "\r\n";
        $final_body .= "Content-Type: text/html; charset=UTF-8\r\n";
        $final_body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
        $final_body .= $body . "\r\n\r\n";
        $final_body .= "--" . $boundary . "\r\n";
        $final_body .= "Content-Type: " . $file_type . "; name=\"" . basename($file_name) . "\"\r\n";
        $final_body .= "Content-Disposition: attachment; filename=\"" . basename($file_name) . "\"\r\n";
        $final_body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $final_body .= $file_content . "\r\n";
        $final_body .= "--" . $boundary . "--\r\n";
    } else {
        $headers[] = 'Content-Type: text/html; charset=UTF-8';
        $final_body = $body;
    }

    fwrite($socket, implode("\r\n", $headers) . "\r\n\r\n" . $final_body . "\r\n.\r\n");
    $response = $read();
    $code = (int) substr($response, 0, 3);

    $send('QUIT', 221);
    fclose($socket);

    return [$code === 250, $code === 250 ? '' : 'SMTP send failed: ' . trim($response)];
}

function send_smtp_admin($smtpConfig, $adminTo, $adminSubject, $adminBody, $replyToEmail, $replyToName, $attachment = null) {
    [$adminSent, $adminError] = smtp_send(
        $smtpConfig,
        $adminTo,
        $adminSubject,
        $adminBody,
        $replyToEmail,
        $replyToName,
        $attachment
    );

    if (!$adminSent) {
        return [false, $adminError];
    }

    return [true, ''];
}

$firstName = clean_value($data['firstName'] ?? '');
$lastName = clean_value($data['lastName'] ?? '');
$name = clean_value($data['name'] ?? trim($firstName . ' ' . $lastName));
$email = filter_var(clean_value($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone = clean_value($data['phone'] ?? '');
$subject = clean_value($data['subject'] ?? 'New Lead Received');
$message = trim((string) ($data['message'] ?? ''));
$source = clean_value($data['source'] ?? '');
$blogName = clean_value($data['blogName'] ?? '');

if ($name === '' || !$email) {
    json_response(422, [
        'success' => false,
        'message' => 'Please provide a valid name and email address.'
    ]);
}

if ($message === '') {
    $context = [];
    if ($phone !== '') $context[] = "Phone: {$phone}";
    if ($source !== '') $context[] = "Source: {$source}";
    if ($blogName !== '') $context[] = "Article / Page: {$blogName}";
    $message = "Inquiry submitted through website form.\n" . implode("\n", $context);
}

$env = load_env_file(__DIR__ . '/.env');
$to = filter_var($env['MAIL_TO'] ?? 'worexatechnologies@gmail.com', FILTER_VALIDATE_EMAIL);

if (str_starts_with($subject, 'Job Application:')) {
    $to = 'worexatechnologies@gmail.com';
}

file_put_contents(__DIR__ . '/debug.log', date('[Y-m-d H:i:s] ') . "Admin notification TO: $to | Submitted email: $email | Subject: $subject\n", FILE_APPEND);


if (!$to) {
    json_response(500, [
        'success' => false,
        'message' => 'MAIL_TO is missing or invalid.'
    ]);
}

$subjectPrefix = clean_value($env['MAIL_SUBJECT_PREFIX'] ?? 'Website contact');
$mailSubject = $subjectPrefix . ': ' . $subject;
$title = str_starts_with($subject, 'Job Application:') ? "New Job Application" : "New Consultation Request";
$dateStr = gmdate('Y-m-d\TH:i:s+00:00');

$body = "
<div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; border: 1px solid #e5e7eb; overflow: hidden;\">
    <div style=\"background-color: #111; padding: 30px; border-top: 4px solid #ea580c;\">
        <div style=\"color: #ea580c; font-size: 12px; font-weight: bold; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 10px;\">Worexa Technologies</div>
        <h1 style=\"color: #ffffff; font-size: 24px; margin: 0; font-weight: bold;\">{$title}</h1>
    </div>
    
    <div style=\"padding: 30px;\">
        <p style=\"color: #6b7280; font-size: 15px; line-height: 1.5; margin-top: 0; margin-bottom: 30px;\">
            A new lead submitted the website contact form. Use the reply-to address to respond directly.
        </p>
        
        <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 30px;\">
            <tr>
                <td style=\"padding: 15px 0; border-bottom: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; width: 40%;\">Contact Person</td>
                <td style=\"padding: 15px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px; font-weight: bold; text-align: right;\">" . htmlspecialchars($name) . "</td>
            </tr>
            <tr>
                <td style=\"padding: 15px 0; border-bottom: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;\">Email</td>
                <td style=\"padding: 15px 0; border-bottom: 1px solid #e5e7eb; color: #ea580c; font-size: 14px; font-weight: bold; text-align: right;\"><a href=\"mailto:" . htmlspecialchars($email) . "\" style=\"color: #ea580c; text-decoration: none;\">" . htmlspecialchars($email) . "</a></td>
            </tr>";

if ($phone !== '') {
    $body .= "
            <tr>
                <td style=\"padding: 15px 0; border-bottom: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;\">Phone</td>
                <td style=\"padding: 15px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px; font-weight: bold; text-align: right;\">" . htmlspecialchars($phone) . "</td>
            </tr>";
}

$body .= "
            <tr>
                <td style=\"padding: 15px 0; border-bottom: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;\">Subject / Role</td>
                <td style=\"padding: 15px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px; font-weight: bold; text-align: right;\">" . htmlspecialchars($subject) . "</td>
            </tr>" . ($blogName !== '' ? "
            <tr>
                <td style=\"padding: 15px 0; border-bottom: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;\">Blog Article</td>
                <td style=\"padding: 15px 0; border-bottom: 1px solid #e5e7eb; background-color: #fff7ed; color: #ea580c; font-size: 14px; font-weight: bold; text-align: right; border-left: 3px solid #ea580c; padding-left: 10px;\">" . htmlspecialchars($blogName) . "</td>
            </tr>" : "") . ($source !== '' ? "
            <tr>
                <td style=\"padding: 15px 0; border-bottom: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;\">Source / Blog</td>
                <td style=\"padding: 15px 0; border-bottom: 1px solid #e5e7eb; color: #ea580c; font-size: 14px; font-weight: bold; text-align: right;\">" . htmlspecialchars($source) . "</td>
            </tr>" : "") . "
        </table>
        
        <div style=\"background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 20px; margin-bottom: 30px;\">
            <div style=\"color: #6b7280; font-size: 12px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 15px;\">Growth Targets / Notes</div>
            <div style=\"color: #111827; font-size: 14px; line-height: 1.6; white-space: pre-wrap;\">" . htmlspecialchars($message) . "</div>
        </div>
        
        <div style=\"color: #9ca3af; font-size: 12px;\">
            Received at {$dateStr}
        </div>
    </div>
</div>
";

$serverName = $_SERVER['SERVER_NAME'] ?? 'worexatechnologies.com';
$serverName = preg_replace('/^www\./', '', $serverName);
$fromDomain = in_array($serverName, ['localhost', '127.0.0.1'], true)
    ? 'worexatechnologies.com'
    : $serverName;

$headers = [
    'MIME-Version: 1.0',
    'From: Worexa Website <no-reply@' . $fromDomain . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/html; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$smtpConfigPath = __DIR__ . '/smtp-config.php';

$attachment = $_FILES['resumeFile'] ?? null;

$isJobApplication = str_starts_with($subject, 'Job Application:');

if (file_exists($smtpConfigPath)) {
    $smtpConfig = require $smtpConfigPath;
    [$sent, $smtpError] = send_smtp_admin(
        $smtpConfig,
        $to,
        $mailSubject,
        $body,
        $email,
        $name,
        $attachment
    );

    if (!$sent) {
        json_response(500, [
            'success' => false,
            'message' => $smtpError
        ]);
    }

    json_response(200, [
        'success' => true,
        'message' => 'Thank you. Your message has been sent.'
    ]);
}

$smtpConfig = smtp_config_from_env($env);

if ($smtpConfig !== null) {
    [$sent, $smtpError] = send_smtp_admin(
        $smtpConfig,
        $to,
        $mailSubject,
        $body,
        $email,
        $name,
        $attachment
    );

    if (!$sent) {
        json_response(500, [
            'success' => false,
            'message' => $smtpError
        ]);
    }

    json_response(200, [
        'success' => true,
        'message' => 'Thank you. Your message has been sent.'
    ]);
}

if (!function_exists('mail')) {
    json_response(500, [
        'success' => false,
        'message' => 'PHP mail() is not available on this server.'
    ]);
}

$sent = @mail($to, $mailSubject, $body, implode("\r\n", $headers));

if (!$sent) {
    json_response(500, [
        'success' => false,
        'message' => 'PHP mail failed on this server. Add SMTP settings to .env or create smtp-config.php for Gmail SMTP.'
    ]);
}

json_response(200, [
    'success' => true,
    'message' => 'Thank you. Your message has been sent.'
]);
