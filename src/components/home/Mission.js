"use client";

export default function Mission() {
  return (
    <section className="px-6 lg:px-32 py-12 bg-white">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center fade-in-delay-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 fade-in-delay-2 hover:text-principal transition-colors duration-300 ease-in-out">
            Our Mission
          </h2>
          <p className="text-gray-600 text-left mb-4 text-base md:text-lg fade-in-delay-3 hover:text-gray-900 transition-colors duration-300 ease-in-out">
            Through professionalism, dedication, loyalty, and conscientiousness, the company distinguishes itself through its committed workforce as the best in the region.
          </p>
          <p className="text-gray-600 text-left mb-4 text-base md:text-lg fade-in-delay-3 hover:text-gray-900 transition-colors duration-300 ease-in-out">
            We identify ourselves as a unique and privileged partner in the service of compagnies and their assets.
          </p>
          <p className="text-gray-600 text-left mb-4 text-base md:text-lg fade-in-delay-3 hover:text-gray-900 transition-colors duration-300 ease-in-out">
            We deliver high quality services that allow our clients to focus on their area to run and grow their business.
          </p>
          <p className="text-gray-600 text-left mb-4 text-base md:text-lg fade-in-delay-3 hover:text-gray-900 transition-colors duration-300 ease-in-out">
            We place ourselves as a natural extension of key global players in IFM, Real Estate and workplace development.
          </p>
        </div>

        <div className="w-full lg:w-1/2 fade-in-delay-1">
          <div className="lg:hidden w-full rounded-xl overflow-hidden mb-6">
           <img
  src="/images/goal.jpg"
  alt="Our Mission "
  className="object-cover w-full h-auto rounded-xl overflow-hidden mb-6"
/>
          </div>

          <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-4 h-[320px]">
            <div className="bg-principal text-white font-bold text-xl flex items-center justify-center rounded-xl h-full text-center leading-snug p-4 fade-in-delay-2 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg">
              OUR<br />MISSION
            </div>

            <div className="rounded-xl overflow-hidden relative h-full fade-in-delay-3 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
             <img
  src="/images/goal.jpg"
  alt="Top Half"
  className="object-cover object-top rounded-xl overflow-hidden h-full w-full"
/>
            </div>

            <div className="col-span-2 rounded-xl overflow-hidden relative h-full fade-in-delay-2 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
              <img
  src="/images/goal.jpg"
  alt="Bottom Half"
  className="object-cover object-bottom rounded-xl overflow-hidden h-full w-full"
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}