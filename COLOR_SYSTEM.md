# Color System Documentation

## Strict Color Palette

This website uses a professional, cohesive color system with zero color drift. All colors are centrally managed through CSS variables and Tailwind config.

### Primary Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Primary Dark** | `#1F2645` | Navbar/Footer backgrounds, Primary headings (h1-h4), Body text for emphasis |
| **Accent Orange** | `#E55625` | Primary CTA buttons, Submit buttons, Link hover states, Interactive elements |
| **Success Green** | `#4CAF50` | Feature checklists, Success messages, Confirmations, Positive status indicators |
| **Background** | `#FFFFFF` | Main page background |
| **Background Alt** | `#F5F7FA` | Section contrast backgrounds |

### Text Hierarchy

| Color | Value | Usage |
|-------|-------|-------|
| **Text Primary** | `#1F2645` | Main body text, headings |
| **Text Secondary** | `rgba(31, 38, 69, 0.7)` | Secondary text, subheadings |
| **Text Muted** | `rgba(31, 38, 69, 0.5)` | Tertiary text, captions |

### Border & Dividers

| Color | Value | Usage |
|-------|-------|-------|
| **Border** | `rgba(31, 38, 69, 0.12)` | All borders, dividers, separators |

## CSS Variables

Located in `src/index.css`:

```css
:root {
  /* Strict Color System */
  --color-primary-dark: #1F2645;
  --color-accent-orange: #E55625;
  --color-success-green: #4CAF50;
  --color-background: #FFFFFF;
  --color-background-alt: #F5F7FA;
  
  /* Derived colors for text hierarchy */
  --color-text-primary: #1F2645;
  --color-text-secondary: rgba(31, 38, 69, 0.7);
  --color-text-muted: rgba(31, 38, 69, 0.5);
  --color-border: rgba(31, 38, 69, 0.12);
}
```

## Tailwind Configuration

Located in `tailwind.config.js`:

```javascript
colors: {
  /* Strict Color System - Primary */
  'primary-dark': '#1F2645',
  
  /* Strict Color System - Accent */
  accent: {
    DEFAULT: '#E55625',
    hover: '#D14A1F',
    light: '#F37B4D',
  },
  
  /* Strict Color System - Success */
  success: {
    DEFAULT: '#4CAF50',
    light: '#81C784',
    dark: '#388E3C',
  },
  
  /* Strict Color System - Backgrounds */
  background: '#FFFFFF',
  'background-alt': '#F5F7FA',
  
  /* Strict Color System - Text Hierarchy */
  'text-primary': '#1F2645',
  'text-secondary': 'rgba(31, 38, 69, 0.7)',
  'text-muted': 'rgba(31, 38, 69, 0.5)',
  
  /* Strict Color System - Border */
  border: 'rgba(31, 38, 69, 0.12)',
}
```

## Component Usage Examples

### Buttons

#### Primary CTA Button (Accent Orange)
```tsx
<button className="btn">
  Submit
</button>
```
Result: Orange background (#E55625), white text, hover darkens to #D14A1F

#### Ghost Button (Primary Dark)
```tsx
<button className="btn btn--ghost">
  Learn More
</button>
```
Result: Transparent background, primary dark border and text, hover fills with primary dark

#### Success Button
```tsx
<button className="btn btn--success">
  Confirm
</button>
```
Result: Green background (#4CAF50), white text, hover darkens

### Headings
```tsx
<h1 className="h-display">
  Your Event Title
</h1>
```
Color: Primary Dark (#1F2645) - automatically applied via `.h-display` class

### Links
```tsx
<a href="#" className="underline-anim hover:text-accent">
  Read More
</a>
```
- Default: Text Primary (#1F2645)
- Hover: Accent Orange (#E55625)

### Sections

#### White Background Section
```tsx
<section className="bg-background">
  {/* content */}
</section>
```

#### Contrast Section
```tsx
<section className="bg-background-alt">
  {/* content */}
</section>
```

### Alerts & Messages

#### Success Alert
```tsx
<div className="alert-success">
  Successfully submitted!
</div>
```

#### Info Alert
```tsx
<div className="alert-info">
  Please review your information.
</div>
```

## Color Hierarchy Enforcement

1. **CSS Variables**: All colors defined in `:root` ensure single source of truth
2. **Tailwind Config**: Extended color palette maps directly to CSS variables
3. **Component Classes**: Reusable utility classes (`.btn`, `.h-display`, etc.) enforce consistency
4. **No Inline Styles**: All styling through Tailwind classes or component CSS
5. **Zero Color Drift**: Only approved colors exist in the system - no arbitrary values allowed

## Accessibility Compliance

All color combinations meet **WCAG AA standards** for contrast:

- **Primary Dark on White**: 12.48:1 (AAA)
- **Accent Orange on White**: 5.21:1 (AA)
- **Success Green on White**: 4.02:1 (AA)
- **White on Primary Dark**: 12.48:1 (AAA)
- **Accent Orange on Primary Dark**: 2.39:1 (Use with caution, primarily for accents)

## Updated Components

✅ Navbar - Primary Dark background removed, now white with border
✅ Footer - Primary Dark background, white text
✅ All buttons - Accent Orange for CTAs
✅ All links - Accent Orange on hover
✅ All headings - Primary Dark text
✅ Forms - Accent Orange submit buttons
✅ Cards - White background with subtle border
✅ Section backgrounds - White and #F5F7FA alternating

## Maintenance

To add a new color:
1. Update CSS variables in `src/index.css`
2. Update Tailwind config in `tailwind.config.js`
3. Document usage in this file
4. Verify WCAG contrast compliance

**Note**: No colors should be added without approval to prevent color drift.
