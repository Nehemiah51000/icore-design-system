const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.join(PROJECT_ROOT, 'output');
const TEMPLATE_PATH = path.join(__dirname, 'template.html');
const OUTPUT_HTML = path.join(DIST_DIR, 'index.html');
const FULL_PNG = path.join(DIST_DIR, 'full-page.png');
const PALETTE_PNG = path.join(DIST_DIR, 'palette-only.png');
const PDF_PATH = path.join(DIST_DIR, 'design-system.pdf');
const FAVICON_SRC = path.join(__dirname, 'favicon.png');  
const FAVICON_DEST = path.join(DIST_DIR, 'favicon.png');

async function ensureDir() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }
}

async function generate() {
  await ensureDir();
  fs.copyFileSync(TEMPLATE_PATH, OUTPUT_HTML);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const htmlUrl = pathToFileURL(OUTPUT_HTML).href;
  console.log(`Loading: ${htmlUrl}`);
  await page.goto(htmlUrl, { waitUntil: 'networkidle0', timeout: 30000 });

 
  await page.waitForSelector('.color-grid', { timeout: 5000 });

  // Full page PNG
  await page.screenshot({ path: FULL_PNG, fullPage: true, type: 'png' });
  console.log(`Saved: ${FULL_PNG}`);

  // Palette-only section
  const paletteElement = await page.$('#palette');
  if (paletteElement) {
    await paletteElement.screenshot({ path: PALETTE_PNG });
    console.log(`Saved: ${PALETTE_PNG}`);
  } else {
    console.warn('Palette element not found');
  }
  if (fs.existsSync(FAVICON_SRC)) {
  fs.copyFileSync(FAVICON_SRC, FAVICON_DEST);
  console.log('✓ Favicon copied');
}

  // PDF generation – wait a bit more to ensure all fonts/styles loaded
  await page.evaluate(() => new Promise(requestAnimationFrame));
  await page.pdf({
    path: PDF_PATH,
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' }
  });
  console.log(`Saved: ${PDF_PATH}`);

  await browser.close();
  console.log('✅ Generation complete.');
}

generate().catch(console.error);