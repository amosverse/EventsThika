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
    // AOS disabled temporarily for debugging
    // AOS.init({
    //   duration: 720,
    //   easing: 'ease-out',
    //   offset: 140,
    //   once: true,
    // })
  }, [])

  useEffect(() => {
    // Ensure AOS recalculates on navigation.
    // AOS.refreshHard()
  }, [location.pathname])

  return (
    <div className="min-h-dvh bg-background text-text-primary antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-surface focus:px-6 focus:py-3 focus:text-base focus:shadow-lift focus:outline-none"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="pt-16 md:pt-20">
        <Outlet />
      </main>

      <SiteFooter />

      <WhatsAppFloat />
      <CartSidebar />

      <ScrollRestoration />
    </div>
  )
}


