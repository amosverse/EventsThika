import { TimelineConnector } from '../../components/sections/TimelineConnector'
import { ButtonLink } from '../../components/common/buttons'
import ServiceProducts from '../../components/sections/ServiceProducts'

export function FullProduction() {
  return (
    <section className="container-x py-16 md:py-24">
      <header className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end" data-aos="fade-up">
        <div>
          <p className="eyebrow">Services · Full production</p>
          <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl">
            One team from first walkthrough
            <br />
            to final guest exit.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-primary-dark opacity-80">
            We oversee tents, décor, catering, sound, MC, and show-calling as a single production—so you don&apos;t have
            to play traffic controller.
          </p>
        </div>
        <div className="card p-5 text-sm text-primary-dark border-teal-pale">
          <div className="text-xs uppercase tracking-[0.14em] text-primary-dark opacity-70">Ideal for</div>
          <p className="mt-2">
            Weddings, brand experiences, fundraisers, and ceremonies where every element needs to work together.
          </p>
        </div>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-start">
        <section aria-labelledby="prod-included-heading" data-aos="fade-right">
          <h2 id="prod-included-heading" className="text-sm font-semibold tracking-tightish">
            What&apos;s included
          </h2>
          <ul className="mt-3 grid gap-3 text-sm leading-relaxed text-primary-dark opacity-80 md:grid-cols-2">
            <li>Dedicated producer as your single point of contact.</li>
            <li>Budgeting and vendor recommendations across all key categories.</li>
            <li>Run-of-show creation, including technical cues and contingency plans.</li>
            <li>On-site production management from load-in to strike.</li>
          </ul>
        </section>

        <section
          aria-labelledby="prod-process-heading"
          className="space-y-6 md:border-l md:border-teal-pale md:pl-8"
          data-aos="fade-left"
          data-aos-delay="120"
        >
          <div className="flex items-center gap-4">
            <TimelineConnector />
            <h2 id="prod-process-heading" className="text-sm font-semibold tracking-tightish">
              Process
            </h2>
          </div>
          <ol className="space-y-4 text-sm text-primary-dark opacity-80">
            <li>
              <div className="font-medium">1. Discovery and scope</div>
              <p className="mt-1 leading-relaxed">
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

      <section className="mt-12" aria-labelledby="prod-gallery-heading" data-aos="fade-up">
        <h2 id="prod-gallery-heading" className="text-sm font-semibold tracking-tightish">
          Recent productions
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card overflow-hidden">
            <img 
              src="/src/assets/fullprod.jpg" 
              alt="Full Production Setup" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src="/src/assets/fullprod3.jpg" 
              alt="Full Production Layout" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src="/src/assets/graduation party.jpg" 
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

      <div className="mt-10 border-t border-border pt-8" data-aos="fade-up" data-aos-delay="120">
        <ButtonLink to="/contact" variant="primary">
          Plan full production
        </ButtonLink>
      </div>
    </section>
  )
}


