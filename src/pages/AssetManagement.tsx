import React from "react";
import { Briefcase, BarChart3, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { PageLayout } from "../components/PageLayout";

const AssetManagement: React.FC = () => {
  const features = [
    {
      icon: <Briefcase className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Asset Tracking",
      description: "Real-time tracking and monitoring of all aircraft parts and components across your entire fleet."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and reporting tools to optimize your asset utilization and reduce costs."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Compliance Management",
      description: "Automated compliance tracking to ensure all assets meet regulatory requirements and safety standards."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Predictive Maintenance",
      description: "AI-powered predictive maintenance scheduling to prevent failures and optimize maintenance windows."
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 30%",
    "Improve asset utilization by 25%",
    "Minimize downtime with predictive insights",
    "Ensure regulatory compliance automatically",
    "Streamline inventory management",
    "Enhance decision-making with real-time data"
  ];

  const capabilities = [
    "Real-time Asset Tracking",
    "Lifecycle Management",
    "Maintenance Scheduling",
    "Compliance Monitoring",
    "Cost Optimization",
    "Performance Analytics"
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Briefcase className="w-12 h-12 text-[#5cc6d0]" />
              <h1 className="text-5xl md:text-6xl font-bold">Asset Management</h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
              Optimize your aircraft asset lifecycle with our comprehensive management platform. 
              Track, monitor, and maintain your fleet assets with precision and efficiency.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-8 hover:bg-[#0b0d10]/70 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {feature.icon}
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-[#5cc6d0]">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-8 bg-[#0b0d10]/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[#5cc6d0] flex-shrink-0" />
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Our Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-6 text-center hover:bg-[#0b0d10]/70 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-[#5cc6d0] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#5cc6d0]">{capability}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-8 bg-[#0b0d10]/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Proven Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Cost Reduction", 
                  value: "30%",
                  description: "Average cost savings achieved by our clients"
                },
                { 
                  title: "Asset Utilization", 
                  value: "25%",
                  description: "Improvement in asset utilization rates"
                },
                { 
                  title: "Downtime Reduction", 
                  value: "40%",
                  description: "Reduction in unplanned downtime"
                }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-8">
                  <div className="text-4xl font-bold text-[#5cc6d0] mb-4">{stat.value}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#5cc6d0]">{stat.title}</h3>
                  <p className="text-gray-300">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Optimize Your Assets?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Discover how our asset management platform can transform your operations and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#5cc6d0] text-black px-8 py-4 text-lg font-semibold hover:bg-[#4ab5bf] transition-all duration-300 hover:scale-105">
                Get Started
              </Button>
              <Button variant="outline" className="border-[#5cc6d0] text-[#5cc6d0] px-8 py-4 text-lg font-semibold hover:bg-[#5cc6d0] hover:text-black transition-all duration-300">
                Request Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AssetManagement;