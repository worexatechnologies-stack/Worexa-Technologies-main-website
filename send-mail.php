<?php
// Security Headers
header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

// Restrict CORS to authorized origins
$allowedOrigins = [
    'https://worexatechnologies.com',
    'https://www.worexatechnologies.com',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:3000',
    'http://localhost:8000',
    'http://127.0.0.1:8000',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (!empty($origin)) {
    if (in_array($origin, $allowedOrigins, true) || preg_match('/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/', $origin)) {
        header("Access-Control-Allow-Origin: $origin");
        header("Vary: Origin");
    } else {
        header('Access-Control-Allow-Origin: null');
    }
}

$requestMethod = $_SERVER['REQUEST_METHOD'] ?? 'GET';

function json_response($statusCode, $payload) {
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

// IP-based Rate Limiter (Max 5 submissions per 10 minutes per IP)
$clientIp = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
if (strpos($clientIp, ',') !== false) {
    $clientIp = trim(explode(',', $clientIp)[0]);
}
$clientIp = filter_var($clientIp, FILTER_VALIDATE_IP) ?: '127.0.0.1';

function check_rate_limit($ip, $maxAttempts = 5, $windowSeconds = 600) {
    $hash = md5($ip);
    $rateDir = sys_get_temp_dir() . '/worexa_rate_limit';
    if (!is_dir($rateDir)) {
        @mkdir($rateDir, 0700, true);
    }
    $file = $rateDir . '/rl_' . $hash . '.json';
    $now = time();
    $attempts = [];
    if (file_exists($file)) {
        $content = @file_get_contents($file);
        $attempts = json_decode($content, true) ?: [];
    }
    $attempts = array_filter($attempts, function ($ts) use ($now, $windowSeconds) {
        return is_numeric($ts) && ($now - $ts) < $windowSeconds;
    });
    if (count($attempts) >= $maxAttempts) {
        return false;
    }
    $attempts[] = $now;
    @file_put_contents($file, json_encode($attempts), LOCK_EX);
    return true;
}

if (!check_rate_limit($clientIp)) {
    json_response(429, [
        'success' => false,
        'message' => 'Too many submissions. Please wait a few minutes before trying again.'
    ]);
}

$rawInput = file_get_contents('php://input');
$jsonInput = json_decode($rawInput, true);
$data = is_array($jsonInput) ? $jsonInput : $_POST;

// Anti-Spam Honeypot Check (Silently drop bots that populate trap fields)
if (!empty($data['website_url']) || !empty($data['company_website_url'])) {
    json_response(200, [
        'success' => true,
        'message' => 'Thank you. Your message has been sent.'
    ]);
}

function clean_value($value, $maxLen = 255) {
    $clean = trim(str_replace(["\r", "\n", "\0"], ' ', (string) $value));
    return mb_substr($clean, 0, $maxLen, 'UTF-8');
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
    $username = !empty($env['SMTP_USER']) ? $env['SMTP_USER'] : '';
    $password = !empty($env['SMTP_PASSWORD']) ? $env['SMTP_PASSWORD'] : '';
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
        return [false, 'SMTP is not configured. Add smtp-config.php or .env with host, username, password, and from_email.'];
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

    $clientName = preg_replace('/[^a-zA-Z0-9\.-]/', '', $_SERVER['SERVER_NAME'] ?? 'localhost') ?: 'localhost';
    [$ok, $response] = $send('EHLO ' . $clientName, 250);
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

        [$ok, $response] = $send('EHLO ' . $clientName, 250);
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
        return [false, 'SMTP password failed. Use a valid Gmail app password, not your normal password.'];
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

    $cleanReplyToName = preg_replace('/[\r\n"<>]/', '', $replyToName);
    $cleanFromName = preg_replace('/[\r\n"<>]/', '', $fromName);

    $headers = [
        'MIME-Version: 1.0',
        'From: ' . $cleanFromName . ' <' . $fromEmail . '>',
        'Reply-To: ' . $cleanReplyToName . ' <' . $replyToEmail . '>',
        'To: ' . $to,
        'Subject: ' . $subject,
    ];

    if ($attachment && !empty($attachment['tmp_name'])) {
        $boundary = md5(uniqid((string)time(), true));
        $headers[] = 'Content-Type: multipart/mixed; boundary="' . $boundary . '"';

        $safeFileName = preg_replace('/[^a-zA-Z0-9_\.-]/', '_', basename($attachment['name']));
        $file_content = chunk_split(base64_encode(file_get_contents($attachment['tmp_name'])));
        $file_type = !empty($attachment['type']) ? preg_replace('/[^\w\/\.\-]/', '', $attachment['type']) : 'application/octet-stream';

        $final_body = "--" . $boundary . "\r\n";
        $final_body .= "Content-Type: text/html; charset=UTF-8\r\n";
        $final_body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
        $final_body .= $body . "\r\n\r\n";
        $final_body .= "--" . $boundary . "\r\n";
        $final_body .= "Content-Type: " . $file_type . "; name=\"" . $safeFileName . "\"\r\n";
        $final_body .= "Content-Disposition: attachment; filename=\"" . $safeFileName . "\"\r\n";
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

// Sanitized and Length-Capped Form Inputs
$firstName = clean_value($data['firstName'] ?? '', 60);
$lastName = clean_value($data['lastName'] ?? '', 60);
$name = clean_value($data['name'] ?? trim($firstName . ' ' . $lastName), 120);
$email = filter_var(clean_value($data['email'] ?? '', 100), FILTER_VALIDATE_EMAIL);
$phone = clean_value($data['phone'] ?? '', 30);
$subject = clean_value($data['subject'] ?? 'New Lead Received', 150);
$message = clean_value($data['message'] ?? '', 4000);
$source = clean_value($data['source'] ?? '', 100);
$blogName = clean_value($data['blogName'] ?? '', 150);

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

// Secure Attachment Validation (Resumes)
$attachment = $_FILES['resumeFile'] ?? null;
if ($attachment && !empty($attachment['tmp_name'])) {
    if (!isset($attachment['error']) || $attachment['error'] !== UPLOAD_ERR_OK) {
        json_response(400, [
            'success' => false,
            'message' => 'Attachment upload failed. Please try again.'
        ]);
    }

    if (!is_uploaded_file($attachment['tmp_name'])) {
        json_response(400, [
            'success' => false,
            'message' => 'Security check failed on uploaded file.'
        ]);
    }

    // Maximum 5 MB limit
    if ($attachment['size'] > 5 * 1024 * 1024) {
        json_response(413, [
            'success' => false,
            'message' => 'Attachment is too large. Maximum allowed file size is 5 MB.'
        ]);
    }

    $ext = strtolower(pathinfo($attachment['name'], PATHINFO_EXTENSION));
    $allowedExts = ['pdf', 'doc', 'docx', 'rtf', 'txt'];
    if (!in_array($ext, $allowedExts, true)) {
        json_response(415, [
            'success' => false,
            'message' => 'Invalid file extension. Only PDF, DOC, DOCX, RTF, or TXT documents are allowed.'
        ]);
    }

    // Deep MIME verification if finfo is enabled
    if (function_exists('finfo_open')) {
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mime = finfo_file($finfo, $attachment['tmp_name']);
        finfo_close($finfo);
        $allowedMimes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/rtf',
            'text/rtf',
            'text/plain',
            'application/octet-stream'
        ];
        if (!in_array($mime, $allowedMimes, true)) {
            json_response(415, [
                'success' => false,
                'message' => 'Invalid file content. Uploaded file does not appear to be a valid document.'
            ]);
        }
    }
}

$env = load_env_file(__DIR__ . '/.env');
$to = filter_var($env['MAIL_TO'] ?? 'worexatechnologies@gmail.com', FILTER_VALIDATE_EMAIL);

if (str_starts_with($subject, 'Job Application:')) {
    $to = 'worexatechnologies@gmail.com';
}

if (!$to) {
    json_response(500, [
        'success' => false,
        'message' => 'Server recipient configuration is missing.'
    ]);
}

$subjectPrefix = clean_value($env['MAIL_SUBJECT_PREFIX'] ?? 'Website contact', 60);
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

$smtpConfigPath = __DIR__ . '/smtp-config.php';

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
            'message' => 'Unable to send message at this time. Please try again later.'
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
            'message' => 'Unable to send message at this time. Please try again later.'
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
        'message' => 'Mail service is not configured on this server.'
    ]);
}

$serverName = $_SERVER['SERVER_NAME'] ?? 'worexatechnologies.com';
$serverName = preg_replace('/^www\./', '', $serverName);
$fromDomain = in_array($serverName, ['localhost', '127.0.0.1'], true)
    ? 'worexatechnologies.com'
    : $serverName;

$cleanFromName = preg_replace('/[\r\n"<>]/', '', $name);
$headers = [
    'MIME-Version: 1.0',
    'From: Worexa Website <no-reply@' . $fromDomain . '>',
    'Reply-To: ' . $cleanFromName . ' <' . $email . '>',
    'Content-Type: text/html; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($to, $mailSubject, $body, implode("\r\n", $headers));

if (!$sent) {
    json_response(500, [
        'success' => false,
        'message' => 'Mail delivery failed. Please contact the administrator.'
    ]);
}

json_response(200, [
    'success' => true,
    'message' => 'Thank you. Your message has been sent.'
]);
