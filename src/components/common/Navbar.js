"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/sherami", label: "SherAmi" },
    { href: "/design", label: "Design & Construction" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full bg-white sticky top-0 left-0 right-0 z-50 text-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center">
          <img
  src="/images/logo.png"
  alt="Logo"
  width={200}
  height={100}
  className="object-contain"
/>

        </Link>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-3xl text-principal focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul className="hidden lg:flex font-poppins text-xl items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-2 transition-all duration-300 hover:text-principal relative
                  ${
                    pathname === link.href
                      ? "text-principal font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-principal"
                      : "hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[3px] hover:after:bg-principal hover:after:animate-underline"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white px-6 py-4 flex flex-col items-start gap-4 border-t border-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className={`w-full py-2 transition-all duration-300 hover:text-principal
                ${
                  pathname === link.href
                    ? "text-principal font-medium  border-principal"
                    : "text-gray-700  hover:border-principal"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;