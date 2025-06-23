const { chromium } = require('playwright-core');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

async function generatePdf({ inputPath, outputPath, data = {}, type = 'html', paperSize = 'A4' }) {
  if (!['html', 'ejs'].includes(type)) {
    throw new Error('Invalid file type. Use "html" or "ejs".');
  }

  // Validate paper size
  const validPaperSizes = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'Letter', 'Legal', 'Tabloid', 'Ledger'];
  if (!validPaperSizes.includes(paperSize) && 
      !(typeof paperSize === 'object' && paperSize.width && paperSize.height)) {
    throw new Error(`Invalid paper size. Use one of ${validPaperSizes.join(', ')} or provide {width, height} object.`);
  }

  const rawContent = fs.readFileSync(inputPath, 'utf-8');
  const html = type === 'ejs' ? ejs.render(rawContent, data) : rawContent;

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: 'networkidle' });

  await page.pdf({
    path: outputPath,
    format: typeof paperSize === 'string' ? paperSize : undefined,
    width: typeof paperSize === 'object' ? paperSize.width : undefined,
    height: typeof paperSize === 'object' ? paperSize.height : undefined,
    printBackground: true
  });

  await browser.close();
}

module.exports = generatePdf;
