import React, { useState } from 'react';
import { useToast } from '@/hooks/useToast';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // محاكاة إرسال البيانات
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // إعادة تعيين النموذج
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      toast.success('تم إرسال طلبك بنجاح! سنتواصل معك قريباً');
    } catch (error) {
      toast.error('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="الاسم الكامل *"
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none transition-colors"
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
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none transition-colors"
          required
        />
      </div>
      <div>
        <input 
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="رقم الهاتف"
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none transition-colors"
        />
      </div>
      <div>
        <textarea 
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="كيف يمكننا مساعدتك؟ *"
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
          required
        ></textarea>
      </div>
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? 'جارٍ الإرسال...' : 'إرسال الطلب'}
      </button>
    </form>
  );
};