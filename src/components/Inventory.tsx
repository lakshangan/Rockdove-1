"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const Inventory: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] text-[#5cc6d0]">
            Broad Inventory
          </h2>

          <p className="text-base md:text-lg text-gray-300 font-[Poppins] font-medium leading-relaxed max-w-lg">
            Rockdove Aviation's Broad Inventory, with over 500,000 items
            including Rotables, consumables, expendables, tools, and placards,
            ensures rapid access to high-quality aircraft parts for Boeing,
            Airbus, and Embraer, minimizing downtime through our UAE warehouse
            and global partnership.
          </p>

          <Button
            className="
    relative overflow-hidden
    bg-gradient-to-b from-[#5CC6D0] to-[#14919B]
    text-white
    font-[Poppins]
    font-semibold
    text-base md:text-lg
    px-8 py-3
    rounded-xl
    transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
    hover:scale-[1.03]
    active:scale-[0.97]
    
  "
          >
            Know more
          </Button>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/RDINVENT.png" // replace this with your actual image name (uploaded one)
            alt="Broad Inventory Illustration"
            className="w-full max-w-lg h-auto object-contain transition-transform duration-700 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};
