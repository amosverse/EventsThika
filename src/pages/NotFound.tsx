import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function NotFound() {
  return (
    <section className="container-x py-16 md:py-24 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Image */}
          <div className="mb-8">
            <img 
              src={new URL('../assets/Error-404-Page-Not-Found.png', import.meta.url).href}
              alt="404 Page Not Found"
              className="w-full max-w-md mx-auto"
            />
          </div>

          <h2 className="font-display text-3xl md:text-4xl tracking-tightish text-text-primary mb-4">
            This page doesn't exist.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-text-secondary mb-8 max-w-2xl mx-auto">
            The link may be outdated, or the page has moved. Need help finding something specific?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="btn bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              Back to home
            </Link>
            <a 
              href="https://wa.me/254728288688?text=Hi!%20I%20couldn't%20find%20the%20page%20I%20was%20looking%20for.%20Can%20you%20help%20me%3F" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn--ghost px-8 py-3 rounded-xl font-semibold border-2 border-border hover:border-accent hover:text-accent transition-colors"
            >
              Contact us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
