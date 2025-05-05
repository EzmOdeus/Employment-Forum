import React, { useState } from 'react';
import { Search, Briefcase, Filter, X } from 'lucide-react';
import JobCard from '../components/JobCard';
import { jobs } from '../data/mockData';

const JobsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = Array.from(new Set(jobs.map(job => job.category)));
  const types = ['full-time', 'part-time', 'internship', 'contract'];
  
  const getJobTypeText = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'دوام كامل';
      case 'part-time':
        return 'دوام جزئي';
      case 'internship':
        return 'تدريب';
      case 'contract':
        return 'تعاقد';
      default:
        return type;
    }
  };
  
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = searchTerm === '' || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = selectedCategory === null || job.category === selectedCategory;
    
    const matchesType = selectedType === null || job.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSelectedType(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-[#7A0C2E] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            فرص العمل المتاحة
          </h1>
          <p className="text-white/90 text-center max-w-2xl mx-auto mb-8">
            استعرض أحدث فرص العمل المتاحة من الشركات والمؤسسات المشاركة في الملتقى التوظيفي السابع
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row items-stretch">
            <div className="flex-1 mb-4 md:mb-0 md:ml-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث عن وظيفة، شركة، أو مهارة..."
                  className="w-full py-3 px-4 pr-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <button
              className="md:hidden bg-gray-100 text-gray-700 py-3 px-6 rounded-md mb-4 flex items-center justify-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} className="ml-2" />
              {showFilters ? 'إخفاء المرشحات' : 'عرض المرشحات'}
            </button>
            <button className="bg-[#7A0C2E] text-white py-3 px-6 rounded-md hover:bg-[#5A0A22] transition-colors">
              بحث
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-500 hover:text-[#7A0C2E] flex items-center"
                >
                  <X size={14} className="ml-1" />
                  مسح الكل
                </button>
                <h3 className="font-bold text-gray-800">المرشحات</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-3 text-right">الفئة</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center justify-end">
                      <label className="text-gray-700 cursor-pointer select-none text-right">
                        {category}
                      </label>
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="ml-2 accent-[#7A0C2E]"
                      />
                    </div>
                  ))}
                  <div className="flex items-center justify-end">
                    <label className="text-gray-700 cursor-pointer select-none">
                      الكل
                    </label>
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === null}
                      onChange={() => setSelectedCategory(null)}
                      className="ml-2 accent-[#7A0C2E]"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-3 text-right">نوع الوظيفة</h4>
                <div className="space-y-2">
                  {types.map((type) => (
                    <div key={type} className="flex items-center justify-end">
                      <label className="text-gray-700 cursor-pointer select-none">
                        {getJobTypeText(type)}
                      </label>
                      <input
                        type="radio"
                        name="type"
                        checked={selectedType === type}
                        onChange={() => setSelectedType(type)}
                        className="ml-2 accent-[#7A0C2E]"
                      />
                    </div>
                  ))}
                  <div className="flex items-center justify-end">
                    <label className="text-gray-700 cursor-pointer select-none">
                      الكل
                    </label>
                    <input
                      type="radio"
                      name="type"
                      checked={selectedType === null}
                      onChange={() => setSelectedType(null)}
                      className="ml-2 accent-[#7A0C2E]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Filters - Mobile */}
          {showFilters && (
            <div className="md:hidden bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-500 hover:text-[#7A0C2E] flex items-center"
                >
                  <X size={14} className="ml-1" />
                  مسح الكل
                </button>
                <h3 className="font-bold text-gray-800">المرشحات</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-3 text-right">الفئة</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center justify-end">
                      <label className="text-gray-700 cursor-pointer select-none text-right">
                        {category}
                      </label>
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="ml-2 accent-[#7A0C2E]"
                      />
                    </div>
                  ))}
                  <div className="flex items-center justify-end">
                    <label className="text-gray-700 cursor-pointer select-none">
                      الكل
                    </label>
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === null}
                      onChange={() => setSelectedCategory(null)}
                      className="ml-2 accent-[#7A0C2E]"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-3 text-right">نوع الوظيفة</h4>
                <div className="space-y-2">
                  {types.map((type) => (
                    <div key={type} className="flex items-center justify-end">
                      <label className="text-gray-700 cursor-pointer select-none">
                        {getJobTypeText(type)}
                      </label>
                      <input
                        type="radio"
                        name="type"
                        checked={selectedType === type}
                        onChange={() => setSelectedType(type)}
                        className="ml-2 accent-[#7A0C2E]"
                      />
                    </div>
                  ))}
                  <div className="flex items-center justify-end">
                    <label className="text-gray-700 cursor-pointer select-none">
                      الكل
                    </label>
                    <input
                      type="radio"
                      name="type"
                      checked={selectedType === null}
                      onChange={() => setSelectedType(null)}
                      className="ml-2 accent-[#7A0C2E]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Results */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">تم العثور على {filteredJobs.length} وظيفة</p>
              <div className="flex items-center">
                <Briefcase className="ml-2 text-[#7A0C2E]" />
                <h2 className="text-xl font-bold text-gray-800">فرص العمل</h2>
              </div>
            </div>
            
            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">لم يتم العثور على وظائف</h3>
                <p className="text-gray-600">
                  لم نتمكن من العثور على وظائف تطابق معايير البحث الخاصة بك.
                  <br />
                  حاول تغيير المرشحات أو البحث عن كلمات أخرى.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;