import { TimelineConnector } from '../../components/sections/TimelineConnector'
import { ButtonLink } from '../../components/common/buttons'
import ServiceProducts from '../../components/sections/ServiceProducts'

export function FullProduction() {
  return (
    <section className="container-x py-16 md:py-24 bg-background">
      <header className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end">
        <div>
          <p className="eyebrow text-accent font-bold">Services · Full production</p>
          <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl text-text-primary font-bold">
            One team from first walkthrough
            <br />
            to final guest exit.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-text-primary">, décor, catering, sound, MC, and show-calling as a single production—so you don&apos;t have
            to play traffic controller.
          </p>
        </div>
        <div className="card p-5 text-sm text-text-primary border-teal-pale bg-teal-50">
          <div className="text-xs uppercase tracking-[0.14em] text-text-secondary font-semibold">Ideal for</div>
          <p className="mt-2 text-text-primary">
            Weddings, brand experiences, fundraisers, and ceremonies where every element needs to work together.
          </p>
        </div>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-start">
        <section aria-labelledby="prod-included-heading">
          <h2 id="prod-included-heading" className="text-sm font-semibold tracking-tightish text-text-primary">
            What&apos;s included
          </h2>
          <ul className="mt-3 grid gap-3 text-sm leading-relaxed text-text-primary md:grid-cols-2">
            <li>Dedicated producer as your single point of contact.</li>
            <li>Budgeting and vendor recommendations across all key categories.</li>
            <li>Run-of-show creation, including technical cues and contingency plans.</li>
            <li>On-site production management from load-in to strike.</li>
          </ul>
        </section>

        <section
          aria-labelledby="prod-process-heading"
          className="space-y-6 md:border-l md:border-teal-pale md:pl-8"
         
         
        >
          <div className="flex items-center gap-4">
            <TimelineConnector />
            <h2 id="prod-process-heading" className="text-sm font-semibold tracking-tightish text-text-primary">
              Process
            </h2>
          </div>
          <ol className="space-y-4 text-sm text-text-primary">
            <li>
              <div className="font-medium text-text-primary">1. Discovery and scope</div>
              <p className="mt-1 leading-relaxed text-text-secondary">
                We align on priorities, budget ranges, and what &quot;success&quot; looks like for you and your guests.
              </p>
            </li>
            <li>
              <div className="font-medium">2. Plan and partners</div>
              <p className="mt-1 leading-relaxed">
                We propose layouts, timelines, and a vendor mix—then refine everything with you before booking.
              </p>
            </li>
            <li>
              <div className="font-medium">3. Production and debrief</div>
              <p className="mt-1 leading-relaxed">
                Our team runs the show, handles issues quietly, and provides a simple post-event summary.
              </p>
            </li>
          </ol>
        </section>
      </div>

      <section className="mt-12" aria-labelledby="prod-gallery-heading">
        <h2 id="prod-gallery-heading" className="text-sm font-semibold tracking-tightish text-text-primary">
          Recent productions
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/fullprod.jpg', import.meta.url).href}
              alt="Full Production Setup" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/full-prod.jpg', import.meta.url).href}
              alt="Full Production Layout" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/graduation party.jpg', import.meta.url).href}
              alt="Graduation Party" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Products for Full Production */}
      <ServiceProducts category="tents" title="Featured Tents" maxItems={4} />
      <ServiceProducts category="decor" title="Décor Highlights" maxItems={4} />
      <ServiceProducts category="sound" title="Sound & Lighting" maxItems={4} />

      <div className="mt-10 border-t border-border pt-8">
        <a href="https://wa.me/254728288688?text=Hi!%20I'm%20interested%20in%20full%20production%20services%20for%20my%20event.%20Could%20you%20please%20provide%20a%20quote%2C%20pricing%20information%2C%20and%20availability%3F" target="_blank" rel="noopener noreferrer" className="btn bg-accent hover:bg-accent-hover text-white">
          Plan full production
        </a>
      </div>
    </section>
  )
}



