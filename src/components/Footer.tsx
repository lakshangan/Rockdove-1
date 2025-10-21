"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLocationDot } from "react-icons/fa";
import Link from "next/link";
import { Poppins } from "next/font/google";

// Load Google font directly using next/font (no external CSS file)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const Footer = () => {
  return (
    <footer
      className={`${poppins.className} bg-[#0a0a0a] text-gray-300 py-12 px-6 sm:px-12`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center sm:text-left">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Rockdove</h2>
          <div className="flex justify-center sm:justify-start space-x-4 mt-4">
            {/* Replace tagline text with 3 images */}
            <img
              src="public/images--1--removebg-preview.png"
              alt="Partner 1"
              className="w-14 h-14 object-contain rounded-lg"
            />
            <img
              src="public/images--2--removebg-preview.png"
              alt="Partner 2"
              className="w-14 h-14 object-contain rounded-lg"
            />
            <img
              src="public/images--3--removebg-preview.png"
              alt="Partner 3"
              className="w-14 h-14 object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/rfq" className="hover:text-white transition">
                Request for Quote
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Contact Info
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-center sm:justify-start space-x-3">
              <FaPhoneAlt size={20} className="text-blue-400" />
              <span>+1 (555) 234-5678</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start space-x-3">
              <FaEnvelope size={20} className="text-blue-400" />
              <span>info@rockdove.com</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start space-x-3">
              <FaLocationDot size={24} className="text-blue-400" /> {/* bigger size */}
              <span>Los Angeles, California, USA</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Rockdove Aviation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;