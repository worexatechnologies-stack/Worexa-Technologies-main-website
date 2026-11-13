import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DOMAIN = 'https://worexatechnologies.com';

function validateXml(filePath, isIndex = false) {
  console.log(`[Validation] Checking ${filePath}...`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`File does not exist: ${filePath}`);
  }

  const stat = fs.statSync(filePath);
  const sizeMb = stat.size / (1024 * 1024);
  if (sizeMb > 50) {
    throw new Error(`File exceeds 50MB Google limit: ${sizeMb.toFixed(2)} MB`);
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // 1. XML Declaration
  if (!content.trim().startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
    throw new Error('Missing or invalid XML declaration in ' + filePath);
  }

  // 2. Namespace & Root Tag
  const rootTag = isIndex ? 'sitemapindex' : 'urlset';
  const expectedNamespace = 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';
  if (!content.includes(`<${rootTag}`) || !content.includes(expectedNamespace)) {
    throw new Error(`Invalid root element or namespace in ${filePath}`);
  }
  if (!content.trim().endsWith(`</${rootTag}>`)) {
    throw new Error(`Missing closing tag </${rootTag}> in ${filePath}`);
  }

  // 3. URLs
  const locRegex = /<loc>(.*?)<\/loc>/g;
  const urls = [];
  let match;
  while ((match = locRegex.exec(content)) !== null) {
    urls.push(match[1]);
  }

  console.log(`[Validation] Found ${urls.length} <loc> entries.`);
  if (urls.length === 0) {
    throw new Error(`No URLs found in ${filePath}`);
  }
  if (urls.length > 50000) {
    throw new Error(`URL count exceeds Google limit of 50,000: ${urls.length}`);
  }

  // 4. Canonical Domain, HTTPS, No Query Params, No Relative Paths
  const seen = new Set();
  urls.forEach((u, idx) => {
    if (!u.startsWith('https://')) {
      throw new Error(`Non-HTTPS URL at index ${idx}: ${u}`);
    }
    if (!u.startsWith(DOMAIN)) {
      throw new Error(`Non-canonical domain at index ${idx}: ${u}`);
    }
    if (u.includes('?')) {
      throw new Error(`URL contains query parameters at index ${idx}: ${u}`);
    }
    if (u.includes('#')) {
      throw new Error(`URL contains fragment at index ${idx}: ${u}`);
    }
    if (seen.has(u)) {
      throw new Error(`Duplicate URL detected: ${u}`);
    }
    seen.add(u);
  });

  // 5. Date validation for lastmod
  const lastmodRegex = /<lastmod>(.*?)<\/lastmod>/g;
  let dateMatch;
  while ((dateMatch = lastmodRegex.exec(content)) !== null) {
    const d = dateMatch[1];
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) {
      throw new Error(`Invalid lastmod format (expected YYYY-MM-DD): ${d}`);
    }
    const parsed = new Date(d);
    if (isNaN(parsed.getTime())) {
      throw new Error(`Unparseable lastmod date: ${d}`);
    }
  }

  return urls;
}

async function run() {
  console.log('--- Starting Sitemap Validation ---');

  const sitemapUrls = validateXml(path.join(projectRoot, 'public/sitemap.xml'), false);
  const blogUrls = validateXml(path.join(projectRoot, 'public/blogs.xml'), false);
  validateXml(path.join(projectRoot, 'public/sitemap_index.xml'), true);

  // Cross-reference with published articles in articleData.js
  const { articles } = await import('../src/data/articleData.js');
  console.log(`[Validation] Cross-referencing against ${articles.length} published articles...`);

  const sitemapSet = new Set(sitemapUrls);
  articles.forEach((a) => {
    const expectedUrl = `${DOMAIN}/articles/${a.slug}`;
    if (!sitemapSet.has(expectedUrl)) {
      throw new Error(`Published article missing from sitemap.xml: ${expectedUrl}`);
    }
  });

  // Cross-reference with jobs in jobData.js
  const { jobs } = await import('../src/data/jobData.js');
  console.log(`[Validation] Cross-referencing against ${jobs.length} published jobs...`);
  jobs.forEach((j) => {
    const expectedUrl = `${DOMAIN}/careers/${j.slug}`;
    if (!sitemapSet.has(expectedUrl)) {
      throw new Error(`Published job missing from sitemap.xml: ${expectedUrl}`);
    }
  });

  // Verify robots.txt
  console.log('[Validation] Checking robots.txt...');
  const robotsPath = path.join(projectRoot, 'public/robots.txt');
  if (!fs.existsSync(robotsPath)) {
    throw new Error('robots.txt does not exist in public/');
  }
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  if (!robotsContent.includes(`Sitemap: ${DOMAIN}/sitemap.xml`)) {
    throw new Error('robots.txt does not declare sitemap.xml');
  }

  console.log('--- All Sitemap and Robots.txt Validations Passed! ---');
}

run().catch((err) => {
  console.error('[Validation Failed]:', err.message);
  process.exit(1);
});

