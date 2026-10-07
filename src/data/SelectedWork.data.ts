type Project = {
  number: string;
  title: string;
  category: string;
  contribution: string;
  description: string;
  contributions: string[];
  stack: string[];
  liveStatus: string;
  href: string;
  preview?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "AFPLAY",
    category: "Digital Products Platform",
    contribution: "Frontend Development",
    description:
      "Built responsive product, checkout, and website interfaces using Next.js, TypeScript, and Tailwind CSS.",
    contributions: [
      "Product interfaces",
      "Header and footer layouts",
      "Checkout experience",
      "Reusable components",
      "Internationalization (FA · EN · PS)",
      "Form validation",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl"],
    liveStatus: "LIVE SOON",
    href: "https://afplay.vercel.app/",
    preview: "https://afplay.vercel.app/",
  }
]