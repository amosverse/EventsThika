import { TimelineConnector } from '../../components/sections/TimelineConnector'
import { ButtonLink } from '../../components/common/buttons'
import ServiceProducts from '../../components/sections/ServiceProducts'

export function McServices() {
  return (
    <section className="container-x py-16 md:py-24 bg-background">
      <header className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end">
        <div>
          <p className="eyebrow text-accent font-bold">Services · MC</p>
          <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl text-text-primary font-bold">
            Voices that carry the room,
            <br />
            without taking it over.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-text-primary"> oriented, energy steady, and transitions smooth—always in service of your event, never
            the microphone.
          </p>
        </div>
        <div className="card p-5 text-sm text-text-primary border-purple-pale bg-purple-50">
          <div className="text-xs uppercase tracking-[0.14em] text-text-secondary font-semibold">Ideal for</div>
          <p className="mt-2 text-text-primary">Weddings, ceremonies, fundraisers, and conferences with live program elements.</p>
        </div>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-start">
        <section aria-labelledby="mc-included-heading">
          <h2 id="mc-included-heading" className="text-sm font-semibold tracking-tightish text-text-primary">
            What&apos;s included
          </h2>
          <ul className="mt-3 grid gap-3 text-sm leading-relaxed text-text-primary md:grid-cols-2">
            <li>Professional MCs matched to your event style and audience.</li>
            <li>Script and cue review with your planner or internal team.</li>
            <li>Coordination with AV, catering, and front-of-house for timing.</li>
            <li>Guidance for speakers who are new to the microphone.</li>
          </ul>
        </section>

        <section
          aria-labelledby="mc-process-heading"
          className="space-y-6 md:border-l md:border-purple-pale md:pl-8"
         
         
        >
          <div className="flex items-center gap-4">
            <TimelineConnector />
            <h2 id="mc-process-heading" className="text-sm font-semibold tracking-tightish text-text-primary">
              Process
            </h2>
          </div>
          <ol className="space-y-4 text-sm text-text-primary">
            <li>
              <div className="font-medium text-text-primary">1. Event narrative</div>
              <p className="mt-1 leading-relaxed text-text-secondary">
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

      <section className="mt-12" aria-labelledby="mc-gallery-heading">
        <h2 id="mc-gallery-heading" className="text-sm font-semibold tracking-tightish text-text-primary">
          Moments on mic
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/Dj&PA.jpg', import.meta.url).href}
              alt="MC with DJ Equipment" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/stage.jpg', import.meta.url).href}
              alt="Stage with Microphone Setup" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/fullprod.jpg', import.meta.url).href}
              alt="Full Event Production" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Recommended Sound Equipment for MC */}
      <ServiceProducts category="sound" title="Recommended Sound Equipment" maxItems={4} />

      <div className="mt-10 border-t border-border pt-8">
        <a href="https://wa.me/254728288688?text=Hi!%20I'm%20interested%20in%20MC%20services%20for%20my%20event.%20Could%20you%20please%20provide%20pricing%20information%20and%20availability%3F" target="_blank" rel="noopener noreferrer" className="btn bg-accent hover:bg-accent-hover text-white">
          Discuss MC options
        </a>
      </div>
    </section>
  )
}



