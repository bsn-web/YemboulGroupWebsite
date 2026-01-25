"use client";
import { useState } from 'react';
import { FaPhone, FaMobileAlt, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import { MdPhoneAndroid, MdPhone } from "react-icons/md";
import { FiMail } from "react-icons/fi";

const ContactData = () => {
    const [selectedCountry, setSelectedCountry] = useState("algeria");

  const addresses = {
    algeria: {
      city: "Algiers",
      address:
        "Cité Said Hamdin N°195/574 Bt° N°50 1er Etage, Bir Mourad Rais, Alger",
      image: "/images/algeria2.jpg",
    },
    morocco: {
      city: "Casablanca",
      address: "45 Bd d'Anfa, Casablanca 20000, Morocco",
      image: "/images/morocco2.jpg",
    },
  };
  const active = addresses[selectedCountry];



  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light tracking-tight text-gray-900 mb-2 text-center">
          Get In <span className="font-medium">Touch</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        </p>

       
         
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start justify-center">
                 <div className="flex flex-col gap-6 items-center">
                   <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:bg-[#f7fafc] transition max-w-md w-full">
                     <h4 className="text-xl font-semibold text-gray-800 mb-3">Call Us</h4>
                     <div className="flex items-center gap-2 text-gray-600 mb-2">
                       <MdPhone className="text-principal text-2xl" />
                       <span className="text-lg">+213 (0)23 46 24 49</span>
                     </div>
                     <div className="flex items-center gap-2 text-gray-600">
                       <MdPhoneAndroid className="text-principal text-2xl" />
                       <span className="text-lg">+213 661 990 264</span>
                     </div>
                   </div>
         
                   <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:bg-[#f7fafc] transition max-w-md w-full">
                     <h4 className="text-xl font-semibold text-gray-800 mb-3">Email Us</h4>
                     <div className="flex items-center gap-2 text-gray-600">
                       <FiMail className="text-principal text-2xl" />
                       <span className="text-lg">contact@yemboulgroup.com</span>
                     </div>
                   </div>
         
                   <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:bg-[#f7fafc] transition max-w-md w-full">
                     <h4 className="text-xl font-semibold text-gray-800 mb-3">Follow Us</h4>
                     <a
                       href="https://www.linkedin.com/company/yemboulgroup"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center gap-3 text-principal hover:text-[#0056b3] transition"
                     >
                       <FaLinkedin className="text-2xl" />
                       <span className="text-lg font-medium">LinkedIn</span>
                     </a>
                   </div>
                 </div>
         
                 <div className="flex flex-col items-center">
                   <div className="flex gap-4 mb-6">
                     {Object.keys(addresses).map((country) => (
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
         
                   <div className="mb-6 text-center">
                     <p className="text-lg font-semibold text-gray-800">{active.city}</p>
                     <p className="text-sm text-gray-600">{active.address}</p>
                   </div>
         
                   <div className="w-full h-64 relative rounded-xl overflow-hidden border shadow-lg max-w-md">
                    <img
  src={active.image}
  alt={active.city}
  className="w-full h-full object-cover"
/>

                   </div>
         
                   <p className="mt-4 text-xs text-gray-500">
                     We're proudly located in North Africa.
                   </p>
                 </div>
               </div>
               </div>
    </section>
  );
};

export default ContactData;
