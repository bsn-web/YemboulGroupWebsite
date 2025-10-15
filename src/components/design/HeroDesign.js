'use client';
import { FaBuilding, FaCogs, FaArrowRight } from 'react-icons/fa';

export default function HeroDesign() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[80vh] sm:h-[90vh]">
       <img
  src="/images/designhero.jpg"
  alt="Design"
  className="w-full h-full object-cover absolute inset-0"
/>


        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 px-6 sm:px-12 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest leading-tight">
              Design – Project Management & Build
              <br />
              <span className="text-4xl sm:text-[54px] tracking-[0.35em]"> </span>
            </h2>

            <p className="mt-6 text-sm sm:text-base md:max-w-2xl mx-auto leading-relaxed">
              As a continuity of our support package to our clients, we developed a strong expertise in construction phases from:
            </p>

            <div className="mt-8 space-y-4 text-lg sm:text-xl md:text-2xl text-center max-w-2xl mx-auto">
              <div className="flex justify-center items-center gap-4">
                <FaBuilding className="text-principal text-2xl" />
                <span>Design</span>
              </div>
              <div className="flex justify-center items-center gap-4">
                <FaCogs className="text-principal text-2xl" />
                <span>Project Management</span>
              </div>
              <div className="flex justify-center items-center gap-4">
                <FaBuilding className="text-principal text-2xl" />
                <span>Fit Out</span>
              </div>
            </div>

            <div className="mt-10 flex justify-evenly text-lg sm:text-xl md:text-2xl">
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-extrabold">+18</span>
                <span>Office Designs</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-extrabold">+25</span>
                <span>Test Fit Outs</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
