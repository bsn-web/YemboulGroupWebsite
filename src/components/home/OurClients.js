import React from 'react';

const OurClients = () => {
  const logos = Array.from({ length: 56 }, (_, i) => {
    const id = i + 1;
    return `/images/partners/${id}.${id === 1 || id === 10 || id === 16 || id === 56 ? 'jpg' : 'png'}`;
  });

  return (
    <section className="py-12 px-8 md:px-32 bg-white overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
        Our Clients
      </h2>

      <div className="relative w-full">
        <div className="flex w-max animate-marquee gap-12">
          {logos.map((logo, index) => (
            <div key={index} className="relative h-20 w-36 flex-shrink-0">
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="object-contain h-full w-full"
                loading={index < 6 ? 'eager' : 'lazy'}
                sizes="(max-width: 640px) 100px, 140px"
              />
            </div>
          ))}

          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="relative h-20 w-36 flex-shrink-0">
              <img
                src={logo}
                alt={`Client logo duplicate ${index + 1}`}
                className="object-contain h-full w-full"
                loading="lazy"
                sizes="(max-width: 640px) 100px, 140px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
