import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ShoppingCart, Moon, Sun } from 'lucide-react'

import { ButtonLink } from './buttons'
import { LogoHorizontal } from './LogoHorizontal'
import { useCart } from '../../context/useCart'
import { useTheme } from '../../context/ThemeContext'

type NavItem = {
  to: string
  label: string
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const { getItemCount, setIsCartOpen } = useCart()
  const { theme, toggleTheme } = useTheme()
  const itemCount = getItemCount()

  const items = useMemo<NavItem[]>(
    () => [
      { to: '/marketplace', label: 'Marketplace' },
      { to: '/services/tent-rentals', label: 'Tents' },
      { to: '/services/decorations', label: 'Decor' },
      { to: '/services/catering', label: 'Catering' },
      { to: '/services/sound-dj', label: 'Sound/DJ' },
      { to: '/gallery', label: 'Gallery' },
      { to: '/about', label: 'About' },
    ],
    [],
  )

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border backdrop-blur-md shadow-sm" style={{ backgroundColor: 'var(--color-surface-overlay)' }}>
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
          <NavLink to="/" className="group inline-flex items-center flex-shrink-0" aria-label="Go to homepage">
          <LogoHorizontal className="h-16 md:h-20 w-auto" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 xl:gap-4 lg:flex" aria-label="Primary">
          {items.slice(0, 5).map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) =>
                [
                  'underline-anim text-sm xl:text-base tracking-wideish text-primary-dark font-medium transition-colors hover:text-accent px-1 py-1',
                  isActive ? 'text-accent' : '',
                ].join(' ')
              }
            >
              {it.label}
            </NavLink>
          ))}

          <div className="h-6 w-px bg-border" />

          {items.slice(5).map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) =>
                [
                  'underline-anim text-sm xl:text-base tracking-wideish text-primary-dark font-medium transition-colors hover:text-accent px-1 py-1',
                  isActive ? 'text-accent' : '',
                ].join(' ')
              }
            >
              {it.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 text-primary-dark hover:text-accent transition-colors rounded-lg"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            style={{ minHeight: '44px', minWidth: '44px' }}
          >
            {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
          </button>
          
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 text-primary-dark hover:text-accent transition-colors rounded-lg"
            aria-label={`Shopping cart with ${itemCount} items`}
            style={{ minHeight: '44px', minWidth: '44px' }}
          >
            <ShoppingCart className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-5 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center px-1.5">
                {itemCount > 9 ? '9+' : itemCount}
              </span>
            )}
          </button>
          
          <a 
            href="https://wa.me/254728288688?text=Hi!%20I'm%20interested%20in%20booking%20a%20consultation.%20Could%20you%20please%20provide%20me%20with%20available%20time%20slots%20and%20pricing%20information%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn rounded-full px-5 py-2.5 text-sm whitespace-nowrap bg-accent hover:bg-accent-hover text-white"
          >
            Book a consultation
          </a>
        </div>

        {/* Mobile: Theme + Cart + Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-primary-dark hover:text-accent transition-colors rounded-lg"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            style={{ minHeight: '44px', minWidth: '44px' }}
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-primary-dark hover:text-accent transition-colors rounded-lg"
            aria-label={`Shopping cart with ${itemCount} items`}
            style={{ minHeight: '44px', minWidth: '44px' }}
          >
            <ShoppingCart className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-5 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center px-1.5">
                {itemCount > 9 ? '9+' : itemCount}
              </span>
            )}
          </button>
          
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm tracking-wideish bg-surface transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((s) => !s)}
            style={{ minHeight: '44px' }}
          >
            <span className="font-medium text-text-primary">Menu</span>
            <span className="text-text-secondary font-bold">{isOpen ? '×' : '+'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-border backdrop-blur-md lg:hidden" style={{ backgroundColor: 'var(--color-surface-overlay-mobile)' }}
          >
            <div className="container-x grid gap-4 py-6">
              <div className="grid gap-1">
                {items.map((it) => (
                  <NavLink
                    key={it.to}
                    to={it.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      [
                        'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                        isActive 
                          ? 'bg-accent/10 text-accent' 
                          : 'text-text-primary'
                      ].join(' ')
                    }
                    style={{ minHeight: '44px' }}
                  >
                    {it.label}
                  </NavLink>
                ))}
              </div>

              <div className="pt-2 border-t border-border">
                <a
                  href="https://wa.me/254728288688?text=Hi!%20I'm%20interested%20in%20booking%20a%20consultation.%20Could%20you%20please%20provide%20me%20with%20available%20time%20slots%20and%20pricing%20information%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="btn w-full rounded-xl px-6 py-3 text-base font-semibold bg-accent hover:bg-accent-hover text-white"
                >
                  Book a consultation
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}


