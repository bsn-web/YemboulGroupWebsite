"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function OurPartners() {
  const partners = [
    { src: "/images/partners/p1.png", alt: "Partner 1" },
    { src: "/images/partners/p2.png", alt: "Partner 2" },
    { src: "/images/partners/p3.jpg", alt: "Partner 3" },
    { src: "/images/partners/p4.jpg", alt: "Partner 4" },
    { src: "/images/partners/p5.png", alt: "Partner 5" },
    { src: "/images/partners/p6.png", alt: "Partner 6" },
    { src: "/images/partners/p7.png", alt: "Partner 7" },
    { src: "/images/partners/p8.png", alt: "Partner 8" },
  ];

  const duplicatedPartners = [...partners, ...partners];
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isInView, controls]);

  return (
    <section className="px-4 sm:py-16 bg-white overflow-hidden">
      <div className="text-center mb-12 mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Partners
        </h2>
        <p className="text-gray-600 mt-3 md:mt-4 text-sm sm:text-base mx-4 sm:mx-auto">
          We proudly collaborate with a network of trusted partners who share our values of excellence and innovation.
        </p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div ref={containerRef} className="overflow-hidden py-4">
          <motion.div 
            animate={controls}
            className="flex items-center gap-8 sm:gap-12 md:gap-16 w-max"
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.alt}-${index}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-24 h-16 sm:w-32 sm:h-20 relative shrink-0"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="object-contain w-full h-full transition-all duration-300"
                  sizes="(max-width: 640px) 96px, 128px"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
