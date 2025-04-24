import React from 'react';
import { MapPin, Briefcase, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const postedDate = new Date(job.postedAt);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - postedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const getJobTypeClass = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'bg-green-100 text-green-800';
      case 'part-time':
        return 'bg-blue-100 text-blue-800';
      case 'internship':
        return 'bg-purple-100 text-purple-800';
      case 'contract':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
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

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-1 text-right">{job.title}</h3>
            <p className="text-[#7A0C2E] font-medium text-right">{job.company}</p>
          </div>
          <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
            {job.logo ? (
              <img src={job.logo} alt={job.company} className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-[#7A0C2E]">
                <span className="text-white font-bold">{job.company.charAt(0)}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap mb-4 justify-end gap-2">
          <div className="flex items-center text-gray-600 text-sm">
            <span>{job.location}</span>
            <MapPin size={16} className="mr-2" />
          </div>
          <div className="flex items-center text-gray-600 text-sm mr-4">
            <span>{getJobTypeText(job.type)}</span>
            <Briefcase size={16} className="mr-2" />
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 text-right line-clamp-2">{job.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 justify-end">
          <span className={`text-xs px-3 py-1 rounded-full ${getJobTypeClass(job.type)}`}>
            {getJobTypeText(job.type)}
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-800">
            {job.category}
          </span>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <Link
            to={`/jobs/${job.id}`}
            className="text-[#7A0C2E] hover:text-[#5A0A22] font-medium"
          >
            تفاصيل الوظيفة
          </Link>
          
          <div className="flex items-center text-gray-500 text-sm">
            <span>منذ {diffDays} يوم</span>
            <Clock size={16} className="mr-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;