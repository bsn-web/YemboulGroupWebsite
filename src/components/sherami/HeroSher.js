"use client";
import React from "react";
import { FaBuilding, FaRulerCombined, FaChartBar, FaArrowRight } from 'react-icons/fa';

const HeroSher = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-y-10 lg:gap-x-12 px-6 lg:px-32 w-full mx-auto pt-10 lg:pb-6">
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
          <h1 className="text-4xl lg:text-5xl font-poppins font-extrabold leading-tight text-gray-800">
         SherAmi: Real Estate Agency
          </h1>

         
          
          <p className="space-y-6 text-gray-600 text-base md:text-lg">
          Properties Management is a privately owned commercial real estate advisory firm and one of the top firms in its activity sector in Algeria, with privileged partnership relations with world best class real estate experts. Thanks to our expertise, market know-how, and reputation for handling large and complex real estate projects, you can trust us to deliver and work effectively with you on this exciting journey.

          </p>
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-center">
              <div className="flex flex-col items-center">
                <FaBuilding className="text-3xl text-principal mb-2" />
                <span className="text-3xl font-extrabold">+49</span>
                <span className="text-sm mt-1">Real Estate Transactions</span>
              </div>
              <div className="flex flex-col items-center">
                <FaRulerCombined className="text-3xl text-principal mb-2" />
                <span className="text-3xl font-extrabold">56 113 sq</span>
                <span className="text-sm mt-1">Area Rented</span>
              </div>
              <div className="flex flex-col items-center">
                <FaChartBar className="text-3xl text-principal mb-2" />
                <span className="text-3xl font-extrabold">+14</span>
                <span className="text-sm mt-1">Market Studies</span>
              </div>
            </div>
        </div>

        <div className="w-full lg:w-1/2 h-[250px] sm:h-[300px] md:h-[420px] relative">
        <img
  src="/images/about1.jpg"
  alt="Modern property management"
  className="object-cover rounded-[32px] w-full h-full"
/>

        </div>
      </div>
    </section>
  );
};

export default HeroSher;