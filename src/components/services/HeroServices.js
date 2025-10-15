
export default function HeroServices() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <div className="relative w-full h-full">
        <img
  src="/images/heroservices.png"
  alt="Our Services"
  className="object-cover w-full h-full"
  loading="eager"
/>


        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest leading-tight">
              Integrated Facilities Management
            </h1>
            <h2 className="text-2xl text-principal sm:text-3xl md:text-4xl font-semibold mt-4">
              Excellence by Expertise
            </h2>

            <p className="mt-6 text-sm sm:text-base md:max-w-2xl mx-auto leading-relaxed">
            Wherever the client is, whatever the complexity is, whenever challenges occur - 

</p>
            <p className="text-sm sm:text-base md:max-w-2xl mx-auto leading-relaxed">
            Our duty is to deliver, as we are committed to supporting our customers with their property needs.
            </p>

           {/* <button className="mt-8 px-6 py-3 rounded-full bg-principal text-white text-sm font-semibold tracking-widest flex items-center gap-2 hover:bg-bleufonce transition mx-auto">
              LEARN MORE
            </button>*/ }
          </div>
        </div>
      </div>
    </section>
  );
}
