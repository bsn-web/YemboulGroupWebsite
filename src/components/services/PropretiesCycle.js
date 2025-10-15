'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const data = [
  {
    title: "Data Analyze & Properties Strategy",
    items: ["Collect Data", "Assess Change", "Capture requirement", "Propose Strategy", "Space Usage Analysis"],
    icon: "📊"
  },
  {
    title: "Real Estate Support",
    items: ["Markets and Properties assessments", "Lease negotiation", "Due Diligence : Technical, Safety", "Support client to identify needs, Offices-Camps-Guest houses..."],
    icon: "🏢"
  },
  {
    title: "Integrated Facilities Managements",
    items: ["Day to Day F.M operations", "EHS", "Security", "IT Solutions"],
    icon: "⚙️"
  },
  {
    title: "Workspace development & Project management",
    items: [
      "Architectural studies : Concept,Design, RFP's...",
      "Construction,execution : Fit out,IT, Security & EHS Systems",
      "Assets management : Furniture, Branding, Landscaping"
    ],
    icon: "🏰"
  }
];

export default function PropertiesCycle() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.6, ease: "easeIn" } },
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 bg-white px-6 md:px-12 relative overflow-hidden">
      
      <h2 className="text-4xl md:text-5xl font-bold text-[#084973] mb-8 lg:mb-16  tracking-tight text-center relative z-10">
        Our Properties Cycle
      </h2>

      <div className="relative w-full max-w-5xl flex flex-col items-center">

        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-4 border-dashed border-[#08b3e2] rounded-full opacity-30"
        />

        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col md:flex-row gap-8"
            >
              <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#084973] to-[#08b3e2] text-white rounded-3xl shadow-2xl p-8 md:p-12 flex-1">
                <div className="text-5xl mb-4">{data[current].icon}</div>
                <h3 className="text-2xl md:text-3xl font-semibold text-center">{data[current].title}</h3>
              </div>

              <div className="flex flex-col justify-center bg-gradient-to-r from-[#08b3e2] to-[#084973] text-white rounded-3xl shadow-2xl p-8 md:p-12 flex-1">
                <ul className="space-y-4 text-lg md:text-xl">
                  {data[current].items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.2 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 text-[#084973] font-semibold">
          Step {current + 1} / {data.length}
        </div>
      </div>
    </div>
  );
}
