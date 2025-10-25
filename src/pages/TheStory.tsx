import React from "react";
import { Button } from "../components/ui/button";
import { PageLayout } from "../components/PageLayout";
import Layout from "../components/Layout"; // optional if you also use Layout globally
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

const TheStory: React.FC = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="flex flex-col items-center px-8 pt-32 pb-64 md:px-20">
          <FadeInUp delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold text-center">
              From Vision to Victory –{" "}
              <span className="text-[#5cc6d0]">The Rockdove Aviation Story</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={400}>
            <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-4xl text-center leading-relaxed">
              Founded in 2019 in Sharjah, UAE, we&apos;ve become a global leader in
              aircraft teardown, aftermarket parts, and seamless aviation support.
            </p>
          </FadeInUp>
        </section>

        {/* Our Journey */}
        <section className="px-8 md:px-20 pb-32">
          <FadeInUp delay={200}>
            <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          </FadeInUp>
          <FadeInUp delay={400}>
            <p className="text-xl text-gray-300 text-justify max-w-4xl mx-auto mb-16">
              Since our founding in 2019, Rockdove Aviation has been proudly headquartered
              in Sharjah, UAE, serving a worldwide aviation community. What began as a
              shared vision between two friends, Kiran Joseph and Gukan Chandran, has
              evolved into a trusted name delivering high-quality pre-owned aircraft
              components and innovative services to airlines across the globe.
            </p>
          </FadeInUp>

          <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
            {founders.map((founder, index) => (
              <FadeInUp key={index} delay={600 + index * 200}>
                <div className="relative w-80 h-96 rounded-xl overflow-hidden bg-[#5cc6d0]/30">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                  <p className="mt-4 text-center font-semibold text-white">
                    {founder.name}
                  </p>
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
            <p className="text-xl text-gray-300 text-justify max-w-4xl mx-auto">
              Rockdove Aviation is your one-stop destination for premium aircraft
              parts and aviation services. As a premier stocking distributor, we serve
              strategic aerospace markets with unmatched commitment to quality,
              reliability, and customer success. In just four years, we&apos;ve established
              ourselves as a top-tier leader in the global aviation aftermarket.
            </p>
          </FadeInUp>
        </section>

        {/* CTA Section */}
        <section className="px-8 md:px-20 pb-32 text-center">
          <FadeInUp delay={200}>
            <h2 className="text-4xl font-bold mb-8">Ready to experience seamless aviation support?</h2>
          </FadeInUp>
          <FadeInUp delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#5cc6d0] text-black px-8 py-4 text-lg font-semibold hover:bg-[#4ab5bf] transition-all duration-300 hover:scale-105">
                Contact Us
              </Button>
              <Button className="border border-[#5cc6d0] text-[#5cc6d0] px-8 py-4 text-lg font-semibold hover:bg-[#5cc6d0] hover:text-black transition-all duration-300">
                Request a Quote
              </Button>
              <Button className="bg-transparent border border-[#5cc6d0] text-[#5cc6d0] px-8 py-4 text-lg font-semibold hover:bg-[#5cc6d0] hover:text-black transition-all duration-300">
                Explore Services
              </Button>
            </div>
          </FadeInUp>
        </section>
      </div>
    </PageLayout>
  );
};

export default TheStory;