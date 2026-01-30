import { useState } from 'react'
import Masonry from 'react-masonry-css'
import { motion, AnimatePresence } from 'framer-motion'

type ImageItem = {
  id: number
  label: string
  type: 'Tents' | 'Decor' | 'Catering' | 'DJ & PA' | 'Chairs' | 'Full Production' | 'Weddings'
  image: string
}

const images: ImageItem[] = [
  // Tents
  { id: 1, label: '100 Guest Tent Setup', type: 'Tents', image: '/src/assets/100tent.jpg' },
  { id: 2, label: '100 Guest Tent Display', type: 'Tents', image: '/src/assets/100tentdisplay.jpg' },
  { id: 3, label: '50 Guest Tent', type: 'Tents', image: '/src/assets/50tent.jpg' },
  { id: 4, label: 'Dome Tent', type: 'Tents', image: '/src/assets/dometent.jpg' },
  { id: 5, label: 'Dome Tent Alternate', type: 'Tents', image: '/src/assets/Dometent2.jpg' },
  { id: 6, label: 'Gazebo Tent', type: 'Tents', image: '/src/assets/gazebotent.jpg' },
  { id: 7, label: 'Pagoda Tent', type: 'Tents', image: '/src/assets/pagodatent.jpg' },
  { id: 8, label: 'Pagoda Tent Alternate', type: 'Tents', image: '/src/assets/Pagodatent2.jpg' },
  { id: 9, label: 'Stretch Tent', type: 'Tents', image: '/src/assets/stretchtent.jpg' },
  
  // Decor
  { id: 10, label: 'Cultural Decor Setup', type: 'Decor', image: '/src/assets/culturedecor.jpg' },
  { id: 11, label: 'Elegant Decor', type: 'Decor', image: '/src/assets/decor.jpg' },
  { id: 12, label: 'Decor Setup 2', type: 'Decor', image: '/src/assets/decor2.jpg' },
  { id: 13, label: 'Decor Setup 3', type: 'Decor', image: '/src/assets/decor3.jpg' },
  { id: 14, label: 'Decor Setup 4', type: 'Decor', image: '/src/assets/decor4.jpg' },
  { id: 15, label: 'Decor Setup 5', type: 'Decor', image: '/src/assets/decor5.jpg' },
  { id: 16, label: 'Green Decor Theme', type: 'Decor', image: '/src/assets/greendecor.jpg' },
  { id: 17, label: 'Red Decor Theme', type: 'Decor', image: '/src/assets/reddocor.jpg' },
  { id: 18, label: 'Wedding Decor', type: 'Decor', image: '/src/assets/weddingdecor2.jpg' },
  { id: 19, label: 'Aesthetic Decor', type: 'Decor', image: '/src/assets/aesthetics.jpg' },
  { id: 20, label: 'Lighting Setup', type: 'Decor', image: '/src/assets/lights.jpg' },
  { id: 21, label: 'Lighting Setup 2', type: 'Decor', image: '/src/assets/lights2.jpg' },
  
  // Catering
  { id: 22, label: 'Catering Setup', type: 'Catering', image: '/src/assets/catering1.jpg' },
  { id: 23, label: 'Catering Display 2', type: 'Catering', image: '/src/assets/catering2.jpg' },
  { id: 24, label: 'Catering Spread', type: 'Catering', image: '/src/assets/catering3.jpg' },
  { id: 25, label: 'Catering Buffet', type: 'Catering', image: '/src/assets/catering4.jpg' },
  { id: 26, label: 'Traditional Catering', type: 'Catering', image: '/src/assets/traditionalcatering.jpg' },
  
  // DJ & PA
  { id: 27, label: 'DJ & PA Setup', type: 'DJ & PA', image: '/src/assets/Dj&PA.jpg' },
  { id: 28, label: 'DJ Setup', type: 'DJ & PA', image: '/src/assets/Dj1.jpg' },
  { id: 29, label: 'DJ Console', type: 'DJ & PA', image: '/src/assets/Dj2.jpg' },
  { id: 30, label: 'DJ Equipment', type: 'DJ & PA', image: '/src/assets/DJ3.jpg' },
  { id: 31, label: 'DJ Booth', type: 'DJ & PA', image: '/src/assets/DJ4.jpg' },
  { id: 32, label: 'PA System', type: 'DJ & PA', image: '/src/assets/PA.jpg' },
  { id: 33, label: 'PA System 2', type: 'DJ & PA', image: '/src/assets/PA2.jpg' },
  { id: 34, label: 'Stage Setup', type: 'DJ & PA', image: '/src/assets/stage.jpg' },
  
  // Chairs
  { id: 35, label: 'Chair Setup', type: 'Chairs', image: '/src/assets/chairs.jpg' },
  { id: 36, label: 'Chair Arrangement', type: 'Chairs', image: '/src/assets/chairs2.jpg' },
  { id: 37, label: 'Valley Chair Setup', type: 'Chairs', image: '/src/assets/chairvalley.jpg' },
  { id: 38, label: 'Valley Chair Arrangement', type: 'Chairs', image: '/src/assets/chairvalley2.jpg' },
  { id: 39, label: 'Plastic Chairs', type: 'Chairs', image: '/src/assets/plastic chairs.jpg' },
  { id: 40, label: 'Plastic Chairs 2', type: 'Chairs', image: '/src/assets/plasticchairs2.jpg' },
  { id: 41, label: 'Round Table Setup', type: 'Chairs', image: '/src/assets/roundtable.jpg' },
  { id: 42, label: 'Round Table Arrangement', type: 'Chairs', image: '/src/assets/roundtable2.jpg' },
  { id: 43, label: 'Sofa Seating', type: 'Chairs', image: '/src/assets/sofa.jpg' },
  { id: 44, label: 'Sofa Chair', type: 'Chairs', image: '/src/assets/sofachair.jpg' },
  
  // Full Production
  { id: 45, label: 'Full Production Event', type: 'Full Production', image: '/src/assets/full-prod.jpg' },
  { id: 46, label: 'Full Production Setup', type: 'Full Production', image: '/src/assets/fullprod.jpg' },
  { id: 47, label: 'Full Production Layout', type: 'Full Production', image: '/src/assets/fullprod3.jpg' },
  { id: 48, label: 'Graduation Party', type: 'Full Production', image: '/src/assets/graduation party.jpg' },
  
  // Weddings
  { id: 49, label: 'Cultural Wedding', type: 'Weddings', image: '/src/assets/culturewedding.jpg' },
  { id: 50, label: 'Wedding Ceremony', type: 'Weddings', image: '/src/assets/wedding.jpg' },
  { id: 51, label: 'Wedding Reception', type: 'Weddings', image: '/src/assets/wedding3.jpg' },
  { id: 52, label: 'Wedding Setup', type: 'Weddings', image: '/src/assets/wedding4.jpg' },
  { id: 53, label: 'Event Image', type: 'Weddings', image: '/src/assets/image2.jpg' },
]

const filters: Array<ImageItem['type'] | 'All'> = ['All', 'Tents', 'Decor', 'Catering', 'DJ & PA', 'Chairs', 'Full Production', 'Weddings']

const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  768: 2,
  640: 1,
}

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All')
  const [activeImage, setActiveImage] = useState<ImageItem | null>(null)

  const filtered = activeFilter === 'All' ? images : images.filter((i) => i.type === activeFilter)

  return (
    <section className="container-x py-16 md:py-24">
      <header className="max-w-3xl" data-aos="fade-up">
        <p className="eyebrow">Gallery</p>
        <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl">
          Our Portfolio of Events
          <br />
          & Services
        </h1>
        <p className="mt-5 text-base leading-relaxed text-gray-800">
          Explore our diverse range of event setups, from elegant tents and stunning decor to professional audio systems and complete event production. Each image showcases our commitment to quality and attention to detail.
        </p>
      </header>

      <div className="mt-8 flex flex-wrap items-center gap-3 text-xs" aria-label="Filter gallery by category">
        {filters.map((f) => {
          const selected = f === activeFilter
          return (
            <button
              key={f}
              type="button"
              className={[
                'rounded-full border px-3 py-1.5 transition text-sm font-medium',
                selected
                  ? 'border-accent bg-accent text-white shadow-sm'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-accent hover:bg-accent/5',
              ].join(' ')}
              onClick={() => setActiveFilter(f)}
              aria-pressed={selected}
            >
              {f}
            </button>
          )
        })}
      </div>

      <div className="mt-8" data-aos="fade-up" data-aos-delay="100">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 space-y-4"
        >
          {filtered.map((img) => (
            <motion.button
              key={img.id}
              type="button"
              className="group relative block w-full overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white"
              onClick={() => setActiveImage(img)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={img.image} 
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-3 text-sm">
                <span className="font-medium text-gray-900">{img.label}</span>
                <span className="rounded-full border border-gray-300 px-2.5 py-0.5 text-xs uppercase tracking-wider text-gray-600 bg-gray-50">
                  {img.type}
                </span>
              </div>
            </motion.button>
          ))}
        </Masonry>
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.label}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-white/90 backdrop-blur-sm p-2 text-gray-900 hover:bg-white transition-colors shadow-lg"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative w-full" style={{ maxHeight: 'calc(90vh - 120px)' }}>
                <img 
                  src={activeImage.image} 
                  alt={activeImage.label}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Info section */}
              <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-xs uppercase tracking-wider font-semibold mb-2">
                      {activeImage.type}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{activeImage.label}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}


