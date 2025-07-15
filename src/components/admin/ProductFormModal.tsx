import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { Product, categories, brands } from '@/data/products';

interface ProductFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
  product: Product | null;
  mode: 'add' | 'edit' | 'view';
}

export const ProductFormModal: React.FC<ProductFormModalProps> = ({
  isOpen,
  onClose,
  onSave,
  product,
  mode
}) => {
  const [formData, setFormData] = useState<Product>({
    id: '',
    name: '',
    category: 'راوترات',
    brand: 'Cisco',
    price: 0,
    originalPrice: 0,
    description: '',
    features: [''],
    specifications: {},
    images: [''],
    inStock: true,
    rating: 0,
    reviews: 0,
    warranty: '',
    tags: ['']
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    } else {
      setFormData({
        id: '',
        name: '',
        category: 'راوترات',
        brand: 'Cisco',
        price: 0,
        originalPrice: 0,
        description: '',
        features: [''],
        specifications: {},
        images: [''],
        inStock: true,
        rating: 0,
        reviews: 0,
        warranty: '',
        tags: ['']
      });
    }
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const cleanedProduct = {
      ...formData,
      features: formData.features.filter(f => f.trim() !== ''),
      images: formData.images.filter(img => img.trim() !== ''),
      tags: formData.tags.filter(tag => tag.trim() !== ''),
      originalPrice: formData.originalPrice || undefined
    };

    onSave(cleanedProduct);
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, '']
    });
  };

  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index)
    });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({
      ...formData,
      features: newFeatures
    });
  };

  const addImage = () => {
    setFormData({
      ...formData,
      images: [...formData.images, '']
    });
  };

  const removeImage = (index: number) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index)
    });
  };

  const updateImage = (index: number, value: string) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData({
      ...formData,
      images: newImages
    });
  };

  const addTag = () => {
    setFormData({
      ...formData,
      tags: [...formData.tags, '']
    });
  };

  const removeTag = (index: number) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((_, i) => i !== index)
    });
  };

  const updateTag = (index: number, value: string) => {
    const newTags = [...formData.tags];
    newTags[index] = value;
    setFormData({
      ...formData,
      tags: newTags
    });
  };

  const updateSpecification = (key: string, value: string) => {
    setFormData({
      ...formData,
      specifications: {
        ...formData.specifications,
        [key]: value
      }
    });
  };

  const removeSpecification = (key: string) => {
    const newSpecs = { ...formData.specifications };
    delete newSpecs[key];
    setFormData({
      ...formData,
      specifications: newSpecs
    });
  };

  const addSpecification = () => {
    const key = prompt('أدخل اسم المواصفة:');
    if (key && key.trim()) {
      setFormData({
        ...formData,
        specifications: {
          ...formData.specifications,
          [key.trim()]: ''
        }
      });
    }
  };

  if (!isOpen) return null;

  const isViewMode = mode === 'view';

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-lg border border-slate-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h3 className="text-2xl font-bold text-white">
            {mode === 'add' ? 'إضافة منتج جديد' : mode === 'edit' ? 'تعديل المنتج' : 'عرض المنتج'}
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* معلومات أساسية */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                اسم المنتج *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                required
                disabled={isViewMode}
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                الفئة *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:outline-none"
                required
                disabled={isViewMode}
              >
                {categories.filter(cat => cat !== 'الكل').map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                العلامة التجارية *
              </label>
              <select
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:outline-none"
                required
                disabled={isViewMode}
              >
                {brands.filter(brand => brand !== 'الكل').map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                السعر (ر.س) *
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                required
                min="0"
                disabled={isViewMode}
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                السعر الأصلي (ر.س)
              </label>
              <input
                type="number"
                value={formData.originalPrice || ''}
                onChange={(e) => setFormData({ ...formData, originalPrice: Number(e.target.value) || undefined })}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                min="0"
                disabled={isViewMode}
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                فترة الضمان
              </label>
              <input
                type="text"
                value={formData.warranty}
                onChange={(e) => setFormData({ ...formData, warranty: e.target.value })}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                placeholder="مثل: 3 سنوات"
                disabled={isViewMode}
              />
            </div>
          </div>

          {/* الوصف */}
          <div>
            <label className="block text-white text-sm font-semibold mb-2">
              الوصف *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none h-32 resize-none"
              required
              disabled={isViewMode}
            />
          </div>

          {/* الميزات */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-white text-sm font-semibold">
                الميزات
              </label>
              {!isViewMode && (
                <button
                  type="button"
                  onClick={addFeature}
                  className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 text-sm"
                >
                  <Plus className="w-4 h-4" />
                  إضافة ميزة
                </button>
              )}
            </div>
            <div className="space-y-2">
              {formData.features.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => updateFeature(index, e.target.value)}
                    className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                    placeholder="أدخل الميزة..."
                    disabled={isViewMode}
                  />
                  {!isViewMode && formData.features.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="p-2 text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* الصور */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-white text-sm font-semibold">
                روابط الصور
              </label>
              {!isViewMode && (
                <button
                  type="button"
                  onClick={addImage}
                  className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 text-sm"
                >
                  <Plus className="w-4 h-4" />
                  إضافة صورة
                </button>
              )}
            </div>
            <div className="space-y-2">
              {formData.images.map((image, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="url"
                    value={image}
                    onChange={(e) => updateImage(index, e.target.value)}
                    className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                    placeholder="https://example.com/image.jpg"
                    disabled={isViewMode}
                  />
                  {!isViewMode && formData.images.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="p-2 text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* المواصفات */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-white text-sm font-semibold">
                المواصفات التقنية
              </label>
              {!isViewMode && (
                <button
                  type="button"
                  onClick={addSpecification}
                  className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 text-sm"
                >
                  <Plus className="w-4 h-4" />
                  إضافة مواصفة
                </button>
              )}
            </div>
            <div className="space-y-2">
              {Object.entries(formData.specifications).map(([key, value]) => (
                <div key={key} className="grid grid-cols-5 gap-2">
                  <input
                    type="text"
                    value={key}
                    className="col-span-2 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                    disabled
                  />
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => updateSpecification(key, e.target.value)}
                    className="col-span-2 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                    placeholder="القيمة..."
                    disabled={isViewMode}
                  />
                  {!isViewMode && (
                    <button
                      type="button"
                      onClick={() => removeSpecification(key)}
                      className="p-2 text-red-400 hover:text-red-300 flex items-center justify-center"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* العلامات */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-white text-sm font-semibold">
                العلامات
              </label>
              {!isViewMode && (
                <button
                  type="button"
                  onClick={addTag}
                  className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 text-sm"
                >
                  <Plus className="w-4 h-4" />
                  إضافة علامة
                </button>
              )}
            </div>
            <div className="space-y-2">
              {formData.tags.map((tag, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={tag}
                    onChange={(e) => updateTag(index, e.target.value)}
                    className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                    placeholder="مثل: جديد، عرض خاص..."
                    disabled={isViewMode}
                  />
                  {!isViewMode && formData.tags.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeTag(index)}
                      className="p-2 text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* حالة المخزون والتقييم */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                حالة المخزون
              </label>
              <select
                value={formData.inStock.toString()}
                onChange={(e) => setFormData({ ...formData, inStock: e.target.value === 'true' })}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:outline-none"
                disabled={isViewMode}
              >
                <option value="true">متوفر</option>
                <option value="false">نفذت الكمية</option>
              </select>
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                التقييم (1-5)
              </label>
              <input
                type="number"
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                min="0"
                max="5"
                step="0.1"
                disabled={isViewMode}
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                عدد التقييمات
              </label>
              <input
                type="number"
                value={formData.reviews}
                onChange={(e) => setFormData({ ...formData, reviews: Number(e.target.value) })}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                min="0"
                disabled={isViewMode}
              />
            </div>
          </div>

          {/* أزرار الإجراءات */}
          <div className="flex justify-end gap-4 pt-6 border-t border-slate-700">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
            >
              {isViewMode ? 'إغلاق' : 'إلغاء'}
            </button>
            {!isViewMode && (
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-400 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                {mode === 'add' ? 'إضافة المنتج' : 'حفظ التغييرات'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};