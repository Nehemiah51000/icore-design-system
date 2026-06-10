/**
 * iCore Design System — Single Source of Truth
 * ─────────────────────────────────────────────
 * This is the ONLY file you need to edit to update the design system.
 * Change a color, a font, a component — save the file, refresh the page. Done.
 */

window.ICORE_CONFIG = {

  brand: {
    name: "iCore Information Systems",
    tagline: "...specialised tech solutions",
    logoPath: "./logo.png",          // Drop your logo file in the /public folder and update this name
    logoAlt: "iCore Information Systems Logo",
    year: new Date().getFullYear()
  },

  colors: {
    // ── Primary ──────────────────────────────────────────────
    navy: {
      label: "Navy Blue",
      description: "Main brand color. Use for headings, nav backgrounds, and dark surfaces.",
      shades: {
        100: "#e6e9f0",
        200: "#cdd3e2",
        300: "#9ba8c4",
        400: "#697ca6",
        500: "#1a253c",   // ← Base
        600: "#141d30",
        700: "#0f1624",
        800: "#0a0f18",
        900: "#05080c"
      }
    },
    red: {
      label: "Crimson Red",
      description: "Action color. Use for buttons, links, highlights, and alerts.",
      shades: {
        100: "#ffe5e8",
        200: "#ffccd2",
        300: "#ff99a6",
        400: "#ff667a",
        500: "#f6374f",   // ← Base
        600: "#d42c42",
        700: "#b02133",
        800: "#8c1827",
        900: "#680e1b"
      }
    },
    muted: {
      label: "Muted Gray",
      description: "Secondary text, borders, disabled states, and subtle backgrounds.",
      shades: {
        100: "#f2f4f8",
        200: "#e4e8f0",
        300: "#cbd2e1",
        400: "#9aa5bb",
        500: "#667085",   // ← Base
        600: "#525b6d",
        700: "#3e4554",
        800: "#2a303b",
        900: "#171b22"
      }
    },
    ink: {
      label: "Deep Ink",
      description: "Body text, deep dark surfaces, and high-contrast elements.",
      shades: {
        100: "#e8e9ec",
        200: "#d1d3da",
        300: "#a4a8b6",
        400: "#767c93",
        500: "#172033",   // ← Base
        600: "#121a29",
        700: "#0e1320",
        800: "#090d16",
        900: "#05070b"
      }
    }
  },

  typography: {
    // Font stacks — update the first value to change the font
    display: "'Georgia', 'Times New Roman', serif",
    body: "'Inter', 'Segoe UI', system-ui, sans-serif",
    mono: "'Fira Code', 'Consolas', 'Courier New', monospace",

    scale: {
      xs:   "0.75rem",    // 12px — captions, labels
      sm:   "0.875rem",   // 14px — secondary text
      base: "1rem",       // 16px — body
      lg:   "1.125rem",   // 18px — large body
      xl:   "1.25rem",    // 20px — small headings
      "2xl":"1.5rem",     // 24px — section headings
      "3xl":"1.875rem",   // 30px — page headings
      "4xl":"2.25rem"     // 36px — display
    }
  },

  spacing: {
    // Base unit: 4px. All spacing is a multiple of this.
    unit: 4,
    scale: {
      1:  "4px",
      2:  "8px",
      3:  "12px",
      4:  "16px",
      5:  "20px",
      6:  "24px",
      8:  "32px",
      10: "40px",
      12: "48px",
      16: "64px",
      20: "80px"
    }
  },

  components: {
    button: {
      borderRadius: "6px",
      variants: [
        { label: "Primary",   bg: "#f6374f", color: "#ffffff", border: "none" },
        { label: "Secondary", bg: "transparent", color: "#1a253c", border: "2px solid #1a253c" },
        { label: "Ghost",     bg: "transparent", color: "#f6374f", border: "2px solid #f6374f" },
        { label: "Disabled",  bg: "#e4e8f0", color: "#9aa5bb", border: "none" }
      ]
    },
    card: {
      borderRadius: "8px",
      shadow: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)"
    }
  },

  // Navigation links shown in the sidebar
  sections: [
    { id: "colors",     label: "Colors" },
    { id: "typography", label: "Typography" },
    { id: "spacing",    label: "Spacing" },
    { id: "buttons",    label: "Buttons" },
    { id: "cards",      label: "Cards" },
    { id: "forms",      label: "Forms" },
    { id: "tables",     label: "Tables" },
    { id: "tokens",     label: "CSS Tokens" }
  ]

};