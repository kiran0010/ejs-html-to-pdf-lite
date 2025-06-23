# ejs-html-to-pdf-lite

Convert `.html` or `.ejs` files into PDF using `playwright-core` with full design and CSS support.

## ✅ Features

- Renders full HTML and EJS templates
- Supports modern CSS (including Flexbox, Grid, etc.)
- Allows inline <style> tags and embedded CSS within the file
- Supports images via base64 encoding (no external image links required)
- Lightweight alternative to Puppeteer
- Outputs fully styled PDFs
- Supports multiple paper size options (e.g., A4, Letter, etc.)

## 📦 Install

```bash
npm install ejs-html-to-pdf-lite
npx playwright install chromium
```

## 📄 Usage

```js
const { generatePdf } = require('ejs-html-to-pdf-lite');

// Basic usage with default A4 size
await generatePdf({
  inputPath: './templates/example.ejs',
  outputPath: './output.pdf',
  data: { 
    name: 'John Doe',
    items: [
      { name: 'Product 1', quantity: 2, price: 10.99 },
      { name: 'Product 2', quantity: 1, price: 24.99 }
    ]
  },
  type: 'ejs' // or 'html'
});

// With custom paper size
await generatePdf({
  inputPath: './templates/example.ejs',
  outputPath: './output-letter.pdf',
  data: { 
    name: 'John Doe',
    items: [
      { name: 'Product 1', quantity: 2, price: 10.99 },
      { name: 'Product 2', quantity: 1, price: 24.99 }
    ]
  },
  type: 'ejs',
  paperSize: 'Letter' // Use standard paper size
});

// With custom dimensions
await generatePdf({
  inputPath: './templates/example.ejs',
  outputPath: './output-custom.pdf',
  data: { 
    name: 'John Doe',
    items: [
      { name: 'Product 1', quantity: 2, price: 10.99 },
      { name: 'Product 2', quantity: 1, price: 24.99 }
    ]
  },
  type: 'ejs',
  paperSize: { width: '8.5in', height: '11in' } // Custom dimensions
});
```

## 📏 Supported Paper Sizes

- Standard sizes: `A0`, `A1`, `A2`, `A3`, `A4` (default), `A5`, `A6`, `Letter`, `Legal`, `Tabloid`, `Ledger`
- Custom dimensions: provide an object with `width` and `height` properties (e.g., `{ width: '8.5in', height: '11in' }`)

## 🛠 Requirements

- Node.js 14+
- Chromium (install with `npx playwright install chromium`)
