import { TimelineConnector } from '../../components/sections/TimelineConnector'
import { ButtonLink } from '../../components/common/buttons'
import ServiceProducts from '../../components/sections/ServiceProducts'

export function EventDecor() {
  return (
    <section className="container-x py-16 md:py-24" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <header className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end" style={{ opacity: 1, visibility: 'visible' }}>
        <div style={{ color: '#1F2645' }}>
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: '#E55625' }}>Services · Event décor</p>
          <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl font-bold" style={{ color: '#1F2645' }}>
            Rooms that feel considered,
            <br />
            not over-decorated.
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: '#1F2645' }}>
            We work with florists, stylists, and lighting designers to build a clear visual language for your event—and
            then remove anything that doesn&apos;t serve it.
          </p>
        </div>
        <div className="card p-5 text-sm border-purple-pale" style={{ backgroundColor: '#F3E8FF', color: '#1F2645', opacity: 1 }}>
          <div className="text-xs uppercase tracking-[0.14em] font-semibold" style={{ color: '#1F2645' }}>Ideal for</div>
          <p className="mt-2" style={{ color: '#1F2645' }}>Ceremonies, receptions, brand events, and environments that photograph well by design.</p>
        </div>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-start" style={{ opacity: 1, visibility: 'visible' }}>
        <section aria-labelledby="decor-included-heading">
          <h2 id="decor-included-heading" className="text-sm font-semibold tracking-tightish" style={{ color: '#1F2645' }}>
            What&apos;s included
          </h2>
          <ul className="mt-3 grid gap-3 text-sm leading-relaxed md:grid-cols-2" style={{ color: '#1F2645' }}>
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
            <h2 id="decor-process-heading" className="text-sm font-semibold tracking-tightish" style={{ color: '#1F2645' }}>
              Process
            </h2>
          </div>
          <ol className="space-y-4 text-sm" style={{ color: '#1F2645' }}>
            <li>
              <div className="font-medium" style={{ color: '#1F2645' }}>1. Mood and constraints</div>
              <p className="mt-1 leading-relaxed" style={{ color: '#1F2645' }}>
                We define what the room should feel like and any non-negotiables (cultural elements, brand colors,
                venue guidelines).
              </p>
            </li>
            <li>
              <div className="font-medium" style={{ color: '#1F2645' }}>2. Layout and details</div>
              <p className="mt-1 leading-relaxed" style={{ color: '#1F2645' }}>
                We map focal points, guest flow, and décor moments that create rhythm rather than clutter.
              </p>
            </li>
            <li>
              <div className="font-medium" style={{ color: '#1F2645' }}>3. Install and styling</div>
              <p className="mt-1 leading-relaxed" style={{ color: '#1F2645' }}>
                Our team or your planner oversees install, with a final walk-through before doors open.
              </p>
            </li>
          </ol>
        </section>
      </div>

      <section className="mt-12" aria-labelledby="decor-gallery-heading" style={{ opacity: 1, visibility: 'visible' }}>
        <h2 id="decor-gallery-heading" className="text-sm font-semibold tracking-tightish" style={{ color: '#1F2645' }}>
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
          Discuss décor options
        </a>
      </div>
    </section>
  )
}


