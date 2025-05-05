import React from 'react';
import { Search, Building } from 'lucide-react';
import { companies } from '../data/mockData';
import CompanyCard from '../components/CompanyCard';

const CompaniesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-[#7A0C2E] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            الشركات المشاركة
          </h1>
          <p className="text-white/90 text-center max-w-2xl mx-auto mb-8">
            تعرف على الشركات والمؤسسات المشاركة في الملتقى التوظيفي السابع واستكشف فرص العمل التي تقدمها
          </p>
          
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن شركة..."
                className="w-full py-3 px-4 pr-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600">يشارك في الملتقى {companies.length} شركة ومؤسسة</p>
          <div className="flex items-center">
            <Building className="ml-2 text-[#7A0C2E]" />
            <h2 className="text-xl font-bold text-gray-800">الشركات المشاركة</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesPage;