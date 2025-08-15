import { Project } from "../types/projects";

export const projects: Project[] = [
  {
    title: "Demand Forecasting, Inventory Optimization/Replenishment",
    client: "Optistock Analytics",
    challenge:
      "The client struggled with frequent stockouts and overstock situations, leading to lost sales, excess holding costs, and poor customer satisfaction. Their existing demand forecasting relied on static historical averages, which failed to adapt to seasonal patterns, market trends, or promotional impacts.",
    solution:
      "Developed a machine learning–driven demand forecasting model that incorporated historical sales, seasonality, promotional calendars, and macroeconomic indicators. Integrated the forecasting output with an inventory optimization algorithm to recommend optimal replenishment schedules and safety stock levels, reducing manual decision-making.",
    results: [
      "Achieved 92% forecast accuracy",
      "Reduced overstocks by 38% and excess inventory by 25%",
      "Reduced stockouts by 15%",
      "Increased sales by 20%",
      "Increased inventory turnover rate by 15% while maintaining service levels above 98%",
      "Optimized stock levels across 100+ locations",
      "Enabled data-driven replenishment decisions, saving an estimated $420,000 annually"
    ],
    chartData: [
      { name: "Forecast Accuracy", value: 92 },
      { name: "Overstocks Reduction", value: 38 },
      { name: "Excess Inventory Reduction", value: 25 },
      { name: "Stockouts Reduction", value: 15 },
      { name: "Sales Increase", value: 20 }
    ],
    featured: true,
    description:
      "A comprehensive AI-powered forecasting and inventory optimization solution that improved retail performance, reduced waste, and boosted sales.",
    slug: "retail-demand-forecasting",
    stats: ["20% sales increase", "15% stockout reduction", "100+ stores optimized"]
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
    slug: "ecommerce-personalization"
  }
];
