"use client";

import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer
      className="w-full h-[400px] text-black font-[Inter] text-[17px] leading-snug"
      style={{
        background: "linear-gradient(180deg, #5CC6D0 0%, #3EA3AB 100%)",
        fontWeight: 400,
      }}
    >
      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-[1400px] mx-auto px-12 py-14 flex flex-col md:flex-row justify-between items-start gap-12">
        {/* LEFT SECTION - LOGO + CERTIFICATIONS */}
        <div className="flex flex-col gap-5">
          <Link to="/">
            <img
              src="https://c.animaapp.com/mh6p7bc3N6zmh3/img/rda-black-logo.png"
              alt="ROCKDOVE"
              className="w-48 object-contain hover:opacity-80 transition"
            />
          </Link>

          {/* CERTIFICATION LOGOS */}
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

        {/* SERVICES SECTION */}
        <div>
          <h3 className="font-[Poppins] font-semibold text-[18px] mb-3">
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

          {/* RFQ Button */}
          <Link
            to="/rfq"
            className="inline-block mt-4 px-4 py-1.5 rounded-full bg-white text-black text-[15px] font-[Poppins] font-medium shadow-sm hover:bg-gray-100 transition"
          >
            RFQ
          </Link>
        </div>

        {/* COMPANY SECTION */}
        <div>
          <h3 className="font-[Poppins] font-semibold text-[18px] mb-3">
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

        {/* CONTACT SECTION */}
        <div className="flex flex-col gap-3 text-[16px] leading-relaxed">
          <div className="flex items-start gap-3">
            <img src="/building.png" alt="Address" className="w-5 h-5 mt-1" />
            <p>
              No. B17-22, RAK Port Customs<br></br> Building, Nakheel Ras Al
              Khaimah,
              <br />
              UAE
            </p>
          </div>

          <div className="flex items-start gap-3">
            <img src="/home.svg" alt="Location" className="w-5 h-5 mt-1" />
            <p>
              Q4-212, Sharjah International <br></br>Airport Free Zone, UAE.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <img src="/phone.svg" alt="Phone" className="w-5 h-5" />
            <p>+971 505056093 / +971 505059093</p>
          </div>

          <div className="flex items-center gap-3">
            <img src="/mail.svg" alt="Email" className="w-5 h-5" />
            <a
              href="mailto:sales@rockdoveaviation.com"
              className="hover:underline"
            >
              sales@rockdoveaviation.com
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="flex flex-col md:flex-row justify-between items-center px-12 pb-6 text-[15px] text-black">
        <p>Copyright © 2025 | All Rights Reserved</p>

        {/* SOCIALS */}
        <div className="flex items-center gap-4 my-2">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-70 transition"
          >
            <Linkedin size={22} strokeWidth={2} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-70 transition"
          >
            <Instagram size={22} strokeWidth={2} />
          </a>

          {/* Custom X icon */}
          <img
            src="/xlogo.svg"
            alt="X"
            className="w-6 h-6 opacity-90 hover:opacity-100 transition"
          />
        </div>

        <p>Certificates: NBAA membership, ISO, ASA</p>
      </div>
    </footer>
  );
};
