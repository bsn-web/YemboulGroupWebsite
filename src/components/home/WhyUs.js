"use client";
import React, { useState } from 'react';
import {
  FiChevronLeft,
  FiChevronRight,
  FiHome,
  FiHeadphones,
  FiGlobe,
  FiUsers,
  FiDollarSign,
  FiHeart,
  FiSettings,
  FiTrendingUp,
} from 'react-icons/fi';

const WhyUs = () => {
  const colorClasses = [
    'bg-one',   
    'bg-two',   
    'bg-three', 
    'bg-four',   
    'bg-gray-600',
    'bg-six',
    'bg-seven',
    'bg-one'
  ];

  const features = [
    {
      icon: <FiHome className="w-6 h-6 text-white" />,
      title: 'In-House Experts',
      description: 'Dedicated property specialists working for you.',
    },
    {
      icon: <FiHeadphones className="w-6 h-6 text-white" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance worldwide.',
    },
    {
      icon: <FiGlobe className="w-6 h-6 text-white" />,
      title: 'Global Network',
      description: 'Certified partners globally and locally.',
    },
    {
      icon: <FiUsers className="w-6 h-6 text-white" />,
      title: 'Customer Focus',
      description: 'Your interest first in all relationships.',
    },
    {
      icon: <FiDollarSign className="w-6 h-6 text-white" />,
      title: 'Competitive Costing',
      description: 'Market expertise for your benefit.',
    },
    {
      icon: <FiHeart className="w-6 h-6 text-white" />,
      title: 'Personalized',
      description: 'Solutions tailored to your needs.',
    },
    {
      icon: <FiSettings className="w-6 h-6 text-white" />,
      title: 'Adaptive',
      description: 'Strategies that evolve with you.',
    },
    {
      icon: <FiTrendingUp className="w-6 h-6 text-white" />,
      title: 'Performance Metrics',
      description: 'Transparent KPIs for success.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="py-12 px-4 bg-gradient-to-r from-[#08b3e2] to-[#084973]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-12 text-white leading-tight">
          Why Choose Us
        </h2>

        {/* Mobile - Carousel (shown only on sm) */}
        <div className="sm:hidden relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              <div className="w-full flex-shrink-0 px-6">
                <div className="bg-white rounded-xl p-8 h-full shadow-xl border border-gray-100">
                  <div className="flex items-start mb-6">
                    <div className={`p-4 rounded-lg ${colorClasses[currentIndex % colorClasses.length]} shadow-xl mr-6 text-white`}>
                      {features[currentIndex].icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{features[currentIndex].title}</h3>
                      <p className="text-gray-600 mt-2">{features[currentIndex].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-[#08b3e2]' : 'bg-gray-300'}`}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 p-2 rounded-full bg-transparent hover:bg-[#08b3e2] transition-all">
            <FiChevronLeft className="h-4 w-4 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 p-2 rounded-full bg-transparent hover:bg-[#08b3e2] transition-all">
            <FiChevronRight className="h-4 w-4 text-white" />
          </button>
        </div>

        {/* Tablet - 2 columns (shown on sm-md) */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:transform hover:scale-105">
              <div className="flex items-start flex-col text-center">
                <div className={`p-4 rounded-lg ${colorClasses[index % colorClasses.length]} shadow-lg mb-4 text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop - 4 columns (shown on md+) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:transform hover:scale-105">
              <div className="flex flex-col items-center">
                <div className={`p-4 rounded-lg ${colorClasses[index % colorClasses.length]} shadow-lg mb-4 text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;