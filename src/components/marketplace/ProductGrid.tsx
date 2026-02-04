import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, SlidersHorizontal, X, Star, Grid3X3, List } from 'lucide-react'
import { products, categories } from '../../data/products'
import type { Product } from '../../data/products'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'name'
type ViewMode = 'grid' | 'list'

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products]

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      )
    }

    // Filter by price range
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // 'featured' - keep original order
        break
    }

    return result
  }, [selectedCategory, searchQuery, sortBy, priceRange])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0F1629]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1F2645] to-[#2a3456] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#E55625] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              Event Rental <span className="text-[#E55625]">Marketplace</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Browse our extensive collection of premium event equipment. Tents, chairs, tables, décor, and more.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for tents, chairs, tables..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-xl text-[#1F2645] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E55625] text-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="sticky top-0 z-40 bg-white dark:bg-[#1F2645] border-b border-gray-200 dark:border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[#E55625] text-white'
                    : 'bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-300">
              <strong className="text-[#1F2645] dark:text-white">{filteredAndSortedProducts.length}</strong> products found
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                showFilters
                  ? 'border-[#E55625] bg-[#E55625]/10 text-[#E55625]'
                  : 'border-gray-200 dark:border-white/20 text-gray-700 dark:text-gray-300'
              } transition-colors`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Filters</span>
            </button>
            
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-lg text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E55625]"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name: A-Z</option>
            </select>
            
            {/* View Mode Toggle */}
            <div className="hidden md:flex items-center border border-gray-200 dark:border-white/20 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-[#E55625] text-white' : 'text-gray-600 dark:text-gray-300'}`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-[#E55625] text-white' : 'text-gray-600 dark:text-gray-300'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-6"
            >
              <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1F2645] dark:text-white mb-2">
                      Price Range (KES)
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        placeholder="Min"
                        className="w-full px-3 py-2 bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-lg text-[#1F2645] dark:text-white"
                      />
                      <span className="text-gray-400">-</span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        placeholder="Max"
                        className="w-full px-3 py-2 bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-lg text-[#1F2645] dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Rating Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1F2645] dark:text-white mb-2">
                      Minimum Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[4, 4.5, 4.8].map((rating) => (
                        <button
                          key={rating}
                          className="flex items-center gap-1 px-3 py-2 bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-lg hover:border-[#E55625] transition-colors"
                        >
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-[#1F2645] dark:text-white">{rating}+</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Reset */}
                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        setSelectedCategory('all')
                        setSearchQuery('')
                        setPriceRange([0, 100000])
                        setSortBy('featured')
                      }}
                      className="px-4 py-2 text-[#E55625] font-semibold hover:bg-[#E55625]/10 rounded-lg transition-colors"
                    >
                      Reset All Filters
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Products Grid */}
        {filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-[#1F2645] dark:text-white mb-2">
              No products found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all')
                setSearchQuery('')
                setPriceRange([0, 100000])
              }}
              className="px-6 py-2 bg-[#E55625] text-white rounded-lg font-semibold hover:bg-[#d14a1f] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'space-y-4'
            }
          >
            <AnimatePresence mode="popLayout">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={setSelectedProduct}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  )
}
