import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft, 
  CreditCard, 
  Smartphone, 
  Check, 
  ChevronRight,
  Package,
  User,
  MapPin,
  Calendar,
  Mail,
  Phone,
  FileText,
  ShieldCheck,
  Loader2
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/useCart'
import { formatPrice } from '../data/products'
import type { CartItem } from '../context/CartContext'

type Step = 'details' | 'payment' | 'confirmation'
type PaymentMethod = 'card' | 'mpesa' | null

export default function Checkout() {
  const navigate = useNavigate()
  const { items, getCartTotal, clearCart, customerInfo, setCustomerInfo } = useCart()
  const [currentStep, setCurrentStep] = useState<Step>('details')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')
  
  const [formData, setFormData] = useState({
    name: customerInfo?.name || '',
    email: customerInfo?.email || '',
    phone: customerInfo?.phone || '',
    eventType: customerInfo?.eventType || '',
    eventDate: customerInfo?.eventDate || '',
    eventVenue: customerInfo?.eventVenue || '',
    additionalNotes: customerInfo?.additionalNotes || '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const deliveryFee = 2500
  const setupFee = 5000
  const subtotal = getCartTotal()
  const total = subtotal + deliveryFee + setupFee

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!/^(\+254|0)[17]\d{8}$/.test(formData.phone.replace(/\s/g, ''))) 
      newErrors.phone = 'Invalid Kenyan phone number'
    if (!formData.eventType.trim()) newErrors.eventType = 'Event type is required'
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required'
    if (!formData.eventVenue.trim()) newErrors.eventVenue = 'Venue is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleContinueToPayment = () => {
    if (validateForm()) {
      setCustomerInfo(formData)
      
      // Build WhatsApp message with cart details
      const itemsList = items.map((item, idx) => 
        `${idx + 1}. ${item.product.name} (x${item.quantity}) - ${formatPrice(item.product.price * item.quantity)}`
      ).join('%0A')
      
      const message = `Hi! I'd like to enquire about renting the following items:%0A%0A${itemsList}%0A%0ASubtotal: ${formatPrice(subtotal)}%0ADelivery: ${formatPrice(deliveryFee)}%0ASetup Fee: ${formatPrice(setupFee)}%0ATotal: ${formatPrice(total)}%0A%0AEvent Details:%0AName: ${formData.name}%0AEvent Type: ${formData.eventType}%0AEvent Date: ${formData.eventDate}%0AVenue: ${formData.eventVenue}%0APhone: ${formData.phone}%0AEmail: ${formData.email}${formData.additionalNotes ? '%0A%0AAdditional Notes:%0A' + formData.additionalNotes : ''}`
      
      // Open WhatsApp
      window.open(`https://wa.me/254728288688?text=${message}`, '_blank')
      
      // Show confirmation
      setCurrentStep('confirmation')
    }
  }

  const handlePayment = async () => {
    if (!paymentMethod) return
    
    setIsProcessing(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Generate order number
    const orderNum = `EST-${Date.now().toString(36).toUpperCase()}`
    setOrderNumber(orderNum)
    
    // Clear cart and move to confirmation
    setIsProcessing(false)
    setCurrentStep('confirmation')
    
    // In real implementation, this would:
    // 1. Process payment via Stripe/M-Pesa API
    // 2. Send order confirmation email
    // 3. Create order in database
  }

  const handleConfirmOrder = () => {
    clearCart()
    navigate('/')
  }

  if (items.length === 0 && currentStep !== 'confirmation') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#0F1629] flex items-center justify-center p-4">
        <div className="text-center">
          <Package className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#1F2645] dark:text-white mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Add some items before checking out
          </p>
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E55625] text-white font-semibold rounded-xl hover:bg-[#d14a1f] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Browse Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0F1629]">
      {/* Header */}
      <header className="bg-white dark:bg-[#1F2645] border-b border-gray-200 dark:border-white/10 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/marketplace"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#E55625] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Marketplace</span>
            </Link>
            
            {/* Progress Steps */}
            <div className="flex items-center gap-2">
              {['details', 'payment', 'confirmation'].map((step, idx) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      currentStep === step
                        ? 'bg-[#E55625] text-white'
                        : ['details', 'payment', 'confirmation'].indexOf(currentStep) > idx
                        ? 'bg-[#4CAF50] text-white'
                        : 'bg-gray-200 dark:bg-white/10 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {['details', 'payment', 'confirmation'].indexOf(currentStep) > idx ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      idx + 1
                    )}
                  </div>
                  {idx < 2 && (
                    <ChevronRight className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-1" />
                  )}
                </div>
              ))}
            </div>
            
            <div className="w-24" />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {/* Step 1: Details */}
              {currentStep === 'details' && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-[#1F2645]/50 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-white/10"
                >
                  <h2 className="text-2xl font-bold text-[#1F2645] dark:text-white mb-6 flex items-center gap-3">
                    <User className="w-7 h-7 text-[#E55625]" />
                    Event Details
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1F2645] dark:text-white mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-white/5 border ${
                            errors.name ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                          } rounded-xl text-[#1F2645] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E55625]`}
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1F2645] dark:text-white mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-white/5 border ${
                            errors.email ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                          } rounded-xl text-[#1F2645] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E55625]`}
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1F2645] dark:text-white mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="0712 345 678"
                          className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-white/5 border ${
                            errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                          } rounded-xl text-[#1F2645] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E55625]`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    {/* Event Type */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1F2645] dark:text-white mb-2">
                        Event Type *
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border ${
                          errors.eventType ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                        } rounded-xl text-[#1F2645] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E55625]`}
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="graduation">Graduation</option>
                        <option value="funeral">Funeral</option>
                        <option value="conference">Conference</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
                    </div>

                    {/* Event Date */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1F2645] dark:text-white mb-2">
                        Event Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-white/5 border ${
                            errors.eventDate ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                          } rounded-xl text-[#1F2645] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E55625]`}
                        />
                      </div>
                      {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>}
                    </div>

                    {/* Venue */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1F2645] dark:text-white mb-2">
                        Event Venue *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="eventVenue"
                          value={formData.eventVenue}
                          onChange={handleInputChange}
                          placeholder="e.g., Blue Post Hotel, Thika"
                          className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-white/5 border ${
                            errors.eventVenue ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                          } rounded-xl text-[#1F2645] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E55625]`}
                        />
                      </div>
                      {errors.eventVenue && <p className="text-red-500 text-sm mt-1">{errors.eventVenue}</p>}
                    </div>

                    {/* Additional Notes */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-[#1F2645] dark:text-white mb-2">
                        Additional Notes
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <textarea
                          name="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={handleInputChange}
                          placeholder="Any special requirements, color themes, or setup instructions..."
                          rows={4}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-[#1F2645] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E55625] resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleContinueToPayment}
                    className="w-full mt-8 flex items-center justify-center gap-2 py-4 bg-[#25D366] hover:bg-[#1faa52] text-white font-bold text-lg rounded-xl transition-colors"
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      className="w-6 h-6"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Enquire on WhatsApp
                  </button>
                </motion.div>
              )}

              {/* Step 2: Payment */}
              {currentStep === 'payment' && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-[#1F2645]/50 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-white/10"
                >
                  <h2 className="text-2xl font-bold text-[#1F2645] dark:text-white mb-6 flex items-center gap-3">
                    <CreditCard className="w-7 h-7 text-[#E55625]" />
                    Payment Method
                  </h2>

                  <div className="space-y-4 mb-8">
                    {/* Card Payment */}
                    <button
                      onClick={() => setPaymentMethod('card')}
                      className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                        paymentMethod === 'card'
                          ? 'border-[#E55625] bg-[#E55625]/5'
                          : 'border-gray-200 dark:border-white/10 hover:border-[#E55625]/50'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        paymentMethod === 'card' ? 'bg-[#E55625] text-white' : 'bg-gray-100 dark:bg-white/10'
                      }`}>
                        <CreditCard className="w-6 h-6" />
                      </div>
                      <div className="text-left flex-1">
                        <h3 className="font-bold text-[#1F2645] dark:text-white">
                          Card Payment (Stripe)
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Visa, Mastercard, American Express
                        </p>
                      </div>
                      {paymentMethod === 'card' && (
                        <Check className="w-6 h-6 text-[#E55625]" />
                      )}
                    </button>

                    {/* M-Pesa Payment */}
                    <button
                      onClick={() => setPaymentMethod('mpesa')}
                      className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                        paymentMethod === 'mpesa'
                          ? 'border-[#4CAF50] bg-[#4CAF50]/5'
                          : 'border-gray-200 dark:border-white/10 hover:border-[#4CAF50]/50'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        paymentMethod === 'mpesa' ? 'bg-[#4CAF50] text-white' : 'bg-gray-100 dark:bg-white/10'
                      }`}>
                        <Smartphone className="w-6 h-6" />
                      </div>
                      <div className="text-left flex-1">
                        <h3 className="font-bold text-[#1F2645] dark:text-white">
                          M-Pesa (Lipa Na M-Pesa)
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Pay via STK Push to your phone
                        </p>
                      </div>
                      {paymentMethod === 'mpesa' && (
                        <Check className="w-6 h-6 text-[#4CAF50]" />
                      )}
                    </button>
                  </div>

                  {/* Payment Form based on selection */}
                  <AnimatePresence mode="wait">
                    {paymentMethod === 'card' && (
                      <motion.div
                        key="card-form"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 mb-8 p-4 bg-gray-50 dark:bg-white/5 rounded-xl"
                      >
                        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#4CAF50]" />
                          Demo Mode - No actual payment will be processed
                        </p>
                        <div>
                          <label className="block text-sm font-semibold text-[#1F2645] dark:text-white mb-2">
                            Card Number
                          </label>
                          <input
                            type="text"
                            placeholder="4242 4242 4242 4242"
                            className="w-full px-4 py-3 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-xl text-[#1F2645] dark:text-white placeholder-gray-400"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-[#1F2645] dark:text-white mb-2">
                              Expiry
                            </label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-full px-4 py-3 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-xl text-[#1F2645] dark:text-white placeholder-gray-400"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-[#1F2645] dark:text-white mb-2">
                              CVC
                            </label>
                            <input
                              type="text"
                              placeholder="123"
                              className="w-full px-4 py-3 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-xl text-[#1F2645] dark:text-white placeholder-gray-400"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {paymentMethod === 'mpesa' && (
                      <motion.div
                        key="mpesa-form"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 mb-8 p-4 bg-gray-50 dark:bg-white/5 rounded-xl"
                      >
                        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#4CAF50]" />
                          Demo Mode - STK Push simulation
                        </p>
                        <div>
                          <label className="block text-sm font-semibold text-[#1F2645] dark:text-white mb-2">
                            M-Pesa Phone Number
                          </label>
                          <input
                            type="tel"
                            defaultValue={formData.phone}
                            placeholder="0712 345 678"
                            className="w-full px-4 py-3 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-xl text-[#1F2645] dark:text-white placeholder-gray-400"
                          />
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          You will receive an STK push prompt on your phone to complete the payment
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setCurrentStep('details')}
                      className="flex-1 py-4 border-2 border-gray-200 dark:border-white/20 text-[#1F2645] dark:text-white font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handlePayment}
                      disabled={!paymentMethod || isProcessing}
                      className={`flex-1 flex items-center justify-center gap-2 py-4 font-bold text-lg rounded-xl transition-colors ${
                        paymentMethod && !isProcessing
                          ? 'bg-[#E55625] hover:bg-[#d14a1f] text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Pay {formatPrice(total)}
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Confirmation */}
              {currentStep === 'confirmation' && (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white dark:bg-[#1F2645]/50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-white/10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </motion.div>

                  <h2 className="text-3xl font-bold text-[#1F2645] dark:text-white mb-4">
                    Enquiry Sent!
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Your order details have been sent via WhatsApp. Our team will contact you shortly to confirm availability and finalize your rental.
                  </p>

                  <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 mb-8">
                    <h3 className="font-bold text-[#1F2645] dark:text-white mb-4">
                      What's Next?
                    </h3>
                    <ul className="text-left space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#25D366] mt-0.5 flex-shrink-0" />
                        <span>Our team will review your enquiry on WhatsApp</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#25D366] mt-0.5 flex-shrink-0" />
                        <span>We'll confirm item availability for your event date</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#25D366] mt-0.5 flex-shrink-0" />
                        <span>Payment and delivery details will be discussed via WhatsApp</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={handleConfirmOrder}
                    className="w-full py-4 bg-[#E55625] hover:bg-[#d14a1f] text-white font-bold text-lg rounded-xl transition-colors"
                  >
                    Continue Shopping
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Order Summary Sidebar */}
          {currentStep !== 'confirmation' && (
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-[#1F2645]/50 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-white/10 sticky top-24">
                <h3 className="text-lg font-bold text-[#1F2645] dark:text-white mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-[#E55625]" />
                  Order Summary
                </h3>

                {/* Items */}
                <div className="space-y-3 max-h-60 overflow-y-auto mb-4">
                  {items.map((item: CartItem) => (
                    <div key={item.product.id} className="flex items-center gap-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#1F2645] dark:text-white truncate">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-[#1F2645] dark:text-white">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="border-t border-gray-200 dark:border-white/10 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                    <span className="text-[#1F2645] dark:text-white">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Delivery</span>
                    <span className="text-[#1F2645] dark:text-white">{formatPrice(deliveryFee)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Setup Fee</span>
                    <span className="text-[#1F2645] dark:text-white">{formatPrice(setupFee)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200 dark:border-white/10">
                    <span className="text-[#1F2645] dark:text-white">Total</span>
                    <span className="text-[#E55625]">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
