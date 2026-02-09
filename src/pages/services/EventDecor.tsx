import { TimelineConnector } from '../../components/sections/TimelineConnector'
import { ButtonLink } from '../../components/common/buttons'
import ServiceProducts from '../../components/sections/ServiceProducts'

export function EventDecor() {
  return (
    <section className="container-x py-16 md:py-24" style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      <header className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end" style={{ opacity: 1, visibility: 'visible' }}>
        <div style={{ color: 'var(--color-text-primary)' }}>
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: 'var(--color-accent-orange)' }}>Services Â· Event dÃ©cor</p>
          <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
            Rooms that feel considered,
            <br />
            not over-decorated.
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>, stylists, and lighting designers to build a clear visual language for your eventâ€”and
            then remove anything that doesn&apos;t serve it.
          </p>
        </div>
        <div className="card p-5 text-sm border-purple-pale" style={{ backgroundColor: 'var(--color-background-alt)', color: 'var(--color-text-primary)', opacity: 1 }}>
          <div className="text-xs uppercase tracking-[0.14em] font-semibold" style={{ color: 'var(--color-text-primary)' }}>Ideal for</div>
          <p className="mt-2" style={{ color: 'var(--color-text-primary)' }}>Ceremonies, receptions, brand events, and environments that photograph well by design.</p>
        </div>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-start" style={{ opacity: 1, visibility: 'visible' }}>
        <section aria-labelledby="decor-included-heading">
          <h2 id="decor-included-heading" className="text-sm font-semibold tracking-tightish" style={{ color: 'var(--color-text-primary)' }}>
            What&apos;s included
          </h2>
          <ul className="mt-3 grid gap-3 text-sm leading-relaxed md:grid-cols-2" style={{ color: 'var(--color-text-primary)' }}>
            <li>Concept boards and reference pulls tailored to your venue and budget.</li>
            <li>Tablescape design including linens, place settings, and printed pieces.</li>
            <li>Floral direction and coordination with your florist or our partners.</li>
            <li>Ambient and feature lighting plans that support photography and mood.</li>
          </ul>
        </section>

        <section
          aria-labelledby="decor-process-heading"
          className="space-y-6 md:border-l md:border-purple-pale md:pl-8"
          style={{ opacity: 1, visibility: 'visible' }}
        >
          <div className="flex items-center gap-4">
            <TimelineConnector />
            <h2 id="decor-process-heading" className="text-sm font-semibold tracking-tightish" style={{ color: 'var(--color-text-primary)' }}>
              Process
            </h2>
          </div>
          <ol className="space-y-4 text-sm" style={{ color: 'var(--color-text-primary)' }}>
            <li>
              <div className="font-medium" style={{ color: 'var(--color-text-primary)' }}>1. Mood and constraints</div>
              <p className="mt-1 leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                We define what the room should feel like and any non-negotiables (cultural elements, brand colors,
                venue guidelines).
              </p>
            </li>
            <li>
              <div className="font-medium" style={{ color: 'var(--color-text-primary)' }}>2. Layout and details</div>
              <p className="mt-1 leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                We map focal points, guest flow, and dÃ©cor moments that create rhythm rather than clutter.
              </p>
            </li>
            <li>
              <div className="font-medium" style={{ color: 'var(--color-text-primary)' }}>3. Install and styling</div>
              <p className="mt-1 leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                Our team or your planner oversees install, with a final walk-through before doors open.
              </p>
            </li>
          </ol>
        </section>
      </div>

      <section className="mt-12" aria-labelledby="decor-gallery-heading" style={{ opacity: 1, visibility: 'visible' }}>
        <h2 id="decor-gallery-heading" className="text-sm font-semibold tracking-tightish" style={{ color: 'var(--color-text-primary)' }}>
          Detail studies
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3" style={{ opacity: 1 }}>
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/decor.jpg', import.meta.url).href}
              alt="Elegant Decor Setup" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/weddingdecor2.jpg', import.meta.url).href}
              alt="Wedding Decor Display" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/lights.jpg', import.meta.url).href}
              alt="Lighting Setup" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Marketplace Products */}
      <ServiceProducts category="decor" />
      <ServiceProducts category="chairs" title="Seating & Furniture" />
      <ServiceProducts category="tables" title="Tables & Surfaces" />

      <div className="mt-10 border-t border-border pt-8" style={{ opacity: 1, visibility: 'visible' }}>
        <a href="https://wa.me/254728288688?text=Hi!%20I'm%20interested%20in%20event%20decor%20services%20for%20my%20event.%20Could%20you%20please%20provide%20pricing%20information%20and%20availability%3F" target="_blank" rel="noopener noreferrer" className="btn bg-accent hover:bg-accent-hover text-white">
          Discuss dÃ©cor options
        </a>
      </div>
    </section>
  )
}


