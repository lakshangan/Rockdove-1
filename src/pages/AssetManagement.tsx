import { lazy, Suspense } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { PageLayout } from "../components/PageLayout";

const Spline = lazy(() => import('@splinetool/react-spline'));

const inventoryCategories = [
  { title: "Consumables", items: ["Oils and fluids"] },
  { title: "Rotables", items: ["Engines & Landing gears"] },
  { title: "Expendables", items: ["filters and seals"] },
  { title: "Tools", items: ["Specialized aviation tooling"] },
  { title: "Placards", items: ["Aircraft signage and labels"] },
];

const brandLogos = [
  { src: "https://c.animaapp.com/mh31x2ueWQqHGB/img/airbus-logo-1.png", alt: "Airbus logo" },
  { src: "https://c.animaapp.com/mh31x2ueWQqHGB/img/logo-boeing-1.png", alt: "Logo boeing" },
  { src: "https://c.animaapp.com/mh31x2ueWQqHGB/img/atr-logo-2015-svg-1.png", alt: "Atr logo svg" },
  { src: "https.c.animaapp.com/mh31x2ueWQqHGB/img/bombardier-logo-1942-1.png", alt: "Bombardier logo" },
  { src: "https://c.animaapp.com/mh31x2ueWQqHGB/img/embraer-logo-1.png", alt: "Embraer logo" },
];

const specializedProducts = [
  {
    title: "APUs",
    image: "https://c.animaapp.com/mh31x2ueWQqHGB/img/10products-13apu-categorypage-pw901a-c-content-card-800x450-remo.png",
    imageClassName: "w-[405px] h-[228px]",
    cardClassName: "bg-[linear-gradient(180deg,rgba(92,198,208,1)_0%,rgba(0,151,161,1)_100%)]",
  },
  {
    title: "Brakes",
    image: "https.c.animaapp.com/mh31x2ueWQqHGB/img/6874354-free-3d-file-aircraft-circuit-breaker-3d-printable-desig.png",
    imageClassName: "w-[194px] h-[175px]",
    cardClassName: "bg-[#d9d9d9] hover:bg-[#5cc6d0] transition-colors duration-300",
  },
  {
    title: "Engine",
    image: "https://c.animaapp.com/mh31x2ueWQqHGB/img/360-f-269338408-iic0xiyjedyxws8gczvsuromv0whj2rs-removebg-previe.png",
    imageClassName: "w-[306px] h-[175px]",
    cardClassName: "bg-[#d9d9d9] hover:bg-[#5cc6d0] transition-colors duration-300",
  },
  {
    title: "Starters",
    image: "https://c.animaapp.com/mh31x2ueWQqHGB/img/images--2--removebg-preview--1--1.png",
    imageClassName: "w-[209px] h-[130px]",
    cardClassName: "bg-[#d9d9d9] hover:bg-[#5cc6d0] transition-colors duration-300",
  },
  {
    title: "Thrust reverser",
    image: "https://c.animaapp.com/mh31x2ueWQqHGB/img/thrust-reverser-1-1.png",
    imageClassName: "w-[211px] h-[152px]",
    cardClassName: "bg-[#d9d9d9] hover:bg-[#5cc6d0] transition-colors duration-300",
  },
  {
    title: "Wheels",
    image: "https://c.animaapp.com/mh31x2ueWQqHGB/img/boeing737aircraftwheelvray3dmodel001-removebg-preview-1.png",
    imageClassName: "w-[305px] h-[172px]",
    cardClassName: "bg-[#d9d9d9] hover:bg-[#5cc6d0] transition-colors duration-300",
  },
  {
    title: "Landing Gears",
    image: "https://c.animaapp.com/mh31x2ueWQqHGB/img/landing-gear-r787-01-removebg-preview-1.png",
    imageClassName: "w-[304px] h-[190px]",
    cardClassName: "bg-[#d9d9d9] hover:bg-[#5cc6d0] transition-colors duration-300",
  },
  {
    title: "Blades",
    image: "https://c.animaapp.com/mh31x2ueWQqHGB/img/images--3--removebg-preview-1.png",
    imageClassName: "w-[325px] h-52",
    cardClassName: "bg-[#d9d9d9] hover:bg-[#5cc6d0] transition-colors duration-300",
  },
  {
    title: "Actuators",
    image: "https://c.animaapp.com/mh31x2ueWQqHGB/img/images--4--removebg-preview--1--1.png",
    imageClassName: "w-[231px] h-[133px]",
    cardClassName: "bg-[#d9d9d9] hover:bg-[#5cc6d0] transition-colors duration-300",
  },
];

const AssetManagement = (): JSX.Element => {
  return (
    <PageLayout>
      <div className="bg-black overflow-hidden w-full">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 md:px-12 lg:px-[178px] pt-24 pb-24 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-bold text-[#5cc6d0] text-3xl sm:text-4xl md:text-5xl mb-4">
              Asset Management
            </h1>
            <p className="font-medium text-white text-lg sm:text-xl leading-relaxed">
              With over 400,000 parts in our dedicated warehouse and broad inventories covering 
              Rotables, consumables, and more, we ensure your aircraft stays Non-stop.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <Suspense fallback={<div className="flex items-center justify-center text-gray-400 text-sm h-full">Loading 3D model...</div>}>
                <Spline scene="https://prod.spline.design/eKIr9KALeaHgOFXP/scene.splinecode" />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Expert Asset Management Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-[228px] py-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start gap-8 md:gap-12">
            <div className="text-center md:text-left">
              <h2 className="font-medium text-white text-2xl sm:text-3xl lg:text-[24px] leading-relaxed mb-6">
                Expert Asset Management <br />
                for Seamless <br />
                <span className="lg:text-[32px] font-bold text-[#5cc6d0]">
                  Aviation Operations
                </span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="text-center">
                <div className="font-bold text-[#55cccc] text-3xl sm:text-4xl lg:text-[40px] mb-2">27k+</div>
                <div className="font-medium text-white text-lg sm:text-2xl">Inventories</div>
              </div>
              <div className="w-1 h-20 bg-white hidden sm:block" />
              <div className="text-center">
                <div className="font-bold text-[#55cccc] text-3xl sm:text-4xl lg:text-[40px] mb-2">400,000+</div>
                <div className="font-medium text-white text-lg sm:text-2xl">Parts</div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="w-[350px] h-[180px] rounded-[20px] bg-[linear-gradient(180deg,rgba(92,198,208,1)_0%,rgba(47,101,106,1)_100%)]" />
            <img
              className="absolute top-[-5rem] left-[-4rem] w-[379px] h-[329px] object-cover"
              alt="Now that looks fun"
              src="https://c.animaapp.com/mh31x2ueWQqHGB/img/now-that-looks-fun-removebg-preview--1--1.png"
            />
          </div>
        </section>

        {/* Broad Inventory Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-[228px] py-16">
          <h2 className="font-extrabold text-[#5cc6d0] text-3xl sm:text-4xl md:text-5xl text-center mb-12">
            Broad Inventory
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {inventoryCategories.map((category, index) => (
              <div key={index}>
                <h3 className="font-bold text-white text-lg sm:text-xl mb-2">{category.title}</h3>
                {category.items.map((item, idx) => (
                  <p key={idx} className="font-medium text-white text-base">{item}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Brand Logos Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-[228px] py-16 text-center">
          <h3 className="font-medium text-white text-2xl mb-8">
            These inventories support Major <span className="text-[#5cc6d0]">Brands</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {brandLogos.map((logo, index) => (
              <img key={index} className="w-40 h-auto object-contain" alt={logo.alt} src={logo.src} />
            ))}
          </div>
        </section>

        {/* A to Z Parts Solutions Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-[228px] py-16 text-center">
          <h2 className="font-bold text-[#5cc6d0] text-3xl sm:text-4xl md:text-5xl mb-6">A to Z Parts Solutions</h2>
          <p className="font-medium text-white text-lg sm:text-xl md:text-2xl max-w-[1080px] mx-auto mb-8">
            Not limited to high-end specialties; we provide everything from basic hardware (nuts, bolts, seals) to advanced systems (avionics, landing gear, propulsion). Sourced from trusted OEMs and aftermarket
          </p>
          <Button className="h-auto rounded-[40px] border-0 bg-[linear-gradient(180deg,rgba(92,198,208,1)_0%,rgba(20,145,155,1)_100%)] px-10 py-3 text-white font-semibold text-lg hover:opacity-90 transition-opacity">
            Request a quote
          </Button>
        </section>

        {/* We Are Specialized In Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-[228px] py-16 text-center">
          <h2 className="font-bold text-[#5cc6d0] text-3xl sm:text-4xl md:text-5xl mb-4">We are specialized in</h2>
          <div className="w-24 h-1 bg-[#5cc6d0] mx-auto mb-4" />
          <p className="font-medium text-white text-lg sm:text-xl mb-12">
            We manage critical assets with<br/>expert maintenance, ensuring top performance and safety
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {specializedProducts.map((product, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <div className="relative group">
                  <Card className={`w-[157px] h-[124px] ${product.cardClassName} rounded-[20px] border-0`}>
                    <CardContent className="p-0" />
                  </Card>
                  <img className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${product.imageClassName} object-cover`} alt={product.title} src={product.image} />
                </div>
                <h3 className="font-bold text-white text-xl text-center">{product.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AssetManagement;