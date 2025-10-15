"use client";

import Link from "next/link";
import { FaBuilding, FaPencilRuler, FaPuzzlePiece } from "react-icons/fa";

const services = [
  {
    title: "Real Estate Services",
    logo: "/images/logo1.png",
    icon: <FaBuilding className="text-5xl" />,
    link: "/sherami",
    country: "Algeria",
  },
  {
    title: "Offices Design, Project Management & Build",
    logo: "/images/logo2.png",
    icon: <FaPencilRuler className="text-5xl" />,
    link: "/design",
    country: "Algeria",
  },
  {
    title: "Integrated Facilities Management",
    logo: "/images/logo3.png",
    icon: <FaPuzzlePiece className="text-5xl" />,
    link: "/services",
    country: "Algeria",
  },
  {
    title: "Integrated Facilities Management",
    logo: "/images/logo4.png",
    icon: <FaPuzzlePiece className="text-5xl" />,
    link: "/services",
    country: "Morocco",
  },
  {
    title: "FM Buildings",
    logo: "/images/fm.jpg",
    icon: <FaBuilding className="text-5xl" />,
    link: "https://www.fmbuildings.com/accueil/",
    country: "Tunisia",
  },
];

const iconColors = [
  "text-one",
  "text-two",
  "text-three",
  "text-four",
  "text-five",
  "text-nine",
];

export default function WhatWeDo() {
  return (
    <section className="py-8 md:py-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What do we do?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {services.map((service, index) => {
            const colorClass = iconColors[index % iconColors.length];

            const CardContent = (
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-2 cursor-pointer h-full">
                <div
                  className={`mb-6 p-4 rounded-full bg-gray-100 group-hover:bg-${colorClass.replace(
                    "text-",
                    ""
                  )}-100 transition-colors`}
                >
                  <div className={`${colorClass}`}>{service.icon}</div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-6 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <div className="mt-auto w-full h-15 relative">
  <img
    src={service.logo}
    alt={service.title}
    className="group-hover:brightness-110 transition duration-300 object-contain w-full h-full"
    loading="lazy"
  />
</div>

                

                <p className="mt-4 text-base text-gray-500 font-medium">
                  {service.country}
                </p>
              </div>
            );

            return (
              <div key={index} className="group h-full">
                {service.link.startsWith("http") ? (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {CardContent}
                  </a>
                ) : (
                  <Link href={service.link} passHref>
                    {CardContent}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
