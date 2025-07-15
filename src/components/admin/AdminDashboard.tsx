import React from 'react';
import { Package, Users, FileText, TrendingUp, DollarSign, ShoppingCart } from 'lucide-react';
import { products } from '@/data/products';

export const AdminDashboard = () => {
  const totalProducts = products.length;
  const inStockProducts = products.filter(p => p.inStock).length;
  const outOfStockProducts = totalProducts - inStockProducts;
  const totalValue = products.reduce((sum, p) => sum + p.price, 0);
  const averageRating = products.reduce((sum, p) => sum + p.rating, 0) / totalProducts;

  const stats = [
    {
      title: 'إجمالي المنتجات',
      value: totalProducts,
      icon: Package,
      color: 'from-blue-500 to-cyan-500',
      change: '+12% من الشهر الماضي'
    },
    {
      title: 'منتجات متوفرة',
      value: inStockProducts,
      icon: ShoppingCart,
      color: 'from-green-500 to-emerald-500',
      change: `${inStockProducts} من ${totalProducts}`
    },
    {
      title: 'منتجات نفذت',
      value: outOfStockProducts,
      icon: TrendingUp,
      color: 'from-red-500 to-pink-500',
      change: 'يحتاج إعادة تموين'
    },
    {
      title: 'قيمة المخزون',
      value: `${totalValue.toLocaleString()} ر.س`,
      icon: DollarSign,
      color: 'from-purple-500 to-indigo-500',
      change: '+8% من الشهر الماضي'
    }
  ];

  const recentActivity = [
    { action: 'تم إضافة منتج جديد', item: 'Cisco Catalyst 9300-24T', time: 'منذ دقيقتين' },
    { action: 'تم تحديث المخزون', item: 'Ubiquiti UniFi Dream Machine Pro', time: 'منذ 5 دقائق' },
    { action: 'طلب عرض سعر جديد', item: 'FortiGate 60F', time: 'منذ 10 دقائق' },
    { action: 'تم بيع منتج', item: 'HP ProLiant DL380 Gen10', time: 'منذ 15 دقيقة' },
  ];

  return (
    <div className="space-y-6">
      {/* عنوان القسم */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">لوحة القيادة</h2>
        <p className="text-slate-400">نظرة عامة على حالة الموقع والمنتجات</p>
      </div>

      {/* الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-slate-400 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-slate-500 text-xs">{stat.change}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* النشاط الأخير */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            النشاط الأخير
          </h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-b-0">
                <div>
                  <p className="text-white font-medium">{activity.action}</p>
                  <p className="text-slate-400 text-sm">{activity.item}</p>
                </div>
                <span className="text-slate-500 text-xs">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* المنتجات الأكثر تقييماً */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            المنتجات الأكثر تقييماً
          </h3>
          <div className="space-y-4">
            {products
              .sort((a, b) => b.rating - a.rating)
              .slice(0, 4)
              .map((product, index) => (
                <div key={product.id} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-b-0">
                  <div>
                    <p className="text-white font-medium">{product.name}</p>
                    <p className="text-slate-400 text-sm">{product.category}</p>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-white">{product.rating}</span>
                    </div>
                    <p className="text-slate-500 text-xs">{product.reviews} تقييم</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* ملخص سريع */}
      <div className="bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-lg p-6 border border-indigo-500/20">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">ملخص الأداء</h3>
            <p className="text-slate-300">
              متوسط التقييم: <span className="text-yellow-400 font-semibold">{averageRating.toFixed(1)}</span> |
              معدل التوفر: <span className="text-green-400 font-semibold">{((inStockProducts / totalProducts) * 100).toFixed(0)}%</span>
            </p>
          </div>
          <div className="text-left">
            <p className="text-2xl font-bold text-white">{totalProducts}</p>
            <p className="text-slate-400">منتج نشط</p>
          </div>
        </div>
      </div>
    </div>
  );
};