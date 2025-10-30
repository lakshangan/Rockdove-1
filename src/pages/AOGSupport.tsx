import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";

const advantages = [
  {
    title: "Advantage 1",
    description: "Always-on team for global, time-sensitive needs.",
    icon: "/time.svg",
    gradient: true,
    titleColor: "text-white",
    descriptionColor: "text-black",
  },
  {
    title: "Advantage 2",
    description: "Reduces expenses by addressing urgent issues efficiently.",
    icon: "/bell.svg",
    gradient: false,
    titleColor: "text-black",
    descriptionColor: "text-black",
  },
  {
    title: "Advantage 3",
    description: "Certified quality and innovation for trusted performance.",
    icon: "/upchart.svg",
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
        <section className="w-full px-4 sm:px-6 md:px-12 lg:px-[205px] pt-20 lg:pt-[80px] pb-14 lg:pb-[56px] box-border">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:[grid-template-columns:832px_1fr] gap-x-12 items-start">
            {/* LEFT COLUMN */}
            <div className="w-full lg:w-[832px]">
              <h1 className="m-0 font-poppins font-extrabold text-[32px] lg:text-[40px] leading-[150%]">
                <span className="text-[#5CC6D0]">24/7 AOG Support </span>
                <span className="text-white ml-1">(Aircraft on ground)</span>
              </h1>

              <div className="h-7" />

              <p className="shadow-lg transform translate-y-3 lg:translate-y-12 -translate-x-1 lg:-translate-x-4 font-medium text-[18px] lg:text-[21px] leading-[1.6] text-white m-0 max-w-[520px] text-left tracking-wide">
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

              <div className="h-9" />

              <Button className="shadow-lg transform translate-y-3 lg:translate-y-12 -translate-x-1 lg:-translate-x-4 inline-flex items-center justify-center" style={{ width: 367, height: 53, borderRadius: 40, background: 'linear-gradient(180deg, #5CC6D0 0%, #14919B 100%)', color: '#ffffff', fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 20, lineHeight: '100%', padding: '0 24px', boxShadow: '0 6px 18px rgba(0,0,0,0.25)' }}>
                Request AOG Assistance Now
              </Button>
            </div>

            {/* RIGHT COLUMN - Mascot box */}
            <div className="flex justify-center items-start mt-6 lg:mt-0">
              <div className="shadow-lg transform translate-y-3 lg:translate-y-28 lg:-translate-x-10 w-full max-w-[290px] lg:w-[290px] h-[335px] bg-[#D9D9D9] rounded-[20px] flex items-center justify-center">
                <span className="text-[#5CC6D0] font-poppins font-medium">Mascot</span>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== ADVANTAGES SECTION ====================== */}
        <section className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-[205px] pt-20 md:pt-48 pb-12 md:pb-24 text-center bg-black text-white">
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
                className={
                  "group rounded-[20px] w-full sm:w-[320px] md:w-[341px] h-[300px] flex flex-col justify-center items-start px-6 sm:px-8 py-6 mx-auto transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#D9D9D9] hover:bg-[linear-gradient(180deg,#5CC6D0_0%,#0097A1_100%)] shadow-lg"
                }
              >
                {/* Icon above the title */}
                <img
                  src={advantage.icon} // Add your icon link here in the data
                  alt={`${advantage.title} icon`}
                  className="w-[40px] h-[40px] mb-3 transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="font-[600] text-2xl mb-4 transition-colors duration-300 text-black group-hover:text-white font-[Poppins]">
                  {advantage.title}
                </h3>

                <p className="text-black font-medium text-lg leading-relaxed tracking-wide mt-[10px] text-left group-hover:text-white">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* ====================== RAPID RESPONSE SECTION (UPDATED SPACING + NUMBER CIRCLES) ====================== */}
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

          {/* Section Paragraph */}
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
                {/* Step Number inside circle */}
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-[90px] md:h-[90px] rounded-full border-[3px] border-[#5cc6d0] text-[#5cc6d0] font-bold text-[1.1rem] sm:text-2xl md:text-3xl mb-6 transition-all duration-300 hover:bg-[#5cc6d0] hover:text-white hover:scale-110">
                  {step.number}
                </div>

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
          <div className="flex flex-wrap justify-center gap-6 pt-8 mb-8">
            {logisticsPartners.slice(0, 3).map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-[#d9d9d9] rounded-[20px] w-full max-w-[220px] sm:w-[220px] h-[90px] sm:h-[120px] shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              >
                <img className="w-[120px] h-[60px] sm:w-[140px] sm:h-[70px] object-contain" alt={partner.alt} src={partner.src} />
              </div>
            ))}
          </div>

          {/* Bottom row (2 logos, centered) */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 mb-16">
            {logisticsPartners.slice(3).map((partner, index) => (
              <div key={index} className="flex items-center justify-center bg-[#d9d9d9] rounded-[20px] w-full max-w-[220px] sm:w-[220px] h-[90px] sm:h-[120px] shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <img className="w-[120px] h-[60px] sm:w-[140px] sm:h-[70px] object-contain" alt={partner.alt} src={partner.src} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AOGSupport;
