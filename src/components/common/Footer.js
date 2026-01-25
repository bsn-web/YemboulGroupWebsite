import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#032A3F] text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-12 justify-items-center">
          <div className="text-center">
            <p className="text-sm">
              <FaMapMarkerAlt className="inline mr-2" />
              Cité Said Hamdin N°195/574 Bt° N°50 1er Etage, Bir Mourad Rais, Alger
            </p>
            <p className="mb-2 text-sm">
              <MdPhoneAndroid className="inline mr-2" />
              213 661 990 264
            </p>
            <p className="mb-2 text-sm">
              <FaPhoneAlt className="inline mr-2" />
              +213 (0)23 46 24 49
            </p>
            <p className="mb-2 text-sm">
              <FaEnvelope className="inline mr-2" />
              contact@yemboulgroup.com
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          <div className="flex justify-center">
            <img src="/images/logo1.png" alt="Logo 1" className="max-w-[240px] h-auto" />
          </div>
          <div className="flex justify-center">
            <img src="/images/logo2.png" alt="Logo 2" className="max-w-[240px] h-auto" />
          </div>
          <div className="flex justify-center">
            <img src="/images/logo3.png" alt="Logo 3" className="max-w-[240px] h-auto" />
          </div>
        </div>
      </div>

      <div className="bg-black text-center py-4">
        <p className="text-white text-sm">
          Yemboul Group - Properties Management. All rights reserved. &copy; {currentYear}
        </p>
      </div>
    </footer>
  );
}
