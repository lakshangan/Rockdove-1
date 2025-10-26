import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

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

const logisticsPartners = [
  {
    src: "https://c.animaapp.com/mh4e1d40mbxSsz/img/logo-mobile-removebg-preview-1.png",
    alt: "Logo mobile removebg",
  },
  {
    src: "https://c.animaapp.com/mh4e1d40mbxSsz/img/tnt-logo-png-5-1.png",
    alt: "Tnt logo png",
  },
];

const AOGSupport: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-black text-white overflow-hidden">
        {/* Hero Section */}
        <section className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32 pt-24 pb-32 text-center">
          <h1 className="max-w-4xl font-bold text-4xl md:text-5xl leading-tight mb-10">
            <span className="text-[#5cc6d0]">24/7 AOG Support </span>
            <span className="text-white">(Aircraft on Ground)</span>
          </h1>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl">
            <div className="flex flex-col gap-8 flex-1 text-left">
              <p className="font-medium text-white text-lg md:text-xl leading-relaxed">
                Our priority service ensures parts are ready for pickup in
                60–90 minutes, delivering fast, cost-effective solutions to
                minimize downtime during Aircraft-on-Ground emergencies.
              </p>

              <Button className="w-fit rounded-[40px] border-0 bg-[linear-gradient(180deg,rgba(92,198,208,1)_0%,rgba(20,145,155,1)_100%)] px-8 py-4 text-white text-lg font-medium hover:opacity-90 transition-opacity">
                Request AOG Assistance Now
              </Button>
            </div>

            <div className="relative flex-shrink-0">
              <div className="w-[280px] h-[320px] sm:w-[320px] sm:h-[360px] bg-[#d9d9d9] rounded-[20px]" />
              <span className="absolute bottom-[-30px] right-0 font-medium text-[#5cc6d0] text-lg">
                Mascot
              </span>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32 pb-32 text-center">
          <h2 className="max-w-3xl text-3xl md:text-4xl leading-snug mb-16">
            <span className="font-medium text-white">
              Keeping Your Aircraft Airborne in{" "}
            </span>
            <span className="font-bold text-[#5cc6d0]">Critical Moments</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className={`rounded-[20px] border-0 ${
                  advantage.gradient
                    ? "bg-[linear-gradient(180deg,rgba(92,198,208,1)_0%,rgba(0,151,161,1)_100%)]"
                    : "bg-[#d9d9d9]"
                }`}
              >
                <CardContent className="flex flex-col gap-6 p-8 text-left">
                  <h3
                    className={`${advantage.titleColor} font-semibold text-2xl`}
                  >
                    {advantage.title}
                  </h3>
                  <p
                    className={`${advantage.descriptionColor} font-medium text-lg`}
                  >
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32 pb-32 text-center">
          <h2 className="max-w-2xl font-bold text-3xl md:text-4xl mb-10">
            <span className="text-white">Rapid Response: </span>
            <span className="text-[#5cc6d0]">
              From Request to Resolution
            </span>
          </h2>

          <p className="max-w-3xl text-lg md:text-xl text-white mb-20">
            When you select our AOG Priority service, we guarantee prompt
            action. Our committed and agile team handles all aspects to
            seamlessly assist during Aircraft-on-Ground scenarios.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-4"
              >
                <span className="text-[#5cc6d0] font-bold text-4xl">
                  {step.number}
                </span>
                <div className="text-white text-lg">
                  <span className="font-bold">{step.title}</span>
                  <br />
                  <span className="font-medium">{step.description}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Logistics Support Section */}
        <section className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32 pb-32 text-center">
          <h2 className="max-w-3xl font-bold text-3xl md:text-4xl mb-16">
            <span className="text-white">Logistics support for our</span>
            <span className="text-[#5cc6d0]"> AOG</span>
            <span className="text-white"> orders.</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-10 mb-16">
            {logisticsPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-[#d9d9d9] rounded-[20px] px-6 py-6"
              >
                <img
                  className="w-[160px] sm:w-[200px] object-contain"
                  alt={partner.alt}
                  src={partner.src}
                />
              </div>
            ))}
          </div>

          <img
            className="w-[90px] sm:w-[110px] h-auto object-contain"
            alt="United parcel"
            src="https://c.animaapp.com/mh4e1d40mbxSsz/img/united-parcel-service-logo-2014-svg-1.png"
          />
        </section>
      </div>
    </PageLayout>
  );
};

export default AOGSupport;