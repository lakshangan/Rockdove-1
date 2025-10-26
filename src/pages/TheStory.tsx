import React from "react";
import { Button } from "../components/ui/button";
import { PageLayout } from "../components/PageLayout";
import { FadeInUp } from "../components/animations";

const founders = [
  {
    name: "KIRAN JOSEPH",
    image: "https://c.animaapp.com/mh5pkn2sbKrYEc/img/img-7523-1.png",
  },
  {
    name: "GUKAN CHANDRAN",
    image: "https://c.animaapp.com/mh5pkn2sbKrYEc/img/cs106397-copy-1.png",
  },
];

const ctaButtons = [
  { text: "Contact Us", type: "primary" },
  { text: "Request a Quote", type: "secondary" },
  { text: "Explore Services", type: "tertiary" },
];

const TheStory: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-black text-white w-full overflow-x-hidden">

        {/* Hero Section */}
        <section className="flex flex-col items-center px-8 pt-32 pb-64 md:px-20 text-center">
          <FadeInUp delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold">
              From Vision to Victory – <span className="text-[#5cc6d0]">The Rockdove Aviation Story</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={400}>
            <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
              Founded in 2019 in Sharjah, UAE, we&apos;ve become a global leader in aircraft teardown, aftermarket parts, and seamless aviation support.
            </p>
          </FadeInUp>
        </section>

        {/* Our Journey */}
        <section className="px-8 md:px-20 pb-32">
          <FadeInUp delay={200}>
            <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          </FadeInUp>
          <FadeInUp delay={400}>
            <p className="text-xl text-gray-300 text-left max-w-4xl mx-auto mb-16">
              Since our founding in 2019, Rockdove Aviation has been proudly headquartered in Sharjah, UAE, serving a worldwide aviation community. What began as a shared vision between two friends, Kiran Joseph and Gukan Chandran, has evolved into a trusted name delivering high-quality pre-owned aircraft components and innovative services to airlines across the globe.
            </p>
          </FadeInUp>

          {/* Founders & Quote */}
          <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
            {founders.map((founder, index) => (
              <FadeInUp key={index} delay={600 + index * 200}>
                <div className="relative w-80 h-96 rounded-xl overflow-hidden bg-[#5cc6d0]/30">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <p className="mt-4 text-center font-semibold text-white">{founder.name}</p>
                </div>
              </FadeInUp>
            ))}

            <FadeInUp delay={1000}>
              <div className="relative w-80 h-96 bg-[#0b0d10]/50 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                <span className="text-[#5cc6d0] text-6xl font-bold">WE KEEP</span>
                <span className="text-white text-9xl font-bold">YOU</span>
                <span className="text-white text-7xl font-bold">NON-</span>
                <span className="text-white text-8xl font-bold">STOP</span>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Who We Are */}
        <section className="px-8 md:px-20 pb-32">
          <FadeInUp delay={200}>
            <h2 className="text-4xl font-bold text-center mb-16">Who We Are</h2>
          </FadeInUp>
          <FadeInUp delay={400}>
            <p className="text-xl text-gray-300 text-left max-w-4xl mx-auto">
              Rockdove Aviation is your one-stop destination for premium aircraft parts and aviation services. As a premier stocking distributor, we serve strategic aerospace markets with unmatched commitment to quality, reliability, and customer success. In just four years, we&apos;ve established ourselves as a top-tier leader in the global aviation aftermarket.
            </p>
          </FadeInUp>
        </section>

        {/* Vision & Mission */}
        <section className="px-8 md:px-20 pb-32 flex flex-col md:flex-row gap-8 justify-center">
          <FadeInUp delay={600}>
            <div className="w-full md:w-1/2 bg-[#5cc6d0] rounded-xl p-8 flex flex-col items-center justify-between">
              <div className="text-center">
                <h3 className="font-bold text-4xl text-black mb-4">OUR VISION</h3>
                <p className="text-black text-lg text-left">
                  Ensuring seamless aviation through cutting-edge, reliable, and comprehensive aerospace solutions.
                </p>
              </div>
              <img
                className="w-64 h-56 object-contain mt-4"
                src="https://c.animaapp.com/mh5pkn2sbKrYEc/img/shared-vision-1.png"
                alt="Vision"
                loading="lazy"
              />
            </div>
          </FadeInUp>
          <FadeInUp delay={800}>
            <div className="w-full md:w-1/2 bg-[#5cc6d0] rounded-xl p-8 flex flex-col items-center justify-between">
              <img
                className="w-56 h-60 object-contain mb-4"
                src="https://c.animaapp.com/mh5pkn2sbKrYEc/img/target-1.png"
                alt="Mission"
                loading="lazy"
              />
              <div className="text-center">
                <h3 className="font-bold text-4xl text-black mb-4">OUR MISSION</h3>
                <p className="text-black text-lg text-left">
                  To become a global leader in aircraft teardown and aftermarket aviation parts, setting the standard for quality, efficiency, and innovation.
                </p>
              </div>
            </div>
          </FadeInUp>
        </section>

        {/* What We Do */}
        <section className="px-8 md:px-20 pb-32 flex flex-col md:flex-row gap-8 justify-center">
          <FadeInUp delay={200}>
            <div className="flex-1">
              <h3 className="text-4xl font-bold text-center mb-4">What We Do</h3>
              <p className="text-lg text-left">
                We specialize in high-quality pre-owned aviation parts, aircraft teardown, and end-to-end aerospace solutions. Through cutting-edge technology, personalized teamwork, and rigorous quality standards, we ensure seamless operations for Boeing, Airbus, Embraer, and beyond. Our core values leadership, accountability, and service excellence drive every decision and delivery.
              </p>
            </div>
          </FadeInUp>
          <FadeInUp delay={400}>
            <div className="flex-1 flex flex-col items-center">
              <h3 className="text-4xl font-bold text-center mb-4">Serving World-Wide</h3>
              <img
                className="w-full max-w-lg h-auto object-cover"
                src="https://c.animaapp.com/mh5pkn2sbKrYEc/img/world-map-rda-1.png"
                alt="World map"
                loading="lazy"
              />
            </div>
          </FadeInUp>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-20 pb-32 text-center">
          <FadeInUp delay={200}>
            <h2 className="text-4xl font-bold mb-8">Ready to experience seamless aviation support?</h2>
          </FadeInUp>
          <FadeInUp delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {ctaButtons.map((btn, index) => (
                <Button
                  key={index}
                  className={`
                    px-8 py-4 text-lg font-semibold transition-all duration-300
                    ${btn.type === "primary" ? "bg-[#5cc6d0] text-black hover:bg-[#4ab5bf] hover:scale-105" : ""}
                    ${btn.type === "secondary" ? "border border-[#5cc6d0] text-[#5cc6d0] hover:bg-[#5cc6d0] hover:text-black" : ""}
                    ${btn.type === "tertiary" ? "bg-transparent border border-[#5cc6d0] text-[#5cc6d0] hover:bg-[#5cc6d0] hover:text-black" : ""}
                  `}
                >
                  {btn.text}
                </Button>
              ))}
            </div>
          </FadeInUp>
        </section>

      </div>
    </PageLayout>
  );
};

export default TheStory;