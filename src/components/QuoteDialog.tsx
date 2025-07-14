import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/useToast';
import { X } from 'lucide-react';

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  productType: string;
  message: string;
}

interface QuoteDialogProps {
  children: React.ReactNode;
  productType?: string;
}

export const QuoteDialog = ({ children, productType = '' }: QuoteDialogProps) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    productType: productType,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // محاكاة إرسال البيانات
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('تم إرسال طلب العرض بنجاح! سنتواصل معك خلال 24 ساعة');
      setIsOpen(false);
      
      // إعادة تعيين النموذج
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        productType: '',
        message: ''
      });
    } catch (error) {
      toast.error('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center text-indigo-400">
            طلب عرض سعر
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="الاسم الكامل *"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none transition-colors text-sm"
              required
            />
          </div>
          <div>
            <input 
              type="email"
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              placeholder="البريد الإلكتروني *"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none transition-colors text-sm"
              required
            />
          </div>
          <div>
            <input 
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="رقم الهاتف *"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none transition-colors text-sm"
              required
            />
          </div>
          <div>
            <input 
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="اسم الشركة"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none transition-colors text-sm"
            />
          </div>
          <div>
            <select
              name="productType"
              value={formData.productType}
              onChange={handleInputChange}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-indigo-500 focus:outline-none transition-colors text-sm"
            >
              <option value="">اختر نوع المنتج</option>
              <option value="router">راوترات احترافية</option>
              <option value="switch">سويتشات ذكية</option>
              <option value="firewall">فايرول متقدم</option>
              <option value="server">إعداد الخوادم</option>
              <option value="wifi">الشبكات اللاسلكية</option>
              <option value="security">الأمن السيبراني</option>
            </select>
          </div>
          <div>
            <textarea 
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="تفاصيل إضافية"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none transition-colors resize-none text-sm"
            ></textarea>
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm"
          >
            {isSubmitting ? 'جارٍ الإرسال...' : 'إرسال طلب العرض'}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};