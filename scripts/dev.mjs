import { existsSync } from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const root = process.cwd();
const viteArgs = process.argv.slice(2);

const phpBinary =
  process.env.PHP_BINARY ||
  (process.platform === 'win32' && existsSync('C:\\xampp\\php\\php.exe')
    ? 'C:\\xampp\\php\\php.exe'
    : 'php');

const children = new Set();

function run(command, args, options = {}) {
  const child = spawn(command, args, {
    cwd: root,
    stdio: 'inherit',
    windowsHide: true,
    ...options,
  });

  children.add(child);
  child.on('exit', () => children.delete(child));

  return child;
}

function stopAll() {
  for (const child of children) {
    child.kill();
  }
}

process.on('SIGINT', () => {
  stopAll();
  process.exit(130);
});

process.on('SIGTERM', () => {
  stopAll();
  process.exit(143);
});

const php = run(phpBinary, ['-S', '127.0.0.1:8000', '-t', root]);

php.on('error', () => {
  console.warn(
    `[dev] Could not start PHP from "${phpBinary}". Install PHP, add it to PATH, or set PHP_BINARY.`
  );
});

const viteCli = path.join(root, 'node_modules', 'vite', 'bin', 'vite.js');
const vite = run(process.execPath, [viteCli, ...viteArgs]);

vite.on('exit', (code, signal) => {
  stopAll();

  if (signal) {
    process.kill(process.pid, signal);
  }

  process.exit(code ?? 0);
});
