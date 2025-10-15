'use client';

export default function HeroContact() {
  return (
    <section className="relative w-[full] h-[80vh] overflow-hidden">
      <div className="relative w-full h-full">
      <img
  src="/images/contact.jpg"
  alt="Contact us"
  className="w-full h-full object-cover absolute inset-0"
/>


        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest leading-tight">
              Contact Us <br /> 
              <span className="text-4xl sm:text-[54px] tracking-[0.35em]"> </span>
            </h2>
            
            <p className="mt-6 text-sm sm:text-base md:max-w-2xl mx-auto leading-relaxed">
            We're here to assist you. If you have any questions or require support, please don't hesitate to contact us.
            </p>

           
          </div>
        </div>
      </div>
    </section>
  );
}