import React, { useState, useEffect } from 'react';
import { Stethoscope, Star, Users, BriefcaseMedical } from 'lucide-react';


function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16); 

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]); 

  return count;
}

const StatCard = ({ icon, count, label, suffix = '+' }) => {
  const animatedCount = useCountUp(count);
  
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl">
      <div className="mb-4 text-blue-600">
        {icon}
      </div>
      <span className="text-5xl font-bold text-gray-800">
        {animatedCount}{suffix}
      </span>
      <p className="text-lg text-gray-500 mt-2">{label}</p>
    </div>
  );
};


const Services = () => {
  const stats = [
    {
      icon: <Stethoscope size={48} />,
      count: 199,
      label: "Total Doctors",
    },
    {
      icon: (
        <div className="flex gap-1 text-yellow-500">
          <Star size={24} fill="currentColor" />
          <Star size={24} fill="currentColor" />
          <Star size={24} fill="currentColor" />
        </div>
      ),
      count: 467,
      label: "Total Reviews",
    },
    {
      icon: <Users size={48} />,
      count: 1900,
      label: "Patients",
    },
    {
      icon: <BriefcaseMedical size={48} />,
      count: 300,
      label: "Total Stuffs",
    },
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bol mb-4">
            We Provide Best Medical Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              count={stat.count}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
