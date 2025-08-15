import { Project } from "../types/projects"; 

export const projects: Project[] = [
  {
    title: "Retail Demand Forecasting",
    client: "Canadian Fashion Retailer",
    challenge: "Managing seasonal inventory fluctuations led to frequent stockouts and lost sales.",
    solution: "Implemented advanced demand forecasting using machine learning models for better inventory planning.",
    results: [
      "Improved sales by 20%",
      "Reduced stockouts by 15%",
      "Optimized stock levels across 100+ locations"
    ],
    featured: true,
    description: "A comprehensive forecasting solution that transformed retail inventory management.",
    slug: "retail-demand-forecasting",
    // Additional compon. fields if chosen to be used.
    stats: [
      "20% sales increase",
      "15% stockout reduction",
      "100+ stores optimized"
    ],
    // chart: <YourChartComponent />, // Optional React component
  },
  {
    title: "E-commerce Personalization",
    client: "National Online Electronics Retailer",
    challenge: "Generic shopping experience causing low engagement and conversion rates.",
    solution: "Deployed personalized product recommendations and tailored marketing campaigns.",
    results: [
      "Increased average order value by 25%",
      "Boosted user engagement by 30%"
    ],
    featured: false,
    description: "Enhanced the shopping experience with AI-driven personalization.",
    slug: "ecommerce-personalization",
  },
  // Additional compon. fields if chosen to be used.
];
