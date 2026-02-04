import { TimelineConnector } from '../../components/sections/TimelineConnector'
import { ButtonLink } from '../../components/common/buttons'
import ServiceProducts from '../../components/sections/ServiceProducts'

export function TentRentals() {
  return (
    <section className="container-x py-16 md:py-24 bg-white">
      <header className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end">
        <div>
          <p className="eyebrow text-[#E55625] font-bold">Services · Tent rentals</p>
          <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl text-[#1F2645] font-bold">Structure that feels intentional.</h1>
          <p className="mt-5 text-base leading-relaxed text-gray-900">
            We design tent layouts around sightlines, service routes, and the way your guests actually move through a
            space—not just the maximum capacity.
          </p>
        </div>
        <div className="card p-5 text-sm text-gray-900 border-teal-pale bg-teal-50">
          <div className="text-xs uppercase tracking-[0.14em] text-gray-700 font-semibold">Ideal for</div>
          <p className="mt-2 text-gray-900">Outdoor weddings, corporate dinners, ceremonies, and multi-day festivals.</p>
        </div>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-start">
        <section aria-labelledby="tent-included-heading">
          <h2 id="tent-included-heading" className="text-sm font-semibold tracking-tightish text-gray-900">
            What&apos;s included
          </h2>
          <ul className="mt-3 grid gap-3 text-sm leading-relaxed text-gray-900 md:grid-cols-2">
            <li>Framed, marquee, and stretch tent options sized to your guest count and layout.</li>
            <li>Site visit and load-in plan, including access, power, and ground conditions.</li>
            <li>Flooring, basic lighting, sidewalls, and weather contingencies where required.</li>
            <li>Coordination with your venue and other vendors on timing and placement.</li>
          </ul>
        </section>

        <section
          aria-labelledby="tent-process-heading"
          className="space-y-6 md:border-l md:border-teal-pale md:pl-8"
         
         
        >
          <div className="flex items-center gap-4">
            <TimelineConnector />
            <h2 id="tent-process-heading" className="text-sm font-semibold tracking-tightish text-gray-900">
              Process
            </h2>
          </div>
          <ol className="space-y-4 text-sm text-gray-900">
            <li>
              <div className="font-medium text-gray-900">1. Site and guest brief</div>
              <p className="mt-1 leading-relaxed text-gray-800">
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

      <section className="mt-12" aria-labelledby="tent-gallery-heading">
        <h2 id="tent-gallery-heading" className="text-sm font-semibold tracking-tightish text-gray-900">
          Recent layouts
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/100tent.jpg', import.meta.url).href}
              alt="100 Guest Tent Setup" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/stretchtent.jpg', import.meta.url).href}
              alt="Stretch Tent Display" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img 
              src={new URL('../../assets/pagodatent.jpg', import.meta.url).href}
              alt="Pagoda Tent Setup" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Marketplace Products */}
      <ServiceProducts category="tents" />

      <div className="mt-10 border-t border-border pt-8">
        <a href="https://wa.me/254728288688?text=Hi!%20I'm%20interested%20in%20tent%20rentals%20for%20my%20event.%20Could%20you%20please%20provide%20pricing%20information%20and%20availability%3F" target="_blank" rel="noopener noreferrer" className="btn bg-accent hover:bg-accent-hover text-white">
          Request tent pricing
        </a>
      </div>
    </section>
  )
}



