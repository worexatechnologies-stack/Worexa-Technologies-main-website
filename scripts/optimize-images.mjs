/**
 * Image Optimization Script
 * Compresses all PNG/JPG images in src/assets/ to WebP format
 * Resized to max 1920px width with 80% quality
 * 
 * Run: node scripts/optimize-images.mjs
 */
import { readdir, mkdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, '..', 'src', 'assets');
const OUTPUT_DIR = join(ASSETS_DIR, 'optimized');
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 80;

async function optimizeImages() {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch (e) {
    console.error('sharp is not installed. Install it with: npm install sharp --save-dev');
    console.error('Then re-run: node scripts/optimize-images.mjs');
    process.exit(1);
  }

  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = await readdir(ASSETS_DIR);
  const imageFiles = files.filter(f => {
    const ext = extname(f).toLowerCase();
    return ['.png', '.jpg', '.jpeg'].includes(ext) && !f.startsWith('.');
  });

  console.log(`Found ${imageFiles.length} images to optimize\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of imageFiles) {
    const inputPath = join(ASSETS_DIR, file);
    const fileStat = await stat(inputPath);
    const originalSize = fileStat.size;
    totalOriginal += originalSize;

    if (originalSize < 100 * 1024) {
      console.log(`  SKIP ${file} (${formatSize(originalSize)}) - already small`);
      continue;
    }

    const outputName = basename(file, extname(file)) + '.webp';
    const outputPath = join(OUTPUT_DIR, outputName);

    try {
      const result = await sharp(inputPath)
        .resize(MAX_WIDTH, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: WEBP_QUALITY })
        .toFile(outputPath);

      const optimizedSize = result.size;
      totalOptimized += optimizedSize;
      const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

      console.log(`  OK ${file}`);
      console.log(`     ${formatSize(originalSize)} -> ${formatSize(optimizedSize)} (${savings}% smaller)`);
    } catch (err) {
      console.error(`  FAIL ${file}: ${err.message}`);
      totalOptimized += originalSize;
    }
  }

  console.log(`\nTotal: ${formatSize(totalOriginal)} -> ${formatSize(totalOptimized)}`);
  console.log(`Saved: ${formatSize(totalOriginal - totalOptimized)} (${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%)`);
  console.log(`\nOptimized images saved to: src/assets/optimized/`);
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

optimizeImages().catch(console.error);
