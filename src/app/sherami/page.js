
import HeroSher from "@/components/sherami/HeroSher";
import Residences from "@/components/sherami/Residences";
import Values from "@/components/sherami/Values";
import HeroSherAmi from "@/components/sherami/HeroSher";
import OurPartners from "@/components/home/OurPartners";
export const metadata = {
  title: "SherAmi | Real Estate Agency",
  description:
    "SherAmi offers premium real estate services with a human touch — modern residences and full client support in Algeria.",
  keywords: [
    "SherAmi",
    "Real Estate Algeria",
    "Property Sales",
    "Luxury Residences",
    "Real Estate Agency",
    "Algeria Properties",
  ],
  openGraph: {
    title: "SherAmi | Real Estate Agency",
    description:
      "Browse our collection of modern residences with full support and a client-first philosophy. SherAmi – Real Estate with Heart.",
    url: "https://www.yemboulgroup.com/sherami",
    images: [
      {
        url: "/images/logo1.png",
        width: 1200,
        height: 630,
        alt: "SherAmi Real Estate - Properties Management",
      },
    ],
  },
  twitter: {
    title: "SherAmi | Real Estate Agency",
    description:
      "Premium real estate services in Algeria – discover beautiful residences and tailored support with SherAmi.",
    images: ["/images/logo1.png"],
  },
  alternates: {
    canonical: "/sherami",
  },
};


export default function SherPage() {
  return (
<div>
  <HeroSherAmi/>
  <Residences/>
  <Values/>
  <OurPartners/>

</div>   
  );
}
