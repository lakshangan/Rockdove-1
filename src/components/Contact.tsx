"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MascotModel } from "./MascotModel";

export const Contact: React.FC = () => {
  return (
    <section className="bg-black text-white py-8 md:py-12 -mt-48 ">
      <div
        className="
          max-w-[1280px] mx-auto 
          px-6 sm:px-10 md:px-16 lg:px-20 
          grid grid-cols-1 lg:grid-cols-2 
          gap-12 lg:gap-20 items-center
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8 mt-10 lg:mt-24 pl-4 md:pl-10"
        >
          <h2 className="font-[Poppins] font-bold text-[#5CC6D0] text-4xl md:text-5xl leading-tight">
            Let’s Talk Business
          </h2>

          <p className="font-[Poppins] text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
            Ready to elevate your fleet? <br />
            At Rockdove Aviation, we deliver fast, reliable parts and tailored
            support to keep your aircraft soaring without interruption.
          </p>

          <Button
            className="
              relative isolate overflow-hidden group
              bg-gradient-to-b from-[#5CC6D0] to-[#14919B]
              text-white font-[Poppins] font-semibold
              text-base md:text-lg px-10 py-3.5 rounded-xl
              border border-[#5CC6D0]/40
              transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
              hover:scale-[1.04] active:scale-[0.98]
              focus:ring-2 focus:ring-[#5CC6D0]/50 focus:ring-offset-2 focus:ring-offset-black
            "
          >
            <span className="relative z-10">Explore</span>

            {/* Soft shimmer overlay */}
            <span
              className="
                absolute inset-0
                bg-gradient-to-t from-transparent via-white/20 to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-700 ease-out
              "
            ></span>

            {/* Animated light streak */}
            <span
              className="
                absolute top-0 left-[-100%] w-[60%] h-full
                bg-gradient-to-r from-transparent via-white/30 to-transparent
                transform skew-x-[-20deg]
                transition-all duration-700 ease-in-out
                group-hover:left-[120%]
              "
            ></span>
          </Button>
        </motion.div>

        {/* RIGHT IMAGE (MASCOT MODEL) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end lg:pr-10 xl:pr-20"
        >
          <MascotModel />
        </motion.div>
      </div>
    </section>
  );
};
