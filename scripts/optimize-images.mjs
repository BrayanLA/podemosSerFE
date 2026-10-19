// One-shot image optimization: converts every jpg/jpeg/png under the target
// directories to a same-named .webp sibling (resized to a 1600px max width).
// Originals are left in place — delete them manually once the app has been
// visually verified against the new .webp files.
import { readdir, stat } from 'node:fs/promises';
import { join, extname, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const targetDirs = [
  'src/assets/img',
  'src/assets/2021-comprimidas',
  'src/assets/2022-comprimidas',
  'src/assets/2023-comprimidas',
  'src/assets/2024-comprimidas',
  'src/assets/2025-comprimidas',
].map((dir) => join(rootDir, dir));

const RASTER_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);
const MAX_WIDTH = 1600;
const WEBP_QUALITY = 80;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (RASTER_EXTENSIONS.has(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function convertFile(inputPath) {
  const outputPath = join(
    dirname(inputPath),
    `${basename(inputPath, extname(inputPath))}.webp`
  );

  const inputStats = await stat(inputPath);

  await sharp(inputPath)
    .rotate() // auto-orient from EXIF before resizing
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(outputPath);

  const outputStats = await stat(outputPath);
  return { inputBytes: inputStats.size, outputBytes: outputStats.size };
}

async function main() {
  let totalIn = 0;
  let totalOut = 0;
  let converted = 0;
  let skipped = 0;
  let failed = 0;

  for (const dir of targetDirs) {
    let files;
    try {
      files = await walk(dir);
    } catch (err) {
      if (err.code === 'ENOENT') {
        console.warn(`Skipping missing directory: ${dir}`);
        continue;
      }
      throw err;
    }

    for (const file of files) {
      const webpPath = join(
        dirname(file),
        `${basename(file, extname(file))}.webp`
      );
      try {
        await stat(webpPath);
        skipped++;
        continue; // .webp already exists, don't reprocess
      } catch {
        // doesn't exist yet, proceed
      }

      try {
        const { inputBytes, outputBytes } = await convertFile(file);
        totalIn += inputBytes;
        totalOut += outputBytes;
        converted++;
        console.log(
          `${file.replace(rootDir, '')}  ${(inputBytes / 1024).toFixed(0)}KB -> ${(outputBytes / 1024).toFixed(0)}KB`
        );
      } catch (err) {
        failed++;
        console.error(`FAILED: ${file}: ${err.message}`);
      }
    }
  }

  console.log('\n--- Summary ---');
  console.log(`Converted: ${converted}, skipped (already had .webp): ${skipped}, failed: ${failed}`);
  if (totalIn > 0) {
    console.log(
      `Total: ${(totalIn / 1024 / 1024).toFixed(1)}MB -> ${(totalOut / 1024 / 1024).toFixed(1)}MB ` +
      `(${(100 - (totalOut / totalIn) * 100).toFixed(0)}% smaller)`
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
