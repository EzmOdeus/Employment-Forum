import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "الملتقى التوظيفي السابع كان فرصة ممتازة للتواصل مع الشركات وفهم احتياجات سوق العمل. حصلت على وظيفة من خلال الملتقى العام الماضي وأنا ممتن جداً لهذه الفرصة.",
    name: "أحمد محمود",
    title: "خريج كلية التربية النوعية، دفعة 2024",
    avatar: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    content: "كانت ورش العمل المقدمة في الملتقى مفيدة جداً لتحسين مهاراتي في كتابة السيرة الذاتية واجتياز المقابلات. أوصي جميع الطلاب والخريجين بالمشاركة.",
    name: "سارة علي",
    title: "طالبة بكلية التربية النوعية",
    avatar: "https://images.pexels.com/photos/3767409/pexels-photo-3767409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    content: "كشركة مشاركة، وجدنا الملتقى التوظيفي السابع فرصة ممتازة لاستقطاب المواهب الشابة والتعرف على خريجي الكلية المميزين. نتطلع للمشاركة مرة أخرى هذا العام.",
    name: "محمد خالد",
    title: "مدير الموارد البشرية، شركة تكنولوجيا الإسكندرية",
    avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          ماذا يقول المشاركون عنا
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
              <button
                onClick={prevTestimonial}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-[#7A0C2E]" />
              </button>
            </div>
            
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
              <button
                onClick={nextTestimonial}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-[#7A0C2E]" />
              </button>
            </div>
            
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-12"
                >
                  <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#DEB13C]">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-[#7A0C2E] rounded-full p-2">
                        <Quote className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {testimonial.content}
                    </p>
                    
                    <h4 className="font-bold text-gray-800 mb-1">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-[#7A0C2E]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;