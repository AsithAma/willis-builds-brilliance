
import React, { useState, useEffect, useRef } from "react";

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const Stat: React.FC<StatProps> = ({ value, label, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const countStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countStarted.current) {
          countStarted.current = true;
          startCounting();
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress === 1) {
        clearInterval(interval);
      }
    }, 20);
  };

  return (
    <div ref={countRef} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-willis-red mb-2 animate-pulse-subtle">
        {count}
        {suffix}
      </div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
};

const StatsCounter: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="willis-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <div className="w-24 h-1 bg-willis-red mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Stat value={37} label="Years of Excellence" suffix="+" />
          <Stat value={500} label="Projects Completed" suffix="+" />
          <Stat value={150} label="Skilled Employees" suffix="+" />
          <Stat value={95} label="Client Satisfaction" suffix="%" />
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
