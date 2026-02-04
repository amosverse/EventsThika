# Event Solutions Thika

A modern, production-ready web application for a full-service event production company offering tent rentals, décor, catering, sound/DJ systems, MC services, and complete event production packages.

## 🌐 Live Demo

**[View Live Site](https://your-vercel-deployment-url.vercel.app)**

## 🛠️ Tech Stack

- **React 19.2.0** — Component-based UI framework
- **TypeScript** — Type-safe JavaScript
- **Vite 7.2.4** — Fast build tool and dev server
- **React Router 7.13.0** — Client-side routing
- **Tailwind CSS 3.4.17** — Utility-first CSS framework
- **Framer Motion 12.29.2** — Animation library for smooth interactions
- **Lucide React** — Modern icon library
- **React Masonry CSS** — Pinterest-style gallery layouts

## ✨ Features

- **Service Catalog**: Six dedicated service pages with detailed descriptions and WhatsApp integration
- **Marketplace**: Browse and rent event equipment with cart functionality
- **Pinterest-style Gallery**: Responsive masonry layout showcasing past events
- **WhatsApp Integration**: Direct enquiry system for bookings and checkout
- **Mobile-First Design**: Fully responsive with custom breakpoints (xs: 475px)
- **Contact Form**: Validated form with social media integration
- **SEO-Ready**: Proper semantic HTML and meta tags
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets

## 📁 Project Structure

```
event-sol/
├── public/               # Static assets
├── src/
│   ├── assets/          # Images, SVGs, and media files
│   ├── components/
│   │   ├── common/      # Reusable UI components (Header, Footer, Buttons, etc.)
│   │   ├── marketplace/ # Product cards, cart sidebar, modals
│   │   └── sections/    # Page-specific sections (Hero, Testimonials, etc.)
│   ├── context/         # React Context (Cart state management)
│   ├── data/            # Product data and static content
│   ├── layouts/         # Layout wrappers with header/footer
│   ├── pages/           # Route components
│   │   └── services/    # Individual service pages
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Application entry point
│   ├── router.tsx       # React Router configuration
│   └── index.css        # Global styles and Tailwind imports
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/event-sol.git
   cd event-sol
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

4. **Build for production**

   ```bash
   npm run build
   ```

   Production files will be output to the `dist/` directory.

5. **Preview production build**

   ```bash
   npm run preview
   ```

## 🌍 Deployment

### Vercel (Recommended)

1. **Import your repository** on [Vercel](https://vercel.com)

2. **Configure build settings** (usually auto-detected):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

3. **Deploy** — Vercel will automatically build and deploy on every push to main

### Manual Deployment

```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## 🔧 Environment Variables

This project currently does not require environment variables for basic functionality. If you add external APIs or services:

```env
# Example .env file
VITE_API_BASE_URL=https://api.example.com
VITE_WHATSAPP_NUMBER=254728288688
```

Access in code via `import.meta.env.VITE_*`

## 🐛 Troubleshooting

### Assets Return 404 in Production

If images or assets don't load after deployment:

- Ensure `vite.config.ts` has the correct `base` path
- For Vercel, the default `/` base should work
- For subdirectory deployments, set `base: '/subdirectory/'`

```ts
// vite.config.ts
export default defineConfig({
  base: '/', // or '/your-subdirectory/'
  // ...
})
```

### Cart Data Persists Between Sessions

The cart uses `localStorage` to persist data. To clear:

```js
localStorage.removeItem('event-solutions-cart')
localStorage.removeItem('event-solutions-customer')
```

Or clear all site data via browser DevTools → Application → Local Storage.

### Tailwind Classes Not Applying

Ensure you've imported the global CSS in `main.tsx`:

```tsx
import './index.css'
```

And that `index.css` includes:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Build Errors with TypeScript

Run type checking separately:

```bash
npx tsc --noEmit
```

Fix any type errors before building.

## 🎨 Design System

- **Colors**: 
  - Primary: `#1F2645` (dark navy)
  - Accent: `#E55625` (terracotta orange)
  - Paper: `#F8F6F0` (warm off-white)
- **Typography**: 
  - Display: Cormorant Garamond
  - Body: Inter
- **Breakpoints**: 
  - xs: 475px
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow existing code formatting
- Run `npm run build` before committing to catch type errors
- Write meaningful commit messages
- Test on mobile and desktop viewports

## 📝 License

This project is proprietary and confidential. All rights reserved.

---

Built with React, TypeScript, and Vite. Deployed on Vercel.
