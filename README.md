## Event Studio — Premium Event Production Site

A portfolio-grade React + Vite + Tailwind build for a high-end event services studio. The design is editorial-first
with a warm, minimal palette, custom SVG details, and restrained motion.

### Tech stack

- **React 18/19 + Vite**
- **TypeScript**
- **Tailwind CSS 3** with custom colors, typography, and utility components
- **React Router** for multi-page navigation
- **Framer Motion** for micro-interactions + SVG motion
- **AOS** for subtle scroll reveals (fade-up / left / right)
- **react-masonry-css** for the Gallery masonry layout

### Running the project

- **Install dependencies**

```bash
npm install
```

- **Start dev server**

```bash
npm run dev
```

The app will be available on the port Vite prints in your terminal (usually `http://localhost:5173`).

- **Build for production**

```bash
npm run build
```

### Structure

- `src/layouts` — shared layout wrapper with header, footer, skip-link, and AOS bootstrapping
- `src/components/common` — buttons, header, footer, shared primitives
- `src/components/sections` — custom SVG illustrations and timeline connectors
- `src/pages` — route-level pages (Home, About, Gallery, Contact, services)
- `src/pages/services` — individual service pages (tents, décor, catering, sound/DJ, MC, full production)

### Design notes

- **Color**: warm off‑white background (`paper`), charcoal text (`ink`), soft gray (`mist`), and a single deep
  terracotta accent. No neon, rainbow gradients, or heavy mesh backgrounds.
- **Type**: headings use `Cormorant Garamond` for character; body copy uses `Inter` for clarity and legibility.
- **Motion**: hero and timeline use hand-coded SVG animations via Framer Motion; buttons, cards, and links have
  subtle hover states only (no parallax or excessive float).
- **Accessibility**: semantic sections, labelled navigation, skip link, focus-visible outlines, and AA-conscious
  contrast ratios.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
