import React, { useState } from 'react';
import { Settings, Globe, Palette, Mail, Shield, Database } from 'lucide-react';

export const AdminSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'NetTech Solutions',
    siteDescription: 'حلول تقنية متقدمة',
    language: 'ar',
    currency: 'SAR',
    email: 'info@nettech-solutions.com',
    phone: '+966 50 123 4567',
    address: 'الرياض، المملكة العربية السعودية',
    enableNotifications: true,
    enableAnalytics: true,
    maintenanceMode: false,
    theme: 'dark',
    maxProductsPerPage: 12,
    allowGuestCheckout: true,
    taxRate: 15
  });

  const handleInputChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    // في التطبيق الحقيقي، ستكون هناك API لحفظ الإعدادات
    alert('تم حفظ الإعدادات بنجاح!');
  };

  const handleReset = () => {
    if (confirm('هل أنت متأكد من إعادة تعيين جميع الإعدادات إلى القيم الافتراضية؟')) {
      // إعادة تعيين الإعدادات
      setSettings({
        siteName: 'NetTech Solutions',
        siteDescription: 'حلول تقنية متقدمة',
        language: 'ar',
        currency: 'SAR',
        email: 'info@nettech-solutions.com',
        phone: '+966 50 123 4567',
        address: 'الرياض، المملكة العربية السعودية',
        enableNotifications: true,
        enableAnalytics: true,
        maintenanceMode: false,
        theme: 'dark',
        maxProductsPerPage: 12,
        allowGuestCheckout: true,
        taxRate: 15
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* عنوان القسم */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">إعدادات الموقع</h2>
        <p className="text-slate-400">إدارة الإعدادات العامة للموقع</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* الإعدادات العامة */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5" />
            الإعدادات العامة
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                اسم الموقع
              </label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => handleInputChange('siteName', e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                وصف الموقع
              </label>
              <textarea
                value={settings.siteDescription}
                onChange={(e) => handleInputChange('siteDescription', e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none h-24 resize-none"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                اللغة الافتراضية
              </label>
              <select
                value={settings.language}
                onChange={(e) => handleInputChange('language', e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:outline-none"
              >
                <option value="ar">العربية</option>
                <option value="en">English</option>
              </select>
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                العملة
              </label>
              <select
                value={settings.currency}
                onChange={(e) => handleInputChange('currency', e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:outline-none"
              >
                <option value="SAR">ريال سعودي (ر.س)</option>
                <option value="USD">دولار أمريكي ($)</option>
                <option value="EUR">يورو (€)</option>
              </select>
            </div>
          </div>
        </div>

        {/* معلومات التواصل */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            معلومات التواصل
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                رقم الهاتف
              </label>
              <input
                type="tel"
                value={settings.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                العنوان
              </label>
              <textarea
                value={settings.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none h-24 resize-none"
              />
            </div>
          </div>
        </div>

        {/* إعدادات المظهر */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Palette className="w-5 h-5" />
            إعدادات المظهر
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                المظهر
              </label>
              <select
                value={settings.theme}
                onChange={(e) => handleInputChange('theme', e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:outline-none"
              >
                <option value="dark">المظهر الداكن</option>
                <option value="light">المظهر الفاتح</option>
                <option value="auto">تلقائي</option>
              </select>
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                عدد المنتجات في الصفحة
              </label>
              <input
                type="number"
                value={settings.maxProductsPerPage}
                onChange={(e) => handleInputChange('maxProductsPerPage', Number(e.target.value))}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                min="6"
                max="48"
              />
            </div>
          </div>
        </div>

        {/* الإعدادات المتقدمة */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            الإعدادات المتقدمة
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                معدل الضريبة (%)
              </label>
              <input
                type="number"
                value={settings.taxRate}
                onChange={(e) => handleInputChange('taxRate', Number(e.target.value))}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                min="0"
                max="100"
                step="0.1"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-white text-sm font-semibold">
                  تفعيل الإشعارات
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.enableNotifications}
                    onChange={(e) => handleInputChange('enableNotifications', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-white text-sm font-semibold">
                  تفعيل التحليلات
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.enableAnalytics}
                    onChange={(e) => handleInputChange('enableAnalytics', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-white text-sm font-semibold">
                  السماح بالشراء كضيف
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.allowGuestCheckout}
                    onChange={(e) => handleInputChange('allowGuestCheckout', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-white text-sm font-semibold">
                  وضع الصيانة
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.maintenanceMode}
                    onChange={(e) => handleInputChange('maintenanceMode', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* أزرار الحفظ */}
      <div className="flex justify-end gap-4">
        <button
          onClick={handleReset}
          className="px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
        >
          إعادة تعيين
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-400 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          حفظ الإعدادات
        </button>
      </div>
    </div>
  );
};