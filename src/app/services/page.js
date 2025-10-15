
import HeroServices from "@/components/services/HeroServices";
import Gallery from "@/components/services/Gallery";
import AboutSection from "@/components/services/AboutSection";
import Stats from "@/components/services/Stats";
import OurClients from "@/components/home/OurClients";
import PropertiesCycle from "@/components/services/PropretiesCycle";
export const metadata = {
  title: "Services | Properties Management",
  description:
    "Explore our wide range of property management services including cleaning, security, events, workspace design, and more across North Africa.",
  keywords: [
    "Property Services",
    "Workspace Cleaning",
    "Events Management",
    "Security Services",
    "Facility Services",
    "Properties Management",
    "Morocco Property",
    "Algeria Facility Management",
  ],
  openGraph: {
    title: "Our Services | Properties Management",
    description:
      "Professional services tailored to your property and facility needs: cleaning, catering, security, design & more.",
    url: "https://www.yemboulgroup.com/services",
    images: [
      {
        url: "/images/logo3.png", 
        width: 1200,
        height: 630,
        alt: "Our Services - Properties Management",
      },
    ],
  },
  twitter: {
    title: "Our Services | Properties Management",
    description:
      "From workspace cleaning to events and transport, discover our full-service property management offering.",
    images: ["/images/logo3.png"],
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
<div>
  <HeroServices/>
  <Gallery/>

  <Stats/>
  <PropertiesCycle/>

  <OurClients/>
</div>   
  );
}
