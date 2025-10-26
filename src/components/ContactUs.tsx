import React from "react";
import {
  Building2Icon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WarehouseIcon,
} from "lucide-react";

// Offices data
const uaeOffices = [
  {
    icon: <Building2Icon className="w-[21px] h-[21px]" />,
    title: "Rockdove Aviation FZ-LLC",
    details: [
      {
        icon: <MapPinIcon className="w-[17px] h-[17px]" />,
        text: "No. B17-22, RAK Port Customs Building, Nakheel Ras Al Khaimah, UAE",
      },
      {
        icon: <WarehouseIcon className="w-[21px] h-[21px]" />,
        text: "Q4-212, Sharjah International Airport Free Zone, UAE.",
      },
      {
        icon: <PhoneIcon className="w-[18px] h-[18px]" />,
        text: "+971 505056093",
      },
      {
        icon: <MailIcon className="w-[19px] h-[19px]" />,
        text: "sales@rockdoveaiation.com",
      },
    ],
  },
];

const indiaOffice = {
  icon: <Building2Icon className="w-[21px] h-[21px]" />,
  title: "Rockdove Aviation PVT Limited",
  details: [
    {
      icon: <MapPinIcon className="w-[17px] h-[17px]" />,
      text: "Behind Volvo Showroom, Poongothai Nagar, Civil Aerodrome Post, Coimbatore, Tamil Nadu, 641014",
    },
    { icon: <PhoneIcon className="w-[18px] h-[18px]" />, text: "" },
    {
      icon: <MailIcon className="w-[19px] h-[19px]" />,
      text: "sales@rockdoveaiation.com",
    },
  ],
};

// Form fields
const formFields = [
  { id: "name", label: "Name*", type: "text" },
  { id: "email", label: "Email address*", type: "email" },
  { id: "phone", label: "Phone*", type: "tel" },
  { id: "message", label: "Write a message *", type: "text" },
];

export const ContactUs: React.FC = () => {
  return (
    <div className="bg-black min-h-screen w-full overflow-hidden">
      {/* Page Title */}
      <section className="text-center mb-32">
        <h1 className="text-[#5cc6d0] font-bold text-4xl">Contact Us</h1>
      </section>

      {/* Offices Section */}
      <section className="grid grid-cols-2 gap-24 px-24 mb-32">
        {/* UAE Office */}
        <div className="space-y-12">
          <img
            src="https://c.animaapp.com/mh538kksdQpv3W/img/flag-of-the-united-arab-emirates-svg-1.png"
            alt="UAE Flag"
            className="w-[152px] h-[76px]"
          />
          {uaeOffices.map((office, idx) => (
            <div key={idx} className="space-y-8">
              <div className="flex items-center gap-2">
                {office.icon}
                <h2 className="text-white text-xl font-medium">
                  {office.title}
                </h2>
              </div>
              {office.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-2">
                  {detail.icon}
                  <p className="text-white text-xl font-medium">
                    {detail.text}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* India Office */}
        <div className="space-y-12">
          <img
            src="https://c.animaapp.com/mh538kksdQpv3W/img/flag-of-india-svg-1.png"
            alt="India Flag"
            className="w-[119px] h-[79px]"
          />
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              {indiaOffice.icon}
              <h2 className="text-white text-xl font-medium">
                {indiaOffice.title}
              </h2>
            </div>
            {indiaOffice.details.map((detail, i) => (
              <div key={i} className="flex items-start gap-2">
                {detail.icon}
                {detail.text && (
                  <p className="text-white text-xl font-medium">
                    {detail.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-24 mb-36">
        <div className="text-center mb-24">
          <h2 className="text-white text-2xl font-bold">
            If required, please use the form below to contact us.
            <br />A representative from our company will respond soon.
          </h2>
        </div>

        <form className="grid gap-6 max-w-xl mx-auto">
          {formFields.map((field) => (
            <div key={field.id} className="space-y-2">
              <label
                htmlFor={field.id}
                className="text-[#5cc6d0] font-semibold text-xl"
              >
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                className="w-full h-12 px-3 rounded-lg border-0 bg-white text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-[#5cc6d0]"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-[#5cc6d0] hover:bg-[#4ab5bf] rounded-[30px] h-12 px-8 text-white font-semibold text-sm transition-colors"
          >
            SUBMIT
          </button>
        </form>
      </section>
    </div>
  );
};
