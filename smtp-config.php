<?php
if (!defined('WOREXA_EXEC')) {
    http_response_code(403);
    exit('Direct access forbidden.');
}

return [
    'host' => 'smtp.gmail.com',
    'port' => 587,
    'secure' => 'tls',
    'username' => 'worexatechnologies@gmail.com',
    'password' => 'dtjiqyhxwpiunhof',
    'from_email' => 'worexatechnologies@gmail.com',
    'from_name' => 'Worexa Website',
    'timeout' => 10,
];
