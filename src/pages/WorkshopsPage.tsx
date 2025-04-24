import React from 'react';
import { Calendar, Search } from 'lucide-react';
import { workshops } from '../data/mockData';
import WorkshopCard from '../components/WorkshopCard';

const WorkshopsPage: React.FC = () => {
  // Group workshops by date
  const workshopsByDate = workshops.reduce((acc, workshop) => {
    const date = workshop.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(workshop);
    return acc;
  }, {} as Record<string, typeof workshops>);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('ar-EG', options);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-[#7A0C2E] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            ورش العمل والفعاليات
          </h1>
          <p className="text-white/90 text-center max-w-2xl mx-auto mb-8">
            استعرض ورش العمل والفعاليات المقامة خلال الملتقى التوظيفي وسجل في الورش التي تناسب اهتماماتك
          </p>
          
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن ورشة عمل..."
                className="w-full py-3 px-4 pr-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7A0C2E] text-right"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {Object.entries(workshopsByDate).map(([date, dateWorkshops]) => (
          <div key={date} className="mb-12">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{formatDate(date)}</h2>
              <Calendar className="mr-3 text-[#7A0C2E]" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dateWorkshops.map((workshop) => (
                <WorkshopCard key={workshop.id} workshop={workshop} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkshopsPage;