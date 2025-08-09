'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Brain,
  Users,
  Code,
  Shield,
  BarChart,
  Heart,
  CheckCheck,
  UserPlus,
  Award,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const competencies = [
    {
      icon: Brain,
      title: "Technical Mastery",
      description:
        "Proficiency in advanced AI frameworks and web development stacks, with certified expertise in over 12 AI frameworks and 18+ web technologies.",
    },
    {
      icon: Code,
      title: "Creative Excellence",
      description:
        "User-focused designs that enhance digital presence and drive engagement, with proven results in increasing conversion rates and user satisfaction.",
    },
    {
      icon: Users,
      title: "Client-Centric Collaboration",
      description:
        "Co-creation processes that align with client goals and ethical priorities, ensuring solutions that address specific business needs.",
    },
    {
      icon: Shield,
      title: "Ethical Leadership",
      description:
        "Unwavering commitment to responsible AI and web practices that build trust and compliance, with dedicated resources for ethical reviews.",
    },
  ];

  const objectives = [
    {
      icon: BarChart,
      title: "Financial Growth",
      description:
        "Achieve 25% year-over-year revenue growth through high-impact projects ($1.5M target by 2026).",
    },
    {
      icon: Heart,
      title: "Client Satisfaction",
      description:
        "Maintain a 95% satisfaction rate across all services, measured via post-project surveys.",
    },
    {
      icon: CheckCheck,
      title: "Ethical Deployment",
      description:
        "Ensure 100% of projects adhere to ethical, compliant, and secure technology standards.",
    },
    {
      icon: UserPlus,
      title: "Team Expansion",
      description:
        "Increase team capacity by 20% annually to meet growing demand for our services.",
    },
    {
      icon: Award,
      title: "Thought Leadership",
      description:
        "Establish Next Logic as a recognized leader in AI and web design within 3 years.",
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "Calgary, AB T2W 3B3",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "403-909-5123",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@nextlogicai.com",
    },
    ,
  ];
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
                width={160}
                height={40}
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
                onClick={() => navigateTo("/assessment")}
              >
                Assessment
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-pink-500 bg-pink-500/10"
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
          {/* Company Overview Section */}
          <section className="mb-20">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Company Overview
              </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Next Logic Design and AI
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Next Logic Design and AI is a dual-expertise consultancy firm
                  founded by Sarah Kruger and officially registered as a sole
                  proprietorship in Calgary, Alberta on February 6, 2025. The
                  company uniquely positions itself at the intersection of
                  artificial intelligence and innovative web design, delivering
                  transformative business outcomes across diverse industries.
                </p>

                <Card className="p-6 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-purple-500/50 backdrop-blur">
                  <h3 className="text-xl font-bold mb-2 text-pink-400">
                    Our Mission
                  </h3>
                  <p className="text-gray-300">
                    We empower businesses to leverage cutting-edge AI and web
                    solutions that are not only technologically advanced but
                    also ethically sound. Our commitment to responsible AI and
                    user-focused web design sets us apart in a rapidly evolving
                    digital landscape.
                  </p>
                </Card>
              </div>

              <div className="flex items-center justify-center">
                <div className="rounded-lg overflow-hidden border-2 border-purple-500/50 shadow-[0_0_15px_rgba(255,0,128,0.3)]">
                  <Image
                    src="/company-image.jpg"
                    alt="Next Logic Design and AI"
                    width={600}
                    height={400}
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1581091226033-c6e1f6b68795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Core Competencies Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">
              Core Competencies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {competencies.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-black bg-opacity-50 backdrop-blur border-gray-800 hover:border-pink-500 transition-all duration-300"
                >
                  <item.icon className="h-10 w-10 text-pink-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-purple-400">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Strategic Objectives Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Strategic Objectives
            </h2>

            <div className="space-y-8">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-black bg-opacity-30 border border-gray-800 rounded-lg hover:border-pink-500 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                      <objective.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-purple-400">
                      {objective.title}
                    </h3>
                    <p className="text-gray-300">{objective.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Information Section */}
          <section>
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">
              Contact Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item, index) => (
                item && (
                  <Card
                    key={index}
                    className="p-6 bg-black bg-opacity-50 backdrop-blur border-gray-800 hover:border-pink-500 transition-all duration-300 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-pink-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-purple-400">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.details}</p>
                  </Card>
                )
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255, 0, 128, 0.2), rgba(112, 0, 255, 0.2))",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to transform your business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI and web solutions can deliver measurable results for your organization.
            </p>
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-6 text-lg"
              onClick={() => navigateTo("/assessment")}
            >
              <span className="flex items-center">
                Get Started Now
              </span>
            </Button>
          </div>
        </div>
      </section>

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