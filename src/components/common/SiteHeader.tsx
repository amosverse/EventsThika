import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'

import { ButtonLink } from './buttons'
import { LogoHorizontal } from './LogoHorizontal'
import { useCart } from '../../context/useCart'

type NavItem = {
  to: string
  label: string
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const { getItemCount, setIsCartOpen } = useCart()
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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <NavLink to="/" className="group inline-flex items-center" aria-label="Go to homepage">
          <LogoHorizontal className="h-16 w-auto" />
        </NavLink>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {items.slice(0, 5).map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) =>
                [
                  'underline-anim text-sm tracking-wideish text-primary-dark font-medium transition hover:text-accent',
                  isActive ? 'text-accent' : '',
                ].join(' ')
              }
            >
              {it.label}
            </NavLink>
          ))}

          <div className="h-5 w-px bg-border" />

          {items.slice(5).map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) =>
                [
                  'underline-anim text-sm tracking-wideish text-primary-dark font-medium transition hover:text-accent',
                  isActive ? 'text-accent' : '',
                ].join(' ')
              }
            >
              {it.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-primary-dark hover:text-accent transition-colors"
            aria-label={`Shopping cart with ${itemCount} items`}
          >
            <ShoppingCart className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#E55625] text-white text-xs font-bold rounded-full flex items-center justify-center">
                {itemCount > 9 ? '9+' : itemCount}
              </span>
            )}
          </button>
          
          <ButtonLink to="/contact" variant="primary" className="btn-nav rounded-full px-4 py-2 text-xs">
            Book a consultation
          </ButtonLink>
        </div>

        {/* Mobile: Cart + Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-primary-dark hover:text-accent transition-colors"
            aria-label={`Shopping cart with ${itemCount} items`}
          >
            <ShoppingCart className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#E55625] text-white text-xs font-bold rounded-full flex items-center justify-center">
                {itemCount > 9 ? '9+' : itemCount}
              </span>
            )}
          </button>
          
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl2 border border-border px-4 py-2 text-sm tracking-wideish bg-surface"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((s) => !s)}
          >
            <span className="font-medium text-text-primary">Menu</span>
            <span className="text-text-secondary">{isOpen ? '—' : '+'}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="overflow-hidden border-t border-border bg-surface"
          >
            <div className="container-x grid gap-3 py-4">
              <div className="grid gap-2">
                {items.map((it) => (
                  <NavLink
                    key={it.to}
                    to={it.to}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl2 px-3 py-2 text-sm text-text-secondary hover:bg-teal-subtle"
                  >
                    {it.label}
                  </NavLink>
                ))}
              </div>

              <div className="pt-1">
                <ButtonLink
                  to="/contact"
                  variant="primary"
                  onClick={() => setIsOpen(false)}
                  className="btn-nav rounded-full px-4 py-2 text-xs"
                >
                  Book a consultation
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}


