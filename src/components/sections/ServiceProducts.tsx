import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { products } from '../../data/products'
import type { Product } from '../../data/products'
import ProductCard from '../marketplace/ProductCard'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ServiceProductsProps {
  category: Product['category']
  title?: string
  maxItems?: number
}

export default function ServiceProducts({ category, title, maxItems = 8 }: ServiceProductsProps) {
  const filteredProducts = useMemo(() => {
    const categoryProducts = products.filter((p) => p.category === category)
    return maxItems ? categoryProducts.slice(0, maxItems) : categoryProducts
  }, [category, maxItems])

  const categoryTitles: Record<Product['category'], string> = {
    tents: 'Browse Our Tent Collection',
    chairs: 'Chair & Seating Options',
    tables: 'Table Rentals',
    lighting: 'Lighting Solutions',
    sound: 'Sound & DJ Equipment',
    decor: 'Décor & Styling Items',
    catering: 'Catering Equipment',
  }

  if (filteredProducts.length === 0) return null

  return (
    <section className="mt-16 pt-12 border-t border-border" data-aos="fade-up">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-display font-bold text-[#1F2645] tracking-tightish">
            {title || categoryTitles[category]}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Add items directly to your cart and checkout when ready
          </p>
        </div>
        <Link
          to={`/marketplace?category=${category}`}
          className="hidden md:flex items-center gap-2 text-[#E55625] font-semibold hover:underline"
        >
          View all {category}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8 text-center md:hidden">
        <Link
          to={`/marketplace?category=${category}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#E55625] text-white font-semibold rounded-xl hover:bg-[#d14a1f] transition-colors"
        >
          View all {category}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
