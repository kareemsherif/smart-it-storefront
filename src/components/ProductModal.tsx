import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Product } from '@/data/products';
import { Star, ShoppingCart, Package, Shield, Truck, Zap, X } from 'lucide-react';
import { QuoteDialog } from './QuoteDialog';
import { useToast } from '@/hooks/useToast';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const { toast } = useToast();

  if (!product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'SAR'
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-slate-400'
        }`}
      />
    ));
  };

  const handleAddToCart = () => {
    toast.success(`تم إضافة ${product.name} إلى السلة`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-indigo-400 mb-4">
            تفاصيل المنتج
          </DialogTitle>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* الصور */}
          <div className="space-y-4">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="bg-red-500 text-white px-6 py-3 rounded-full font-bold text-lg">
                    نفذت الكمية
                  </span>
                </div>
              )}
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? 'border-indigo-500'
                        : 'border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* معلومات المنتج */}
          <div className="space-y-6">
            {/* العلامة التجارية والفئة */}
            <div className="flex items-center justify-between">
              <span className="text-indigo-400 font-semibold text-lg">
                {product.brand}
              </span>
              <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">
                {product.category}
              </span>
            </div>

            {/* اسم المنتج */}
            <h1 className="text-3xl font-bold text-white">
              {product.name}
            </h1>

            {/* التقييم */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {renderStars(product.rating)}
              </div>
              <span className="text-slate-400">
                {product.rating} ({product.reviews} مراجعة)
              </span>
            </div>

            {/* السعر */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-white">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-slate-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <span className="text-green-400 font-semibold">
                  توفر {formatPrice(product.originalPrice - product.price)} (خصم {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%)
                </span>
              )}
            </div>

            {/* العلامات */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-sm font-bold rounded-full ${
                    tag === 'جديد'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : tag === 'عرض خاص'
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : tag === 'الأكثر مبيعاً'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : tag === 'نفذت الكمية'
                      ? 'bg-slate-500/20 text-slate-400 border border-slate-500/30'
                      : 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* الوصف */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">الوصف</h3>
              <p className="text-slate-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* المعلومات الإضافية */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm text-slate-300">
                  ضمان {product.warranty}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-slate-300">
                  شحن مجاني
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-slate-300">
                  {product.inStock ? 'متوفر' : 'غير متوفر'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-slate-300">
                  تركيب مجاني
                </span>
              </div>
            </div>

            {/* الأزرار */}
            <div className="flex gap-4">
              {product.inStock ? (
                <QuoteDialog productType={product.category.toLowerCase()}>
                  <button className="flex-1 bg-gradient-to-r from-indigo-500 to-cyan-400 hover:from-indigo-600 hover:to-cyan-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    اطلب الآن
                  </button>
                </QuoteDialog>
              ) : (
                <button
                  disabled
                  className="flex-1 bg-slate-600/50 text-slate-400 py-3 px-6 rounded-xl font-semibold cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  غير متوفر
                </button>
              )}
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="bg-slate-700 hover:bg-slate-600 disabled:bg-slate-600/50 disabled:text-slate-400 text-white py-3 px-6 rounded-xl transition-colors flex items-center gap-2"
              >
                إضافة للسلة
              </button>
            </div>
          </div>
        </div>

        {/* تفاصيل إضافية */}
        <div className="mt-8 space-y-6">
          {/* المميزات */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">المميزات الرئيسية</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* المواصفات التقنية */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">المواصفات التقنية</h3>
            <div className="bg-slate-700/30 rounded-xl p-6">
              <div className="grid gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center border-b border-slate-600/50 pb-2">
                    <span className="text-slate-400 font-medium">{key}</span>
                    <span className="text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};