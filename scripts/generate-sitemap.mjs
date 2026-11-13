import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DOMAIN = 'https://worexatechnologies.com';

function escapeXml(unsafe) {
  return String(unsafe).replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

function parseArticleDate(dateStr, fallback = '2026-11-04') {
  if (!dateStr) return fallback;
  const match = dateStr.trim().match(/^([a-zA-Z]+)\s+(\d{1,2}),?\s+(\d{4})$/);
  if (match) {
    const months = {
      january: '01', february: '02', march: '03', april: '04', may: '05', june: '06',
      july: '07', august: '08', september: '09', october: '10', november: '11', december: '12',
    };
    const month = months[match[1].toLowerCase()];
    if (month) {
      const day = match[2].padStart(2, '0');
      const year = match[3];
      return `${year}-${month}-${day}`;
    }
  }
  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) {
    return d.toISOString().split('T')[0];
  }
  return fallback;
}

function buildUrlEntry({ loc, lastmod, changefreq, priority }) {
  return [
    '  <url>',
    `    <loc>${escapeXml(loc)}</loc>`,
    lastmod ? `    <lastmod>${escapeXml(lastmod)}</lastmod>` : null,
    changefreq ? `    <changefreq>${escapeXml(changefreq)}</changefreq>` : null,
    priority ? `    <priority>${escapeXml(priority)}</priority>` : null,
    '  </url>',
  ].filter(Boolean).join('\n');
}

async function generate() {
  console.log('[Sitemap Generator] Sourcing dynamic content...');

  const { articles } = await import('../src/data/articleData.js');
  const { jobs } = await import('../src/data/jobData.js');

  console.log(`[Sitemap Generator] Loaded ${articles.length} articles and ${jobs.length} jobs.`);

  // Find latest article date for homepage & articles index
  let latestArticleDate = '2026-11-04';
  articles.forEach((a) => {
    const d = parseArticleDate(a.date);
    if (d && d > latestArticleDate) {
      latestArticleDate = d;
    }
  });

  // 1. Core static public pages
  const staticPages = [
    { loc: `${DOMAIN}/`, lastmod: latestArticleDate, changefreq: 'daily', priority: '1.0' },
    { loc: `${DOMAIN}/about`, lastmod: '2026-09-23', changefreq: 'monthly', priority: '0.9' },
    { loc: `${DOMAIN}/services`, lastmod: '2026-09-23', changefreq: 'weekly', priority: '0.9' },
    { loc: `${DOMAIN}/articles`, lastmod: latestArticleDate, changefreq: 'daily', priority: '0.9' },
    { loc: `${DOMAIN}/contact`, lastmod: '2026-09-23', changefreq: 'monthly', priority: '0.8' },
    { loc: `${DOMAIN}/careers`, lastmod: '2026-09-23', changefreq: 'weekly', priority: '0.8' },
    { loc: `${DOMAIN}/best-marketing-company-in-bangalore`, lastmod: '2026-09-23', changefreq: 'weekly', priority: '0.9' },
    { loc: `${DOMAIN}/best-application-development-in-bangalore`, lastmod: '2026-09-23', changefreq: 'weekly', priority: '0.9' },
    { loc: `${DOMAIN}/terms-and-conditions`, lastmod: '2026-09-23', changefreq: 'yearly', priority: '0.5' },
    { loc: `${DOMAIN}/privacy-policy`, lastmod: '2026-09-23', changefreq: 'yearly', priority: '0.5' },
  ];

  // 2. Public Service sub-pages
  const servicePages = [
    { loc: `${DOMAIN}/services/search-engine-optimization-seo`, lastmod: '2026-09-23', changefreq: 'weekly', priority: '0.8' },
    { loc: `${DOMAIN}/services/google-ads`, lastmod: '2026-09-23', changefreq: 'weekly', priority: '0.8' },
    { loc: `${DOMAIN}/services/social-media-marketing`, lastmod: '2026-09-23', changefreq: 'weekly', priority: '0.8' },
    { loc: `${DOMAIN}/services/content-marketing`, lastmod: '2026-09-23', changefreq: 'weekly', priority: '0.8' },
    { loc: `${DOMAIN}/services/branding-and-creative-strategy`, lastmod: '2026-09-23', changefreq: 'weekly', priority: '0.8' },
    { loc: `${DOMAIN}/services/web-development`, lastmod: '2026-09-23', changefreq: 'weekly', priority: '0.8' },
    { loc: `${DOMAIN}/services/ui-ux-and-cro`, lastmod: '2026-09-23', changefreq: 'weekly', priority: '0.8' },
    { loc: `${DOMAIN}/services/photoshoot`, lastmod: '2026-09-23', changefreq: 'weekly', priority: '0.8' },
    { loc: `${DOMAIN}/services/offline-advertising`, lastmod: '2026-09-23', changefreq: 'weekly', priority: '0.8' },
    { loc: `${DOMAIN}/services/public-relations`, lastmod: '2026-09-23', changefreq: 'weekly', priority: '0.8' },
  ];

  // 3. Dynamic Published Articles
  const articleEntries = articles.map((a) => ({
    loc: `${DOMAIN}/articles/${a.slug}`,
    lastmod: parseArticleDate(a.date),
    changefreq: 'monthly',
    priority: '0.8',
  }));

  // 4. Dynamic Published Career Openings
  const jobEntries = jobs.map((j) => ({
    loc: `${DOMAIN}/careers/${j.slug}`,
    lastmod: '2026-09-23',
    changefreq: 'weekly',
    priority: '0.7',
  }));

  // Combine and deduplicate
  const allEntries = [...staticPages, ...servicePages, ...articleEntries, ...jobEntries];
  const seenUrls = new Set();
  const uniqueEntries = [];

  for (const entry of allEntries) {
    if (!seenUrls.has(entry.loc)) {
      seenUrls.add(entry.loc);
      uniqueEntries.push(entry);
    }
  }

  // Generate public/sitemap.xml
  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    uniqueEntries.map(buildUrlEntry).join('\n'),
    '</urlset>',
    '',
  ].join('\n');

  // Generate public/blogs.xml (Article-specific sitemap)
  const blogEntries = [
    { loc: `${DOMAIN}/articles`, lastmod: latestArticleDate, changefreq: 'daily', priority: '1.0' },
    ...articleEntries,
  ];
  const blogsXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    blogEntries.map(buildUrlEntry).join('\n'),
    '</urlset>',
    '',
  ].join('\n');

  // Generate public/sitemap_index.xml (Master index)
  const sitemapIndexXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '  <sitemap>',
    `    <loc>${DOMAIN}/sitemap.xml</loc>`,
    `    <lastmod>${latestArticleDate}</lastmod>`,
    '  </sitemap>',
    '  <sitemap>',
    `    <loc>${DOMAIN}/blogs.xml</loc>`,
    `    <lastmod>${latestArticleDate}</lastmod>`,
    '  </sitemap>',
    '</sitemapindex>',
    '',
  ].join('\n');

  const publicDir = path.join(projectRoot, 'public');
  const distDir = path.join(projectRoot, 'dist');

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'blogs.xml'), blogsXml, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'sitemap_index.xml'), sitemapIndexXml, 'utf8');

  console.log(`[Sitemap Generator] Wrote sitemap.xml (${uniqueEntries.length} URLs) to public/`);
  console.log(`[Sitemap Generator] Wrote blogs.xml (${blogEntries.length} URLs) to public/`);
  console.log(`[Sitemap Generator] Wrote sitemap_index.xml (2 sitemaps) to public/`);

  // Mirror to dist/ if it exists
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
    fs.writeFileSync(path.join(distDir, 'blogs.xml'), blogsXml, 'utf8');
    fs.writeFileSync(path.join(distDir, 'sitemap_index.xml'), sitemapIndexXml, 'utf8');
    console.log('[Sitemap Generator] Mirrored sitemaps to dist/');
  }
}

generate().catch((err) => {
  console.error('[Sitemap Generator] Error:', err);
  process.exit(1);
});

