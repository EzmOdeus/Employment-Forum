import React from 'react';
import { Briefcase as BriefcaseBusiness, GraduationCap, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import CountdownTimer from '../components/CountdownTimer';
import FeatureCard from '../components/FeatureCard';
import StatisticsSection from '../components/StatisticsSection';
// import TestimonialsSection from '../components/TestimonialsSection';
import { jobs } from '../data/mockData';
import JobCard from '../components/JobCard';

const HomePage: React.FC = () => {
  const featuredJobs = jobs.slice(0, 3);

  return (
    <div>
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        <CountdownTimer targetDate="2025-04-28" />
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            عن الملتقى التوظيفي
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            الملتقى التوظيفي لكلية التربية النوعية بجامعة الإسكندرية هو فعالية سنوية تهدف إلى ربط الطلاب والخريجين بفرص العمل والتدريب. يوفر الملتقى منصة للتواصل المباشر مع ممثلي الشركات والمؤسسات، بالإضافة إلى ورش عمل متخصصة لتطوير المهارات المهنية.
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

        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <Link to="/jobs" className="text-[#7A0C2E] hover:text-[#5A0A22] font-medium">
              عرض جميع الوظائف
            </Link>
            <h2 className="text-2xl font-bold text-gray-800">
              وظائف مميزة
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            كن جزءاً من الملتقى التوظيفي
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            سواء كنت طالباً، خريجاً، أو ممثلاً لشركة، سجل الآن للمشاركة في الملتقى التوظيفي واستفد من الفرص المتاحة.
          </p>
          
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
          </div>
        </div>
      </div>
      
      <StatisticsSection />
      {/* <TestimonialsSection /> */}
    </div>
  );
};

export default HomePage;