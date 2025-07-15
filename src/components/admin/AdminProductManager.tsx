import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Search, Filter, Package } from 'lucide-react';
import { products as initialProducts, Product, categories, brands } from '@/data/products';
import { ProductFormModal } from './ProductFormModal';

export const AdminProductManager = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [selectedBrand, setSelectedBrand] = useState('الكل');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalMode, setModalMode] = useState<'add' | 'edit' | 'view'>('add');

  // تصفية المنتجات
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'الكل' || product.brand === selectedBrand;
    
    return matchesSearch && matchesCategory && matchesBrand;
  });

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setModalMode('add');
    setIsModalOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setModalMode('edit');
    setIsModalOpen(true);
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setModalMode('view');
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (productId: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  const handleSaveProduct = (product: Product) => {
    if (modalMode === 'add') {
      setProducts([...products, { ...product, id: Date.now().toString() }]);
    } else if (modalMode === 'edit') {
      setProducts(products.map(p => p.id === product.id ? product : p));
    }
    setIsModalOpen(false);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('الكل');
    setSelectedBrand('الكل');
  };

  return (
    <div className="space-y-6">
      {/* عنوان القسم */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">إدارة المنتجات</h2>
          <p className="text-slate-400">إضافة وتعديل وحذف المنتجات</p>
        </div>
        <button
          onClick={handleAddProduct}
          className="bg-gradient-to-r from-indigo-500 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          إضافة منتج جديد
        </button>
      </div>

      {/* شريط البحث والفلاتر */}
      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن المنتجات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-12 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:outline-none"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:outline-none"
          >
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-slate-400">
            عرض {filteredProducts.length} من {products.length} منتج
          </p>
          
          <button
            onClick={clearFilters}
            className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 text-sm"
          >
            <Filter className="w-4 h-4" />
            مسح الفلاتر
          </button>
        </div>
      </div>

      {/* جدول المنتجات */}
      <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-700">
              <tr>
                <th className="text-right px-6 py-4 text-white font-semibold">المنتج</th>
                <th className="text-right px-6 py-4 text-white font-semibold">الفئة</th>
                <th className="text-right px-6 py-4 text-white font-semibold">العلامة التجارية</th>
                <th className="text-right px-6 py-4 text-white font-semibold">السعر</th>
                <th className="text-right px-6 py-4 text-white font-semibold">المخزون</th>
                <th className="text-right px-6 py-4 text-white font-semibold">التقييم</th>
                <th className="text-right px-6 py-4 text-white font-semibold">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-slate-700 hover:bg-slate-700/30">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="text-white font-medium">{product.name}</p>
                        <p className="text-slate-400 text-sm">ID: {product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{product.category}</td>
                  <td className="px-6 py-4 text-slate-300">{product.brand}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-white font-semibold">{product.price.toLocaleString()} ر.س</p>
                      {product.originalPrice && (
                        <p className="text-slate-400 text-sm line-through">
                          {product.originalPrice.toLocaleString()} ر.س
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.inStock
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {product.inStock ? 'متوفر' : 'نفذت الكمية'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-white">{product.rating}</span>
                      <span className="text-slate-400 text-sm">({product.reviews})</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleViewProduct(product)}
                        className="p-2 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors"
                        title="عرض"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="p-2 text-green-400 hover:bg-green-500/20 rounded-lg transition-colors"
                        title="تعديل"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                        title="حذف"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">لا توجد منتجات</h3>
            <p className="text-slate-400 mb-4">لم يتم العثور على منتجات تطابق معايير البحث</p>
            <button
              onClick={clearFilters}
              className="text-indigo-400 hover:text-indigo-300"
            >
              مسح الفلاتر
            </button>
          </div>
        )}
      </div>

      {/* مودال إدارة المنتج */}
      <ProductFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveProduct}
        product={selectedProduct}
        mode={modalMode}
      />
    </div>
  );
};