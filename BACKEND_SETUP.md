# PHP Contact Form Backend

The Python backend has been replaced with a PHP mail endpoint.

## Contact Form Endpoint

The contact form submits to:

```text
/send-mail.php
```

The PHP script sends messages to:

```text
worexatechnologies@gmail.com
```

## Required Hosting

Deploy the built site on hosting that supports PHP and the PHP `mail()` function.
Most shared hosting providers support this by default.

## Local Testing

From this project folder, you can test the PHP endpoint with:

```bash
npm run dev:backend
```

Keep the React dev server running in another terminal:

```bash
npm run dev
```

Then open:

```text
http://localhost:5173/contact
```

This project is configured to use the XAMPP PHP executable at:

```text
C:\xampp\php\php.exe
```

The email will only send if PHP outgoing mail is configured. XAMPP local PHP
often cannot send mail until SMTP/sendmail is configured. If local mail is not
configured, test the form after uploading it to your PHP hosting server.

## Gmail SMTP Setup

For reliable sending, use Gmail SMTP instead of raw PHP `mail()`.

1. Copy this file:

```text
smtp-config.example.php
```

2. Rename the copy to:

```text
smtp-config.php
```

3. Open `smtp-config.php` and replace:

```text
PASTE_GMAIL_APP_PASSWORD_HERE
```

with a Gmail app password for `worexatechnologies@gmail.com`.

Do not use the normal Gmail password. Gmail SMTP requires an app password.
After `smtp-config.php` is added, `send-mail.php` will use SMTP automatically.
