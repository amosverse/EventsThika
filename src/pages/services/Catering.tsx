import { TimelineConnector } from '../../components/sections/TimelineConnector'
import { ButtonLink } from '../../components/common/buttons'
import ServiceProducts from '../../components/sections/ServiceProducts'

export function Catering() {
  return (
    <section className="container-x py-16 md:py-24">
      <header className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end" data-aos="fade-up">
        <div>
          <p className="eyebrow">Services · Catering</p>
          <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl">
            Food that matches
            <br />
            the way you&apos;re gathering.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-primary-dark opacity-80">
            We partner with caterers who understand pacing, service style, and how to move a room smoothly from welcome
            drinks to last plates cleared.
          </p>
        </div>
        <div className="card p-5 text-sm text-primary-dark border-teal-pale">
          <div className="text-xs uppercase tracking-[0.14em] text-primary-dark opacity-70">Ideal for</div>
          <p className="mt-2">
            Plated dinners, grazing tables, cocktail service, and multi-course tasting menus aligned to your event.
          </p>
        </div>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-start">
        <section aria-labelledby="catering-included-heading" data-aos="fade-right">
          <h2 id="catering-included-heading" className="text-sm font-semibold tracking-tightish">
            What&apos;s included
          </h2>
          <ul className="mt-3 grid gap-3 text-sm leading-relaxed text-primary-dark opacity-80 md:grid-cols-2">
            <li>Menu curation with dietary needs and cultural considerations in mind.</li>
            <li>Staffing recommendations for service styles and guest count.</li>
            <li>Coordination of back-of-house layout, power, and timing with other vendors.</li>
            <li>Run-of-show integration so speeches, courses, and transitions work together.</li>
          </ul>
        </section>

        <section
          aria-labelledby="catering-process-heading"
          className="space-y-6 md:border-l md:border-teal-pale md:pl-8"
          data-aos="fade-left"
          data-aos-delay="120"
        >
          <div className="flex items-center gap-4">
            <TimelineConnector />
            <h2 id="catering-process-heading" className="text-sm font-semibold tracking-tightish">
              Process
            </h2>
          </div>
          <ol className="space-y-4 text-sm text-primary-dark opacity-80">
            <li>
              <div className="font-medium">1. Event profile</div>
              <p className="mt-1 leading-relaxed">
                We clarify the tone, schedule, and any non-negotiables before suggesting partners or menus.
              </p>
            </li>
            <li>
              <div className="font-medium">2. Menu and service style</div>
              <p className="mt-1 leading-relaxed">
                We work with you and the caterer to decide how food appears in the room—and how long it stays there.
              </p>
            </li>
            <li>
              <div className="font-medium">3. On-site coordination</div>
              <p className="mt-1 leading-relaxed">
                Our team coordinates call times, run-of-show cues, and communication between kitchen and floor.
              </p>
            </li>
          </ol>
        </section>
      </div>

      <section className="mt-12" aria-labelledby="catering-gallery-heading" data-aos="fade-up">
        <h2 id="catering-gallery-heading" className="text-sm font-semibold tracking-tightish">
          Service moments
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card overflow-hidden">
            <img 
              src="/src/assets/catering1.jpg" 
              alt="Catering Setup" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src="/src/assets/catering3.jpg" 
              alt="Catering Spread" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src="/src/assets/traditionalcatering.jpg" 
              alt="Traditional Catering" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Marketplace Products */}
      <ServiceProducts category="catering" />

      <div className="mt-10 border-t border-border pt-8" data-aos="fade-up" data-aos-delay="120">
        <ButtonLink to="/contact" variant="primary">
          Discuss catering options
        </ButtonLink>
      </div>
    </section>
  )
}


