import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <motion.div
      className="relative h-[600px] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#7A0C2E]/80 to-[#7A0C2E]/60">
        <img
          src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Employment Forum"
          className="w-full h-full object-cover absolute inset-0 -z-10"
        />
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <div className="text-center md:text-right max-w-3xl md:mr-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            الملتقى التوظيفي السابع لكلية التربية النوعية بعنوان التعليم النوعي
            والذكاء الاصطناعي كمدخل لتحقيق التنمية المستدامه
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            استكشف فرص العمل والتدريب وشارك في ورش العمل المتخصصة للانطلاق في
            حياتك المهنية
          </p>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 md:space-x-reverse justify-center md:justify-start mb-8">
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
              <Calendar className="h-5 w-5 text-[#DEB13C]" />
              <span className="text-white mr-2">7 مايو 2025</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
              <MapPin className="h-5 w-5 text-[#DEB13C]" />
              <span className="text-white mr-2">
                كلية التربية النوعية - جامعة الإسكندرية
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/register"
              className="bg-[#DEB13C] text-[#7A0C2E] px-8 py-3 rounded-md text-lg font-bold hover:bg-[#c99b2c] transition-all transform hover:-translate-y-1 shadow-lg"
            >
              سجل الآن
            </Link>
            <Link
              to="/jobs"
              className="bg-white text-[#7A0C2E] px-8 py-3 rounded-md text-lg font-bold hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-lg"
            >
              تصفح الوظائف
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl h-24">
        <div className="container mx-auto px-4 h-full">
          <div className="bg-white shadow-xl rounded-2xl -mt-8 p-4 flex flex-col md:flex-row items-stretch">
            <div className="flex-1 mb-4 md:mb-0 md:mr-4">
              <div className="relative text-center   text-[#7A0C2E] font-extrabold text-3xl py-3 ">
                <p>ابحث عن وظائف، شركات، أو ورش عمل...</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </motion.div>
  );
};

export default Hero;      
