"use client";

export default function AboutUs() {
  return (
    <section className="px-6 lg:px-32 pt-12 bg-white">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10">

        <div className="w-full lg:w-1/2 fade-in-delay-1">
          <div className="lg:hidden w-full rounded-xl overflow-hidden mb-6">
            <img
              src="/images/const.jpg"
              alt="About Us Mobile"
              className="object-cover w-full h-auto"
            />
          </div>

          <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-4 h-[320px]">
            <div className="bg-principal text-white font-bold text-xl flex items-center justify-center rounded-xl h-full text-center leading-snug p-4 fade-in-delay-2 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg">
              ABOUT<br />US
            </div>

            <div className="rounded-xl overflow-hidden relative h-full fade-in-delay-3 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
              <img
                src="/images/alger3.jpg"
                alt="Top Half"
                className="object-cover w-full h-full absolute top-0 left-0"
              />
            </div>

            <div className="col-span-2 rounded-xl overflow-hidden relative h-full fade-in-delay-2 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
              <img
                src="/images/const.jpg"
                alt="Bottom Half"
                className="object-cover w-full h-full absolute top-0 left-0"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center fade-in-delay-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 fade-in-delay-2 hover:text-principal transition-colors duration-300 ease-in-out">
            About Us
          </h2>
          <p className="text-gray-600 text-left mb-4 text-base md:text-lg fade-in-delay-3 hover:text-gray-900 transition-colors duration-300 ease-in-out">
            Created in 2017, Properties Management is quickly establishing itself in the Corporate Workplace market in Algeria with its vision of full support, the competence of these resources and its wide network of local and global partners.
          </p>
          <p className="text-gray-600 text-left text-base md:text-lg fade-in-delay-3 hover:text-gray-900 transition-colors duration-300 ease-in-out">
            Since 2022, Properties management extended its presence to Morocco and Tunisia to ensure synergies to our clients where we can make a difference.
          </p>
        </div>
      </div>
    </section>
  );
}
