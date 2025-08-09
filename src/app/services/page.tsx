"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Brain, Code, Sparkles, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Services() {
  const router = useRouter();

  const services = [
    {
      icon: Brain,
      title: "AI Implementation",
      description: "Transform your business operations with strategic AI solutions designed for measurable impact.",
      path: "/services/ai-implementation",
      features: [
        "Process Automation",
        "Predictive Analytics",
        "Machine Learning Integration",
        "Performance Optimization"
      ]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Create powerful digital experiences that elevate your online presence.",
      path: "/services/web-development",
      features: [
        "Custom Web Applications",
        "Responsive Design",
        "Performance Optimization",
        "Security Implementation"
      ]
    },
    {
      icon: Sparkles,
      title: "Design Services",
      description: "Innovative design solutions that enhance user experience and brand identity.",
      path: "/services/design",
      features: [
        "UI/UX Design",
        "Brand Development",
        "Visual Identity",
        "User Research"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-gray-900 border-gray-800 p-8 hover:border-blue-500 transition-all duration-300"
            >
              <service.icon className="h-12 w-12 text-yellow-500 mb-6" />
              <h2 className="text-purple-500 font-bold mb-4">{service.title}</h2>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => router.push(service.path)}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}