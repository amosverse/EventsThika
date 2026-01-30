import { TimelineConnector } from '../../components/sections/TimelineConnector'
import { ButtonLink } from '../../components/common/buttons'
import ServiceProducts from '../../components/sections/ServiceProducts'

export function McServices() {
  return (
    <section className="container-x py-16 md:py-24">
      <header className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end" data-aos="fade-up">
        <div>
          <p className="eyebrow">Services · MC</p>
          <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl">
            Voices that carry the room,
            <br />
            without taking it over.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-primary-dark opacity-80">
            Our MCs keep guests oriented, energy steady, and transitions smooth—always in service of your event, never
            the microphone.
          </p>
        </div>
        <div className="card p-5 text-sm text-primary-dark border-purple-pale">
          <div className="text-xs uppercase tracking-[0.14em] text-primary-dark opacity-70">Ideal for</div>
          <p className="mt-2">Weddings, ceremonies, fundraisers, and conferences with live program elements.</p>
        </div>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-start">
        <section aria-labelledby="mc-included-heading" data-aos="fade-right">
          <h2 id="mc-included-heading" className="text-sm font-semibold tracking-tightish">
            What&apos;s included
          </h2>
          <ul className="mt-3 grid gap-3 text-sm leading-relaxed text-primary-dark opacity-80 md:grid-cols-2">
            <li>Professional MCs matched to your event style and audience.</li>
            <li>Script and cue review with your planner or internal team.</li>
            <li>Coordination with AV, catering, and front-of-house for timing.</li>
            <li>Guidance for speakers who are new to the microphone.</li>
          </ul>
        </section>

        <section
          aria-labelledby="mc-process-heading"
          className="space-y-6 md:border-l md:border-purple-pale md:pl-8"
          data-aos="fade-left"
          data-aos-delay="120"
        >
          <div className="flex items-center gap-4">
            <TimelineConnector />
            <h2 id="mc-process-heading" className="text-sm font-semibold tracking-tightish">
              Process
            </h2>
          </div>
          <ol className="space-y-4 text-sm text-primary-dark opacity-80">
            <li>
              <div className="font-medium">1. Event narrative</div>
              <p className="mt-1 leading-relaxed">
                We understand the story your event is telling and where key moments land in the run of show.
              </p>
            </li>
            <li>
              <div className="font-medium">2. Script and cues</div>
              <p className="mt-1 leading-relaxed">
                We co-write or refine scripts, intros, and housekeeping so the MC speaks clearly and succinctly.
              </p>
            </li>
            <li>
              <div className="font-medium">3. On-the-day adjustments</div>
              <p className="mt-1 leading-relaxed">
                Your MC tracks timing with production so the event feels fluid, even when things shift.
              </p>
            </li>
          </ol>
        </section>
      </div>

      <section className="mt-12" aria-labelledby="mc-gallery-heading" data-aos="fade-up">
        <h2 id="mc-gallery-heading" className="text-sm font-semibold tracking-tightish">
          Moments on mic
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card overflow-hidden">
            <img 
              src="/src/assets/DJ3.jpg" 
              alt="MC with DJ Equipment" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src="/src/assets/stage.jpg" 
              alt="Stage with Microphone Setup" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src="/src/assets/full-prod.jpg" 
              alt="Full Event Production" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Recommended Sound Equipment for MC */}
      <ServiceProducts category="sound" title="Recommended Sound Equipment" maxItems={4} />

      <div className="mt-10 border-t border-border pt-8" data-aos="fade-up" data-aos-delay="120">
        <ButtonLink to="/contact" variant="primary">
          Discuss MC options
        </ButtonLink>
      </div>
    </section>
  )
}


