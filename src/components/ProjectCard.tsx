import React from "react";
import Image from "next/image";
import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={`/case-study/${project.slug}`}
      className="bg-black bg-opacity-40 rounded-xl overflow-hidden shadow-lg hover:border-pink-500 border border-transparent transition block"
    >
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-gray-300">{project.description}</p>
    </a>
  );
}
