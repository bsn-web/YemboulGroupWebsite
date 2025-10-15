"use client";
import { FaBullhorn, FaHandshake, FaBuilding, FaCog } from "react-icons/fa"; 

export default function Values() {
  return (
    <section className="px-8 lg:px-44 py-8 bg-white">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Added Value
          </h2>

          <ul className="space-y-6 text-gray-600 text-base md:text-lg">
            <li className="flex items-start gap-4 hover:scale-105 transform transition-all duration-300">
              <span className="text-3xl text-principal">
                <FaBullhorn />
              </span>
              <span>Deep understanding of key markets and sectors</span>
            </li>
            <li className="flex items-start gap-4 hover:scale-105 transform transition-all duration-300">
              <span className="text-3xl text-principal">
                <FaCog />
              </span>
              <span>Optimize your real estate strategy with a tenant representation solution that meets your unique business needs, for the right space and on the right terms.</span>
            </li>
            <li className="flex items-start gap-4 hover:scale-105 transform transition-all duration-300">
              <span className="text-3xl text-principal">
                <FaHandshake />
              </span>
              <span>Negotiating the best possible leasing terms</span>
            </li>
            <li className="flex items-start gap-4 hover:scale-105 transform transition-all duration-300">
              <span className="text-3xl text-principal">
                <FaBuilding />
              </span>
              <span>Approach our clients’ challenges with enthusiasm and diligence, building long-term relationships</span>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="lg:hidden w-full rounded-xl overflow-hidden mb-6">
            <img
  src="/images/Added Value.jpg"
  alt="Our Values "
  className="object-cover w-full h-auto rounded-xl"
/>
          </div>

          <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-4 h-[250px]">
            <div className="bg-principal text-white font-bold text-xl flex items-center justify-center rounded-xl h-full text-center leading-snug p-4">
              ADDED<br />VALUE
            </div>

            <div className="rounded-xl overflow-hidden relative h-full">
              <img
  src="/images/Added Value.jpg"
  alt="Top Half"
  className="object-cover rounded-xl w-full h-full"
/>

            </div>

            <div className="col-span-2 rounded-xl overflow-hidden relative h-full">
              <img
  src="/images/Added Value.jpg"
  alt="Bottom Half"
  className="object-cover object-bottom rounded-xl w-full h-full"
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
