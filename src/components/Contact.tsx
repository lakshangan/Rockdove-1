import React from "react";
import { Button } from "./ui/button";
import { MascotModel } from "./MascotModel";

export const Contact: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-8 text-left animate-fade-up">
          <h2 className="font-[Poppins] font-bold text-[#5CC6D0] text-3xl md:text-5xl leading-tight">
            Let’s Talk Business
          </h2>

          <p className="font-[Poppins] text-white text-lg md:text-xl leading-relaxed max-w-lg">
            Ready to elevate your fleet?
            <br />
            At Rockdove Aviation, we deliver fast, reliable parts and tailored
            support to keep your aircraft soaring without interruption.
          </p>

          <Button
            className="
    relative isolate
    overflow-hidden
    group
    text-white font-[Poppins] font-semibold
    text-base md:text-lg
    px-10 py-3.5
    rounded-xl
    transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
    
    bg-gradient-to-b from-[#5CC6D0] to-[#14919B]
    border border-[#5CC6D0]/40
    
    hover:scale-[1.04]
    active:scale-[0.98]
    focus:ring-2 focus:ring-[#5CC6D0]/50 focus:ring-offset-2 focus:ring-offset-black
  "
          >
            <span className="relative z-10">Contact Us</span>

            {/* Soft reflective shimmer overlay */}
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
        </div>

        {/* RIGHT IMAGE (MASCOT AREA) */}
        <MascotModel />
      </div>
    </section>
  );
};
