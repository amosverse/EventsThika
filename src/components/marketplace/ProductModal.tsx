import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Star, ShoppingCart, Plus, Minus, Check } from 'lucide-react'
import { formatPrice } from '../../data/products'
import type { Product } from '../../data/products'
import { useCart } from '../../context/useCart'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  if (!product) return null

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem(product, quantity)
    setTimeout(() => {
      setIsAdding(false)
      setQuantity(1)
      onClose()
    }, 800)
  }

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-4xl md:w-full md:max-h-[90vh] bg-white dark:bg-[#1F2645] rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-[#1F2645]/90 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>

            <div className="flex flex-col md:flex-row h-full overflow-y-auto">
              {/* Image Section */}
              <div className="md:w-1/2 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#E55625] text-white text-sm font-semibold rounded-full uppercase tracking-wide">
                  {product.category}
                </div>
              </div>

              {/* Details Section */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
                {/* Title & Rating */}
                <div className="mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1F2645] dark:text-white mb-2">
                    {product.name}
                  </h2>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-[#1F2645] dark:text-white">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#E55625]">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {product.unit}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                {product.features && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#1F2645] dark:text-white mb-3 uppercase tracking-wide">
                      Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <Check className="w-4 h-4 text-[#4CAF50]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Spacer */}
                <div className="flex-1" />

                {/* Quantity & Add to Cart */}
                <div className="border-t border-gray-200 dark:border-white/10 pt-6 mt-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-semibold text-[#1F2645] dark:text-white">
                      Quantity:
                    </span>
                    <div className="flex items-center border border-gray-200 dark:border-white/20 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors rounded-l-lg"
                      >
                        <Minus className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      </button>
                      <span className="px-4 py-2 text-lg font-semibold text-[#1F2645] dark:text-white min-w-[60px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors rounded-r-lg"
                      >
                        <Plus className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      </button>
                    </div>
                    <span className="text-lg font-bold text-[#1F2645] dark:text-white ml-auto">
                      {formatPrice(product.price * quantity)}
                    </span>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    disabled={!product.available}
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      isAdding
                        ? 'bg-green-500 text-white'
                        : product.available
                        ? 'bg-[#E55625] hover:bg-[#d14a1f] text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isAdding ? (
                      <>
                        <Check className="w-6 h-6" />
                        Added to Cart!
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-6 h-6" />
                        Add to Cart
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
