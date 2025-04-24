import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Company } from '../types';

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="h-32 bg-gray-100 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#7A0C2E]/20"></div>
        <div className="absolute bottom-0 right-0 p-4">
          <div className="bg-white p-2 rounded-md shadow-md h-16 w-16 flex items-center justify-center">
            <img
              src={company.logo}
              alt={company.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 text-right">{company.name}</h3>
        
        <p className="text-gray-600 mb-4 text-right line-clamp-2">{company.description}</p>
        
        <div className="flex items-center justify-end mb-4">
          <span className="text-sm text-gray-600">{company.industry}</span>
          <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800 mr-2">
            {company.industry}
          </span>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7A0C2E] hover:text-[#5A0A22] flex items-center font-medium"
          >
            <ExternalLink size={16} className="ml-1" />
            زيارة الموقع
          </a>
          
          <div className="flex items-center text-gray-500 text-sm">
            <span>{company.jobCount} وظائف</span>
            <Briefcase size={16} className="mr-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;