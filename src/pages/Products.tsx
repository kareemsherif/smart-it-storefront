import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { ProductModal } from '@/components/ProductModal';
import { products, categories, brands, Product } from '@/data/products';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [selectedBrand, setSelectedBrand] = useState('الكل');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // تصفية وترتيب المنتجات
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'الكل' || product.category === selectedCategory;
      const matchesBrand = selectedBrand === 'الكل' || product.brand === selectedBrand;
      
      return matchesSearch && matchesCategory && matchesBrand;
    });

    // ترتيب المنتجات
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name, 'ar');
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedBrand, sortBy]);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('الكل');
    setSelectedBrand('الكل');
    setSortBy('name');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-slate-300 hover:text-indigo-400 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                العودة للرئيسية
              </button>
              <div className="h-6 w-px bg-slate-600"></div>
              <h1 className="text-2xl font-bold text-white">المنتجات</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-slate-400">
                {filteredAndSortedProducts.length} منتج
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* شريط البحث والفلاتر */}
      <section className="sticky top-[73px] z-30 bg-slate-800/80 backdrop-blur-sm border-b border-slate-700/50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* شريط البحث */}
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن المنتجات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-12 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none transition-colors"
              />
            </div>

            {/* أزرار العرض والفلاتر */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <SlidersHorizontal className="w-5 h-5" />
                فلاتر
              </button>
              
              <div className="flex border border-slate-600 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-indigo-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-colors ${
                    viewMode === 'list'
                      ? 'bg-indigo-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* فلاتر متقدمة */}
          <div className={`mt-4 grid lg:grid-cols-4 gap-4 transition-all duration-300 ${showFilters || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
            >
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
            >
              <option value="name">ترتيب حسب الاسم</option>
              <option value="price-low">السعر: من الأقل إلى الأعلى</option>
              <option value="price-high">السعر: من الأعلى إلى الأقل</option>
              <option value="rating">التقييم الأعلى</option>
            </select>

            <button
              onClick={clearFilters}
              className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Filter className="w-4 h-4" />
              مسح الفلاتر
            </button>
          </div>
        </div>
      </section>

      {/* المنتجات */}
      <main className="container mx-auto px-4 py-8">
        {filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-white mb-2">لم يتم العثور على منتجات</h2>
            <p className="text-slate-400 mb-6">جرب تغيير معايير البحث أو الفلاتر</p>
            <button
              onClick={clearFilters}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              مسح جميع الفلاتر
            </button>
          </div>
        ) : (
          <div
            className={`grid gap-8 ${
              viewMode === 'grid'
                ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}
          >
            {filteredAndSortedProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
      </main>

      {/* مودال تفاصيل المنتج */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Products;