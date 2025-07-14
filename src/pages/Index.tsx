
import React from 'react';
import { ShoppingCart, Shield, Network, Server, Headphones, Star, Phone, Mail, MapPin, ChevronRight, Wifi, Router, HardDrive } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Network className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  NetTech Solutions
                </h1>
                <p className="text-xs text-slate-400">حلول تقنية متقدمة</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-300 hover:text-indigo-400 transition-colors">الرئيسية</a>
              <a href="#products" className="text-slate-300 hover:text-indigo-400 transition-colors">المنتجات</a>
              <a href="#services" className="text-slate-300 hover:text-indigo-400 transition-colors">الخدمات</a>
              <a href="#about" className="text-slate-300 hover:text-indigo-400 transition-colors">من نحن</a>
              <a href="#contact" className="text-slate-300 hover:text-indigo-400 transition-colors">تواصل معنا</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-500 to-cyan-400 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                طلب عرض سعر
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-indigo-900/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              حلول الشبكات المتقدمة
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              نوفر أحدث أجهزة الشبكات وحلول تكنولوجيا المعلومات للشركات والمؤسسات
              مع خدمات الدعم الفني والصيانة المتخصصة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                استكشف المنتجات
              </button>
              <button className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300">
                تواصل معنا
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">منتجاتنا المميزة</h3>
            <p className="text-slate-400 text-lg">أجهزة شبكات عالية الجودة من أفضل الماركات العالمية</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Router Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Router className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">راوترات احترافية</h4>
              <p className="text-slate-400 mb-6">راوترات عالية الأداء للشركات والمؤسسات مع دعم أحدث معايير الأمان</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-slate-300">
                  <Star className="w-4 h-4 text-cyan-400 ml-2" />
                  سرعة عالية حتى 10 جيجابت
                </li>
                <li className="flex items-center text-slate-300">
                  <Star className="w-4 h-4 text-cyan-400 ml-2" />
                  حماية متقدمة ضد الهجمات
                </li>
                <li className="flex items-center text-slate-300">
                  <Star className="w-4 h-4 text-cyan-400 ml-2" />
                  إدارة مركزية سهلة
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                اطلب الآن
              </button>
            </div>

            {/* Switch Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">سويتشات ذكية</h4>
              <p className="text-slate-400 mb-6">سويتشات ذكية لإدارة الشبكات بكفاءة عالية وأداء موثوق</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-slate-300">
                  <Star className="w-4 h-4 text-cyan-400 ml-2" />
                  إدارة VLAN متقدمة
                </li>
                <li className="flex items-center text-slate-300">
                  <Star className="w-4 h-4 text-cyan-400 ml-2" />
                  دعم PoE للأجهزة
                </li>
                <li className="flex items-center text-slate-300">
                  <Star className="w-4 h-4 text-cyan-400 ml-2" />
                  مراقبة الشبكة في الوقت الفعلي
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                اطلب الآن
              </button>
            </div>

            {/* Firewall Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">فايرول متقدم</h4>
              <p className="text-slate-400 mb-6">أنظمة حماية متقدمة لحماية شبكتك من التهديدات الإلكترونية</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-slate-300">
                  <Star className="w-4 h-4 text-cyan-400 ml-2" />
                  حماية ضد التهديدات المتقدمة
                </li>
                <li className="flex items-center text-slate-300">
                  <Star className="w-4 h-4 text-cyan-400 ml-2" />
                  فحص حركة البيانات
                </li>
                <li className="flex items-center text-slate-300">
                  <Star className="w-4 h-4 text-cyan-400 ml-2" />
                  تقارير أمنية مفصلة
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                اطلب الآن
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">خدماتنا التقنية</h3>
            <p className="text-slate-400 text-lg">حلول شاملة لتكنولوجيا المعلومات</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all text-center group hover:scale-105">
              <Server className="w-12 h-12 text-indigo-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-semibold text-white mb-2">إعداد الخوادم</h4>
              <p className="text-slate-400">تركيب وإعداد الخوادم المتخصصة</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all text-center group hover:scale-105">
              <Wifi className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-semibold text-white mb-2">الشبكات اللاسلكية</h4>
              <p className="text-slate-400">تصميم وتركيب شبكات WiFi احترافية</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all text-center group hover:scale-105">
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-semibold text-white mb-2">الأمن السيبراني</h4>
              <p className="text-slate-400">حماية شاملة للأنظمة والبيانات</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-green-500/50 transition-all text-center group hover:scale-105">
              <Headphones className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-semibold text-white mb-2">الدعم الفني</h4>
              <p className="text-slate-400">دعم فني متخصص على مدار الساعة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">تواصل معنا</h3>
            <p className="text-slate-400 text-lg">نحن هنا لخدمتك في أي وقت</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">احصل على استشارة مجانية</h4>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="الاسم الكامل"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="البريد الإلكتروني"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="رقم الهاتف"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    rows={4}
                    placeholder="كيف يمكننا مساعدتك؟"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  إرسال الطلب
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">معلومات التواصل</h4>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-lg flex items-center justify-center ml-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">الهاتف</p>
                      <p className="text-slate-400">+966 50 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center ml-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">البريد الإلكتروني</p>
                      <p className="text-slate-400">info@nettech-solutions.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center ml-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">العنوان</p>
                      <p className="text-slate-400">الرياض، المملكة العربية السعودية</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 p-6 rounded-xl border border-indigo-500/20">
                <h5 className="text-xl font-bold text-white mb-3">عرض خاص</h5>
                <p className="text-slate-300 mb-4">احصل على خصم 20% على جميع أجهزة الشبكات عند الطلب هذا الشهر</p>
                <button className="bg-gradient-to-r from-indigo-500 to-cyan-400 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                  استفد من العرض
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Network className="w-5 h-5 text-white" />
                </div>
                <h5 className="text-xl font-bold text-white">NetTech Solutions</h5>
              </div>
              <p className="text-slate-400 mb-4">
                شركة رائدة في مجال حلول الشبكات وتكنولوجيا المعلومات
              </p>
            </div>
            
            <div>
              <h6 className="text-white font-semibold mb-4">المنتجات</h6>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">راوترات</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">سويتشات</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">فايرول</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">نقاط وصول</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="text-white font-semibold mb-4">الخدمات</h6>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">تصميم الشبكات</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">الدعم الفني</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">الصيانة</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">الاستشارات</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="text-white font-semibold mb-4">تابعنا</h6>
              <p className="text-slate-400 mb-4">ابق على اطلاع بأحدث المنتجات والعروض</p>
              <div className="flex space-x-2">
                <button className="w-10 h-10 bg-slate-700 hover:bg-indigo-500 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-white text-sm">تويتر</span>
                </button>
                <button className="w-10 h-10 bg-slate-700 hover:bg-indigo-500 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-white text-sm">لينكدإن</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 mt-8 text-center">
            <p className="text-slate-400">
              &copy; 2025 NetTech Solutions. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
