
import Hero from "@/components/home/Hero";
import AboutUs from "@/components/home/Aboutus";
import Contact from "@/components/home/Contact";
import WhyUs from "@/components/home/WhyUs";
import Mission from "@/components/home/Mission";
import WhatWeDo from "@/components/home/WhatWeDo";

export const metadata = {
  title: " Properties Management"
};

export default function Home() {


  return (
<div>
  <Hero/>
  <AboutUs/>
<WhatWeDo/>
  <Mission/>
  <WhyUs/>
  <Contact/>
</div>   
  );
}
