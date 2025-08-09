'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Brain,
  Code,
  PenTool,
  Database,
  LineChart,
  Building,
  Cpu,
  BarChart,
  Users,
  Server,
  Globe,
  Layout,
  Smartphone,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  const aiServices = [
    {
      icon: Brain,
      title: "Predictive Analytics Consulting",
      description: "Advanced data modeling with 85%+ accuracy, real-time dashboards, and business intelligence transformation.",
      features: [
        "Time series analysis & deep learning",
        "Sub-500ms response time dashboards",
        "BI tool integration & enhancement"
      ]
    },
    {
      icon: LineChart,
      title: "AI Strategy Development",
      description: "Comprehensive technology readiness assessment, implementation roadmapping, and organizational capability building.",
      features: [
        "5-dimension readiness scoring",
        "6-12 month implementation timeline",
        "Workshops & governance creation"
      ]
    },
    {
      icon: Database,
      title: "Machine Learning Solutions",
      description: "Custom algorithm development, predictive maintenance systems, and customer behavior prediction models.",
      features: [
        "XGBoost, BERT, GANs implementation",
        "IoT sensor integration for maintenance",
        "RFM analysis for customer retention"
      ]
    }
  ];

  const webServices = [
    {
      icon: PenTool,
      title: "Strategic Web Presence Design",
      description: "Brand narrative translation, user experience optimization, and conversion-focused methodology.",
      features: [
        "Brand value visualization",
        "A/B testing & heatmap analysis",
        "Strategic CTA & funnel development"
      ]
    },
    {
      icon: Code,
      title: "Technical Web Development",
      description: "Responsive and adaptive design, performance-optimized development, and enterprise-grade solutions.",
      features: [
        "Cross-device compatibility",
        "<2-second load times",
        "Microservices architecture"
      ]
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "User-centered design approach focusing on usability, accessibility, and aesthetic excellence.",
      features: [
        "Wireframing & prototyping",
        "User testing & iteration",
        "WCAG compliance"
      ]
    }
  ];

  const pricingPlans = [
    {
      icon: Brain,
      title: "AI Starter",
      price: "$597",
      description: "Entry-level AI implementation for small businesses",
      features: [
        "Initial consultation",
        "One AI tool implementation",
        "Basic training",
        "2 weeks support"
      ]
    },
    {
      icon: Code,
      title: "Business Package",
      price: "$997",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Full workflow analysis",
        "Multiple tool integration",
        "Staff training",
        "30 days support"
      ],
      recommended: true
    },
    {
      icon: Building,
      title: "Enterprise Solutions",
      price: "$2,497",
      description: "Advanced implementation for large organizations",
      features: [
        "Complete AI strategy",
        "Multi-department implementation",
        "Custom solutions",
        "90 days support"
      ]
    }
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
          `
        }}
      />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigateTo('/')}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/logo.png" 
                alt="Next Logic AI" 
                className="h-40 w-auto drop-shadow-[0_0_15px_rgba(255,0,128,0.7)]"
                style={{ filter: 'drop-shadow(0 0 12px rgba(0, 255, 255, 0.6))' }}
              />
            </div>
            <div className="flex space-x-8">
              <Button 
                variant="ghost" 
                className="text-white hover:text-pink-500 bg-pink-500/10"
                onClick={() => navigateTo('/services')}
              >
                Services
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-pink-500"
                onClick={() => navigateTo('/assessment')}
              >
                Assessment
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-pink-500"
                onClick={() => navigateTo('/about')}
              >
                About
              </Button>
              <Button 
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                onClick={() => navigateTo('/assessment')}
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
          {/* Services Intro */}
          <section className="mb-20">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Next Logic Design and AI offers a comprehensive ecosystem of services designed to transform 
              your business through advanced technology and creative excellence.
            </p>
          </section>

          {/* AI Services Section */}
          <section className="mb-24">
            <div className="flex items-center mb-12">
              <Brain className="h-8 w-8 text-pink-500 mr-4" />
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                AI Business Consultancy
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-black bg-opacity-50 backdrop-blur border-gray-800 hover:border-pink-500 transition-all duration-300 h-full flex flex-col"
                >
                  <service.icon className="h-10 w-10 text-pink-500 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-purple-400">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-sm flex-grow">{service.description}</p>
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-pink-500 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 mr-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          </div>
                          <span className="text-sm text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button 
                variant="outline" 
                className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
                onClick={() => navigateTo('/assessment')}
              >
                Request AI Consultation
              </Button>
            </div>
          </section>

          {/* Web Services Section */}
          <section className="mb-24">
            <div className="flex items-center mb-12">
              <Code className="h-8 w-8 text-green-400 mr-4" />
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">
                Web Design & Development
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {webServices.map((service, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-black bg-opacity-50 backdrop-blur border-gray-800 hover:border-green-400 transition-all duration-300 h-full flex flex-col"
                >
                  <service.icon className="h-10 w-10 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-purple-400">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-sm flex-grow">{service.description}</p>
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-pink-500/20 flex items-center justify-center mt-0.5 mr-2">
                            <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                          </div>
                          <span className="text-sm text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button 
                variant="outline" 
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                onClick={() => navigateTo('/contact')}
              >
                Discuss Web Project
              </Button>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Pricing Plans
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index}
                  className={`p-8 bg-black bg-opacity-50 backdrop-blur relative overflow-hidden flex flex-col
                    ${plan.recommended 
                      ? 'border-2 border-pink-500/70 shadow-[0_0_20px_rgba(255,0,128,0.3)]' 
                      : 'border-gray-800 hover:border-pink-500/50'
                    } transition-all duration-300`}
                >
                  {plan.recommended && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-pink-500 text-white text-xs font-bold py-1 px-3 transform rotate-45 translate-x-2 -translate-y-1">
                        RECOMMENDED
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full ${plan.recommended ? 'bg-pink-500' : 'bg-gray-800'} flex items-center justify-center mr-4`}>
                      <plan.icon className={`h-6 w-6 ${plan.recommended ? 'text-white' : 'text-pink-500'}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-purple-400">{plan.title}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                      {plan.price}
                    </span>
                    <span className="text-gray-400"> CAD</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-8 flex-grow">
                    <h4 className="text-sm font-semibold text-pink-500 mb-3">Includes:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mr-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          </div>
                          <span className="text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={`w-full ${plan.recommended 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' 
                      : 'bg-transparent border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'}`}
                    onClick={() => navigateTo('/assessment')}
                  >
                    Get Started
                  </Button>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>All pricing is in Canadian dollars (CAD). HST/GST additional. Custom quotes available based on specific requirements.</p>
            </div>
          </section>

          {/* Industries Section */}
          <section>
            <h2 className="text-3xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">
              Industries We Serve
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: Smartphone, name: "Retail & E-commerce" },
                { icon: Server, name: "Healthcare" },
                { icon: BarChart, name: "Financial Services" },
                { icon: Users, name: "Education" },
                { icon: Cpu, name: "Manufacturing" },
                { icon: Globe, name: "Professional Services" }
              ].map((industry, index) => (
                <div 
                  key={index}
                  className="p-6 bg-black bg-opacity-30 border border-gray-800 rounded-lg text-center hover:border-pink-500 transition-all duration-300"
                >
                  <industry.icon className="h-10 w-10 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-purple-400 font-medium">{industry.name}</h3>
                </div>
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
            backgroundImage: "linear-gradient(to right, rgba(255, 0, 128, 0.2), rgba(112, 0, 255, 0.2))"
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI and web solutions can deliver measurable results for your organization.
            </p>
            <Button 
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-6 text-lg"
              onClick={() => navigateTo('/assessment')}
            >
              <span className="flex items-center">
                Begin AI Readiness Assessment
                <ArrowRight className="ml-2" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black bg-opacity-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400">&copy; 2025 Next Logic Design and AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}