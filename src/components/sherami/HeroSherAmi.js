'use client';
import Image from 'next/image';
import { FaBuilding, FaRulerCombined, FaChartBar, FaArrowRight } from 'react-icons/fa';

export default function HeroSherAmi() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex flex-col md:flex-row h-auto md:h-[calc(100vh-80px)]">

        <div className="flex-1 flex flex-col justify-center p-8 sm:p-32 bg-white text-gray-800">
          <div className="max-w-2xl space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Real Estate Service
            </h2>

            <p className="text-sm sm:text-base leading-relaxed">
              Properties Management is a privately owned commercial real estate advisory firm and one of the top firms in its activity sector in Algeria, with privileged partnership relations with world best class real estate experts. Thanks to our expertise, market know-how, and reputation for handling large and complex real estate projects, you can trust us to deliver and work effectively with you on this exciting journey.
            </p>

            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-center">
              <div className="flex flex-col items-center">
                <FaBuilding className="text-3xl text-principal mb-2" />
                <span className="text-3xl font-extrabold">49+</span>
                <span className="text-sm mt-1">Real Estate Transactions</span>
              </div>
              <div className="flex flex-col items-center">
                <FaRulerCombined className="text-3xl text-principal mb-2" />
                <span className="text-3xl font-extrabold">56 113 sq</span>
                <span className="text-sm mt-1">Area Rented</span>
              </div>
              <div className="flex flex-col items-center">
                <FaChartBar className="text-3xl text-principal mb-2" />
                <span className="text-3xl font-extrabold">14+</span>
                <span className="text-sm mt-1">Market Studies</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative min-h-[300px] md:min-h-[calc(100vh-80px)]">
         <img
  src="/images/about1.jpg"
  alt="About us"
  className="object-cover h-full w-full min-h-[300px] md:min-h-[calc(100vh-80px)]"
/>

        </div>

      </div>
    </section>
  );
}
