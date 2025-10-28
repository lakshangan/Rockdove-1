import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";

const advantages = [
  {
    title: "Advantage 1",
    description: "Always-on team for global, time-sensitive needs.",
    gradient: true,
    titleColor: "text-white",
    descriptionColor: "text-black",
  },
  {
    title: "Advantage 2",
    description: "Reduces expenses by addressing urgent issues efficiently.",
    gradient: false,
    titleColor: "text-black",
    descriptionColor: "text-black",
  },
  {
    title: "Advantage 3",
    description: "Certified quality and innovation for trusted performance.",
    gradient: false,
    titleColor: "text-black",
    descriptionColor: "text-black",
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

// ✅ Added highlight for the blue logo
const logisticsPartners = [
  {
    src: "/dhl.png",
    alt: "Dhl",
  },
  {
    src: "https://c.animaapp.com/mh4e1d40mbxSsz/img/logo-mobile-removebg-preview-1.png",
    alt: "Blue Logo",
    highlight: true, // 👈 only this one gets the gray rounded background
  },
  {
    src: "https://c.animaapp.com/mh4e1d40mbxSsz/img/tnt-logo-png-5-1.png",
    alt: "Tnt logo png",
  },
  {
    src: "/fedex.png",
    alt: "Fedex",
  },
  {
    src: "https://c.animaapp.com/mh4e1d40mbxSsz/img/united-parcel-service-logo-2014-svg-1.png",
    alt: "UPS",
  },
];

const AOGSupport: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-black text-white overflow-hidden">
        {/* ====================== HERO SECTION ====================== */}
        <section
          className="w-full"
          style={{
            paddingLeft: "205px",
            paddingRight: "205px",
            paddingTop: "80px",
            paddingBottom: "56px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "832px 1fr",
              columnGap: "48px",
              alignItems: "start",
            }}
          >
            {/* LEFT COLUMN */}
            <div style={{ width: "832px" }}>
              <h1
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: "40px",
                  lineHeight: "150%",
                  margin: 0,
                }}
              >
                <span style={{ color: "#5CC6D0" }}>24/7 AOG Support </span>
                <span style={{ color: "#FFFFFF", marginLeft: 6 }}>
                  (Aircraft on ground)
                </span>
              </h1>

              <div style={{ height: "28px" }} />

              <p
                className="shadow-lg transform translate-y-12 -translate-x-4 lg:translate-y-12 lg:-translate-x-[-10px]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: "21px",
                  lineHeight: "1.6",
                  color: "#ffffff",
                  margin: 0,
                  maxWidth: "520px",
                  textAlign: "left",
                  letterSpacing: "0.05em",
                }}
              >
                Our priority service ensures parts are ready
                <br />
                for pickup in 60–90 minutes, delivering fast,
                <br />
                cost-effective solutions to minimize
                <br />
                downtime during Aircraft-on-Ground
                <br />
                emergencies
              </p>

              <div style={{ height: "36px" }} />

              <Button
                className="shadow-lg transform translate-y-12 -translate-x-4 lg:translate-y-12 lg:-translate-x-[-20px]"
                style={{
                  width: 367,
                  height: 53,
                  borderRadius: 40,
                  background:
                    "linear-gradient(180deg, #5CC6D0 0%, #14919B 100%)",
                  color: "#ffffff",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: 20,
                  lineHeight: "100%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 24px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                }}
              >
                Request AOG Assistance Now
              </Button>
            </div>

            {/* RIGHT COLUMN - Mascot box */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
              }}
            >
              <div
                className="shadow-lg transform translate-y-12 -translate-x-4 lg:translate-y-28 lg:-translate-x-40"
                style={{
                  width: 290,
                  height: 335,
                  background: "#D9D9D9",
                  borderRadius: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#5CC6D0",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  Mascot
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== ADVANTAGES SECTION ====================== */}
        <section
          className="
          flex flex-col items-center 
          px-[180px] md:px-[160px] lg:px-[205px] 
          pt-48 pb-24 
          text-center bg-black text-white
        "
        >
          <h2
            className="max-w-3xl text-3xl md:text-4xl leading-snug mb-16"
            style={{ lineHeight: "1.4" }}
          >
            <span className="font-medium text-white">
              Keeping Your Aircraft Airborne in <br />
            </span>
            <span className="font-bold text-[#5cc6d0]">Critical Moments</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="
                  group 
                  rounded-[20px] 
                  w-[341px] 
                  h-[300px]
                  flex flex-col justify-center items-start 
                  px-8 py-6 mx-auto 
                  transition-all duration-300 ease-in-out
                  transform hover:scale-105
                  bg-[#D9D9D9]
                  hover:bg-[linear-gradient(180deg,#5CC6D0_0%,#0097A1_100%)]
                  shadow-lg
                "
              >
                <h3
                  className="
                    font-[600] text-2xl mb-4 transition-colors duration-300 
                    text-black group-hover:text-white font-[Poppins] mt-[-40px]
                  "
                >
                  {advantage.title}
                </h3>

                <p
                  className="
                    text-black font-medium text-lg leading-relaxed tracking-wide 
                    mt-[25px] text-left
                  "
                >
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ====================== RAPID RESPONSE SECTION (UPDATED SPACING) ====================== */}
        <section className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32 pt-24 pb-32 text-center">
          {/* Section Title */}
          <h2
            className="max-w-2xl font-bold text-3xl md:text-4xl mb-14"
            style={{
              fontFamily: "Poppins, sans-serif",
              lineHeight: "1.4",
            }}
          >
            <span className="text-white">Rapid Response: </span>
            <span className="text-[#5cc6d0]">From Request to Resolution</span>
          </h2>

          {/* Section Paragraph (added more space below title) */}
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

          {/* Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {/* Step Number */}
                <span className="text-[#5cc6d0] font-bold text-4xl mb-6">
                  {step.number}
                </span>

                {/* Step Title */}
                <span className="text-white font-semibold text-lg mb-4 leading-snug">
                  {step.title}
                </span>

                {/* Step Description */}
                <p
                  className="text-white text-base font-medium leading-relaxed"
                  style={{
                    maxWidth: "260px",
                    color: "#E5E5E5",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ====================== LOGISTICS SECTION ====================== */}
        <section className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32 pt-24 pb-32 text-center">
          <h2 className="max-w-3xl font-bold text-3xl md:text-4xl mb-16">
            <span className="text-white">Logistics support for our</span>
            <span className="text-[#5cc6d0]"> AOG</span>
            <span className="text-white"> orders.</span>
          </h2>

          {/* Top row (3 logos) */}
          <div className="flex flex-wrap justify-center gap-12 pt-12 mb-10">
            {logisticsPartners.slice(0, 3).map((partner, index) => (
              <div
                key={index}
                className="
          flex items-center justify-center 
          bg-[#d9d9d9] rounded-[20px]
          w-[220px] h-[120px]
          shadow-md transition-transform duration-300 ease-in-out
          hover:scale-105 hover:shadow-lg
        "
              >
                <img
                  className="w-[140px] h-[70px] object-contain"
                  alt={partner.alt}
                  src={partner.src}
                />
              </div>
            ))}
          </div>

          {/* Bottom row (2 logos, centered) */}
          <div className="flex justify-center gap-12 pt-12 mb-16">
            {logisticsPartners.slice(3).map((partner, index) => (
              <div
                key={index}
                className="
          flex items-center justify-center 
          bg-[#d9d9d9] rounded-[20px]
          w-[220px] h-[120px]
          shadow-md transition-transform duration-300 ease-in-out
          hover:scale-105 hover:shadow-lg
        "
              >
                <img
                  className="w-[140px] h-[70px] object-contain"
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
