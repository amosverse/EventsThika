import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '../../context/useCart'
import { formatPrice } from '../../data/products'

export default function CartSidebar() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, getCartTotal, getItemCount } = useCart()

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-[#1F2645] shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-white/10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-[#E55625]" />
                <h2 className="text-xl font-bold text-[#1F2645] dark:text-white">
                  Your Cart
                </h2>
                <span className="px-2 py-0.5 bg-[#E55625] text-white text-sm font-semibold rounded-full">
                  {getItemCount()}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Start adding items to your rental order
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-2 bg-[#E55625] text-white rounded-lg font-semibold hover:bg-[#d14a1f] transition-colors"
                  >
                    Browse Products
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-xl"
                      >
                        {/* Image */}
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        
                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-[#1F2645] dark:text-white truncate">
                            {item.product.name}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {formatPrice(item.product.price)} {item.product.unit}
                          </p>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-200 dark:hover:bg-white/10 rounded transition-colors"
                            >
                              <Minus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                            </button>
                            <span className="text-sm font-semibold text-[#1F2645] dark:text-white min-w-[24px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-200 dark:hover:bg-white/10 rounded transition-colors"
                            >
                              <Plus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                            </button>
                            <button
                              onClick={() => removeItem(item.product.id)}
                              className="p-1 ml-auto text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Subtotal */}
                        <div className="text-right">
                          <span className="font-bold text-[#E55625]">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 dark:border-white/10 p-5 space-y-4">
                {/* Subtotal */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                  <span className="text-xl font-bold text-[#1F2645] dark:text-white">
                    {formatPrice(getCartTotal())}
                  </span>
                </div>
                
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Delivery and setup fees calculated at checkout
                </p>
                
                {/* WhatsApp Inquiry Button */}
                <a
                  href={`https://wa.me/254728288688?text=Hi!%20I'd%20like%20to%20inquire%20about%20renting%20the%20following%20items:%0A%0A${items.map(item => `${item.quantity}x%20${encodeURIComponent(item.product.name)}%20-%20${encodeURIComponent(formatPrice(item.product.price * item.quantity))}`).join('%0A')}%0A%0ATotal:%20${encodeURIComponent(formatPrice(getCartTotal()))}%0A%0ACan%20you%20provide%20more%20details%20about%20availability%20and%20booking%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#E55625] hover:bg-[#d14a1f] text-white font-bold rounded-xl transition-colors"
                >
                  Inquire on WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>
                
                {/* Continue Shopping */}
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3 border-2 border-[#1F2645] dark:border-white/30 text-[#1F2645] dark:text-white font-semibold rounded-xl hover:bg-[#1F2645] hover:text-white dark:hover:bg-white/10 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
