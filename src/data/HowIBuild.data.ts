import { Blocks, Code2, Search, Sparkles } from "lucide-react";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  keywords: string[];
  icon: typeof Search;
};
export const steps: ProcessStep[] = [
  {
    number: "01",
    title: "AFPLAY",
    description:
      "Built responsive product, website, authentication, and checkout interfaces using Next.js, TypeScript, and Tailwind CSS.",
    keywords: [
      "Product Interfaces",
      "Header and footer layouts",
      "Checkout",
      "Reusable Components",
      "Internationalization",
      "Form Validation",
    ],
    icon: Search,
  },
  {
    number: "02",
    title: "Turn ideas into structure.",
    description:
      "I break the idea into reusable components and think about how each part should work together.",
    keywords: ["Components", "UX", "Reusability"],
    icon: Blocks,
  },
  {
    number: "03",
    title: "Build the interface.",
    description:
      "I turn the structure into a responsive interface using React, Next.js, TypeScript and Tailwind CSS.",
    keywords: ["React", "Next.js", "TypeScript"],
    icon: Code2,
  },
  {
    number: "04",
    title: "Refine the details.",
    description:
      "I pay attention to responsive behavior, spacing, interaction, loading states and the small details that make an interface feel complete.",
    keywords: ["Responsive", "States", "Details"],
    icon: Sparkles,
  },
];
