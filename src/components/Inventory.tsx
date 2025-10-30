"use client";
import React from "react";
import { Button } from "./ui/button";

export const Inventory: React.FC = () => {
  return (
    <section className="bg-black text-white py-2 px-6 sm:px-10 md:px-[178px] font-[Poppins] -mt-20">
      {/* Centered container with consistent alignment */}
      <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* LEFT SIDE CONTENT */}
        <div className="space-y-8">
          <h2 className="text-[50px] md:text-[54px] font-bold leading-[100%] text-[#5CC6D0]">
            Broad Inventory
          </h2>

          <p className="text-[17px] md:text-[18px] text-gray-300 font-medium leading-relaxed max-w-[550px]">
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
              font-semibold
              text-lg
              px-8 py-3
              rounded-xl
              transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
              hover:scale-[1.03]
              active:scale-[0.97]
            "
          >
            Know more
          </Button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/RDINVENT.png"
            alt="Broad Inventory Illustration"
            className="w-full max-w-[500px] h-auto object-contain transition-transform duration-700 hover:scale-105 lg:translate-x-[-40px]"
          />
        </div>
      </div>
    </section>
  );
};
