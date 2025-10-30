import React, { useState, useRef } from "react";
import { Send, Phone, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { PageLayout } from "../components/PageLayout";

const RFQ: React.FC = () => {
  const [formData, setFormData] = useState({
    partNumber: "",
    condition: "",
    description: "",
    certificate: "",
    quality: "",
    notes: "",
  });

  const formRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const button = document.getElementById("submit-btn");
    if (button) {
      button.classList.add("scale-95", "bg-[#4ab5bf]");
      setTimeout(() => {
        button.classList.remove("scale-95", "bg-[#4ab5bf]");
      }, 300);
    }
    console.log("RFQ submitted:", formData);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageLayout>
      <div className="bg-black text-white min-h-screen font-[Poppins] relative overflow-hidden">
        {/* ============ HERO SECTION ============ */}
        <section
          className="
          flex flex-col lg:flex-row justify-between items-center text-left 
          pt-[100px] lg:pt-[150px] 
          px-6 sm:px-10 lg:px-[260px] pb-[60px] lg:pb-[80px]"
        >
          <div className="max-w-xl space-y-5">
            <h1 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-[#5cc6d0] leading-snug">
              Request for Quote (RFQ)
            </h1>

            <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
              Submit your parts requirements and receive competitive quotes from
              our global network. Expect a response within 2 hours.
            </p>

            <Button
              onClick={scrollToForm}
              className="bg-[#5cc6d0] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#4ab5bf] transition-all"
            >
              ↓ Scroll to Form
            </Button>
          </div>

          {/* Right Image Placeholder */}
          <div className="w-[200px] sm:w-[240px] lg:w-[260px] h-[220px] sm:h-[280px] lg:h-[320px] bg-[#d9d9d9] rounded-xl flex items-center justify-center mt-10 lg:mt-0">
            <span className="text-[#5cc6d0] text-lg font-medium">Mascot</span>
          </div>
        </section>

        {/* ============ PARTS INFORMATION FORM ============ */}
        <section
          ref={formRef}
          className="text-left px-6 sm:px-10 lg:px-[260px] pt-[40px] lg:pt-[100px] pb-[60px]"
        >
          <h2 className="text-[#5cc6d0] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold mb-10">
            Parts Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "partNumber", label: "Part Number*", placeholder: "Enter the part number" },
                { name: "condition", label: "Condition*", placeholder: "Enter the condition" },
                { name: "description", label: "Description*", placeholder: "Enter the description" },
                { name: "certificate", label: "Certificate*", placeholder: "Enter the certificate" },
                { name: "quality", label: "Quality*", placeholder: "Enter your quantity needed" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium mb-2">{field.label}</label>
                  <input
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full bg-[#d9d9d9] text-black px-5 py-3 rounded-full outline-none"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Notes*</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Add any extra details, specs, or special instructions"
                className="w-full bg-[#d9d9d9] text-black px-5 py-4 rounded-xl outline-none resize-none"
                rows={4}
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                id="submit-btn"
                type="submit"
                className="bg-[#5cc6d0] text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#4ab5bf] transition-all transform active:scale-95"
              >
                <Send className="w-5 h-5" />
                Submit RFQ
              </Button>
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <img src="/emark.svg" alt="Exclamation Icon" className="w-4 h-4" />
                Response within 2 hours
              </span>
            </div>
          </form>
        </section>

        {/* ============ WHY SUBMIT SECTION ============ */}
        <section className="text-left px-6 sm:px-10 lg:px-[260px] pt-[60px] pb-[60px]">
          <h2 className="text-[#5cc6d0] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold mb-10">
            Why Submit Your RFQ with Rockdove Aviation?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="w-full h-[200px] bg-[#d9d9d9] rounded-xl flex items-center justify-center text-[#5cc6d0] text-lg font-medium"
              >
                Image {item}
              </div>
            ))}
          </div>
        </section>

        {/* ============ HELP SECTION ============ */}
        <section className="text-left px-6 sm:px-10 lg:px-[260px] pt-[40px] pb-[80px]">
          <h3 className="text-[#5cc6d0] text-[26px] sm:text-[30px] lg:text-[32px] font-semibold mb-4">
            Need Help with Your RFQ?
          </h3>
          <p className="text-gray-200 mb-8 text-base sm:text-lg">
            Contact our team directly for personalized assistance.
          </p>

          <div className="flex flex-col gap-4 text-gray-300">
            <div className="flex items-center gap-3 flex-wrap">
              <Phone className="w-5 h-5 text-[#5cc6d0]" />
              <span className="text-base sm:text-lg md:text-xl">
                +971 505056093 / +971 505059093
              </span>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <Mail className="w-5 h-5 text-[#5cc6d0]" />
              <span className="text-base sm:text-lg md:text-xl">
                sales@rockdoveaviation.com
              </span>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default RFQ;