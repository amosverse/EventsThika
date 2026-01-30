import { TimelineConnector } from '../../components/sections/TimelineConnector'
import { ButtonLink } from '../../components/common/buttons'
import ServiceProducts from '../../components/sections/ServiceProducts'

export function EventDecor() {
  return (
    <section className="container-x py-16 md:py-24">
      <header className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end" data-aos="fade-up">
        <div>
          <p className="eyebrow">Services · Event décor</p>
          <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl">
            Rooms that feel considered,
            <br />
            not over-decorated.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-primary-dark opacity-80">
            We work with florists, stylists, and lighting designers to build a clear visual language for your event—and
            then remove anything that doesn&apos;t serve it.
          </p>
        </div>
        <div className="card p-5 text-sm text-primary-dark border-purple-pale">
          <div className="text-xs uppercase tracking-[0.14em] text-primary-dark opacity-70">Ideal for</div>
          <p className="mt-2">Ceremonies, receptions, brand events, and environments that photograph well by design.</p>
        </div>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-start">
        <section aria-labelledby="decor-included-heading" data-aos="fade-right">
          <h2 id="decor-included-heading" className="text-sm font-semibold tracking-tightish">
            What&apos;s included
          </h2>
          <ul className="mt-3 grid gap-3 text-sm leading-relaxed text-primary-dark opacity-80 md:grid-cols-2">
            <li>Concept boards and reference pulls tailored to your venue and budget.</li>
            <li>Tablescape design including linens, place settings, and printed pieces.</li>
            <li>Floral direction and coordination with your florist or our partners.</li>
            <li>Ambient and feature lighting plans that support photography and mood.</li>
          </ul>
        </section>

        <section
          aria-labelledby="decor-process-heading"
          className="space-y-6 md:border-l md:border-purple-pale md:pl-8"
          data-aos="fade-left"
          data-aos-delay="120"
        >
          <div className="flex items-center gap-4">
            <TimelineConnector />
            <h2 id="decor-process-heading" className="text-sm font-semibold tracking-tightish">
              Process
            </h2>
          </div>
          <ol className="space-y-4 text-sm text-primary-dark opacity-80">
            <li>
              <div className="font-medium">1. Mood and constraints</div>
              <p className="mt-1 leading-relaxed">
                We define what the room should feel like and any non-negotiables (cultural elements, brand colors,
                venue guidelines).
              </p>
            </li>
            <li>
              <div className="font-medium">2. Layout and details</div>
              <p className="mt-1 leading-relaxed">
                We map focal points, guest flow, and décor moments that create rhythm rather than clutter.
              </p>
            </li>
            <li>
              <div className="font-medium">3. Install and styling</div>
              <p className="mt-1 leading-relaxed">
                Our team or your planner oversees install, with a final walk-through before doors open.
              </p>
            </li>
          </ol>
        </section>
      </div>

      <section className="mt-12" aria-labelledby="decor-gallery-heading" data-aos="fade-up">
        <h2 id="decor-gallery-heading" className="text-sm font-semibold tracking-tightish">
          Detail studies
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card overflow-hidden">
            <img 
              src="/src/assets/decor.jpg" 
              alt="Elegant Decor Setup" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src="/src/assets/weddingdecor2.jpg" 
              alt="Wedding Decor Display" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src="/src/assets/lights2.jpg" 
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

      <div className="mt-10 border-t border-border pt-8" data-aos="fade-up" data-aos-delay="120">
        <ButtonLink to="/contact" variant="primary">
          Discuss décor options
        </ButtonLink>
      </div>
    </section>
  )
}


