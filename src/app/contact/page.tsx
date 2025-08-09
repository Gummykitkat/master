"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image"; // Added for logo
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
  Check,
  Clock,
  FileText,
  Users,
  BarChart,
  Brain,
  Code,
} from "lucide-react";

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        message: "",
      });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div
        className="fixed inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(255, 0, 128) 0%, transparent 40%),
            radial-gradient(circle at ${mousePosition.x - 400}px ${mousePosition.y + 100}px, rgb(0, 255, 128) 0%, transparent 40%),
            radial-gradient(circle at ${mousePosition.x + 200}px ${mousePosition.y - 300}px, rgb(112, 0, 255) 0%, transparent 40%)
          `,
        }}
      />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => navigateTo("/")}
            >
              <Image
                src="/logo.png"
                alt="Next Logic AI"
                width={160} // Adjust based on your logo's actual width
                height={40} // Adjust based on your logo's actual height
                className="drop-shadow-[0_0_15px_rgba(255,0,128,0.7)]"
                style={{ filter: "drop-shadow(0 0 12px rgba(0, 255, 255, 0.6))" }}
              />
            </div>
            <div className="flex space-x-8">
              <Button
                variant="ghost"
                className="text-white hover:text-pink-500"
                onClick={() => navigateTo("/services")}
              >
                Services
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-pink-500"
                onClick={() => navigateTo("/portfolio")}
              >
                Portfolio
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-pink-500"
                onClick={() => navigateTo("/about")}
              >
                About
              </Button>
              <Button
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                onClick={() => navigateTo("/assessment")}
              >
                Begin AI Readiness Assessment
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Contact Intro */}
<section className="mb-16">
  <h1 className="text-5xl font-bold mb-6">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
      Get Started
    </span>
  </h1>
  <p className="text-xl text-gray-300 max-w-3xl">
    Ready to transform your business with Next Logic Design and AI?
    We&apos;ve designed a straightforward process to help you move from
    initial conversation to successful implementation.
  </p>
</section>
          <section className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                title: "Phone",
                content: "403-909-5123",
                link: "tel:4039095123",
              },
              {
                icon: Mail,
                title: "Email",
                content: "info@nextlogicai.com",
                link: "mailto:info@nextlogicai.com",
              },
              { icon: MapPin, title: "Location", content: "Calgary" },
              {
                icon: Calendar,
                title: "Business Hours",
                content: "24/7 Our hours are your hours.",
                link: null,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-black bg-opacity-50 backdrop-blur border-gray-800 hover:border-pink-500 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-3">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-400">
                    {item.title}
                  </h3>
                </div>

                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-pink-500 transition-colors duration-300"
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      item.link.startsWith("http") ? "noopener noreferrer" : ""
                    }
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-300">{item.content}</p>
                )}
              </Card>
            ))}
          </section>

          {/* Our Approach Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">
              Our Approach to New Partnerships
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-300 mb-6">
                  We believe that great solutions start with deep
                  understanding. Our engagement process is designed to ensure
                  we fully grasp your needs, constraints, and goals before
                  proposing solutions. This approach leads to higher success
                  rates, clearer expectations, and stronger long-term
                  partnerships.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Initial Consultation",
                      icon: Users,
                      content:
                        "30 minute discovery call to discuss your business challenges, goals, and vision.",
                    },
                    {
                      title: "Needs Assessment",
                      icon: FileText,
                      content:
                        "In-depth evaluation of your requirements, technical readiness, and compliance considerations.",
                    },
                    {
                      title: "Proposal & Planning",
                      icon: BarChart,
                      content:
                        "Detailed project proposal with solution design, timeline, and resource allocation.",
                    },
                    {
                      title: "Kickoff & Implementation",
                      icon: Check,
                      content:
                        "Project kickoff meeting, detailed implementation planning, and regular progress updates.",
                    },
                  ].map((step, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mt-1 mr-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-purple-500 flex items-center justify-center">
                          <step.icon className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-purple-400 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-300 text-sm">{step.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Card className="p-8 bg-black bg-opacity-50 backdrop-blur border-gray-800">
                  <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                    Typical Timelines
                  </h3>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Initial Consultation to Proposal",
                        timeline: "1-2 weeks",
                        icon: Clock,
                      },
                      {
                        title: "AI Consultancy Projects",
                        timeline: "10-14 weeks from kickoff to completion",
                        icon: Brain,
                      },
                      {
                        title: "Web Design & Development",
                        timeline: "8-12 weeks from kickoff to launch",
                        icon: Code,
                      },
                      {
                        title: "Combined AI & Web Projects",
                        timeline: "14-20 weeks for comprehensive solutions",
                        icon: Users,
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-500/20 flex items-center justify-center mt-1 mr-3">
                          <item.icon className="h-3 w-3 text-pink-500" />
                        </div>
                        <div>
                          <h4 className="text-purple-400 font-medium">
                            {item.title}
                          </h4>
                          <p className="text-gray-300 text-sm">
                            {item.timeline}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="mb-20">
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 bg-black bg-opacity-50 backdrop-blur border-gray-800">
                <h2 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Contact Us
                </h2>

                {formSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <Check className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">
                      Message Sent Successfully!
                    </h3>
<p className="text-gray-300">
  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-gray-300 block text-sm font-medium"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-black/50 border border-gray-700 focus:border-pink-500 text-white rounded-md"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-gray-300 block text-sm font-medium"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-black/50 border border-gray-700 focus:border-pink-500 text-white rounded-md"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-gray-300 block text-sm font-medium"
                      >
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-black/50 border border-gray-700 focus:border-pink-500 text-white rounded-md"
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-gray-300 block text-sm font-medium"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-black/50 border border-gray-700 focus:border-pink-500 text-white rounded-md"
                        placeholder="(###) ###-####"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="projectType"
                        className="text-gray-300 block text-sm font-medium"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full rounded-md bg-black/50 border border-gray-700 focus:border-pink-500 text-white h-10 px-3"
                        required
                      >
                        <option value="" disabled>
                          Select a project type
                        </option>
                        <option value="ai-consultancy">AI Consultancy</option>
                        <option value="web-design">
                          Web Design & Development
                        </option>
                        <option value="combined">
                          Combined AI & Web Project
                        </option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-gray-300 block text-sm font-medium"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-black/50 border border-gray-700 focus:border-pink-500 text-white rounded-md min-h-[150px]"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-6"
                    >
                      <span className="flex items-center justify-center">
                        Send Message
                        <ArrowRight className="ml-2" />
                      </span>
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-3xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "What information do you need to provide an accurate quote?",
                  answer:
                    "We typically need an understanding of your business goals, current challenges, desired timeline, and budget range. The more specific you can be about your requirements, the more accurate our initial estimate will be.",
                },
                {
                  question:
                    "How do you handle confidential data during the assessment phase?",
                  answer:
                    "We sign NDAs before any detailed discussions and handle all client information with strict confidentiality. For data review, we can work with anonymized samples or conduct assessments in your secure environment.",
                },
                {
                  question:
                    "What makes your approach different from other consultancies?",
                  answer:
                    "Our dual expertise in both AI and web design, combined with our ethical foundation, allows us to deliver integrated solutions with both technical excellence and user-focused design. We also prioritize measurable business outcomes over technological complexity.",
                },
                {
                  question: "How do you ensure the success of projects?",
                  answer:
                    "We define clear success metrics at the start, implement regular check-ins, provide transparent progress reporting, and maintain a buffer in our timelines for unexpected challenges. Our quality assurance process ensures all deliverables meet our high standards.",
                },
                {
                  question: "What happens after project completion?",
                  answer:
                    "We provide 30 days of included support after launch and offer various maintenance and support packages to ensure your solution continues to perform optimally. We also conduct post-launch reviews to identify any optimization opportunities.",
                },
                {
                  question: "Do you work with clients outside of Canada?",
                  answer:
                    "Yes, we work with clients globally, although our primary focus is on serving businesses in North America. For international clients, we ensure compliance with relevant regional regulations and can accommodate different time zones for meetings.",
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="p-6 bg-black bg-opacity-50 backdrop-blur border-gray-800 hover:border-pink-500 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-purple-400 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 text-sm">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-black bg-opacity-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Next Logic Design and AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}