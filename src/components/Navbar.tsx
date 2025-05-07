import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/WhatsApp Image 2025-05-06 at 12.01.29 AM.jpeg"
                alt="Logo"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div
                className={`ml-3 mr-3 text-right ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                <h1 className="text-lg font-bold text-[#7A0C2E]">
                  الملتقى التوظيفي السابع
                </h1>
                <p className="text-xs text-gray-600">
                  كلية التربية النوعية - جامعة الإسكندرية
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks language={language} />
            {/* <button
              onClick={toggleLanguage}
              className="flex items-center text-gray-700 hover:text-[#7A0C2E] transition duration-200"
            >
              <Globe size={18} className="mr-1" />
              <span>{language === "ar" ? "English" : "العربية"}</span>
            </button> */}
            {/* <Link
              to="/login"
              className="px-4 py-2 rounded-md text-white bg-[#7A0C2E] hover:bg-[#5A0A22] transition duration-200"
            >
              {language === "ar" ? "تسجيل الدخول" : "Login"}
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* <button
              onClick={toggleLanguage}
              className="px-3 py-3 flex items-center text-gray-700 hover:text-[#7A0C2E] transition duration-200 mr-2"
            > */}
            {/* <Globe size={18} />
            </button> */}
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#7A0C2E] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner">
          <MobileNavLinks language={language} />
          {/* <Link
            to="/login"
            className="block text-center mt-4 px-4 py-2 rounded-md text-white bg-[#7A0C2E] hover:bg-[#5A0A22] transition duration-200"
          >
            {language === "ar" ? "تسجيل الدخول" : "Login"}
          </Link> */}
        </div>
      )}
    </nav>
  );
};

interface NavLinksProps {
  language: 'ar' | 'en';
}

const NavLinks: React.FC<NavLinksProps> = ({ language }) => {
  return (
    <>
      <a
        href="/"
        className="text-gray-700 hover:text-[#7A0C2E] pl-3  transition duration-200"
      >
        {language === "ar" ? "الرئيسية" : "Home"}
      </a>

      <a
        href="#companies"
        className="text-gray-700 hover:text-[#7A0C2E] transition duration-200"
      >
        {language === "ar" ? "الشركات" : "Companies"}
      </a>
      <a
        href="#statistics"
        className="text-gray-700 hover:text-[#7A0C2E] transition duration-200"
      >
        {language === "ar" ? "ورش العمل" : "Workshops"}
      </a>
      <a
        href="#about"
        className="text-gray-700 hover:text-[#7A0C2E] transition duration-200"
      >
        {language === "ar" ? "عن الملتقى" : "About"}
      </a>
    </>
  );
};

const MobileNavLinks: React.FC<NavLinksProps> = ({ language }) => {
  return (
    <div className="flex flex-col space-y-4">
      <a
        href="/"
        className="text-gray-700 hover:text-[#7A0C2E] transition duration-200 text-center py-2"
      >
        {language === "ar" ? "الرئيسية" : "Home"}
      </a>

      <a
        href="#companies"
        className="text-gray-700 hover:text-[#7A0C2E] transition duration-200 text-center py-2"
      >
        {language === "ar" ? "الشركات" : "Companies"}
      </a>
      <a
        href="#statistics"
        className="text-gray-700 hover:text-[#7A0C2E] transition duration-200 text-center py-2"
      >
        {language === "ar" ? "ورش العمل" : "Workshops"}
      </a>
      <a
        href="#about"
        className="text-gray-700 hover:text-[#7A0C2E] transition duration-200 text-center py-2"
      >
        {language === "ar" ? "عن الملتقى" : "About"}
      </a>
    </div>
  );
};

export default Navbar;