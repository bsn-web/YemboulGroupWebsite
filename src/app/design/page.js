
import HeroDesign from "@/components/design/HeroDesign";
import Projects from "@/components/design/Projects";
import CustomerReviews from "@/components/design/CustomerReviews";
export const metadata = {
  title: "Design - Project Management & Build",
  description:
    "We create inspiring workspaces with full project management: interior design, renovation, and build services across North Africa.",
  keywords: [
    "Workspace Design",
    "Project Management",
    "Interior Renovation",
    "Office Build",
    "Design and Build",
    "Properties Management",
  ],
  openGraph: {
    title: "Design - Project Management & Build",
    description:
      "Full project management and design solutions tailored to your corporate needs.",
    url: "https://www.yemboulgroup.com/design",
    images: [
      {
        url: "/images/logo2.png",
        width: 1200,
        height: 630,
        alt: "Design - Project Management & Build",
      },
    ],
  },
  twitter: {
    title: "Design - Project Management & Build",
    description:
      "Interior design and build services for inspiring and efficient workspaces in Algeria, Morocco, and Tunisia.",
    images: ["/images/logo2.png"],
  },
  alternates: {
    canonical: "/design",
  },
};


export default function DesignPage() {
  return (
<div>
  <HeroDesign/>
  <Projects/>
  <CustomerReviews/>
</div>   
  );
}
