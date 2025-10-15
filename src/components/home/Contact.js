"use client";
import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { MdPhoneAndroid, MdPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const MapWithLogos = dynamic(() => import("./MapWithLogos"), { ssr: false });

export default function Contact() {
  const [selectedCountry, setSelectedCountry] = useState("algeria");

  const contactData = {
    algeria: {
      city: "Algiers",
      address:
        "12 Chemin de Sidi Yahia, Centre Commercial ZEMZEM n 293-294, Hydra",
      phone1: "+213 (0)23 46 24 49",
      phone2: "+213 661 990 264",
      email: "contact@yemboulgroup.com",
      linkedin:
        "https://www.linkedin.com/company/property-management-maghreb/",
    },
    morocco: {
      city: "Casablanca",
      address:
        "Angle rue Prince Moulay Abdellah et Rue Nakhla, IMM, Etage 4, n°07, Casablanca - Maroc",
      phone1: "+212 552 200 151",
      phone2: "",
      email: "backoffice@yemboulgroup.com",
      linkedin:
        "https://www.linkedin.com/company/property-management-maghreb/",
    },
    tunisia: {
      city: "Tunis",
      address: "Tunisia",
      phone1: "+216 36 36 36 88",
      phone2: "",
      email: "contact@fmbuildings.net",
      linkedin:
        "https://www.linkedin.com/company/property-management-maghreb/",
    },
  };

  const active = contactData[selectedCountry];

  return (
    <section className="bg-white py-20 px-6 lg:px-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Contact Us
        </h2>
      </div>

      <div className="flex flex-col items-center mb-8">
        <div className="flex gap-4">
          {Object.keys(contactData).map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition ${
                selectedCountry === country
                  ? "bg-principal text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {country.charAt(0).toUpperCase() + country.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start justify-center">
        <div className="flex flex-col gap-6 items-center">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:bg-[#f7fafc] transition max-w-md w-full">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Call Us</h4>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <MdPhone className="text-principal text-2xl" />
              <span className="text-lg">{active.phone1}</span>
            </div>
            {active.phone2 && (
              <div className="flex items-center gap-2 text-gray-600">
                <MdPhoneAndroid className="text-principal text-2xl" />
                <span className="text-lg">{active.phone2}</span>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:bg-[#f7fafc] transition max-w-md w-full">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Email Us</h4>
            <div className="flex items-center gap-2 text-gray-600">
              <FiMail className="text-principal text-2xl" />
              <span className="text-lg">{active.email}</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:bg-[#f7fafc] transition max-w-md w-full">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Follow Us</h4>
            <a
              href={active.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-principal hover:text-[#0056b3] transition"
            >
              <FaLinkedin className="text-2xl" />
              <span className="text-lg font-medium">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <div className="mb-6 text-center">
            <p className="text-lg font-semibold text-gray-800">{active.city}</p>
            <p className="text-sm text-gray-600">{active.address}</p>
          </div>
          <MapWithLogos />
        </div>
      </div>
    </section>
  );
}
