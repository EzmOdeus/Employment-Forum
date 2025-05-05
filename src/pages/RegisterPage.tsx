import React, { useState } from 'react';
import { Upload, Check } from 'lucide-react';

const RegisterPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState<'student' | 'employer'>('student');
  
  const nextStep = () => {
    setStep(step + 1);
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-[#7A0C2E] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            التسجيل في الملتقى التوظيفي السابع
          </h1>
          <p className="text-white/90 text-center max-w-2xl mx-auto">
            سجل الآن للمشاركة في الملتقى التوظيفي السابع واستفد من فرص العمل وورش العمل المتاحة
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">اختر نوع الحساب</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                      accountType === 'student'
                        ? 'border-[#7A0C2E] bg-[#7A0C2E]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setAccountType('student')}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`h-6 w-6 rounded-full flex items-center justify-center ${
                        accountType === 'student' ? 'bg-[#7A0C2E] text-white' : 'bg-gray-200'
                      }`}>
                        {accountType === 'student' && <Check size={14} />}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">طالب / خريج</h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-right">
                      سجل كطالب أو خريج للبحث عن فرص عمل والمشاركة في ورش العمل
                    </p>
                    <ul className="space-y-2 text-right">
                      <li className="flex items-center justify-end text-gray-600">
                        <span>البحث عن وظائف</span>
                        <Check size={16} className="ml-2 text-green-500" />
                      </li>
                      <li className="flex items-center justify-end text-gray-600">
                        <span>التسجيل في ورش العمل</span>
                        <Check size={16} className="ml-2 text-green-500" />
                      </li>
                      <li className="flex items-center justify-end text-gray-600">
                        <span>التواصل مع الشركات</span>
                        <Check size={16} className="ml-2 text-green-500" />
                      </li>
                    </ul>
                  </div>
                  
                  <div
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                      accountType === 'employer'
                        ? 'border-[#7A0C2E] bg-[#7A0C2E]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setAccountType('employer')}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`h-6 w-6 rounded-full flex items-center justify-center ${
                        accountType === 'employer' ? 'bg-[#7A0C2E] text-white' : 'bg-gray-200'
                      }`}>
                        {accountType === 'employer' && <Check size={14} />}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">شركة / مؤسسة</h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-right">
                      سجل كشركة أو مؤسسة للإعلان عن الوظائف والتواصل مع المواهب
                    </p>
                    <ul className="space-y-2 text-right">
                      <li className="flex items-center justify-end text-gray-600">
                        <span>نشر إعلانات التوظيف</span>
                        <Check size={16} className="ml-2 text-green-500" />
                      </li>
                      <li className="flex items-center justify-end text-gray-600">
                        <span>البحث عن المواهب</span>
                        <Check size={16} className="ml-2 text-green-500" />
                      </li>
                      <li className="flex items-center justify-end text-gray-600">
                        <span>المشاركة في المعرض</span>
                        <Check size={16} className="ml-2 text-green-500" />
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button
                    onClick={nextStep}
                    className="bg-[#7A0C2E] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#5A0A22] transition-colors"
                  >
                    التالي
                  </button>
                </div>
              </div>
            )}
            
            {step === 2 && accountType === 'student' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">معلومات الطالب / الخريج</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 text-right">الاسم الأول</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right"
                        placeholder="أدخل الاسم الأول"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 text-right">الاسم الأخير</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right"
                        placeholder="أدخل الاسم الأخير"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 text-right">البريد الإلكتروني</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 text-right">رقم الهاتف</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right"
                      placeholder="أدخل رقم هاتفك"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 text-right">التخصص</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right">
                      <option value="">اختر التخصص</option>
                      <option value="education">تربية نوعية</option>
                      <option value="art">تربية فنية</option>
                      <option value="music">تربية موسيقية</option>
                      <option value="home">اقتصاد منزلي</option>
                      <option value="technology">تكنولوجيا التعليم</option>
                      <option value="media">إعلام تربوي</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 text-right">الحالة</label>
                    <div className="flex space-x-4 space-x-reverse justify-end">
                      <div className="flex items-center">
                        <label className="mr-2 text-gray-700">خريج</label>
                        <input
                          type="radio"
                          name="status"
                          value="graduate"
                          className="accent-[#7A0C2E]"
                        />
                      </div>
                      <div className="flex items-center">
                        <label className="mr-2 text-gray-700">طالب</label>
                        <input
                          type="radio"
                          name="status"
                          value="student"
                          className="accent-[#7A0C2E]"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 text-right">السيرة الذاتية</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 mb-2">اسحب وأفلت ملف السيرة الذاتية هنا أو</p>
                      <button
                        type="button"
                        className="text-[#7A0C2E] font-medium hover:text-[#5A0A22]"
                      >
                        تصفح الملفات
                      </button>
                      <p className="text-gray-500 text-sm mt-2">PDF, DOC, DOCX (الحد الأقصى 5 ميجابايت)</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-[#7A0C2E] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#5A0A22] transition-colors"
                    >
                      التالي
                    </button>
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-white text-[#7A0C2E] border border-[#7A0C2E] px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      السابق
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {step === 2 && accountType === 'employer' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">معلومات الشركة / المؤسسة</h2>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2 text-right">اسم الشركة / المؤسسة</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right"
                      placeholder="أدخل اسم الشركة"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 text-right">مجال العمل</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right">
                      <option value="">اختر مجال العمل</option>
                      <option value="technology">تكنولوجيا المعلومات</option>
                      <option value="education">التعليم</option>
                      <option value="healthcare">الرعاية الصحية</option>
                      <option value="media">الإعلام والاتصالات</option>
                      <option value="arts">الفنون والتصميم</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 text-right">البريد الإلكتروني للتواصل</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right"
                      placeholder="أدخل البريد الإلكتروني للتواصل"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 text-right">رقم الهاتف للتواصل</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right"
                      placeholder="أدخل رقم الهاتف للتواصل"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 text-right">الموقع الإلكتروني</label>
                    <input
                      type="url"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right"
                      placeholder="أدخل الموقع الإلكتروني للشركة (اختياري)"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 text-right">نبذة عن الشركة</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right"
                      placeholder="اكتب نبذة مختصرة عن الشركة"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 text-right">شعار الشركة</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 mb-2">اسحب وأفلت شعار الشركة هنا أو</p>
                      <button
                        type="button"
                        className="text-[#7A0C2E] font-medium hover:text-[#5A0A22]"
                      >
                        تصفح الملفات
                      </button>
                      <p className="text-gray-500 text-sm mt-2">PNG, JPG, SVG (الحد الأقصى 2 ميجابايت)</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-[#7A0C2E] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#5A0A22] transition-colors"
                    >
                      التالي
                    </button>
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-white text-[#7A0C2E] border border-[#7A0C2E] px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      السابق
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {step === 3 && (
              <div>
                <div className="text-center mb-8">
                  <div className="bg-green-100 text-green-700 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                    <Check className="h-10 w-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">تم التسجيل بنجاح!</h2>
                  <p className="text-gray-600 max-w-xl mx-auto">
                    شكراً لتسجيلك في الملتقى التوظيفي السابع. تم إرسال رسالة تأكيد إلى بريدك الإلكتروني. يمكنك الآن تسجيل الدخول واستكشاف الفرص المتاحة.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <button
                    onClick={() => window.location.href = '/'}
                    className="bg-[#7A0C2E] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#5A0A22] transition-colors"
                  >
                    العودة للصفحة الرئيسية
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;