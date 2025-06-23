# ejs-html-to-pdf-lite

A fast, lightweight, and production-ready alternative to `html-pdf` and `puppeteer` for converting HTML or EJS templates into high-quality PDFs using `playwright-core`, with full design and CSS support.

---

## ✅ Why Use ejs-html-to-pdf-lite?

- 🔥 **Minimal dependencies** – only `playwright-core` + `ejs`
- 🎨 **Full CSS support** – Flexbox, Grid, custom fonts, inline styles
- 🖼️ **Base64 image support** – embed images directly in templates
- 📄 **Supports both `.ejs` and `.html`** – dynamic or static usage
- 🧾 **Great for invoices, reports, and other document PDFs**
- 📦 **Tiny install size** – no bundled browser
- 🛠️ **Supports standard & custom paper sizes**
- ⚙️ **Headless and production-safe**

---

## ✅ Features

- Converts full HTML and EJS templates into PDF
- Supports modern CSS (Flexbox, Grid, Google Fonts, etc.)
- Inline `<style>` and internal CSS fully supported
- Base64-encoded images for self-contained PDFs
- Fully styled PDF output
- Support for standard and custom paper sizes

---

## 📌 Use Cases

- Server-side PDF generation (e.g., invoices, receipts)
- Email-ready PDFs (attachments, download links)
- Exporting filled forms using EJS templates
- Printable reports or dashboards in backend apps

---

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
