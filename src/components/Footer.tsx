"use client";

import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer
      className="w-full text-black bg-[#5CC6D0] font-[Inter] text-[17px] leading-snug"
      style={{ fontWeight: 400, letterSpacing: "0%" }}
    >
      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-[1400px] mx-auto px-12 py-12 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* LEFT SECTION - LOGO + CERTIFICATIONS */}
        <div className="flex flex-col gap-5">
          <Link to="/">
            <img
              src="https://c.animaapp.com/mh6p7bc3N6zmh3/img/rda-black-logo.png"
              alt="ROCKDOVE"
              className="w-48 object-contain hover:opacity-80 transition"
            />
          </Link>
          <div className="flex items-center gap-5">
            <img
              src="https://c.animaapp.com/mh6p7bc3N6zmh3/img/download--12--removebg-preview.png"
              alt="NBAA"
              className="w-16 object-contain"
            />
            <img
              src="https://c.animaapp.com/mh6p7bc3N6zmh3/img/images--1--removebg-preview.png"
              alt="ISO"
              className="w-16 object-contain"
            />
            <img
              src="https://c.animaapp.com/mh6p7bc3N6zmh3/img/images--2--removebg-preview.png"
              alt="ASA"
              className="w-20 object-contain"
            />
          </div>
        </div>

        {/* MIDDLE LEFT - SOCIALS + SERVICES */}
        <div className="flex flex-col gap-5">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-black hover:opacity-70 transition"
            >
              <Instagram size={22} strokeWidth={2} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-black hover:opacity-70 transition"
            >
              <Linkedin size={22} strokeWidth={2} />
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-[Poppins] font-semibold text-[18px] mb-2 tracking-wide">
              Services
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/asset-management"
                  className="hover:underline hover:text-white transition"
                >
                  Asset Management
                </Link>
              </li>
              <li>
                <Link
                  to="/repair-management"
                  className="hover:underline hover:text-white transition"
                >
                  Repair Management
                </Link>
              </li>
              <li>
                <Link
                  to="/aog-support"
                  className="hover:underline hover:text-white transition"
                >
                  24/7 AOG Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* MIDDLE RIGHT - RFQ BUTTON + COMPANY INFO */}
        <div className="flex flex-col gap-5">
          <Link
            to="/rfq"
            className="self-start px-5 py-1.5 rounded-full bg-white text-black text-[15px] font-[Poppins] font-medium shadow-sm hover:bg-gray-100 transition"
          >
            RFQ
          </Link>

          <div>
            <h3 className="font-[Poppins] font-semibold text-[18px] mb-2 tracking-wide">
              The Company
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/the-story"
                  className="hover:underline hover:text-white transition"
                >
                  Story
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:underline hover:text-white transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="hover:underline hover:text-white transition"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/mro"
                  className="hover:underline hover:text-white transition"
                >
                  MRO Events
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION - CONTACT */}
        <div className="leading-relaxed">
          <p>No. B17-22, RAK Port Customs</p>
          <p>Building, Nakheel Ras Al Khaimah, UAE</p>
          <p className="mt-2 font-medium">+971 505056093</p>
          <p>
            <a
              href="mailto:sales@rockdoveaviation.com"
              className="hover:underline"
            >
              sales@rockdoveaviation.com
            </a>
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-black/10 text-center text-[15px] py-4">
        © 2025 Rockdove Aviation | All Rights Reserved
      </div>
    </footer>
  );
};
