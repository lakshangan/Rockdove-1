import React from "react";

const Services: React.FC = () => {
  return (
    <section className="bg-black text-white flex flex-col items-center justify-center min-h-screen py-24 px-6 font-[Poppins]">
      {/* Title */}
      <h2 className="font-[Poppins] font-bold text-[50px] leading-[100%] text-center mb-4">
        Services
      </h2>

      {/* Underline */}
      <div
        className="w-[68px] border-t-[3px] mb-16"
        style={{
          borderImage: "linear-gradient(90deg, #5CC6D0 0%, #14919B 100%) 1",
        }}
      ></div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        {/* Card 1 */}
        <div className="group relative bg-gray-200 text-black rounded-[20px] w-[341px] h-[412px] p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-[#5CC6D0] to-[#0097A1] transition-opacity duration-500 rounded-[20px]"></div>

          <div className="relative z-10">
            <h3 className="font-[Poppins] font-semibold text-[24px] leading-[100%] mb-4 transition-colors duration-300 group-hover:text-white">
              Asset <br />
              Management
            </h3>
            <p className="font-[Poppins] font-normal text-[16px] leading-[100%] mt-10">
              Streamlined solutions with <strong>400,000+</strong> parts for
              seamless fleet operations.
            </p>
          </div>

          <div className="relative z-10 flex justify-end">
            <div className="w-10 h-10 flex items-center justify-center bg-black/10 rounded-full transition-transform duration-300 group-hover:translate-x-1">
              <span className="text-xl font-bold group-hover:text-white">
                ➜
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative bg-gray-200 text-black rounded-[20px] w-[341px] h-[412px] p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 overflow-hidden">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-[#5CC6D0] to-[#0097A1] transition-opacity duration-500 rounded-[20px]"></div>

          <div className="relative z-10">
            <h3 className="font-[Poppins] font-semibold text-[24px] leading-[100%] mb-4 transition-colors duration-300 group-hover:text-white">
              Repair <br />
              Management
            </h3>
            <p className="font-[Poppins] font-normal text-[16px] leading-[100%] mt-10">
              Expert repairs on critical components to ensure aircraft
              reliability.
            </p>
          </div>

          <div className="relative z-10 flex justify-end">
            <div className="w-10 h-10 flex items-center justify-center bg-black/10 rounded-full transition-transform duration-300 group-hover:translate-x-1">
              <span className="text-xl font-bold group-hover:text-white">
                ➜
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative bg-gray-200 text-black rounded-[20px] w-[341px] h-[412px] p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-[#5CC6D0] to-[#0097A1] transition-opacity duration-500 rounded-[20px]"></div>

          <div className="relative z-10">
            <h3 className="font-[Poppins] font-semibold text-[24px] leading-[100%] mb-4 transition-colors duration-300 group-hover:text-white">
              24/7 AOG <br />
              Support
            </h3>
            <p className="font-[Poppins] font-normal text-[16px] leading-[100%] mt-10">
              Rapid 60–90 minute parts delivery to resolve urgent AOG issues.
            </p>
          </div>

          <div className="relative z-10 flex justify-end">
            <div className="w-10 h-10 flex items-center justify-center bg-black/10 rounded-full transition-transform duration-300 group-hover:translate-x-1">
              <span className="text-xl font-bold group-hover:text-white">
                ➜
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
