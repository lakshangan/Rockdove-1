import React from "react";

import { PageLayout } from "../components/PageLayout";
import { FadeInUp } from "../components/animations";
import { Link } from "react-router-dom";

const founders = [
  {
    name: "KIRAN JOSEPH",
    image: "/founder1.png",
  },
  {
    name: "GUKAN CHANDRAN",
    image: "/founder2.png",
  },
];

const TheStory: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-black text-white w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center px-8 pt-32 pb-48 md:px-20">
          <FadeInUp delay={200}>
            <h1 className="font-bold leading-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block">From Vision to Victory –</span>
              <span className="block mt-3 text-[#5cc6d0]">
                The Rockdove Aviation Story
              </span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={400}>
            <p
              className="mt-10 text-white/90 max-w-3xl lg:max-w-4xl text-center"
              style={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: "24px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
              }}
            >
              Founded in 2019 in Sharjah, UAE, we&apos;ve become a global leader
              in aircraft teardown, aftermarket parts, and seamless aviation
              support.
            </p>
          </FadeInUp>
        </section>

        {/* Our Journey */}
        <section className="px-8 md:px-20  pb-60 flex flex-col items-center text-left mt-46">
          {/* Heading */}
          <FadeInUp delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 w-full max-w-5xl text-left  md:mr-[720px]">
              Our Journey
            </h2>
          </FadeInUp>

          {/* Paragraph */}
          <FadeInUp delay={400}>
            <p
              className="text-lg md:text-xl text-gray-300 leading-normal mb-20 w-full max-w-5xl "
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "160%",
                textAlignLast: "justify",
              }}
            >
              Since our founding in 2019, Rockdove Aviation has been proudly
              headquartered<br></br> in Sharjah, UAE, serving a worldwide
              aviation community. What began as a <br></br>shared vision between
              two friends, Kiran Joseph and Gukan Chandran, has <br></br>evolved
              into a trusted name delivering high-quality pre-owned aircraft
              <br></br>
              components and innovative services to airlines across the globe.
            </p>
          </FadeInUp>

          {/* Founders + Motto */}
          <div className="flex flex-col md:flex-row justify-center items-end gap-14">
            {/* Founders */}
            {founders.map((founder, index) => (
              <FadeInUp key={index} delay={600 + index * 200}>
                <div className="relative flex flex-col items-center mt-20 md:mt-16">
                  {/* Blue Background Box */}
                  <div className="w-56 h-64 bg-[#5cc6d0] rounded-md overflow-visible relative">
                    {/* Overflowing Founder Image */}
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250%] h-[130%] rounded-md object-cover drop-shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-4 mr-[100px] text-sm font-semibold tracking-wide text-white text-center">
                    {founder.name}
                  </p>
                </div>
              </FadeInUp>
            ))}

            {/* Motto with quotes */}
            <FadeInUp delay={1000}>
              <div className="relative flex flex-col justify-center items-start md:ml-12  text-left">
                {/* Top Quote Icon */}
                <img
                  src="/uq.png"
                  alt="Opening Quote"
                  className="absolute -top-8 right-48 w-8 md:w-12"
                  loading="lazy"
                />

                {/* Motto Text */}
                <div className="flex flex-col leading-none space-y-1">
                  <p
                    className="text-white font-extrabold"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: "42px",
                      lineHeight: "100%",
                    }}
                  >
                    WE KEEP
                  </p>
                  <p
                    className="text-white font-extrabold"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: "80px",
                      lineHeight: "100%",
                    }}
                  >
                    YOU
                  </p>
                  <p
                    className="text-white font-extrabold"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: "60px",
                      lineHeight: "100%",
                    }}
                  >
                    NON-
                  </p>
                  <p
                    className="text-white font-extrabold"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: "70px",
                      lineHeight: "100%",
                    }}
                  >
                    STOP
                  </p>
                </div>

                {/* Bottom Quote Icon */}
                <img
                  src="/lq.png"
                  alt="Closing Quote"
                  className="absolute -bottom-4 left-48 w-8 md:w-12"
                  loading="lazy"
                />
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="bg-black text-white px-8 md:px-20 pt-0 pb-20 flex flex-col items-center text-center -mt-20">
          {/* Heading + Paragraph */}
          <div className="max-w-5xl mb-16">
            <h2 className="text-[40px] font-extrabold mb-6 text-left leading-tight">
              Who We Are
            </h2>
            <p
              className="text-[24px] text-gray-300 leading-relaxed text-justify"
              style={{ width: "960px", wordWrap: "break-word" }}
            >
              Rockdove Aviation is your one-stop destination for premium
              aircraft parts and aviation services. As a premier stocking
              distributor, we serve strategic aerospace markets with unmatched
              commitment to quality, reliability, and customer success. In just
              four years, we’ve established ourselves as a top-tier leader in
              the global aviation aftermarket.
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="flex flex-col md:flex-row gap-16 justify-center w-full max-w-6xl">
            {/* Vision Card */}
            <div
              className="bg-[#5cc6d0] rounded-[10px] px-10 py-14 flex flex-col justify-start relative text-left overflow-hidden"
              style={{ width: "420px", height: "580px" }}
            >
              <div className=" mt-16">
                <h4 className="text-black font-extrabold text-[40px] tracking-tight  ">
                  OUR
                </h4>
                <h3 className="text-white font-extrabold text-[64px] tracking-tight -mt-7">
                  VISION
                </h3>
                <p className="text-black text-[20px] leading-relaxed text-justify tracking-wide  pr-6">
                  Ensuring seamless aviation through cutting-edge, reliable, and
                  comprehensive aerospace solutions.
                </p>
              </div>
              <img
                src="/eye.png"
                alt="Vision Icon"
                className="absolute bottom-[-0px] left-[-0px] w-48 md:w-52 opacity-90"
                loading="lazy"
              />
            </div>

            {/* Mission Card */}
            <div
              className="bg-[#5cc6d0] rounded-[10px] px-10 py-14 flex flex-col justify-end relative text-left overflow-hidden"
              style={{ width: "420px", height: "580px" }}
            >
              <div className=" mb-6">
                <h4 className="text-black font-extrabold text-[40px] tracking-tight">
                  OUR
                </h4>
                <h3 className="text-white font-extrabold text-[64px] tracking-tight -mt-7">
                  MISSION
                </h3>

                <p className="text-black text-[20px] leading-relaxed tracking-wide text-justify pr-6">
                  To become a global leader in aircraft teardown and aftermarket
                  aviation parts, setting the standard for quality, efficiency,
                  and innovation.
                </p>
              </div>
              <img
                src="/target.png"
                alt="Mission Icon"
                className="absolute top-[-25px] right-[-20px] w-48 md:w-52 opacity-90"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="bg-black text-white px-8 md:px-28 py-20 flex flex-col md:flex-row justify-center items-start text-center md:text-left gap-20">
          {/* Left Text Section */}
          <div className="max-w-md md:pl-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
            <p className="text-gray-300 leading-relaxed text-left text-[24px]">
              We specialize in high-quality pre-owned aviation parts, aircraft
              teardown, and end-to-end aerospace solutions. Through cutting-edge
              technology, personalized teamwork, and rigorous quality standards,
              we ensure seamless operations for Boeing, Airbus, Embraer, and
              beyond. Our core values — leadership, accountability, and service
              excellence — drive every decision and delivery.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex flex-col items-center md:items-start mt-10 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 md:ml-4">
              Serving world-wide
            </h2>
            <img
              src="/worldmap.png"
              alt="World Map"
              className="w-[380px] md:w-[520px] lg:w-[620px] object-contain md:-ml-4 lg:-ml-8 mt-24"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white px-8 md:px-20 py-20 text-center">
          <FadeInUp delay={200}>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              Ready to experience seamless aviation support?
            </h2>
          </FadeInUp>

          <FadeInUp delay={400}>
            <div className="flex flex-wrap justify-center items-center gap-2 text-[#5cc6d0] font-semibold text-lg md:text-xl">
              <Link
                to="/contact"
                className="hover:underline hover:text-[#6fdbe5] transition-colors duration-300"
              >
                Contact Us
              </Link>
              <span className="text-white">|</span>
              <Link
                to="/rfq"
                className="hover:underline hover:text-[#6fdbe5] transition-colors duration-300"
              >
                Request a Quote
              </Link>
              <span className="text-white">|</span>
              <Link
                to="/services"
                className="hover:underline hover:text-[#6fdbe5] transition-colors duration-300"
              >
                Explore Services
              </Link>
            </div>
          </FadeInUp>
        </section>
      </div>
    </PageLayout>
  );
};

export default TheStory;
