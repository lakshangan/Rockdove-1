import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import type { IconType } from "react-icons";

const footerServices = [
  "Asset Management",
  "Repair Management",
  "24/7 AOG Support",
];
const footerCompany = ["Story", "Careers", "FAQs"];

export const Footer: React.FC = () => {
  const socials: { icon: IconType; link: string; label?: string }[] = [
    { icon: FaLinkedinIn, link: "#", label: "LinkedIn" },
    { icon: FaFacebookF, link: "#", label: "Facebook" },
    { icon: FaInstagram, link: "#", label: "Instagram" },
    { icon: FaTwitter, link: "#", label: "X" },
  ];

  return (
    <footer className="w-full bg-black text-white py-14 md:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 border-b border-white/10 pb-10 relative">
          {/* Left Section: Logo + Partners */}
          <div className="flex flex-col items-start">
            <img
              className="w-[200px] h-auto object-contain mb-6"
              alt="Rockdove Aviation Logo"
              src="/rda-gradient-logo--1--1.png"
            />

            {/* Partner logos (updated + aligned + bigger) */}
            <div className="flex flex-wrap items-center justify-start gap-6 mt-4">
              <img
                src="/download--12--removebg-preview.png"
                alt="Partner 1"
                className="h-16 md:h-20 object-contain transition-transform hover:scale-105"
              />
              <img
                src="/images--1--removebg-preview.png"
                alt="Partner 2"
                className="h-16 md:h-20 object-contain transition-transform hover:scale-105"
              />
              <img
                src="/images--2--removebg-preview.png"
                alt="Partner 3"
                className="h-16 md:h-20 object-contain transition-transform hover:scale-105"
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-[#5cc6d0]">
              Services
            </h3>
            <ul className="space-y-3">
              {footerServices.map((s, i) => (
                <li
                  key={i}
                  className="text-white/80 hover:text-[#5cc6d0] cursor-pointer"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-[#5cc6d0]">
              Company
            </h3>
            <ul className="space-y-3">
              {footerCompany.map((c, i) => (
                <li
                  key={i}
                  className="text-white/80 hover:text-[#5cc6d0] cursor-pointer"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <a href="/contact" className="group block">
              <h3 className="text-xl font-semibold mb-5 text-[#5cc6d0] group-hover:text-[#4ab5bf]">
                Contact
              </h3>
              <p className="text-white/80 text-sm mb-3 group-hover:text-[#fff]">
                No. B17-22, RAK Port Customs Building, Nakheel Ras Al Khaimah,
                UAE
              </p>
              <p className="text-white/80 text-sm mb-2 group-hover:text-[#fff]">
                +971 505056093
              </p>
              <p className="text-white/80 text-sm group-hover:text-[#fff]">
                sales@rockdoveaviation.com
              </p>
            </a>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex justify-center items-center gap-5 mt-10 flex-wrap">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={i}
                href={s.link}
                aria-label={s.label}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#5cc6d0]/20 text-[#5cc6d0] hover:bg-[#5cc6d0] hover:text-black transition-all duration-300"
              >
                {React.createElement(Icon as any, { className: "w-5 h-5" })}
              </a>
            );
          })}
        </div>

        {/* Footer bottom */}
        <div className="mt-10 text-center text-white/60 text-sm border-t border-white/10 pt-6">
          © 2025 Rockdove Aviation | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
