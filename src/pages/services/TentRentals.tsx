import { TimelineConnector } from '../../components/sections/TimelineConnector'
import { ButtonLink } from '../../components/common/buttons'
import ServiceProducts from '../../components/sections/ServiceProducts'

export function TentRentals() {
  return (
    <section className="container-x py-16 md:py-24">
      <header className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end" data-aos="fade-up">
        <div>
          <p className="eyebrow">Services · Tent rentals</p>
          <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl">Structure that feels intentional.</h1>
          <p className="mt-5 text-base leading-relaxed text-primary-dark opacity-80">
            We design tent layouts around sightlines, service routes, and the way your guests actually move through a
            space—not just the maximum capacity.
          </p>
        </div>
        <div className="card p-5 text-sm text-primary-dark border-teal-pale">
          <div className="text-xs uppercase tracking-[0.14em] text-primary-dark opacity-70">Ideal for</div>
          <p className="mt-2">Outdoor weddings, corporate dinners, ceremonies, and multi-day festivals.</p>
        </div>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-start">
        <section aria-labelledby="tent-included-heading" data-aos="fade-right">
          <h2 id="tent-included-heading" className="text-sm font-semibold tracking-tightish">
            What&apos;s included
          </h2>
          <ul className="mt-3 grid gap-3 text-sm leading-relaxed text-primary-dark opacity-80 md:grid-cols-2">
            <li>Framed, marquee, and stretch tent options sized to your guest count and layout.</li>
            <li>Site visit and load-in plan, including access, power, and ground conditions.</li>
            <li>Flooring, basic lighting, sidewalls, and weather contingencies where required.</li>
            <li>Coordination with your venue and other vendors on timing and placement.</li>
          </ul>
        </section>

        <section
          aria-labelledby="tent-process-heading"
          className="space-y-6 md:border-l md:border-teal-pale md:pl-8"
          data-aos="fade-left"
          data-aos-delay="120"
        >
          <div className="flex items-center gap-4">
            <TimelineConnector />
            <h2 id="tent-process-heading" className="text-sm font-semibold tracking-tightish">
              Process
            </h2>
          </div>
          <ol className="space-y-4 text-sm text-primary-dark opacity-80">
            <li>
              <div className="font-medium">1. Site and guest brief</div>
              <p className="mt-1 leading-relaxed">
                We review photos, measurements, and guest count to propose a tent footprint and orientation.
              </p>
            </li>
            <li>
              <div className="font-medium">2. Layout and clearances</div>
              <p className="mt-1 leading-relaxed">
                We map entrances, exits, catering routes, and technical needs before locking in dimensions.
              </p>
            </li>
            <li>
              <div className="font-medium">3. Install & handover</div>
              <p className="mt-1 leading-relaxed">
                Our crew installs, weights or stakes the structure, and walks the space with you or your planner.
              </p>
            </li>
          </ol>
        </section>
      </div>

      <section className="mt-12" aria-labelledby="tent-gallery-heading" data-aos="fade-up">
        <h2 id="tent-gallery-heading" className="text-sm font-semibold tracking-tightish">
          Recent layouts
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card overflow-hidden">
            <img 
              src="/src/assets/100tent.jpg" 
              alt="100 Guest Tent Setup" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src="/src/assets/stretchtent.jpg" 
              alt="Stretch Tent Display" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src="/src/assets/pagodatent.jpg" 
              alt="Pagoda Tent Setup" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Marketplace Products */}
      <ServiceProducts category="tents" />

      <div className="mt-10 border-t border-border pt-8" data-aos="fade-up" data-aos-delay="120">
        <ButtonLink to="/contact" variant="primary">
          Request tent pricing
        </ButtonLink>
      </div>
    </section>
  )
}


