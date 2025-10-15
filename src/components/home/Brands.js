"use client";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

export default function Brands() {
  return (
    <section className="px-6 lg:px-20 py-12 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Brands
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover our brands. We're here
          to help you achieve your goals through effective and modern solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            title: "Property Management",
            img: "/images/logo.png",
            text: "We manage properties in ALGERIA and MOROCCO with a personalized approach to maximize profitability and client satisfaction.",
            link: "/services",
          },
          {
            title: "SherAmi: Real Estate Agency",
            img: "/images/logosher.png",
            text: "Our real estate agency specializes in property sales and rentals across the region, offering expert services for both buyers and sellers.",
            link: "/sherami",
          },
          {
            title: "Interior Design",
            img: "/images/logoconst.png",
            text: "Transform your spaces with high-end, modern, and functional interior design services tailored to your specific needs and style.",
            link: "/design",
          },
        ].map((service, index) => (
          <Link key={index} href={service.link} passHref>
            <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-white flex flex-col">
              <div className="relative w-full h-64 sm:h-72 md:h-[250px] overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">{service.text}</p>
                </div>
                <button className="group inline-flex items-center justify-center text-sm sm:text-base text-[#084973] font-semibold hover:text-[#062e4d] transition">
                  See More
                  <HiArrowNarrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
