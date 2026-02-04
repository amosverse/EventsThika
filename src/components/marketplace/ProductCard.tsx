import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Star, Plus, Minus, Eye } from 'lucide-react'
import { formatPrice } from '../../data/products'
import type { Product } from '../../data/products'


interface ProductCardProps {
  product: Product
  onQuickView?: (product: Product) => void
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-[#1F2645]/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-white/10 group"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Quick View Button */}
        {onQuickView && (
          <button
            onClick={() => onQuickView(product)}
            className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-[#1F2645]/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#E55625] hover:text-white"
          >
            <Eye className="w-5 h-5" />
          </button>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-[#E55625] text-white text-xs font-semibold rounded-full uppercase tracking-wide">
          {product.category}
        </div>
        
        {/* Rating */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 bg-white/90 dark:bg-[#1F2645]/90 rounded-full">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold text-gray-800 dark:text-white">{product.rating}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">({product.reviews})</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#1F2645] dark:text-white mb-1 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        {product.features && (
          <div className="flex flex-wrap gap-1 mb-4">
            {product.features.slice(0, 2).map((feature, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-2xl font-bold text-[#E55625]">
            {formatPrice(product.price)}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {product.unit}
          </span>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-gray-200 dark:border-white/20 rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors rounded-l-lg"
            >
              <Minus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </button>
            <span className="px-3 py-1 text-sm font-semibold text-[#1F2645] dark:text-white min-w-[40px] text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors rounded-r-lg"
            >
              <Plus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
          
          <motion.a
            href={`https://wa.me/254728288688?text=Hi!%20I'm%20interested%20in%20renting%20${encodeURIComponent(product.name)}%20for%20my%20event.%20Can%20you%20provide%20more%20details%20about%20availability%20and%20pricing%3F`}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
              product.available
                ? 'bg-[#E55625] hover:bg-[#d14a1f] text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            Inquire on WhatsApp
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
