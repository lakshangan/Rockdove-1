import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ import Link

type NavLink = { label: string; href: string; icon?: string; desc?: string };

const SERVICES: NavLink[] = [
  {
    label: "Asset Management",
    href: "/asset-management",
    icon: "/file.png",
    desc: "Manage your fleet with our 400,000+ part inventory.",
  },
  {
    label: "Repair Management",
    href: "/repair-management",
    icon: "/bag.png",
    desc: "Reliable component repairs with minimal downtime.",
  },
  {
    label: "24/7 AOG Support",
    href: "/aog-support",
    icon: "/ava.png",
    desc: "Parts ready in 60–90 minutes for AOG emergencies.",
  },
];

// ✅ Updated COMPANY structure
const COMPANY: NavLink[] = [
  {
    label: "The Story",
    href: "/the-story",
    icon: "/1.png",
    desc: "Our journey so far, our future direction, and why we’re thrilled to have you with us.",
  },
  {
    label: "Career",
    href: "/careers",
    icon: "/2.png",
    desc: "Become part of Rockdove’s dynamic team and elevate your career.",
  },
  {
    label: "MRO",
    href: "/mro",
    icon: "/3.png",
    desc: "Explore on our journey and secure an early appointment to connect with us.",
  },
  {
    label: "FAQs",
    href: "/faqs",
    icon: "/4.png",
    desc: "Find fast solutions to our most frequently asked questions.",
  },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleOutside = (e: Event) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header
      ref={containerRef}
      className="w-full relative top-0 left-0 z-50 bg-black text-white font-[Poppins]"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-20 flex items-center justify-between">
          {/* ✅ Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/rda-gradient-logo--1--1.png"
              alt="RockDove Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-12 text-[17px] font-semibold">
            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() =>
                window.innerWidth >= 768 && setActiveDropdown("services")
              }
              onMouseLeave={() =>
                window.innerWidth >= 768 && setActiveDropdown(null)
              }
            >
              <button
                onClick={() => toggleDropdown("services")}
                className={`inline-flex items-center gap-2 transition-colors ${
                  activeDropdown === "services"
                    ? "text-white"
                    : "text-[#5CC6D0] hover:text-white"
                }`}
              >
                Services <ChevronDown className="h-5 w-5" />
              </button>

              {/* Services Dropdown */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-4 w-[998px] rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ease-out ${
                  activeDropdown === "services"
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
                style={{
                  background:
                    "linear-gradient(0deg, #5CC6D0, #5CC6D0), linear-gradient(180deg, rgba(0, 0, 0, 0) -6.8%, rgba(0, 0, 0, 0.2) 93.2%)",
                }}
              >
                <div className="flex h-full">
                  <div className="flex-1 p-8">
                    <p className="text-black font-medium text-sm mb-6">
                      Explore Our Services
                    </p>
                    <div className="flex flex-col gap-6">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.href}
                          to={s.href}
                          className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-xl transition"
                        >
                          <div className="bg-white rounded-lg p-3 shadow-md">
                            <img src={s.icon} alt="" className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-black font-semibold text-base">
                              {s.label}
                            </p>
                            <p className="text-black/80 text-sm leading-tight">
                              {s.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="w-[1px] bg-black/20 my-8"></div>

                  <div className="w-[40%] p-8 flex flex-col justify-between">
                    <div>
                      <h4 className="text-black font-semibold text-lg mb-3">
                        Request for quote
                      </h4>
                      <p className="text-black/80 text-sm leading-relaxed mb-5">
                        With our extensive inventory and strategic UAE
                        locations, we ensure reliable, cost-effective solutions
                        for Boeing, Airbus, and Embraer fleets. Navigate to our
                        RFQ page now to get started.
                      </p>
                    </div>
                    <Link
                      to="/rfq"
                      className="inline-flex items-center justify-center gap-2 bg-[#EAEAEA] text-black font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-300 w-fit"
                    >
                      <img
                        src="/sign.png"
                        alt=""
                        className="w-10 h-6 opacity-70"
                      />
                      Go to Form
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ RFQ link */}
            <Link
              to="/rfq"
              className="text-[#5CC6D0] hover:text-white transition-colors"
            >
              RFQ
            </Link>

            {/* Company */}
            <div
              className="relative"
              onMouseEnter={() =>
                window.innerWidth >= 768 && setActiveDropdown("company")
              }
              onMouseLeave={() =>
                window.innerWidth >= 768 && setActiveDropdown(null)
              }
            >
              <button
                onClick={() => toggleDropdown("company")}
                className={`inline-flex items-center gap-2 transition-colors ${
                  activeDropdown === "company"
                    ? "text-white"
                    : "text-[#5CC6D0] hover:text-white"
                }`}
              >
                Company <ChevronDown className="h-5 w-5" />
              </button>

              {/* Company Dropdown */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-4 w-[1200px] rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ease-out ${
                  activeDropdown === "company"
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
                style={{
                  background:
                    "linear-gradient(0deg, #5CC6D0, #5CC6D0), linear-gradient(180deg, rgba(0, 0, 0, 0) -6.8%, rgba(0, 0, 0, 0.2) 93.2%)",
                }}
              >
                <div className="flex h-full">
                  <div className="flex-1 p-10">
                    <p className="text-black font-medium text-sm mb-6">
                      Know more about Company
                    </p>

                    <div className="grid grid-cols-2 gap-8">
                      {COMPANY.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-xl transition"
                        >
                          <div className="bg-white rounded-lg p-3 shadow-md flex-shrink-0">
                            <img
                              src={item.icon}
                              alt=""
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                          <div>
                            <p className="text-black font-semibold text-base">
                              {item.label}
                            </p>
                            <p className="text-black/80 text-sm leading-tight">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="w-[1px] bg-black/20 my-8"></div>

                  <div className="w-[40%] p-10 flex flex-col justify-between">
                    <div>
                      <h4 className="text-black font-semibold text-lg mb-3">
                        Request for quote
                      </h4>
                      <p className="text-black/80 text-sm leading-relaxed mb-6">
                        With our extensive inventory and strategic UAE
                        locations, we ensure reliable, cost-effective solutions
                        for Boeing, Airbus, and Embraer fleets, responding
                        promptly to keep your operations soaring. Navigate to
                        our RFQ page now to get started.
                      </p>
                    </div>

                    <div className="mt-2">
                      <Link
                        to="/rfq"
                        className="inline-flex items-center justify-center gap-2 bg-[#EAEAEA] text-black font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-300 w-fit"
                      >
                        <img
                          src="/sign.png"
                          alt=""
                          className="w-10 h-6 opacity-70"
                        />
                        Go to Form
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* ✅ Contact button */}
          <Link
            to="/contact"
            className="hidden md:inline-block border border-[#5CC6D0] text-[#5CC6D0] rounded-full px-5 py-2 font-semibold hover:bg-[#5CC6D0] hover:text-black transition"
          >
            Contact
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-[#5CC6D0] hover:text-white"
            onClick={() => {
              setMobileOpen((v) => !v);
              setActiveDropdown(null);
            }}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
