"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "What kind of certificate will come with the products?",
    answer:
      "All our products come with proper certification documents including traceability records, material certificates, and compliance documentation as required by aviation standards.",
  },
  {
    question: "What is the warranty period for the unit supplied?",
    answer:
      "We provide comprehensive warranty coverage for all supplied units, with terms varying based on the specific component and manufacturer requirements. Contact us for detailed warranty information.",
  },
  {
    question: "Average self life for the consumable supplied?",
    answer:
      "Consumable shelf life varies by product type and storage conditions. We provide detailed shelf life information with each consumable item and can advise on optimal storage practices.",
  },
  {
    question: "How quickly can RDA deliver parts for an urgent AOG situation?",
    answer:
      "RDA guarantees parts preparation for pickup within 60–90 minutes for urgent AOG situations, leveraging our UAE warehouse with over 400,000 parts.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-semibold font-[Poppins]">
            FAQS
          </h2>
          <p className="text-gray-300 text-lg md:text-xl font-[Poppins] font-medium leading-snug">
            Here are answers to <br /> questions our clients ask.
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true }}
          className="space-y-2 w-full"
        >
          {faqItems.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-2 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 text-left text-base md:text-lg font-[Poppins] font-medium transition-all duration-500 hover:text-[#5cc6d0]"
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                    color: openIndex === index ? "#5cc6d0" : "#fff",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0, y: -5 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -5 }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                      opacity: { duration: 0.4 },
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.05, duration: 0.4 }}
                      className="text-[#5cc6d0] text-sm md:text-base font-[Poppins] font-medium leading-relaxed pb-4"
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
