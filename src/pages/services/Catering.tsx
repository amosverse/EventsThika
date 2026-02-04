import { TimelineConnector } from '../../components/sections/TimelineConnector'
import { ButtonLink } from '../../components/common/buttons'
import ServiceProducts from '../../components/sections/ServiceProducts'

export function Catering() {
  return (
    <section className="container-x py-16 md:py-24" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <header className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end" style={{ opacity: 1 }}>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: '#E55625' }}>Services · Catering</p>
          <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl font-bold" style={{ color: '#1F2645' }}>
            Food that matches
            <br />
            the way you&apos;re gathering.
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: '#1F2645' }}>
            We partner with caterers who understand pacing, service style, and how to move a room smoothly from welcome
            drinks to last plates cleared.
          </p>
        </div>
        <div className="card p-5 text-sm border-teal-pale" style={{ backgroundColor: '#E6FFFA', color: '#1F2645' }}>
          <div className="text-xs uppercase tracking-[0.14em] font-semibold" style={{ color: '#1F2645' }}>Ideal for</div>
          <p className="mt-2" style={{ color: '#1F2645' }}>
            Plated dinners, grazing tables, cocktail service, and multi-course tasting menus aligned to your event.
          </p>
        </div>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-start" style={{ opacity: 1 }}>
        <section aria-labelledby="catering-included-heading">
          <h2 id="catering-included-heading" className="text-sm font-semibold tracking-tightish" style={{ color: '#1F2645' }}>
            What&apos;s included
          </h2>
          <ul className="mt-3 grid gap-3 text-sm leading-relaxed md:grid-cols-2" style={{ color: '#1F2645' }}>
            <li>Menu curation with dietary needs and cultural considerations in mind.</li>
            <li>Staffing recommendations for service styles and guest count.</li>
            <li>Coordination of back-of-house layout, power, and timing with other vendors.</li>
            <li>Run-of-show integration so speeches, courses, and transitions work together.</li>
          </ul>
        </section>

        <section
          aria-labelledby="catering-process-heading"
          className="space-y-6 md:border-l md:border-teal-pale md:pl-8"
          style={{ opacity: 1 }}
        >
          <div className="flex items-center gap-4">
            <TimelineConnector />
            <h2 id="catering-process-heading" className="text-sm font-semibold tracking-tightish" style={{ color: '#1F2645' }}>
              Process
            </h2>
          </div>
          <ol className="space-y-4 text-sm" style={{ color: '#1F2645' }}>
            <li>
              <div className="font-medium" style={{ color: '#1F2645' }}>1. Event profile</div>
              <p className="mt-1 leading-relaxed" style={{ color: '#1F2645' }}>
                We clarify the tone, schedule, and any non-negotiables before suggesting partners or menus.
              </p>
            </li>
            <li>
              <div className="font-medium" style={{ color: '#1F2645' }}>2. Menu and service style</div>
              <p className="mt-1 leading-relaxed" style={{ color: '#1F2645' }}>
                We work with you and the caterer to decide how food appears in the room—and how long it stays there.
              </p>
            </li>
            <li>
              <div className="font-medium" style={{ color: '#1F2645' }}>3. On-site coordination</div>
              <p className="mt-1 leading-relaxed" style={{ color: '#1F2645' }}>
                Our team coordinates call times, run-of-show cues, and communication between kitchen and floor.
              </p>
            </li>
          </ol>
        </section>
      </div>

      <section className="mt-12" aria-labelledby="catering-gallery-heading" style={{ opacity: 1 }}>
        <h2 id="catering-gallery-heading" className="text-sm font-semibold tracking-tightish" style={{ color: '#1F2645' }}>
          Service moments
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/catering1.jpg', import.meta.url).href}
              alt="Catering Setup" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/catering2.jpg', import.meta.url).href}
              alt="Catering Spread" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/catering3.jpg', import.meta.url).href}
              alt="Traditional Catering" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Marketplace Products */}
      <ServiceProducts category="catering" />

      <div className="mt-10 border-t border-border pt-8" style={{ opacity: 1 }}>
        <a href="https://wa.me/254728288688?text=Hi!%20I'm%20interested%20in%20catering%20services%20for%20my%20event.%20Could%20you%20please%20provide%20pricing%20information%20and%20availability%3F" target="_blank" rel="noopener noreferrer" className="btn bg-accent hover:bg-accent-hover text-white">
          Discuss catering options
        </a>
      </div>
    </section>
  )
}


