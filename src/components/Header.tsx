// Header.tsx (Liquid Glass UI Version)
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";

// ====================================================================
// --- TYPE DEFINITIONS ---
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
// --- EMBEDDED LIQUID GLASS CSS ---
// ====================================================================

const CARD_NAV_CSS = `
.card-nav-container {
  position: absolute;
  top: 2em;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 850px;
  z-index: 99;
  font-family: "Inter", sans-serif;
}

/* ---------------------------------------------------------- */
/* LIQUID GLASS NAV BASE                                      */
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
/* HAMBURGER MENU                                             */
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
/* LOGO + CTA BUTTON                                          */
/* ---------------------------------------------------------- */
.logo-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.logo {
  height: 28px;
  filter: drop-shadow(0 0 6px rgba(255,255,255,0.2));
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
/* DROPDOWN CARDS                                             */
/* ---------------------------------------------------------- */
.card-nav-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  padding: 0.75rem;
  visibility: hidden;
  pointer-events: none;
  z-index: 1;
}

.card-nav.open .card-nav-content {
  visibility: visible;
  pointer-events: auto;
}

.nav-card {
  flex: 1 1 0;
  min-width: 0;
  border-radius: 0.9rem;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 14px 18px;
  gap: 8px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255,255,255,0.18);
  box-shadow:
    inset 0 0 12px rgba(255,255,255,0.1),
    0 4px 18px rgba(0,0,0,0.3);
  color: #fff;
  transition: all 0.4s ease;
}

.nav-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 8px 25px rgba(0,0,0,0.45),
    inset 0 0 18px rgba(255,255,255,0.12);
}

.nav-card-label {
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.3px;
  color: #ffffffde;
  text-shadow: 0 0 8px rgba(255,255,255,0.3);
}

.nav-card-links {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: auto;
}

.nav-card-link {
  font-size: 16px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  opacity: 0.9;
  transition: opacity 0.3s ease, transform 0.3s ease;
  color: inherit;
}

.nav-card-link:hover {
  opacity: 1;
  transform: translateX(4px);
}

/* ---------------------------------------------------------- */
/* RESPONSIVE                                                 */
/* ---------------------------------------------------------- */
@media (max-width: 768px) {
  .card-nav-container {
    top: 1.2em;
    width: 92%;
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

  .card-nav-content {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  .nav-card {
    height: auto;
    padding: 12px;
  }
}
`;

// ====================================================================
// --- CARDNAV COMPONENT LOGIC ---
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

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

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

        contentEl.style.visibility = wasVisible;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return 60 + contentHeight + 16;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;
    gsap.set(navEl, { height: 60, overflow: "hidden" });
    const validCards = cardsRef.current.filter((el) => el) as HTMLDivElement[];
    gsap.set(validCards, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(navEl, { height: calculateHeight, duration: 0.4, ease });
    tl.to(
      validCards,
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
  }, [ease, items.length]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;
      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });
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
  }, [isExpanded, items.length]);

  const INITIAL_HEIGHT = 60;
  const toggleMenu = () => {
    if (typeof gsap === "undefined") return;
    const tl = tlRef.current;
    if (!tl) return;

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

          <div className="card-nav-content" aria-hidden={!isExpanded}>
            {(items || []).slice(0, 3).map((item, idx) => (
              <div key={item.label} className="nav-card" ref={setCardRef(idx)}>
                <div className="nav-card-label">{item.label}</div>
                <div className="nav-card-links">
                  {item.links?.map((lnk, i) => (
                    <a
                      key={lnk.label}
                      className="nav-card-link"
                      href={lnk.href}
                    >
                      <ArrowUpRight className="nav-card-link-icon" />{" "}
                      {lnk.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

// ====================================================================
// --- HEADER COMPONENT (Wrapper for CardNav) ---
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
