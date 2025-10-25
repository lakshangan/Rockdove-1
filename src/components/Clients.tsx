import React from "react";

export const Clients: React.FC = () => {
  const clients = [
    "ethihad.png",
    "airindia.png",
    "tway.png",
    "garuda.png",
    "tanzania.png",
    "cathy.png",
    "saudi.png",
    "phillipines.png",
    "Ethiopian.png",
    "airastana.png",
    "kenya.png",
    "southafrica.png",
    "kuwait.png",
    "sky.png",
    "cebu.png",
    "Emirates.png",
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black py-20 px-6 overflow-hidden">
      {/* Heading */}
      <h2 className="text-white font-semibold text-3xl md:text-5xl text-center tracking-tight leading-snug mb-4 transition-transform duration-500 hover:scale-105">
        Customers
      </h2>
      <div className="w-16 h-[2px] bg-cyan-500 mb-12"></div>

      {/* Fixed 4x4 Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 place-items-center">
        {clients.map((src, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-32 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={src}
              alt={`Client ${index + 1}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Optional gradient overlay for depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-neutral-900 to-black opacity-60"></div>
    </section>
  );
};
