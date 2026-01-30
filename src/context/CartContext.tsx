import { createContext, useState, useEffect, type ReactNode } from 'react'
import type { Product } from '../data/products'

export interface CartItem {
  product: Product
  quantity: number
  eventDate?: string
  notes?: string
}

export interface CustomerInfo {
  name: string
  email: string
  phone: string
  eventType: string
  eventDate: string
  eventVenue: string
  additionalNotes: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getItemCount: () => number
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  customerInfo: CustomerInfo | null
  setCustomerInfo: (info: CustomerInfo) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = 'event-solutions-cart'
const CUSTOMER_STORAGE_KEY = 'event-solutions-customer'

// Helper function to get initial cart from localStorage
function getInitialCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  const saved = localStorage.getItem(CART_STORAGE_KEY)
  if (saved) {
    try {
      return JSON.parse(saved)
    } catch {
      return []
    }
  }
  return []
}

// Helper function to get initial customer info from localStorage
function getInitialCustomer(): CustomerInfo | null {
  if (typeof window === 'undefined') return null
  const saved = localStorage.getItem(CUSTOMER_STORAGE_KEY)
  if (saved) {
    try {
      return JSON.parse(saved)
    } catch {
      return null
    }
  }
  return null
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(getInitialCart)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [customerInfo, setCustomerInfoState] = useState<CustomerInfo | null>(getInitialCustomer)

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product: Product, quantity: number = 1) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.product.id === product.id)
      
      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      
      return [...currentItems, { product, quantity }]
    })
    setIsCartOpen(true)
  }

  const removeItem = (productId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }
    
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
    localStorage.removeItem(CART_STORAGE_KEY)
  }

  const getCartTotal = () => {
    return items.reduce((total, item) => total + item.product.price * item.quantity, 0)
  }

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0)
  }

  const setCustomerInfo = (info: CustomerInfo) => {
    setCustomerInfoState(info)
    localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(info))
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getCartTotal,
        getItemCount,
        isCartOpen,
        setIsCartOpen,
        customerInfo,
        setCustomerInfo,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Export context for useCart hook
export { CartContext }
