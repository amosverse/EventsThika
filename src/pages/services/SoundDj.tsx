import { TimelineConnector } from '../../components/sections/TimelineConnector'
import { ButtonLink } from '../../components/common/buttons'
import ServiceProducts from '../../components/sections/ServiceProducts'

export function SoundDj() {
  return (
    <section className="container-x py-16 md:py-24 bg-background">
      <header className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end">
        <div>
          <p className="eyebrow text-accent font-bold">Services · Sound &amp; DJ</p>
          <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl text-text-primary font-bold">
            Clear sound,
            <br />
            no drama.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-text-primary"> and music direction so speeches land, dance floors stay full, and your neighbours stay
            calm.
          </p>
        </div>
        <div className="card p-5 text-sm text-text-primary border-teal-pale bg-teal-50">
          <div className="text-xs uppercase tracking-[0.14em] text-text-secondary font-semibold">Ideal for</div>
          <p className="mt-2 text-text-primary">Ceremonies, receptions, conferences, and experiences where audio clarity matters.</p>
        </div>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-start">
        <section aria-labelledby="sound-included-heading">
          <h2 id="sound-included-heading" className="text-sm font-semibold tracking-tightish text-text-primary">
            What&apos;s included
          </h2>
          <ul className="mt-3 grid gap-3 text-sm leading-relaxed text-text-primary md:grid-cols-2">
            <li>PA design for ceremonies, speeches, and live or DJ sets.</li>
            <li>On-site technicians to manage levels and troubleshoot quietly.</li>
            <li>DJ curation, from brief to setlists, aligned to your crowd and schedule.</li>
            <li>Microphones, monitors, and playback systems sized to your room.</li>
          </ul>
        </section>

        <section
          aria-labelledby="sound-process-heading"
          className="space-y-6 md:border-l md:border-teal-pale md:pl-8"
         
         
        >
          <div className="flex items-center gap-4">
            <TimelineConnector />
            <h2 id="sound-process-heading" className="text-sm font-semibold tracking-tightish text-text-primary">
              Process
            </h2>
          </div>
          <ol className="space-y-4 text-sm text-text-primary">
            <li>
              <div className="font-medium text-text-primary">1. Room and program</div>
              <p className="mt-1 leading-relaxed text-text-secondary">
                We map where sound needs to reach, what&apos;s being amplified, and any noise constraints.
              </p>
            </li>
            <li>
              <div className="font-medium">2. System design</div>
              <p className="mt-1 leading-relaxed">
                We specify speakers, microphones, and control so everything works within your technical budget.
              </p>
            </li>
            <li>
              <div className="font-medium">3. Show call</div>
              <p className="mt-1 leading-relaxed">
                Our technicians arrive early, line-check, and follow the run of show from first cue to last track.
              </p>
            </li>
          </ol>
        </section>
      </div>

      <section className="mt-12" aria-labelledby="sound-gallery-heading">
        <h2 id="sound-gallery-heading" className="text-sm font-semibold tracking-tightish text-text-primary">
          Setups
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/Dj&PA.jpg', import.meta.url).href}
              alt="DJ & PA Setup" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/PA.jpg', import.meta.url).href}
              alt="PA System" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/stage.jpg', import.meta.url).href}
              alt="Stage Setup" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Marketplace Products - Sound & Lighting */}
      <ServiceProducts category="sound" title="Sound & DJ Equipment" />
      <ServiceProducts category="lighting" title="Lighting Solutions" />

      <div className="mt-10 border-t border-border pt-8">
        <a href="https://wa.me/254728288688?text=Hi!%20I'm%20interested%20in%20sound%20and%20DJ%20services%20for%20my%20event.%20Could%20you%20please%20provide%20pricing%20information%20and%20availability%3F" target="_blank" rel="noopener noreferrer" className="btn bg-accent hover:bg-accent-hover text-white">
          Discuss sound &amp; DJ options
        </a>
      </div>
    </section>
  )
}



