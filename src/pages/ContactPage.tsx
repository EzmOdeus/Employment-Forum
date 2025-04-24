import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-[#7A0C2E] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            اتصل بنا
          </h1>
          <p className="text-white/90 text-center max-w-2xl mx-auto">
            تواصل معنا للاستفسار عن الملتقى التوظيفي أو للحصول على مزيد من المعلومات
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-[#7A0C2E] text-white p-8">
              <h2 className="text-2xl font-bold mb-6 text-right">معلومات الاتصال</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-end">
                  <div>
                    <p className="font-bold">العنوان</p>
                    <p className="text-white/80">كلية التربية النوعية، جامعة الإسكندرية</p>
                    <p className="text-white/80">الإسكندرية، مصر</p>
                  </div>
                  <div className="ml-4 bg-white/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="flex items-center justify-end">
                  <div>
                    <p className="font-bold">البريد الإلكتروني</p>
                    <p className="text-white/80"></p>
                    <p className="text-white/80">support@alexu-forum.edu.eg</p>
                  </div>
                  <div className="ml-4 bg-white/20 p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="flex items-center justify-end">
                  <div>
                    <p className="font-bold">الهاتف</p>
                    <p className="text-white/80">035454313</p>
                    <p className="text-white/80">+20 198 765 4321</p>
                  </div>
                  <div className="ml-4 bg-white/20 p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
              </div>
              
              <div className="mt-12 border-t border-white/20 pt-6">
                <h3 className="font-bold mb-4 text-right">تابعنا على</h3>
                <div className="flex space-x-4 justify-end">
                  <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">إرسال رسالة</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 text-right">الاسم</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right"
                      placeholder="أدخل اسمك"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-right">البريد الإلكتروني</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 text-right">الموضوع</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right"
                    placeholder="أدخل موضوع الرسالة"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 text-right">الرسالة</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>
                
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="bg-[#7A0C2E] text-white px-6 py-3 rounded-md flex items-center hover:bg-[#5A0A22] transition-colors"
                  >
                    <Send className="ml-2 h-5 w-5" />
                    إرسال الرسالة
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">الأسئلة الشائعة</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-gray-800 mb-2 text-right">
                <MessageSquare className="inline-block ml-2 text-[#7A0C2E]" />
                ما هي مواعيد الملتقى التوظيفي؟
              </h3>
              <p className="text-gray-600 text-right">
                يقام الملتقى التوظيفي يوم 28 أبريل 2025، من الساعة 10 صباحاً وحتى الساعة 6 مساءً.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-gray-800 mb-2 text-right">
                <MessageSquare className="inline-block ml-2 text-[#7A0C2E]" />
                كيف يمكنني التسجيل في الملتقى؟
              </h3>
              <p className="text-gray-600 text-right">
                يمكنك التسجيل من خلال موقعنا الإلكتروني، بالضغط على زر "سجل الآن" في الصفحة الرئيسية وملء النموذج المطلوب.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-gray-800 mb-2 text-right">
                <MessageSquare className="inline-block ml-2 text-[#7A0C2E]" />
                هل التسجيل في ورش العمل مجاني؟
              </h3>
              <p className="text-gray-600 text-right">
                نعم، التسجيل في ورش العمل مجاني تماماً لجميع المشاركين في الملتقى، ولكن الأماكن محدودة وستكون الأولوية للمسجلين أولاً.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-gray-800 mb-2 text-right">
                <MessageSquare className="inline-block ml-2 text-[#7A0C2E]" />
                كيف يمكن للشركات المشاركة في الملتقى؟
              </h3>
              <p className="text-gray-600 text-right">
                يمكن للشركات المشاركة من خلال التسجيل في صفحة "سجل كشركة" وملء النموذج المطلوب، وسيتم التواصل معكم من قبل فريق التنظيم لاستكمال إجراءات المشاركة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;