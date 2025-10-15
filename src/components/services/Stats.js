'use client';

import { useState, useEffect } from 'react';

export default function Stats() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 10) {
          return prevCount + 1;
        }
        clearInterval(interval); 
        return prevCount;
      });
    }, 100); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-gradient-to-r from-[#084973] to-[#08b3e2] py-16 pt-36 px-6 md:px-40">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-[200px] leading-none font-extrabold text-white select-none mb-4">
        {count}
        </h2>

        <p className="uppercase text-2xl tracking-widest text-white font-semibold ">
          Years of Expertise
        </p>
      </div>
    </div>
  );
}
