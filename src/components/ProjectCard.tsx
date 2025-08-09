import React from "react";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <a
      href={`/case-study/${project.slug}`}
      className="bg-black bg-opacity-40 rounded-xl overflow-hidden shadow-lg hover:border-pink-500 border border-transparent transition block"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400">{project.description}</p>
      </div>
    </a>
  );
}
