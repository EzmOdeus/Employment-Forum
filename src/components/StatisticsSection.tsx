import React, { useEffect, useState } from 'react';
import { Briefcase, Building, UserPlus, Award } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  count: number;
  target: number;
  label: string;
}

const StatisticsSection: React.FC = () => {
  const stats: StatItem[] = [
    {
      icon: <Building className="h-10 w-10 text-[#DEB13C]" />,
      count: 0,
      target: 25,
      label: 'شركة مشاركة'
    },
    {
      icon: <Briefcase className="h-10 w-10 text-[#DEB13C]" />,
      count: 0,
      target: 150,
      label: 'فرصة عمل'
    },
    {
      icon: <UserPlus className="h-10 w-10 text-[#DEB13C]" />,
      count: 0,
      target: 500,
      label: 'مشارك مسجل'
    },
    {
      icon: <Award className="h-10 w-10 text-[#DEB13C]" />,
      count: 0,
      target: 12,
      label: 'ورشة عمل'
    }
  ];

  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => 
        prev.map((count, i) => {
          if (count < stats[i].target) {
            const increment = Math.ceil(stats[i].target / 30);
            return Math.min(count + increment, stats[i].target);
          }
          return count;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#7A0C2E] py-16" id='statistics'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          أرقام وإحصائيات الملتقى
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-[#7A0C2E] mb-2">
                {counters[index]}+
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;