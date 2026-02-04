import { useState, useRef, useEffect } from 'react'
import Masonry from 'react-masonry-css'
import { motion, AnimatePresence } from 'framer-motion'

type ImageItem = {
  id: number
  label: string
  type: 'Tents' | 'Decor' | 'Catering' | 'DJ & PA' | 'Chairs' | 'Full Production' | 'Weddings'
  image: string
  height?: number
}

const images: ImageItem[] = [
  // Tents
  { id: 1, label: '100 Guest Tent Setup', type: 'Tents', image: new URL('../assets/100tent.jpg', import.meta.url).href, height: 300 },
  { id: 2, label: '100 Guest Tent Display', type: 'Tents', image: new URL('../assets/100tentdisplay.jpg', import.meta.url).href, height: 400 },
  { id: 3, label: '50 Guest Tent', type: 'Tents', image: new URL('../assets/50tent.jpg', import.meta.url).href, height: 350 },
  { id: 4, label: 'Dome Tent', type: 'Tents', image: new URL('../assets/dometent.jpg', import.meta.url).href, height: 320 },
  { id: 5, label: 'Dome Tent Alternate', type: 'Tents', image: new URL('../assets/Dometent2.jpg', import.meta.url).href, height: 380 },
  { id: 6, label: 'Gazebo Tent', type: 'Tents', image: new URL('../assets/gazebotent.jpg', import.meta.url).href, height: 340 },
  { id: 7, label: 'Pagoda Tent', type: 'Tents', image: new URL('../assets/pagodatent.jpg', import.meta.url).href, height: 360 },
  { id: 8, label: 'Pagoda Tent Alternate', type: 'Tents', image: new URL('../assets/Pagodatent2.jpg', import.meta.url).href, height: 310 },
  { id: 9, label: 'Stretch Tent', type: 'Tents', image: new URL('../assets/stretchtent.jpg', import.meta.url).href, height: 390 },
  
  // Decor
  { id: 10, label: 'Cultural Decor Setup', type: 'Decor', image: new URL('../assets/culturedecor.jpg', import.meta.url).href, height: 370 },
  { id: 11, label: 'Elegant Decor', type: 'Decor', image: new URL('../assets/decor.jpg', import.meta.url).href, height: 330 },
  { id: 12, label: 'Decor Setup 2', type: 'Decor', image: new URL('../assets/decor2.jpg', import.meta.url).href, height: 400 },
  { id: 13, label: 'Decor Setup 3', type: 'Decor', image: new URL('../assets/decor3.jpg', import.meta.url).href, height: 320 },
  { id: 14, label: 'Decor Setup 4', type: 'Decor', image: new URL('../assets/decor4.jpg', import.meta.url).href, height: 360 },
  { id: 15, label: 'Decor Setup 5', type: 'Decor', image: new URL('../assets/decor5.jpg', import.meta.url).href, height: 340 },
  { id: 16, label: 'Green Decor Theme', type: 'Decor', image: new URL('../assets/greendecor.jpg', import.meta.url).href, height: 380 },
  { id: 17, label: 'Red Decor Theme', type: 'Decor', image: new URL('../assets/reddocor.jpg', import.meta.url).href, height: 310 },
  { id: 18, label: 'Wedding Decor', type: 'Decor', image: new URL('../assets/weddingdecor2.jpg', import.meta.url).href, height: 350 },
  { id: 19, label: 'Aesthetic Decor', type: 'Decor', image: new URL('../assets/aesthetics.jpg', import.meta.url).href, height: 390 },
  { id: 20, label: 'Lighting Setup', type: 'Decor', image: new URL('../assets/lights.jpg', import.meta.url).href, height: 320 },
  { id: 21, label: 'Lighting Setup 2', type: 'Decor', image: new URL('../assets/lights2.jpg', import.meta.url).href, height: 360 },
  
  // Catering
  { id: 22, label: 'Catering Setup', type: 'Catering', image: new URL('../assets/catering1.jpg', import.meta.url).href, height: 340 },
  { id: 23, label: 'Catering Display 2', type: 'Catering', image: new URL('../assets/catering2.jpg', import.meta.url).href, height: 370 },
  { id: 24, label: 'Catering Spread', type: 'Catering', image: new URL('../assets/catering3.jpg', import.meta.url).href, height: 310 },
  { id: 25, label: 'Catering Buffet', type: 'Catering', image: new URL('../assets/catering4.jpg', import.meta.url).href, height: 390 },
  { id: 26, label: 'Traditional Catering', type: 'Catering', image: new URL('../assets/traditionalcatering.jpg', import.meta.url).href, height: 330 },
  
  // DJ & PA
  { id: 27, label: 'DJ & PA Setup', type: 'DJ & PA', image: new URL('../assets/Dj&PA.jpg', import.meta.url).href, height: 350 },
  { id: 28, label: 'DJ Setup', type: 'DJ & PA', image: new URL('../assets/Dj1.jpg', import.meta.url).href, height: 380 },
  { id: 29, label: 'DJ Console', type: 'DJ & PA', image: new URL('../assets/Dj2.jpg', import.meta.url).href, height: 320 },
  { id: 30, label: 'DJ Equipment', type: 'DJ & PA', image: new URL('../assets/DJ3.jpg', import.meta.url).href, height: 360 },
  { id: 31, label: 'DJ Booth', type: 'DJ & PA', image: new URL('../assets/DJ4.jpg', import.meta.url).href, height: 340 },
  { id: 32, label: 'PA System', type: 'DJ & PA', image: new URL('../assets/PA.jpg', import.meta.url).href, height: 310 },
  { id: 33, label: 'PA System 2', type: 'DJ & PA', image: new URL('../assets/PA2.jpg', import.meta.url).href, height: 400 },
  { id: 34, label: 'Stage Setup', type: 'DJ & PA', image: new URL('../assets/stage.jpg', import.meta.url).href, height: 330 },
  
  // Chairs
  { id: 35, label: 'Chair Setup', type: 'Chairs', image: new URL('../assets/chairs.jpg', import.meta.url).href, height: 370 },
  { id: 36, label: 'Chair Arrangement', type: 'Chairs', image: new URL('../assets/chairs2.jpg', import.meta.url).href, height: 310 },
  { id: 37, label: 'Valley Chair Setup', type: 'Chairs', image: new URL('../assets/chairvalley.jpg', import.meta.url).href, height: 350 },
  { id: 38, label: 'Valley Chair Arrangement', type: 'Chairs', image: new URL('../assets/chairvalley2.jpg', import.meta.url).href, height: 390 },
  { id: 39, label: 'Plastic Chairs', type: 'Chairs', image: new URL('../assets/plastic chairs.jpg', import.meta.url).href, height: 320 },
  { id: 40, label: 'Plastic Chairs 2', type: 'Chairs', image: new URL('../assets/plasticchairs2.jpg', import.meta.url).href, height: 360 },
  { id: 41, label: 'Round Table Setup', type: 'Chairs', image: new URL('../assets/roundtable.jpg', import.meta.url).href, height: 340 },
  { id: 42, label: 'Round Table Arrangement', type: 'Chairs', image: new URL('../assets/roundtable2.jpg', import.meta.url).href, height: 380 },
  { id: 43, label: 'Sofa Seating', type: 'Chairs', image: new URL('../assets/sofa.jpg', import.meta.url).href, height: 310 },
  { id: 44, label: 'Sofa Chair', type: 'Chairs', image: new URL('../assets/sofachair.jpg', import.meta.url).href, height: 400 },
  
  // Full Production
  { id: 45, label: 'Full Production Event', type: 'Full Production', image: new URL('../assets/full-prod.jpg', import.meta.url).href, height: 330 },
  { id: 46, label: 'Full Production Setup', type: 'Full Production', image: new URL('../assets/fullprod.jpg', import.meta.url).href, height: 370 },
  { id: 47, label: 'Full Production Layout', type: 'Full Production', image: new URL('../assets/fullprod3.jpg', import.meta.url).href, height: 350 },
  { id: 48, label: 'Graduation Party', type: 'Full Production', image: new URL('../assets/graduation party.jpg', import.meta.url).href, height: 390 },
  
  // Weddings
  { id: 49, label: 'Cultural Wedding', type: 'Weddings', image: new URL('../assets/culturewedding.jpg', import.meta.url).href, height: 320 },
  { id: 50, label: 'Wedding Ceremony', type: 'Weddings', image: new URL('../assets/wedding.jpg', import.meta.url).href, height: 360 },
  { id: 51, label: 'Wedding Reception', type: 'Weddings', image: new URL('../assets/wedding3.jpg', import.meta.url).href, height: 340 },
  { id: 52, label: 'Wedding Setup', type: 'Weddings', image: new URL('../assets/wedding4.jpg', import.meta.url).href, height: 380 },
  { id: 53, label: 'Event Image', type: 'Weddings', image: new URL('../assets/image2.jpg', import.meta.url).href, height: 310 },
]

const filters: Array<ImageItem['type'] | 'All'> = ['All', 'Tents', 'Decor', 'Catering', 'DJ & PA', 'Chairs', 'Full Production', 'Weddings']

const breakpointColumnsObj = {
  default: 5,      // 5 columns on very large screens (1537px+)
  1536: 4,         // 4 columns on extra large screens (1280-1536px)
  1280: 4,         // 4 columns on large screens (1024-1280px)
  1024: 3,         // 3 columns on desktop/tablet landscape (768-1024px)
  768: 2,          // 2 columns on tablet portrait (640-768px)
  640: 2,          // 2 columns on mobile landscape (475-640px)
  475: 2,          // 2 columns on larger mobile (375-475px)
  0: 1,            // 1 column on very small mobile (0-375px)
}

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All')
  const [activeImage, setActiveImage] = useState<ImageItem | null>(null)
  const [displayCount, setDisplayCount] = useState(20)
  const [savedItems, setSavedItems] = useState<Set<number>>(new Set())
  const [searchQuery, setSearchQuery] = useState('')
  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  const filtered = images.filter((img) => {
    const matchesFilter = activeFilter === 'All' || img.type === activeFilter
    const matchesSearch = searchQuery === '' || 
      img.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.type.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })
  
  const displayed = filtered.slice(0, displayCount)

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayed.length < filtered.length) {
          setDisplayCount((prev) => prev + 10)
        }
      },
      { threshold: 0.5 }
    )

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current)
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [displayed.length, filtered.length])

  const toggleSave = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setSavedItems((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <section className="container-x py-16 md:py-24">
      <header className="max-w-3xl" style={{ opacity: 1, visibility: 'visible' }}>
        <p className="eyebrow" style={{ color: '#E55625', fontWeight: '600' }}>Gallery</p>
        <h1 className="mt-4 font-display text-4xl tracking-tightish md:text-5xl" style={{ color: '#1F2645' }}>
          Our Portfolio of Events<br />& Services
        </h1>
        <p className="mt-5 text-base leading-relaxed" style={{ color: '#1F2645' }}>
          Explore our diverse range of event setups, from elegant tents and stunning decor to professional audio systems and complete event production.
        </p>
      </header>

      <div className="mt-8 max-w-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search gallery by name or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-2xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-gray-900 placeholder-gray-500"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {searchQuery && (
            <button type="button" onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Clear search">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3" aria-label="Filter gallery by category">
        {filters.map((f) => {
          const selected = f === activeFilter
          return (
            <button
              key={f}
              type="button"
              className={[
                'rounded-full border px-3 py-1.5 transition text-sm font-medium',
                selected ? 'border-accent bg-accent text-white shadow-sm' : 'border-gray-300 bg-white text-gray-700 hover:border-accent hover:bg-accent/5',
              ].join(' ')}
              onClick={() => setActiveFilter(f)}
              aria-pressed={selected}
            >
              {f}
            </button>
          )
        })}
      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
        <p>
          Showing <span className="font-semibold text-gray-900">{displayed.length}</span> of <span className="font-semibold text-gray-900">{filtered.length}</span> items
          {searchQuery && <span className="ml-1">matching "{searchQuery}"</span>}
        </p>
        {savedItems.size > 0 && (
          <p className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="font-semibold text-gray-900">{savedItems.size}</span> saved
          </p>
        )}
      </div>

      <div className="mt-8" style={{ opacity: 1, visibility: 'visible' }}>
        <Masonry 
          breakpointCols={breakpointColumnsObj} 
          className="flex w-auto -ml-2 sm:-ml-3 md:-ml-4" 
          columnClassName="pl-2 sm:pl-3 md:pl-4 bg-clip-padding"
        >
          {displayed.map((img) => {
            const isSaved = savedItems.has(img.id)
            const imageHeight = img.height || 320

            return (
              <motion.div 
                key={img.id} 
                className="group relative mb-2 sm:mb-3 md:mb-4 cursor-pointer" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.4 }}
              >
                <motion.button
                  type="button"
                  className="relative block w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 bg-white"
                  onClick={() => setActiveImage(img)}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <div className="relative overflow-hidden bg-gray-100" style={{ height: `${imageHeight}px` }}>
                    <img src={img.image} alt={img.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex justify-end gap-1.5 sm:gap-2">
                        <button
                          type="button"
                          onClick={(e) => toggleSave(img.id, e)}
                          className={['p-1.5 sm:p-2 rounded-full backdrop-blur-md transition-all duration-200', isSaved ? 'bg-red-500 text-white shadow-lg scale-110' : 'bg-white/90 text-gray-900 hover:bg-white hover:scale-110'].join(' ')}
                          aria-label={isSaved ? 'Remove from saved' : 'Save to collection'}
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill={isSaved ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            if (navigator.share) {
                              navigator.share({ title: img.label, text: `Check out this ${img.type} from our gallery`, url: window.location.href })
                            }
                          }}
                          className="p-1.5 sm:p-2 rounded-full bg-white/90 backdrop-blur-md text-gray-900 hover:bg-white hover:scale-110 transition-all duration-200"
                          aria-label="Share image"
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                        </button>
                      </div>
                      <div className="text-left">
                        <h3 className="text-white font-semibold text-sm sm:text-base mb-1 drop-shadow-lg line-clamp-2">{img.label}</h3>
                        <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-gray-900">{img.type}</span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            )
          })}
        </Masonry>

        {displayed.length < filtered.length && (
          <div ref={loadMoreRef} className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-gray-500">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-sm font-medium">Loading more...</span>
            </div>
          </div>
        )}

        {displayed.length === filtered.length && filtered.length > 20 && (
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">You've reached the end of the gallery</p>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="mt-12 text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="mt-4 text-gray-500 text-lg">No images found matching your search</p>
            <button type="button" onClick={() => { setSearchQuery(''); setActiveFilter('All') }} className="mt-4 px-4 py-2 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors">
              Clear filters
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label={activeImage.label} onClick={() => setActiveImage(null)}>
            <motion.div className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeOut' }} onClick={(e) => e.stopPropagation()}>
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); toggleSave(activeImage.id, e) }}
                  className={['rounded-full backdrop-blur-sm p-2.5 transition-all shadow-lg', savedItems.has(activeImage.id) ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-900 hover:bg-white'].join(' ')}
                  aria-label="Save image"
                >
                  <svg className="w-5 h-5" fill={savedItems.has(activeImage.id) ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button type="button" onClick={() => setActiveImage(null)} className="rounded-full bg-white/90 backdrop-blur-sm p-2.5 text-gray-900 hover:bg-white transition-colors shadow-lg" aria-label="Close modal">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="relative w-full" style={{ maxHeight: 'calc(90vh - 120px)' }}>
                <img src={activeImage.image} alt={activeImage.label} className="w-full h-full object-contain" />
              </div>
              <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-xs uppercase tracking-wider font-semibold mb-2">{activeImage.type}</span>
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





