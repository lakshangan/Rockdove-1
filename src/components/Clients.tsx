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
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black py-24 sm:py-28 px-6 sm:px-10 md:px-20 overflow-hidden">
      {/* Heading */}
      <h2 className="text-white font-semibold text-3xl md:text-5xl text-center tracking-tight leading-snug mb-4 transition-transform duration-500 hover:scale-105">
        Customers
      </h2>
      <div
        className="w-16 h-[2px]  mt-6 mb-20"
        style={{
          background: "linear-gradient(90deg, #5CC6D0 0%, #14919B 100%)",
        }}
      ></div>

      {/* Responsive 4x4 Grid */}
      <div
        className="
          grid
          gap-x-8
          gap-y-10
          sm:gap-x-10
          sm:gap-y-14
          md:gap-x-16
          md:gap-y-16
          place-items-center
          w-full
          max-w-7xl
          mx-auto
          px-4 sm:px-8 md:px-12
        "
        style={{
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        }}
      >
        {clients.map((src, index) => {
          // Keep Emirates, Etihad, and Tway smaller; make others bigger
          const isSmallLogo =
            src.toLowerCase().includes("emirates") ||
            src.toLowerCase().includes("ethihad") ||
            src.toLowerCase().includes("tway");

          const logoWidth = isSmallLogo
            ? "clamp(60px, 16vw, 150px)"
            : "clamp(80px, 20vw, 190px)"; // increased size
          const logoHeight = isSmallLogo
            ? "clamp(45px, 10vw, 90px)"
            : "clamp(60px, 12vw, 110px)"; // increased height

          return (
            <div
              key={index}
              className="
                flex
                items-center
                justify-center
                transition-transform
                duration-300
                hover:scale-110
              "
              style={{
                width: logoWidth,
                height: logoHeight,
              }}
            >
              <img
                src={src}
                alt={`Client ${index + 1}`}
                className="object-contain w-full h-full opacity-90 hover:opacity-100 transition duration-300"
              />
            </div>
          );
        })}
      </div>

      {/* Background gradient for subtle depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-neutral-900 to-black opacity-60"></div>
    </section>
  );
};
