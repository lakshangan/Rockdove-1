// Header.tsx (Liquid Glass UI Version - Final Dynamic Dropdown)

import React, { useLayoutEffect, useRef, useState } from "react";

import { gsap } from "gsap";

// Import the necessary icons for the new layout
import { Monitor, Briefcase, Plane, FileText } from "lucide-react";

// ====================================================================

// --- TYPE DEFINITIONS (Unchanged) ---

// ====================================================================

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

// ====================================================================

// --- EMBEDDED LIQUID GLASS CSS (Updated for new aesthetic and max-width) ---

// ====================================================================

const CARD_NAV_CSS = `

.card-nav-container {
    position: absolute;
    top: 2em;
    left: 50%;
    /* Start at default width and max-width */
    width: 90%; 
    max-width: 850px; 
    /* The transform/position logic is handled by GSAP when animating width */
    transform: translateX(-50%);
    z-index: 99;
    font-family: "Inter", sans-serif;
    will-change: width, max-width;
}


/* ---------------------------------------------------------- */
/* LIQUID GLASS NAV BASE                                      */
/* ---------------------------------------------------------- */
.card-nav {
    display: block;
    height: 60px;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.25);
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(22px) saturate(180%);
    -webkit-backdrop-filter: blur(22px) saturate(180%);
    box-shadow:
        0 4px 20px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.15),
        inset 0 -1px 2px rgba(255, 255, 255, 0.08);
    will-change: height, backdrop-filter;
    transition: all 0.4s ease;
}


.card-nav::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
        125deg,
        rgba(255,255,255,0.25) 0%,
        rgba(255,255,255,0.05) 100%
    );
    opacity: 0.5;
    pointer-events: none;
    border-radius: inherit;
}


.card-nav-top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    z-index: 2;
}


/* ---------------------------------------------------------- */
/* HAMBURGER MENU (Unchanged)                                     */
/* ---------------------------------------------------------- */
.hamburger-menu {
    display: flex;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    transition: transform 0.3s ease;
}
.hamburger-menu:hover {
    transform: scale(1.05);
}
.hamburger-line {
    width: 28px;
    height: 2px;
    background-color: currentColor;
    border-radius: 1px;
    transition: all 0.3s ease;
    box-shadow: 0 0 1px currentColor;
}


.hamburger-menu.open .hamburger-line:first-child {
    transform: translateY(5px) rotate(45deg);
}
.hamburger-menu.open .hamburger-line:last-child {
    transform: translateY(-5px) rotate(-45deg);
}


/* ---------------------------------------------------------- */
/* LOGO + CTA BUTTON (Unchanged)                                */
/* ---------------------------------------------------------- */
.logo-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}


.logo {
    /* Base Size: Use a slightly larger height and max-width for control */
    height: 32px; 
    max-width: 100%; /* Ensures it scales down if container shrinks */
    
    /* NEW: Use width: auto; to maintain aspect ratio based on the fixed height */
    width: auto; 
    
    filter: drop-shadow(0 0 6px rgba(255,255,255,0.2));
}

/* Add a media query to reduce size on smaller screens (e.g., mobile) */
@media (max-width: 768px) {
    .logo {
        height: 24px; /* Slightly smaller height on mobile */
        /* width: auto; ensures proportional scaling */
    }
}


.card-nav-cta-button {
    border: none;
    border-radius: 0.6rem;
    padding: 0 1.2rem;
    height: 38px;
    font-weight: 500;
    cursor: pointer;
    backdrop-filter: blur(10px);
    background: rgba(255,255,255,0.15);
    color: #fff;
    box-shadow:
        0 0 10px rgba(255,255,255,0.1),
        inset 0 0 10px rgba(255,255,255,0.1);
    transition: all 0.3s ease;
}
.card-nav-cta-button:hover {
    background: rgba(255,255,255,0.3);
    color: #000;
}


/* ---------------------------------------------------------- */
/* DROPDOWN CONTENT (Aesthetic Changes Applied)                                    */
/* ---------------------------------------------------------- */

.card-nav-content {
    /* Main Layout: Flex for 2 columns */
    position: absolute;
    left: 0;
    right: 0;
    top: 60px;
    bottom: 0;
    display: flex;
    gap: 0;
    padding: 0.75rem;
    visibility: hidden;
    pointer-events: none;
    z-index: 1;
    color: #fff;
}

.card-nav.open .card-nav-content {
    visibility: visible;
    pointer-events: auto;
}

/* New: Structure for the two main columns - Reduced Padding */
.custom-nav-left, .custom-nav-right {
    flex: 1;
    padding: 1.2rem; /* Reduced padding for aesthetics */
    background: rgba(0,0,0,0.05); 
    height: 100%;
    min-width: 0;
}

.custom-nav-left {
    padding-right: 2.5rem;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.custom-nav-right {
    padding-left: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

/* Services List Styling - Reduced Size */
.services-list-title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px; /* Reduced margin */
    opacity: 0.8;
}

.service-item {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 18px; /* Reduced vertical space */
    transition: transform 0.2s ease;
}

.service-item:hover {
    transform: translateX(3px);
}

.service-icon-wrapper {
    background-color: rgba(255, 255, 255, 0.15);
    padding: 8px; /* Smaller icon box */
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    flex-shrink: 0;
}

.service-text h3 {
    font-size: 20px; /* Reduced font size */
    font-weight: 600;
    margin: 0 0 2px 0;
}

.service-text p {
    font-size: 13px; /* Smaller description text */
    margin: 0;
    opacity: 0.85;
}


/* RFQ Block Styling - Reduced Size */
.rfq-title {
    font-size: 26px; /* Reduced title size */
    font-weight: 600;
    margin-bottom: 15px; /* Reduced margin */
}

.rfq-text {
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 40px; /* Reduced margin */
    opacity: 0.9;
}

.rfq-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: #EFEFEF;
    color: #333;
    border: none;
    border-radius: 0.6rem;
    padding: 10px 18px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    width: fit-content;
    margin-bottom: 50%;
}

.rfq-button:hover {
    background-color: #ddd;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.rfq-button .lucide {
    width: 20px;
    height: 20px;
    stroke: #333;
}

/* Remove original nav-card styles as we are replacing them */
.nav-card { display: none; }


/* ---------------------------------------------------------- */
/* RESPONSIVE   (Modified for new layout)                                          */
/* ---------------------------------------------------------- */

@media (max-width: 768px) {
    .card-nav-container {
        top: 1.2em;
        width: 92%;
        max-width: 92%; /* Set max-width for mobile */
    }

    .card-nav-top {
        justify-content: space-between;
    }

    .hamburger-menu {
        order: 2;
    }

    .logo-container {
        position: static;
        transform: none;
        order: 1;
    }

    .card-nav-cta-button {
        display: none;
    }

    /* Stack the two columns on mobile */
    .card-nav-content {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        padding: 0.75rem 0.75rem 0.75rem 0.75rem;
    }

    .custom-nav-left {
        padding: 1.5rem;
        border-right: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .custom-nav-right {
        padding: 1.5rem;
    }

    .service-item {
        margin-bottom: 20px;
    }
}
`;

// ====================================================================

// --- CARDNAV COMPONENT LOGIC (Updated for dynamic width and height) ---

// ====================================================================

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = "Logo",
  items,
  className = "",
  ease = "power3.out",
  baseColor = "rgba(255,255,255,0.08)",
  menuColor = "#00ffff",
  buttonBgColor = "rgba(255,255,255,0.2)",
  buttonTextColor = "#fff",
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const services = [
    {
      icon: Monitor,
      title: "Asset Management",
      description: "Manage your fleet with our 400,000+ part inventory.",
      href: "/asset-management",
    },
    {
      icon: Briefcase,
      title: "Repair Management",
      description: "Reliable component repairs with minimal downtime.",
      href: "/repair-management",
    },
    {
      icon: Plane,
      title: "24/7 AOG Support",
      description: "Parts ready in 60-90 minutes for AOG emergencies.",
      href: "/aog-support",
    },
  ];

  // UPDATED: Aesthetic fixed height for desktop
  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 400; // Default size for aesthetics

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content") as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = "visible";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";

        const contentHeight = contentEl.scrollHeight;
        const newHeight = 60 + contentHeight + 16;

        contentEl.style.visibility = wasVisible;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return newHeight;
      }
    }

    // Increased fixed height for aesthetic two-column layout
    return 400;
  };

  // UPDATED: Added width animation to the container
  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    // Get the parent container for width animation
    const navContainerEl = navEl.parentElement;
    if (!navContainerEl) return null;

    // Set initial states
    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(navContainerEl, { width: "90%", maxWidth: "850px" });

    // Target the new content for animation
    const leftContent = navEl.querySelector(".custom-nav-left");
    const rightContent = navEl.querySelector(".custom-nav-right");
    const validContent = [leftContent, rightContent].filter(
      (el) => el
    ) as Element[];

    gsap.set(validContent, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    // 1. Animate the container's width/max-width (should run first)
    tl.to(
      navContainerEl,
      {
        width: "90%",
        maxWidth: "1100px", // Expand to a wider max-width
        duration: 0.4,
        ease,
      },
      0
    );

    // 2. Animate the internal height (runs slightly staggered with width)
    tl.to(navEl, { height: calculateHeight, duration: 0.4, ease }, "-=0.2");

    // 3. Animate content in
    tl.to(
      validContent,
      { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 },
      "-=0.1"
    );

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;
      const navContainerEl = navRef.current?.parentElement;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        // Keep expanded width on resize
        if (navContainerEl) {
          gsap.set(navContainerEl, { maxWidth: "1100px" });
        }

        tlRef.current.kill();
        const newTl = createTimeline();

        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();

        if (newTl) tlRef.current = newTl;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  const INITIAL_HEIGHT = 60;
  const INITIAL_MAX_WIDTH = "850px";

  // UPDATED: Added width reset in onReverseComplete
  const toggleMenu = () => {
    if (typeof gsap === "undefined") return;

    const tl = tlRef.current;
    if (!tl) return;

    const navContainerEl = navRef.current?.parentElement;

    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      gsap.set(navRef.current, { overflow: "visible" });
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);

      tl.eventCallback("onReverseComplete", () => {
        setIsExpanded(false);
        gsap.set(navRef.current, {
          height: INITIAL_HEIGHT,
          overflow: "hidden",
        });
        // Reset width of the container after reverse is complete
        if (navContainerEl) {
          gsap.set(navContainerEl, {
            width: "90%",
            maxWidth: INITIAL_MAX_WIDTH,
          });
        }
      });

      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CARD_NAV_CSS }} />

      <div className={`card-nav-container ${className}`}>
        <nav
          ref={navRef}
          className={`card-nav ${isExpanded ? "open" : ""}`}
          style={{ backgroundColor: baseColor }}
        >
          <div className="card-nav-top">
            <div
              className={`hamburger-menu ${isHamburgerOpen ? "open" : ""}`}
              onClick={toggleMenu}
              role="button"
              aria-label={isExpanded ? "Close menu" : "Open menu"}
              tabIndex={0}
              style={{ color: menuColor }}
            >
              <div className="hamburger-line" />
              <div className="hamburger-line" />
            </div>

            <div className="logo-container">
              <img src={logo} alt={logoAlt} className="logo" />
            </div>

            <button
              type="button"
              className="card-nav-cta-button"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
              }}
            >
              Contact
            </button>
          </div>

          {/* CUSTOM DROPDOWN CONTENT */}
          <div className="card-nav-content" aria-hidden={!isExpanded}>
            {/* Left Column: Services List */}
            <div className="custom-nav-left">
              <div className="services-list-title">Explore Our Services</div>

              {services.map((service, idx) => (
                <a
                  key={idx}
                  href={service.href}
                  className="service-item"
                  tabIndex={isExpanded ? 0 : -1}
                >
                  <div className="service-icon-wrapper">
                    <service.icon size={24} />
                  </div>
                  <div className="service-text">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Right Column: RFQ Call to Action */}
            <div className="custom-nav-right">
              <div>
                <h2 className="rfq-title">Request for quote</h2>
                <p className="rfq-text">
                  With our extensive inventory and strategic UAE locations, we
                  ensure reliable, cost-effective solutions for Boeing, Airbus,
                  and Embraer fleets, responding promptly to keep your
                  operations soaring. Navigate to our RFQ page now to get
                  started.
                </p>
              </div>

              <a
                href="/rfq"
                className="rfq-button"
                tabIndex={isExpanded ? 0 : -1}
              >
                <FileText />
                Go to Form
              </a>
            </div>
          </div>
          {/* END: CUSTOM DROPDOWN CONTENT */}
        </nav>
      </div>
    </>
  );
};

// ====================================================================

// --- HEADER COMPONENT (Wrapper for CardNav) (Unchanged) ---

// ====================================================================

const originalNavigationItems = [
  {
    label: "Services",
    hasDropdown: true,
    sections: [
      {
        title: "Management",
        links: [
          { name: "Asset Management", icon: null },
          { name: "Repair Management", icon: null },
        ],
      },
      { title: "Support", links: [{ name: "24/7 AOG Support", icon: null }] },
    ],
  },
  { label: "RFQ", hasDropdown: false },
  {
    label: "Company",
    hasDropdown: true,
    sections: [
      {
        title: "About",
        links: [
          { name: "The Story", icon: null },
          { name: "Careers", icon: null },
        ],
      },
      { title: "More", links: [{ name: "FAQs", icon: null }] },
    ],
  },
];

const transformToCardNavItems = (data: any[]): CardNavItem[] => {
  const COLORS = {
    Services: { bgColor: "rgba(255,255,255,0.08)", textColor: "#fff" },
    Company: { bgColor: "rgba(255,255,255,0.08)", textColor: "#fff" },
    Contact: { bgColor: "rgba(255,255,255,0.08)", textColor: "#fff" },
  };

  const items: CardNavItem[] = [];

  const services = data.find((d) => d.label === "Services");
  if (services)
    items.push({
      label: "Services",
      ...COLORS.Services,
      links: services.sections.flatMap((s: any) =>
        s.links.map((l: any) => ({
          label: l.name,
          href: `/services/${l.name.toLowerCase().replace(/ /g, "-")}`,
          ariaLabel: l.name,
        }))
      ),
    });

  const company = data.find((d) => d.label === "Company");
  if (company)
    items.push({
      label: "Company",
      ...COLORS.Company,
      links: company.sections.flatMap((s: any) =>
        s.links.map((l: any) => ({
          label: l.name,
          href: `/company/${l.name.toLowerCase().replace(/ /g, "-")}`,
          ariaLabel: l.name,
        }))
      ),
    });

  items.push({
    label: "Contact",
    ...COLORS.Contact,
    links: [
      { label: "RFQ Submission", href: "/rfq", ariaLabel: "RFQ" },
      {
        label: "Email Support",
        href: "mailto:contact@rockdove.com",
        ariaLabel: "Email",
      },
      {
        label: "Partner Inquiry",
        href: "/partnerships",
        ariaLabel: "Partner Inquiry",
      },
    ],
  });

  return items;
};

const cardNavItems = transformToCardNavItems(originalNavigationItems);

export const Header: React.FC = () => (
  <CardNav
    logo="/rda-gradient-logo--1--1.png"
    logoAlt="RockDove Logo"
    items={cardNavItems}
    baseColor="rgba(255,255,255,0.08)"
    menuColor="#00ffff"
    buttonBgColor="rgba(255,255,255,0.25)"
    buttonTextColor="#fff"
  />
);
