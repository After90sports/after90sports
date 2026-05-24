/**
 * After90 — Static file server for Hostinger Node.js hosting
 *
 * Serves the Next.js static export (output:'export') from ./public/
 * Handles trailing-slash routing, 404s, and basic security headers.
 */

'use strict';

const http  = require('http');
const fs    = require('fs');
const path  = require('path');
const zlib  = require('zlib');

const PUBLIC_DIR = path.join(__dirname, 'public');
const PORT       = process.env.PORT || 3000;

// MIME types for all file extensions the Next.js build produces
const MIME_TYPES = {
  '.html' : 'text/html; charset=utf-8',
  '.css'  : 'text/css',
  '.js'   : 'application/javascript',
  '.json' : 'application/json',
  '.png'  : 'image/png',
  '.jpg'  : 'image/jpeg',
  '.jpeg' : 'image/jpeg',
  '.webp' : 'image/webp',
  '.svg'  : 'image/svg+xml',
  '.ico'  : 'image/x-icon',
  '.mp4'  : 'video/mp4',
  '.woff' : 'font/woff',
  '.woff2': 'font/woff2',
  '.txt'  : 'text/plain',
  '.xml'  : 'application/xml',
  '.map'  : 'application/json',
};

// Security + caching headers
function getHeaders(ext) {
  const isHtml  = ext === '.html';
  const isAsset = ['.js','.css','.woff','.woff2','.png','.jpg','.webp','.ico'].includes(ext);
  return {
    'X-Content-Type-Options' : 'nosniff',
    'X-Frame-Options'        : 'SAMEORIGIN',
    'Referrer-Policy'        : 'strict-origin-when-cross-origin',
    'Cache-Control'          : isHtml
      ? 'no-cache, no-store, must-revalidate'
      : isAsset
        ? 'public, max-age=31536000, immutable'
        : 'public, max-age=86400',
  };
}

function serveFile(req, res, filePath, statusCode) {
  const ext  = path.extname(filePath).toLowerCase();
  const mime = MIME_TYPES[ext] || 'application/octet-stream';
  let content;
  try {
    content = fs.readFileSync(filePath);
  } catch {
    return serve404(req, res);
  }

  const headers = { ...getHeaders(ext), 'Content-Type': mime };
  const acceptEncoding = req.headers['accept-encoding'] || '';

  if (acceptEncoding.includes('gzip') && content.length > 1024) {
    zlib.gzip(content, (err, compressed) => {
      if (err) {
        res.writeHead(statusCode, headers);
        return res.end(content);
      }
      headers['Content-Encoding'] = 'gzip';
      res.writeHead(statusCode, headers);
      res.end(compressed);
    });
  } else {
    res.writeHead(statusCode, headers);
    res.end(content);
  }
}

function serve404(req, res) {
  const p = path.join(PUBLIC_DIR, '404', 'index.html');
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p);
    res.writeHead(404, {
      'Content-Type'  : 'text/html; charset=utf-8',
      'Cache-Control' : 'no-cache',
    });
    res.end(content);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}

const server = http.createServer((req, res) => {
  // Strip query string
  let urlPath = req.url.split('?')[0];

  // Redirect www → non-www
  if (req.headers.host && req.headers.host.startsWith('www.')) {
    res.writeHead(301, { Location: `https://afterninetysports.com${urlPath}` });
    return res.end();
  }

  // 1. Exact file match  (e.g. /_next/static/chunks/main.js)
  const exactPath = path.join(PUBLIC_DIR, urlPath);
  if (fs.existsSync(exactPath) && fs.statSync(exactPath).isFile()) {
    return serveFile(req, res, exactPath, 200);
  }

  // 2. Directory → index.html  (Next.js trailingSlash:true)
  const withSlash = urlPath.endsWith('/') ? urlPath : urlPath + '/';
  const indexPath = path.join(PUBLIC_DIR, withSlash, 'index.html');
  if (fs.existsSync(indexPath)) {
    return serveFile(req, res, indexPath, 200);
  }

  // 3. Extensionless path → path/index.html fallback
  const altIndex = path.join(PUBLIC_DIR, urlPath, 'index.html');
  if (fs.existsSync(altIndex)) {
    return serveFile(req, res, altIndex, 200);
  }

  // 4. Not found
  serve404(req, res);
});

server.listen(PORT, () => {
  console.log(`[After90] Static server running on port ${PORT}`);
  console.log(`[After90] Serving from ${PUBLIC_DIR}`);
});

// Graceful shutdown
process.on('SIGTERM', () => server.close(() => process.exit(0)));
process.on('SIGINT',  () => server.close(() => process.exit(0)));
