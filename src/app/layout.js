import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: {
    default: "Properties Management",
    template: "%s",
  },
  description:
    "Properties Management offers tailored property services across Algeria, Morocco, and Tunisia: cleaning, security, events, workspace design & more.",

  keywords: [
    "Properties Management",
    "Facility Management",
    "Corporate Services",
    "Cleaning Services",
    "Workspace Design",
    "Event Services",
    "Security Services",
    "HVAC Maintenance",
    "Catering Services",
    "Transport Management",
    "Algeria Property Services",
    "Morocco Property Management",
    "Tunisia Facility Services",
  ],

  openGraph: {
    title: "Properties Management",
    description:
      "Discover complete property solutions in Algeria, Morocco, and Tunisia—from interior design and cleaning to events, security, and maintenance.",
    url: "https://www.yemboulgroup.com/", 
    siteName: "Properties Management",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo3.png", 
        width: 1200,
        height: 630,
        alt: "Properties Management",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Properties Management",
    description:
      "Professional property and facility services across Algeria, Morocco, and Tunisia. Workspace, events, cleaning, and more.",
    images: ["/images/logo3.png"], 
    creator: "@propertiesmgmt",
  },

  metadataBase: new URL("https://www.yemboulgroup.com"), 
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
