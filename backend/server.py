from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import os
import smtplib
from email.message import EmailMessage


RECIPIENT_EMAIL = "worexatechnologies@gmail.com"


def load_env_file(path=".env"):
    if not os.path.exists(path):
        return

    with open(path, "r", encoding="utf-8") as env_file:
        for line in env_file:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


def env(name, default=None):
    value = os.environ.get(name)
    return value if value not in (None, "") else default


def build_email(data):
    first_name = data.get("firstName", "").strip()
    last_name = data.get("lastName", "").strip()
    name = f"{first_name} {last_name}".strip()
    phone = data.get("phone", "").strip()
    email = data.get("email", "").strip()
    message = data.get("message", "").strip()

    required = {
        "firstName": first_name,
        "lastName": last_name,
        "phone": phone,
        "email": email,
        "message": message,
    }
    missing = [field for field, value in required.items() if not value]
    if missing:
        raise ValueError(f"Missing required fields: {', '.join(missing)}")

    sender = env("MAIL_FROM", env("SMTP_USER"))
    if not sender:
        raise RuntimeError("MAIL_FROM or SMTP_USER environment variable is required")

    subject_prefix = env("MAIL_SUBJECT_PREFIX", "Worexa Contact Form")

    mail = EmailMessage()
    mail["Subject"] = f"{subject_prefix}: {name}"
    mail["From"] = sender
    mail["To"] = env("MAIL_TO", RECIPIENT_EMAIL)
    mail["Reply-To"] = email
    mail.set_content(
        "\n".join(
            [
                "New contact form submission",
                "",
                f"Name: {name}",
                f"Phone: {phone}",
                f"Email: {email}",
                "",
                "Message:",
                message,
            ]
        )
    )
    return mail


def send_email(mail):
    host = env("SMTP_HOST", "smtp.gmail.com")
    port = int(env("SMTP_PORT", "587"))
    username = env("SMTP_USER")
    password = env("SMTP_PASSWORD")

    if not username or not password:
        raise RuntimeError("SMTP_USER and SMTP_PASSWORD environment variables are required")

    with smtplib.SMTP(host, port, timeout=20) as smtp:
        smtp.starttls()
        smtp.login(username, password)
        smtp.send_message(mail)


class ContactHandler(BaseHTTPRequestHandler):
    def _send_json(self, status, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", env("CORS_ORIGIN", "*"))
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self._send_json(200, {"success": True})

    def do_GET(self):
        if self.path == "/api/health":
            self._send_json(200, {"success": True, "message": "Backend is running"})
            return
        self._send_json(404, {"success": False, "message": "Not found"})

    def do_POST(self):
        if self.path != "/api/send-message":
            self._send_json(404, {"success": False, "message": "Not found"})
            return

        try:
            length = int(self.headers.get("Content-Length", "0"))
            payload = self.rfile.read(length).decode("utf-8")
            data = json.loads(payload) if payload else {}
            mail = build_email(data)
            send_email(mail)
            self._send_json(200, {"success": True, "message": "Message sent"})
        except ValueError as exc:
            self._send_json(400, {"success": False, "message": str(exc)})
        except Exception as exc:
            print(f"Email send failed: {exc}")
            self._send_json(500, {"success": False, "message": "Failed to send message"})

    def log_message(self, format, *args):
        print("%s - %s" % (self.address_string(), format % args))


if __name__ == "__main__":
    load_env_file()
    host = env("BACKEND_HOST", "127.0.0.1")
    port = int(env("BACKEND_PORT", "5000"))
    server = HTTPServer((host, port), ContactHandler)
    print(f"Contact backend running on http://{host}:{port}")
    server.serve_forever()
