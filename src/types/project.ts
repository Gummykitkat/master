import React from "react";

export interface Project {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  featured: boolean;
  description: string;
  slug: string;
  stats?: string[];
  chart?: React.ReactNode;  // optional React element/component
}
