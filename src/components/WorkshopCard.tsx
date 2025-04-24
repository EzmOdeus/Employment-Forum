import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Workshop } from '../types';

interface WorkshopCardProps {
  workshop: Workshop;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ workshop }) => {
  const capacityPercentage = (workshop.registeredCount / workshop.capacity) * 100;
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('ar-EG', options);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col">
      <div className="h-48 overflow-hidden relative">
        <img
          src={workshop.image || 'https://images.pexels.com/photos/7681731/pexels-photo-7681731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
          alt={workshop.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#7A0C2E]/80 to-transparent"></div>
        <div className="absolute bottom-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white mb-1 text-right">{workshop.title}</h3>
          <p className="text-white/90 text-sm">{workshop.speaker} - {workshop.speakerTitle}</p>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <p className="text-gray-600 mb-4 text-right">{workshop.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-end text-gray-600">
            <span>{formatDate(workshop.date)}</span>
            <Calendar size={16} className="mr-2 text-[#7A0C2E]" />
          </div>
          <div className="flex items-center justify-end text-gray-600">
            <span>{workshop.time}</span>
            <Clock size={16} className="mr-2 text-[#7A0C2E]" />
          </div>
          <div className="flex items-center justify-end text-gray-600">
            <span>{workshop.location}</span>
            <MapPin size={16} className="mr-2 text-[#7A0C2E]" />
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>{workshop.registeredCount}/{workshop.capacity}</span>
            <div className="flex items-center">
              <span>المقاعد المتاحة</span>
              <Users size={16} className="mr-1" />
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#7A0C2E] h-2 rounded-full"
              style={{ width: `${capacityPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="p-6 pt-0">
        <button className={`w-full py-3 rounded-md font-medium ${
          workshop.registeredCount >= workshop.capacity
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-[#7A0C2E] text-white hover:bg-[#5A0A22]'
        } transition-colors`}>
          {workshop.registeredCount >= workshop.capacity ? 'اكتملت المقاعد' : 'سجل الآن'}
        </button>
      </div>
    </div>
  );
};

export default WorkshopCard;