"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-y-10 lg:gap-x-12 px-6 lg:px-32 w-full mx-auto pt-10 lg:pb-6">
        
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start gap-6 fade-in delay-150">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-extrabold leading-tight text-gray-800 hover:text-bleufonce transition-colors duration-300 ease-in-out">
            Properties Management
          </h1>

          <p className="text-gray-500 font-extrabold text-left text-lg lg:text-xl max-w-full lg:max-w-2xl leading-relaxed hover:text-gray-700 transition-colors duration-300 ease-in-out fade-in delay-200">
            A unique and privileged Partner...{" "}
            <span className="text-principal">Properties Solutions</span>
          </p>

          <p className="text-gray-500 text-left text-lg lg:text-xl max-w-full lg:max-w-2xl leading-relaxed hover:text-gray-700 transition-colors duration-300 ease-in-out fade-in delay-250">
            Explore a wide range of services designed to provide seamless and efficient property management tailored to your needs.
          </p>
        </div>

        <div className="w-full lg:w-1/2 h-[250px] sm:h-[300px] md:h-[420px] relative hover:scale-105 transition-all duration-300 ease-in-out fade-in delay-300">
          <img
            src="/images/homehero.jpg"
            alt="Modern property management"
            className="object-cover w-full h-full rounded-[32px]"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
