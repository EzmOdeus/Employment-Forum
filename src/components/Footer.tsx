import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#7A0C2E] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">عن الملتقى التوظيفي السابع</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              ملتقى توظيفي تنظمه كلية التربية النوعية بجامعة الإسكندرية لربط الطلاب والخريجين بفرص العمل والتدريب.
            </p>
            <div className="flex space-x-4 justify-end">
              <a href="#" className="text-white hover:text-[#DEB13C] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#DEB13C] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#DEB13C] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#DEB13C] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-white transition-colors">الوظائف</Link>
              </li>
              <li>
                <Link to="/companies" className="text-gray-300 hover:text-white transition-colors">الشركات</Link>
              </li>
              <li>
                <Link to="/workshops" className="text-gray-300 hover:text-white transition-colors">ورش العمل</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">عن الملتقى</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">اتصل بنا</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">معلومات الاتصال</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-end">
                <span className="text-gray-300 mr-2">كلية التربية النوعية، جامعة الإسكندرية</span>
                <MapPin size={20} className="text-[#DEB13C]" />
              </li>
              <li className="flex items-center justify-end">
                <span className="text-gray-300 mr-2"></span>
                <Mail size={20} className="text-[#DEB13C]" />
              </li>
              <li className="flex items-center justify-end">
                <span className="text-gray-300 mr-2">035454313</span>
                <Phone size={20} className="text-[#DEB13C]" />
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">النشرة الإخبارية</h3>
            <p className="text-gray-300 mb-4">اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات</p>
            <div className="flex mb-4">
              <button
                className="bg-[#DEB13C] text-[#7A0C2E] px-4 py-2 rounded-l-md hover:bg-[#c99b2c] transition-colors"
              >
                اشتراك
              </button>
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="px-4 py-2 w-full rounded-r-md text-black text-right"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © 2025 الملتقى التوظيفي السابع لكلية التربية النوعية - جامعة الإسكندرية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;