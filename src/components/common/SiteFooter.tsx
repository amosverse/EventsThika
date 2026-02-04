import { NavLink } from 'react-router-dom'
import { LogoHorizontal } from './LogoHorizontal'

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-primary-dark text-white">
      <div className="container-x grid gap-8 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] sm:gap-10 lg:gap-10 lg:py-14">
        <div className="max-w-md sm:col-span-2 lg:col-span-1">
          <LogoHorizontal className="h-20 w-auto" isDark={true} />
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Tents, décor, catering, sound, DJ/MC, and full production—built with calm process and sharp execution.
          </p>
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
              <a className="underline-anim text-white hover:text-accent-light" href="tel:+10000000000">
                +254 728288688
              </a>
            </li>
            <li>
              <NavLink className="underline-anim text-white hover:text-accent-light" to="/contact">
                Booking form
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


