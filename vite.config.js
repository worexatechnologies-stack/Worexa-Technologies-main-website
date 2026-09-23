import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

const serveLandingPage = () => ({
  name: 'serve-landing-page',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const pathname = req.url ? req.url.split('?')[0] : '';
      if (pathname === '/best-marketing-company-in-bangalore' || pathname === '/best-marketing-company-in-bangalore/') {
        const filePath = path.resolve(__dirname, 'public/best-marketing-company-in-bangalore/index.html');
        if (fs.existsSync(filePath)) {
          const html = fs.readFileSync(filePath, 'utf-8');
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.statusCode = 200;
          res.end(html);
          return;
        }
      }
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), serveLandingPage()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'vendor-three';
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('lucide-react')) return 'vendor-icons';
            if (id.includes('react-router') || id.includes('@remix-run')) return 'vendor-router';
            if (id.includes('react-helmet')) return 'vendor-helmet';
            return 'vendor';
          }
        },
      },
    },
    // Inline small assets (< 8KB) to reduce HTTP requests
    assetsInlineLimit: 8192,
  },
  server: {
    proxy: {
      '/send-mail.php': 'http://127.0.0.1:8000',
    },
  },
})
