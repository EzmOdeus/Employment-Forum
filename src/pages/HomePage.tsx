import React from 'react';
import { Briefcase as BriefcaseBusiness, GraduationCap, Award, Users, Briefcase, Calendar, Lightbulb, MapPin, Target } from 'lucide-react';

import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import StatisticsSection from '../components/StatisticsSection';
// import TestimonialsSection from '../components/TestimonialsSection';
import LogoGrid from '../components/logo';

const HomePage: React.FC = () => {

  return (
    <div>
      <Hero />

      <div className="container mx-auto px-4 py-16">
        {/* <CountdownTimer targetDate="2025-05-7" /> */}
        <img
          src="/WhatsApp Image 2025-05-06 at 12.00.06 AM.jpeg"
          alt="banner"
          // className=" object-cover"
        />
        <div className="my-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            عن الملتقى التوظيفي السابع
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            الملتقى التوظيفي السابع لكلية التربية النوعية بجامعة الإسكندرية هو
            فعالية سنوية تهدف إلى ربط الطلاب والخريجين بفرص العمل والتدريب. يوفر
            الملتقى منصة للتواصل المباشر مع ممثلي الشركات والمؤسسات، بالإضافة
            إلى ورش عمل متخصصة لتطوير المهارات المهنية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard
            icon={BriefcaseBusiness}
            title="فرص عمل متنوعة"
            description="تواصل مباشر مع الشركات والمؤسسات الرائدة للحصول على فرص عمل في مختلف المجالات"
          />
          <FeatureCard
            icon={GraduationCap}
            title="ورش عمل تدريبية"
            description="ورش عمل متخصصة لتطوير المهارات المهنية وإعداد الطلاب والخريجين لسوق العمل"
          />
          <FeatureCard
            icon={Award}
            title="تدريب متخصص"
            description="  من خبراء في مجال التوظيف لمساعدتك في تطوير مسارك المهني"
          />
          <FeatureCard
            icon={Users}
            title="فرص للتواصل"
            description="بناء شبكة علاقات مهنية قوية والتواصل مع خبراء في مختلف المجالات"
          />
        </div>

        {/* <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <Link
              to="/jobs"
              className="text-[#7A0C2E] hover:text-[#5A0A22] font-medium"
            >
              عرض جميع الوظائف
            </Link>
            <h2 className="text-2xl font-bold text-gray-800">وظائف مميزة</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div> */}

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            كن جزءاً من الملتقى التوظيفي السابع
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            سواء كنت طالباً، خريجاً، أو ممثلاً لشركة، سجل الآن للمشاركة في
            الملتقى التوظيفي السابع واستفد من الفرص المتاحة.
          </p>
          <LogoGrid />
          {/* 
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-[#7A0C2E] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#5A0A22] transition-colors"
            >
              سجل كمشارك
            </Link>
            <Link
              to="/employer/register"
              className="bg-white text-[#7A0C2E] border border-[#7A0C2E] px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors"
            >
              سجل كشركة
            </Link>
          </div> */}
        </div>
      </div>

      <StatisticsSection />
      <div className="bg-gray-50 min-h-screen" id='about'>
        <div className="bg-[#7A0C2E] py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
              عن الملتقى التوظيفي السابع
            </h1>
            <p className="text-white/90 text-center max-w-2xl mx-auto">
              تعرف على ملتقى التوظيف لكلية التربية النوعية بجامعة الإسكندرية
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="h-64 relative">
              <img
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Employment Forum"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7A0C2E] to-transparent"></div>
              <div className="absolute bottom-0 right-0 p-6">
                <h2 className="text-2xl font-bold text-white mb-2 text-right">
                  الملتقى التوظيفي السابع لكلية التربية النوعية
                </h2>
                <div className="flex space-x-4 space-x-reverse">
                  <div className="flex items-center text-white/90">
                    <span>7 مايو 2025</span>
                    <Calendar className="mr-2 h-5 w-5 text-[#DEB13C]" />
                  </div>
                  <div className="flex items-center text-white/90">
                    <span>كلية التربية النوعية - جامعة الإسكندرية</span>
                    <MapPin className="mr-2 h-5 w-5 text-[#DEB13C]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-right">
                    نبذة عن الملتقى
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-right">
                    الملتقى التوظيفي السابع لكلية التربية النوعية بجامعة
                    الإسكندرية هو فعالية سنوية تهدف إلى ربط الطلاب والخريجين
                    بفرص العمل والتدريب. يوفر الملتقى منصة للتواصل المباشر مع
                    ممثلي الشركات والمؤسسات، بالإضافة إلى ورش عمل متخصصة لتطوير
                    المهارات المهنية.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4 text-right">
                    يأتي الملتقى ضمن جهود الكلية لتحقيق التنمية المستدامة من
                    خلال التعليم النوعي والذكاء الاصطناعي، وهو مبادرة رائدة تسعى
                    لتوفير فرص حقيقية للطلاب والخريجين للانخراط في سوق العمل.
                  </p>
                </div>

                <div className="md:w-1/3 flex flex-col justify-center">
                  <div className="bg-[#7A0C2E]/10 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-gray-800 mb-4 text-right">
                      معلومات الملتقى
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-end">
                        <span className="text-gray-700">7 مايو 2025</span>
                        <Calendar className="ml-2 h-5 w-5 text-[#7A0C2E]" />
                      </li>
                      <li className="flex items-center justify-end">
                        <span className="text-gray-700">
                          كلية التربية النوعية - جامعة الإسكندرية
                        </span>
                        <MapPin className="ml-2 h-5 w-5 text-[#7A0C2E]" />
                      </li>
                      <li className="flex items-center justify-end">
                        <span className="text-gray-700">
                          الطلاب، الخريجين، الشركات
                        </span>
                        <Users className="ml-2 h-5 w-5 text-[#7A0C2E]" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-right">
                  أهداف الملتقى
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg flex">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-2 text-right">
                        توفير فرص عمل للخريجين
                      </h4>
                      <p className="text-gray-600 text-right">
                        ربط الخريجين بفرص عمل حقيقية تناسب تخصصاتهم ومهاراتهم
                      </p>
                    </div>
                    <div className="ml-4 p-2 bg-[#7A0C2E]/10 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-[#7A0C2E]" />
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-2 text-right">
                        تنمية المهارات المهنية
                      </h4>
                      <p className="text-gray-600 text-right">
                        تقديم ورش عمل وتدريبات لتطوير مهارات الطلاب والخريجين
                      </p>
                    </div>
                    <div className="ml-4 p-2 bg-[#7A0C2E]/10 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-[#7A0C2E]" />
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-2 text-right">
                        التواصل مع سوق العمل
                      </h4>
                      <p className="text-gray-600 text-right">
                        فتح قنوات اتصال بين الطلاب والشركات والمؤسسات
                      </p>
                    </div>
                    <div className="ml-4 p-2 bg-[#7A0C2E]/10 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-[#7A0C2E]" />
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-2 text-right">
                        الابتكار وريادة الأعمال
                      </h4>
                      <p className="text-gray-600 text-right">
                        تشجيع الابتكار وريادة الأعمال لدى الطلاب والخريجين
                      </p>
                    </div>
                    <div className="ml-4 p-2 bg-[#7A0C2E]/10 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="h-6 w-6 text-[#7A0C2E]" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-right">
                  رعاة الملتقى
                </h3>
                <p className="text-gray-600 mb-6 text-right">
                  يقام الملتقى برعاية كريمة من:
                </p>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 text-right">
                      معالي الأستاذ الدكتور/ عبدالعزيز قنصوة
                    </h4>
                    <p className="text-gray-600 text-right">
                      رئيس جامعة الإسكندرية
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 text-right">
                      معالي الأستاذ الدكتور/ سعيد علام
                    </h4>
                    <p className="text-gray-600 text-right">
                      نائب رئيس جامعة الإسكندرية لشئون خدمة المجتمع والبيئة
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 text-right">
                      الأستاذ الدكتور/ نجدة ماضي
                    </h4>
                    <p className="text-gray-600 text-right">
                      عميد الكلية ورئيس الملتقى
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 text-right">
                      الأستاذ الدكتور/ مها موسى
                    </h4>
                    <p className="text-gray-600 text-right">
                      العميد الأسبق للكلية ونائب رئيس الملتقى القائم بأعمال مدير
                      وحدة ضمان الجودة والاعتماد
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <TestimonialsSection /> */}
    </div>
  );
};

export default HomePage;