"use client";
import { useState, useEffect } from 'react';

const Residences = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cards = [
    {
      id: 2,
      title: 'OBP',
      description: '',
      imageUrl: '/images/OBP.jpg',
    },
    {
      id: 3,
      title: 'Tour AGB',
      description: '',
      imageUrl: '/images/Tour AGB.jpg',
    },
    {
      id: 4,
      title: 'Triangle Building',
      description: '',
      imageUrl: '/images/Triangle Building.jpg',
    },
  ];

  return (
    <section className="px-8 py-12 md:px-32 bg-white">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Buildings</h2>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6`}>
          {cards.map((card) => (
            <div 
              key={card.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="h-72 bg-gray-200 overflow-hidden">
                <img 
                  src={card.imageUrl} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-center font-semibold text-gray-800 mb-2">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Residences;