import React from "react";
import Image from "next/image";
import { projects } from "../data/projects";

export default function ProjectCard({ Projects }) {
  return (
    <a
      href={`/case-study/${projects.slug}`}
      className="bg-black bg-opacity-40 rounded-xl overflow-hidden shadow-lg hover:border-pink-500 border border-transparent transition block"
    >
      <Image
        src={projects.image}
        alt={projects.title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{projects.title}</h3>
        <p className="text-gray-400">{projects.description}</p>
      </div>
    </a>
  );
}
