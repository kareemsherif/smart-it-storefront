import React, { useState } from 'react';
import { FileText, Edit, Eye, Save, RotateCcw } from 'lucide-react';

interface PageContent {
  id: string;
  title: string;
  content: string;
  lastModified: string;
}

export const AdminPageManager = () => {
  const [pages, setPages] = useState<PageContent[]>([
    {
      id: 'home-hero',
      title: 'قسم البطل - الصفحة الرئيسية',
      content: 'حلول الشبكات المتقدمة\n\nنوفر أحدث أجهزة الشبكات وحلول تكنولوجيا المعلومات للشركات والمؤسسات مع خدمات الدعم الفني والصيانة المتخصصة',
      lastModified: '2024-01-15 10:30:00'
    },
    {
      id: 'home-about',
      title: 'قسم من نحن - الصفحة الرئيسية',
      content: 'شركة رائدة في مجال حلول الشبكات وتكنولوجيا المعلومات\n\nنتميز بخبرة واسعة في تقديم أفضل الحلول التقنية للشركات والمؤسسات',
      lastModified: '2024-01-14 15:45:00'
    },
    {
      id: 'services',
      title: 'صفحة الخدمات',
      content: 'خدماتنا التقنية\n\n1. إعداد الخوادم والشبكات\n2. الأمن السيبراني\n3. الدعم الفني\n4. الصيانة الدورية',
      lastModified: '2024-01-13 09:20:00'
    },
    {
      id: 'contact',
      title: 'صفحة التواصل',
      content: 'معلومات التواصل\n\nالهاتف: +966 50 123 4567\nالبريد الإلكتروني: info@nettech-solutions.com\nالعنوان: الرياض، المملكة العربية السعودية',
      lastModified: '2024-01-12 14:15:00'
    }
  ]);

  const [selectedPage, setSelectedPage] = useState<PageContent | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState('');

  const handleSelectPage = (page: PageContent) => {
    setSelectedPage(page);
    setEditContent(page.content);
    setEditMode(false);
  };

  const handleSave = () => {
    if (!selectedPage) return;

    const updatedPages = pages.map(page => 
      page.id === selectedPage.id 
        ? { 
            ...page, 
            content: editContent,
            lastModified: new Date().toLocaleString('ar-SA')
          }
        : page
    );

    setPages(updatedPages);
    setSelectedPage({ 
      ...selectedPage, 
      content: editContent,
      lastModified: new Date().toLocaleString('ar-SA')
    });
    setEditMode(false);
  };

  const handleCancel = () => {
    if (selectedPage) {
      setEditContent(selectedPage.content);
    }
    setEditMode(false);
  };

  return (
    <div className="space-y-6">
      {/* عنوان القسم */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">إدارة محتوى الصفحات</h2>
        <p className="text-slate-400">تعديل محتوى جميع صفحات الموقع</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* قائمة الصفحات */}
        <div className="lg:col-span-1">
          <div className="bg-slate-800 rounded-lg border border-slate-700">
            <div className="p-4 border-b border-slate-700">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <FileText className="w-5 h-5" />
                صفحات الموقع
              </h3>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                {pages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => handleSelectPage(page)}
                    className={`w-full text-right p-3 rounded-lg transition-colors ${
                      selectedPage?.id === page.id
                        ? 'bg-indigo-500 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    <div>
                      <p className="font-medium">{page.title}</p>
                      <p className="text-xs text-slate-400 mt-1">
                        آخر تعديل: {page.lastModified}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* محرر المحتوى */}
        <div className="lg:col-span-2">
          {selectedPage ? (
            <div className="bg-slate-800 rounded-lg border border-slate-700">
              <div className="flex items-center justify-between p-4 border-b border-slate-700">
                <h3 className="text-lg font-semibold text-white">{selectedPage.title}</h3>
                <div className="flex items-center gap-2">
                  {editMode ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <Save className="w-4 h-4" />
                        حفظ
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <RotateCcw className="w-4 h-4" />
                        إلغاء
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setEditMode(true)}
                      className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      تعديل
                    </button>
                  )}
                </div>
              </div>

              <div className="p-4">
                {editMode ? (
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      محتوى الصفحة
                    </label>
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none h-96 resize-none font-mono"
                      placeholder="أدخل محتوى الصفحة..."
                    />
                    <div className="mt-4 p-4 bg-slate-700/50 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">نصائح للتحرير:</h4>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• استخدم سطراً فارغاً لفصل الفقرات</li>
                        <li>• يمكنك استخدام HTML البسيط للتنسيق</li>
                        <li>• احرص على مراجعة المحتوى قبل الحفظ</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-4">
                      <label className="block text-white text-sm font-semibold mb-2">
                        معاينة المحتوى
                      </label>
                      <div className="bg-slate-700 border border-slate-600 rounded-lg p-4 min-h-96">
                        <div className="text-slate-300 whitespace-pre-wrap">
                          {selectedPage.content}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-slate-400">
                      <p>آخر تعديل: {selectedPage.lastModified}</p>
                      <p className="mt-1">معرف الصفحة: {selectedPage.id}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-slate-800 rounded-lg border border-slate-700 p-12 text-center">
              <FileText className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">اختر صفحة للتعديل</h3>
              <p className="text-slate-400">
                اختر صفحة من القائمة الجانبية لبدء تعديل محتواها
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};