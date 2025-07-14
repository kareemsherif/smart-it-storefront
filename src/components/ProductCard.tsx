import React from 'react';
import { Star, ShoppingCart, Eye, Zap } from 'lucide-react';
import { Product } from '@/data/products';
import { useToast } from '@/hooks/useToast';
import { QuoteDialog } from './QuoteDialog';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast.success(`تم إضافة ${product.name} إلى السلة`);
  };

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
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-slate-400'
        }`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group overflow-hidden">
      {/* صورة المنتج */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-1 text-xs font-bold rounded-full ${
                tag === 'جديد'
                  ? 'bg-green-500/90 text-white'
                  : tag === 'عرض خاص'
                  ? 'bg-red-500/90 text-white'
                  : tag === 'الأكثر مبيعاً'
                  ? 'bg-blue-500/90 text-white'
                  : tag === 'نفذت الكمية'
                  ? 'bg-slate-500/90 text-white'
                  : 'bg-indigo-500/90 text-white'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold">
              نفذت الكمية
            </span>
          </div>
        )}
      </div>

      {/* محتوى البطاقة */}
      <div className="p-6">
        {/* العلامة التجارية والفئة */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-indigo-400 text-sm font-semibold">
            {product.brand}
          </span>
          <span className="text-slate-400 text-sm">
            {product.category}
          </span>
        </div>

        {/* اسم المنتج */}
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* التقييم والمراجعات */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="text-slate-400 text-sm">
            ({product.reviews} مراجعة)
          </span>
        </div>

        {/* الوصف */}
        <p className="text-slate-400 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* المميزات الرئيسية */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <span
                key={index}
                className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
            {product.features.length > 2 && (
              <span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full">
                +{product.features.length - 2} المزيد
              </span>
            )}
          </div>
        </div>

        {/* السعر */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          {product.originalPrice && (
            <span className="text-sm text-green-400 font-semibold">
              خصم {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          )}
        </div>

        {/* الضمان */}
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-slate-400">
            ضمان {product.warranty}
          </span>
        </div>

        {/* الأزرار */}
        <div className="flex gap-2">
          <button
            onClick={() => onViewDetails(product)}
            className="flex-1 bg-slate-700/50 hover:bg-slate-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4" />
            <span className="text-sm">عرض التفاصيل</span>
          </button>
          
          {product.inStock ? (
            <QuoteDialog productType={product.category.toLowerCase()}>
              <button className="flex-1 bg-gradient-to-r from-indigo-500 to-cyan-400 hover:from-indigo-600 hover:to-cyan-500 text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                <span className="text-sm">اطلب الآن</span>
              </button>
            </QuoteDialog>
          ) : (
            <button
              disabled
              className="flex-1 bg-slate-600/50 text-slate-400 py-2 px-4 rounded-lg cursor-not-allowed flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm">غير متوفر</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};