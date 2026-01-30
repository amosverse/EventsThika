import { useEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { SiteFooter } from '../components/common/SiteFooter'
import { SiteHeader } from '../components/common/SiteHeader'
import { WhatsAppFloat } from '../components/common/WhatsAppFloat'
import CartSidebar from '../components/marketplace/CartSidebar'

export function SiteLayout() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 720,
      easing: 'ease-out',
      offset: 140,
      once: true,
    })
  }, [])

  useEffect(() => {
    // Ensure AOS recalculates on navigation.
    AOS.refreshHard()
  }, [location.pathname])

  return (
    <div className="min-h-dvh bg-background text-text-primary">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-5 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:shadow-liftSm"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="pt-16">
        <Outlet />
      </main>

      <SiteFooter />

      <WhatsAppFloat />
      <CartSidebar />

      <ScrollRestoration />
    </div>
  )
}


