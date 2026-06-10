# How to Update the iCore Design System

This guide is for the design team and Laravel developers with **zero Node.js knowledge**.

## What you can update without touching code

1. **Colors** – Open `src/config.json`. Find the `colors.scales` section. Change any hex value.  
2. **Component examples** – Edit `src/template.html` (search for “Buttons”, “Card”, etc.) and change HTML.  
3. **Logo** – Replace the inline SVG in `template.html` (search for `<svg` inside `.logo`).

## Steps to regenerate PNGs and PDF after changes

### First time setup (one‑time)
- Install Node.js from [nodejs.org](https://nodejs.org) (LTS version).
- Open terminal in the `icore-design-system` folder.
- Run: `npm install`

### Every time you make a change
1. Save your edits (`config.json` or `template.html`).
2. Run: `npm run generate`
3. The new files appear in `output/` folder:
   - `full-page.png` – entire page screenshot
   - `palette-only.png` – just the color palette
   - `design-system.pdf` – print-ready document
   - `design-system.html` – updated interactive page

### To view the design system locally
- Run: `npm run serve` (opens browser at `http://localhost:8080`)

## No servers, no clouds – everything runs on your machine.