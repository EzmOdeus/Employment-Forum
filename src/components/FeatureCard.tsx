import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-b-4 border-[#DEB13C]">
      <div className="bg-[#7A0C2E]/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
        <Icon className="h-8 w-8 text-[#7A0C2E]" />
      </div>
      
      <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{title}</h3>
      
      <p className="text-gray-600 text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;