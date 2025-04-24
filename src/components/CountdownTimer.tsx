import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string; // Format: 'YYYY-MM-DD'
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-[#7A0C2E]/10 p-8 rounded-xl shadow-lg my-12">
      <h3 className="text-2xl font-bold text-center text-[#7A0C2E] mb-6">الوقت المتبقي للملتقى</h3>
      
      <div className="flex flex-wrap justify-center gap-4">
        <TimeBox value={timeLeft.days} label="يوم" />
        <TimeBox value={timeLeft.hours} label="ساعة" />
        <TimeBox value={timeLeft.minutes} label="دقيقة" />
        <TimeBox value={timeLeft.seconds} label="ثانية" />
      </div>
    </div>
  );
};

interface TimeBoxProps {
  value: number;
  label: string;
}

const TimeBox: React.FC<TimeBoxProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#7A0C2E] text-white text-3xl font-bold w-20 h-20 rounded-lg flex items-center justify-center shadow-md">
        {value}
      </div>
      <span className="mt-2 text-[#7A0C2E] font-medium">{label}</span>
    </div>
  );
};

export default CountdownTimer;