import { NavLink } from 'react-router-dom'
import { LogoHorizontal } from './LogoHorizontal'
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-primary-dark text-white">
      <div className="container-x grid gap-8 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] sm:gap-10 lg:gap-10 lg:py-14">
        <div className="max-w-md sm:col-span-2 lg:col-span-1">
          <LogoHorizontal className="h-20 w-auto" isDark={true} />
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Tents, décor, catering, sound, DJ/MC, and full production—built with calm process and sharp execution.
          </p>
          
          {/* Social Links */}
          <div className="mt-6">
            <div className="eyebrow text-white/80 mb-3">Follow Us</div>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/profile.php?id=100064033101197" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-[#E55625] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/gloria_events_solutions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-[#E55625] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@gloria_events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-[#E55625] transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/254728288688" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@gloriaevents" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-[#FF0000] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="eyebrow text-white/80">Services</div>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>
              <NavLink className="underline-anim text-white hover:text-accent-light" to="/services/tent-rentals">
                Tent rentals
              </NavLink>
            </li>
            <li>
              <NavLink className="underline-anim text-white hover:text-accent-light" to="/services/decorations">
                Event décor
              </NavLink>
            </li>
            <li>
              <NavLink className="underline-anim text-white hover:text-accent-light" to="/services/catering">
                Catering
              </NavLink>
            </li>
            <li>
              <NavLink className="underline-anim text-white hover:text-accent-light" to="/services/sound-dj">
                PA & DJ systems
              </NavLink>
            </li>
            <li>
              <NavLink className="underline-anim text-white hover:text-accent-light" to="/services/mc">
                MC services
              </NavLink>
            </li>
            <li>
              <NavLink className="underline-anim text-white hover:text-accent-light" to="/services/full-production">
                Full production
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <div className="eyebrow text-white/80">Contact</div>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>
              <a className="underline-anim text-white hover:text-accent-light" href="mailto:hello@eventstudio.com">
                hello@eventstudio.com
              </a>
            </li>
            <li>
              <a className="underline-anim text-white hover:text-accent-light" href="tel:+254728288688">
                +254 728 288 688
              </a>
            </li>
            <li>
              <NavLink className="underline-anim text-white hover:text-accent-light" to="/contact">
                Email us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Event Solutions Thika.</span>
          <span>Making your event a planned success.</span>
        </div>
      </div>
    </footer>
  )
}


