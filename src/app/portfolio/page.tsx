"use client";

import React from "react";
// Update the import path below if your Navbar component is located elsewhere
// Update the path below to the correct relative path if needed
// Update the import path below if your Navbar component is located elsewhere
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export default function PortfolioPage() {
  const featured = projects.find(p => p.featured);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Our <span className="text-pink-500">Portfolio</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Real-world projects delivering measurable results across multiple industries.
        </p>
      </section>

      {/* Featured Project */}
      {featured && (
        <section className="max-w-6xl mx-auto px-6 py-12 bg-black bg-opacity-40 rounded-xl shadow-lg mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">{featured.title}</h2>
              <p className="text-gray-300 mb-6">{featured.description}</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                {featured.stats?.map((stat, i) => (
                  <li key={i}>✔ {stat}</li>
                ))}
              </ul>
              <a
                href={`/case-study/${featured.slug}`}
                className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded flex items-center w-fit"
              >
                Learn More →
              </a>
            </div>
            {featured.chart && (
              <div className="bg-black p-4 rounded-xl">
                {featured.chart}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Other Projects */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects
            .filter(p => !p.featured)
            .map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-500 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-white mb-6">
          Let’s build something extraordinary together.
        </p>
        <a
          href="/contact"
          className="bg-black text-white px-8 py-4 rounded text-lg"
        >
          Get in Touch
        </a>
      </section>

      <Footer />
    </div>
  );
}
