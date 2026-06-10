# iCore Information Systems – Design System

A complete, self‑contained design system for iCore. It includes:

- A **live, interactive style guide** (HTML with light/dark mode)
- **Full color scales** (navy, red, muted, ink – from 100 to 900)
- **5 common UI components** (buttons, cards, tables, forms, navigation bar)
- **Automated PNG and PDF generation** (for sharing with non‑technical teammates)

Everything runs locally on your computer – no cloud, no hosting required. You can also deploy the HTML to GitHub Pages if you want a live URL.

---

## Why this system exists

This design provides:

- A single source of truth for colors (hex codes + usage guidelines)

- Component examples that developers can copy directly
- Light and dark mode examples (real products need both)

The system is built to be **updated easily** – even by someone who doesn’t know JavaScript or Node.js. Edit a JSON file or an HTML template, run one command, and get fresh PNGs/PDFs.

---

## Who this is for

| Person | What they get |
|--------|----------------|
| **Designers** | PNGs of the color palette, component examples, and a printable PDF for client meetings. |
| **Developers** | A live HTML page with CSS variables, light/dark toggle, and copy‑paste component code. |
| **Managers / stakeholders** | A clean PDF handbook and high‑resolution PNGs for presentations. |
| **Future maintainers** | Clear documentation on how to change colors or add components without breaking anything. |
## How Puppeteer works (and why it’s used)

Puppeteer is a Node library that controls a headless (invisible) Chrome browser. In this project, it:

1. Opens the `index.html` style guide
2. Waits for all fonts and colors to load
3. Takes a full‑page screenshot (`full-page.png`) and a palette‑only screenshot (`palette-only.png`)
4. Generates a print‑optimised PDF (`design-system.pdf`)

Using Puppeteer guarantees that every time you change a color or a component, the screenshots and PDF are **recreated automatically** – no manual snipping, no inconsistent exports.

---

## Setup (one time only)

1. **Install Node.js** (LTS version) from [nodejs.org](https://nodejs.org)
2. **Clone or download** this repository
3. **Open a terminal** inside the project folder and run:

```bash
npm install
This installs Puppeteer and its dependencies.

Daily use – updating the design system
To change colors (e.g., a hex code)
Open src/config.json

Find the color you want to change (e.g., "red": { "500": "#f6374f" })

Edit the hex value

Save the file

To change components (buttons, cards, tables, etc.)
Open src/template.html

Find the component section (e.g., <!-- Buttons -->)

Edit the HTML as needed

Save the file

To regenerate PNGs and PDF after any change
bash
npm run generate
The script will:

Copy template.html to output/index.html

Launch Puppeteer and capture the new screenshots

Create an updated PDF

All generated files appear in the output/ folder.

Note: The output file is now named index.html (not design-system.html). This makes deployment to GitHub Pages seamless – no extra renaming step.

Viewing the design system locally
You can open output/index.html directly in any browser. Alternatively, run a local web server:

bash
npm run serve
Then visit http://localhost:8080

Deploying to GitHub Pages (live URL)
If you want the whole team to see the design system online without installing anything:

Push this repository to GitHub (ensure .gitignore includes node_modules/)

In your repository on GitHub, go to Settings → Pages

Under Branch, select main (or master)

Under Folder, select /output

Click Save

After about one minute, your design system will be live at:
https://yourusername.github.io/icore-design-system/

Anyone with the link can view the interactive style guide, download the PNGs, or save the PDF.

Updating the live site after changes
Make changes locally (edit config.json or template.html)

Run npm run generate

Commit and push the updated output/ folder to GitHub

GitHub Pages automatically refreshes within a minute

No need to rebuild anything on the server – the static files are all that’s needed.

Troubleshooting
libnss3.so or other missing libraries (WSL / Linux)
Puppeteer needs some system libraries. On Ubuntu / WSL, run:

bash
sudo apt update && sudo apt install -y libnss3 libatk-bridge2.0-0 libcups2 libxkbcommon0 libgtk-3-0 libgbm1 libasound2t64
EPERM or UNC path errors (Windows + WSL)
Make sure you are using the Linux version of Node.js inside WSL, not the Windows version. Run which node – it should return /usr/bin/node, not /mnt/c/.... Install Node.js inside WSL if needed.

The PDF is almost empty
Ensure Puppeteer waits for the page to fully render. The script already includes waitForSelector('.color-grid') and a short animation delay. If problems persist, try increasing the timeout in generate.js.

License
MIT – use freely for iCore internal and external projects.