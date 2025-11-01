import React, { useState, Suspense, lazy } from "react";
import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";
const Spline = lazy(() => import("@splinetool/react-spline"));

const advantages = [
  {
    title: "Advantage 1",
    description: "Always-on team for global, time-sensitive needs.",
    gradient: true,
  },
  {
    title: "Advantage 2",
    description: "Reduces expenses by addressing urgent issues efficiently.",
    gradient: false,
  },
  {
    title: "Advantage 3",
    description: "Certified quality and innovation for trusted performance.",
    gradient: false,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Immediate Contact",
    description:
      "Reach our 24/7 team via phone or email for instant assessment.",
  },
  {
    number: "02",
    title: "Part Preparation",
    description:
      "Over 400,000 warehouse parts and 500k+ inventories ensure availability within 60-90 minutes for pickup.",
  },
  {
    number: "03",
    title: "Delivery & Support",
    description:
      "Fast logistics, integrated with repair management if needed, to reduce downtime and costs.",
  },
  {
    number: "04",
    title: "Follow-Up",
    description:
      "Post-resolution assistance for aftermarket support and prevention.",
  },
];

const logisticsPartners = [
  { src: "/dhl.png", alt: "DHL" },
  {
    src: "https://c.animaapp.com/mh4e1d40mbxSsz/img/logo-mobile-removebg-preview-1.png",
    alt: "Blue Logo",
  },
  {
    src: "https://c.animaapp.com/mh4e1d40mbxSsz/img/tnt-logo-png-5-1.png",
    alt: "TNT",
  },
  { src: "/fedex.png", alt: "FedEx" },
  {
    src: "https://c.animaapp.com/mh4e1d40mbxSsz/img/united-parcel-service-logo-2014-svg-1.png",
    alt: "UPS",
  },
];

const AOGSupport: React.FC = () => {
  const [showHeading, setShowHeading] = useState(false);

  const handleSplineLoad = () => {
    setTimeout(() => {
      setShowHeading(true);
    }, 1000);
  };

  return (
    <PageLayout>
      <div className="bg-black text-white overflow-x-hidden">
        {/* ====================== HERO SECTION ====================== */}
        <section className="relative w-full h-screen">
          {/* Background Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
            style={{ width: "50vw", height: "50vh" }}
          >
            <div
              className="w-full h-full rounded-full bg-[#5cc6d0] opacity-30"
              style={{ filter: "blur(100px)" }}
            ></div>
          </div>

          {/* 3D Plane */}
          <div
            className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
            style={{ transform: "translateY(-50px)" }}
          >
            <div className="relative w-full h-full sm:w-[80vw] sm:h-[80vh] md:w-[70vw] md:h-[70vh] lg:w-[50vw] lg:h-[60vh]">
              <Suspense
                fallback={
                  <div className="flex items-center justify-center text-gray-400 text-sm h-full">
                    Loading 3D model...
                  </div>
                }
              >
                <Spline
                  scene="https://prod.spline.design/sha7cJ5NS-EhRcKr/scene.splinecode"
                  onLoad={handleSplineLoad}
                />
              </Suspense>
              <div className="absolute bottom-0 right-0 w-24 h-12 bg-black"></div>
            </div>
          </div>

          {/* Animated Heading */}
          <div
            className={`absolute inset-0 flex items-start justify-center pt-24 sm:pt-32 md:pt-40 z-20 transition-opacity duration-1000 ${
              showHeading ? "opacity-100" : "opacity-0"
            }`}
            style={{ transform: "translateY(-70px)" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
              <span className="text-[#5cc6d0]">24/7 AOG Support </span>
              <span className="text-white">(Aircraft on ground)</span>
            </h1>
          </div>

          {/* Animated Paragraph and Button */}
          <div
            className={`absolute bottom-10 left-0 right-0 flex flex-col items-center z-20 transition-opacity duration-1000 ${
              showHeading ? "opacity-100" : "opacity-0"
            } px-4`}
          >
            <p
              className="text-base sm:text-lg md:text-xl text-white text-center max-w-full sm:max-w-xl md:max-w-3xl mb-8"
              style={{ lineHeight: "1.6" }}
            >
              Our priority service ensures parts are ready for pickup in 60–90
              minutes, delivering fast, cost-effective solutions to minimize
              downtime during Aircraft-on-Ground emergencies.
            </p>
            <Button
              className="shadow-lg w-full sm:w-auto"
              style={{
                maxWidth: 367,
                height: 40,
                borderRadius: 40,
                background:
                  "linear-gradient(180deg, #5CC6D0 0%, #14919B 100%)",
                color: "#ffffff",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(16px, 5vw, 20px)",
                lineHeight: "100%",
              }}
            >
              Request AOG Assistance Now
            </Button>
          </div>
        </section>

        {/* ====================== ADVANTAGES SECTION ====================== */}
        <section className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24 py-24 text-center bg-black text-white">
          <h2 className="max-w-3xl text-3xl md:text-4xl leading-snug mb-16">
            <span className="font-medium text-white">
              Keeping Your Aircraft Airborne in <br />
            </span>
            <span className="font-bold text-[#5cc6d0]">Critical Moments</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group rounded-[20px] w-full h-[300px] flex flex-col justify-center items-start px-8 py-6 mx-auto transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#D9D9D9] hover:bg-[linear-gradient(180deg,#5CC6D0_0%,#0097A1_100%)] shadow-lg"
              >
                <h3 className="font-[600] text-2xl mb-4 transition-colors duration-300 text-black group-hover:text-white font-[Poppins] mt-[-40px]">
                  {advantage.title}
                </h3>
                <p className="text-black font-medium text-lg leading-relaxed tracking-wide mt-[25px] text-left">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ====================== RAPID RESPONSE SECTION ====================== */}
        <section className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24 pt-24 pb-32 text-center">
          <h2
            className="max-w-2xl font-bold text-3xl md:text-4xl mb-14"
            style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.4" }}
          >
            <span className="text-white">Rapid Response: </span>
            <span className="text-[#5cc6d0]">From Request to Resolution</span>
          </h2>

          <p
            className="max-w-3xl text-lg md:text-xl text-white mb-24"
            style={{
              fontFamily: "Poppins, sans-serif",
              lineHeight: "1.8",
              color: "#E5E5E5",
            }}
          >
            When you select our AOG Priority service, we guarantee prompt
            action. Our committed and agile team handles all aspects to
            seamlessly assist during Aircraft-on-Ground scenarios.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span className="text-[#5cc6d0] font-bold text-4xl mb-6">
                  {step.number}
                </span>
                <span className="text-white font-semibold text-lg mb-4 leading-snug">
                  {step.title}
                </span>
                <p
                  className="text-white text-base font-medium leading-relaxed"
                  style={{ maxWidth: "260px", color: "#E5E5E5" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ====================== LOGISTICS SECTION ====================== */}
        <section className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24 pt-24 pb-32 text-center">
          <h2 className="max-w-3xl font-bold text-3xl md:text-4xl mb-16">
            <span className="text-white">Logistics support for our</span>
            <span className="text-[#5cc6d0]"> AOG</span>
            <span className="text-white"> orders.</span>
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {logisticsPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-[#d9d9d9] rounded-[20px] w-[180px] h-[100px] sm:w-[200px] sm:h-[110px] md:w-[220px] md:h-[120px] shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              >
                <img
                  className="w-[100px] sm:w-[120px] md:w-[140px] h-auto object-contain"
                  alt={partner.alt}
                  src={partner.src}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AOGSupport;