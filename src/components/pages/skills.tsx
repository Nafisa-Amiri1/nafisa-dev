"use client";

import {
  ArrowRight,
  Braces,
  Code2,
  GitBranch,
  Layers3,
  Palette,
  Rocket,
  Sparkles,
  Terminal,
} from "lucide-react";
import Link from "next/link";

const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Building modern, responsive and interactive web applications.",
    icon: Code2,
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    title: "React Ecosystem",
    description:
      "Creating reusable components and scalable frontend architectures.",
    icon: Layers3,
    skills: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 78 },
      { name: "React Hooks", level: 78 },
      { name: "API Integration", level: 72 },
    ],
  },
  {
    title: "Styling & UI",
    description:
      "Designing clean interfaces with responsive layouts and reusable UI.",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", level: 85 },
      { name: "Responsive Design", level: 88 },
      { name: "UI Components", level: 82 },
      { name: "Figma", level: 65 },
    ],
  },
];

const tools = ["VS Code", "GitHub", "pnpm", "Figma", "Vercel", "Postman"];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-white">
      {/* ==================================================
          BACKGROUND
      ================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-125 w-125 rounded-full bg-purple-100/40 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-125 w-125 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-87.5 w-87.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28 ">
        {/* ==================================================
            HEADER
        ================================================== */}
        <div className="mx-auto max-w-3xl text-center ">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-600">
            <Sparkles className="h-4 w-4" />
            MY SKILLS
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Technologies I{" "}
            <span className="bg-linear-to-r from-violet-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            I enjoy learning modern technologies and using them to build clean,
            responsive and user-friendly digital experiences.
          </p>
        </div>

        {/* ==================================================
            TECHNOLOGY ORBIT
        ================================================== */}
        <div className="relative mx-auto mt-16 h-95 max-w-4xl">
          {/* Orbit circles */}

          <div className="absolute left-1/2 top-1/2 h-65 w-65 -translate-x-1/2 -translate-y-1/2 animate-[spin_18s_linear_infinite] rounded-full border border-purple-200/60" />

          <div className="absolute left-1/2 top-1/2 h-87.5 w-87.5 -translate-x-1/2 -translate-y-1/2 animate-[spin_25s_linear_infinite_reverse] rounded-full border border-blue-200/40" />

          {/* Center */}

          <div className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-purple-100 bg-white shadow-2xl shadow-purple-900/10">
            <Code2 className="h-7 w-7 animate-pulse text-purple-600" />

            <span className="mt-2 text-xs font-bold text-slate-800">
              Frontend
            </span>

            <span className="mt-1 text-[9px] text-slate-400">Developer</span>
          </div>

          {/* Technology badges */}

          <div className="absolute left-[8%] top-[8%] animate-bounce">
            <TechnologyBadge
              name="Next.js"
              short="N"
              className="bg-slate-950 text-white"
            />
          </div>

          <div className="absolute right-[8%] top-[5%] animate-bounce [animation-delay:300ms]">
            <TechnologyBadge
              name="React"
              short="⚛"
              className="bg-blue-50 text-blue-500"
            />
          </div>

          <div className="absolute left-[2%] top-[52%] animate-bounce [animation-delay:600ms]">
            <TechnologyBadge
              name="TypeScript"
              short="TS"
              className="bg-blue-600 text-white"
            />
          </div>

          <div className="absolute right-[2%] top-[52%] animate-bounce [animation-delay:900ms]">
            <TechnologyBadge
              name="JavaScript"
              short="JS"
              className="bg-yellow-100 text-yellow-700"
            />
          </div>

          <div className="absolute bottom-[5%] left-[22%] animate-bounce [animation-delay:1200ms]">
            <TechnologyBadge
              name="Tailwind CSS"
              short="~"
              className="bg-cyan-50 text-cyan-500"
            />
          </div>

          <div className="absolute bottom-[5%] right-[22%] animate-bounce [animation-delay:1500ms]">
            <TechnologyBadge
              name="Git"
              short="⌘"
              className="bg-orange-50 text-orange-600"
            />
          </div>

          {/* Particles */}

          <span className="absolute left-[24%] top-[30%] h-2.5 w-2.5 animate-pulse rounded-full bg-purple-400" />

          <span className="absolute right-[25%] top-[34%] h-3 w-3 animate-pulse rounded-full bg-blue-400" />

          <span className="absolute bottom-[25%] left-[12%] h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

          <span className="absolute bottom-[30%] right-[12%] h-2.5 w-2.5 animate-pulse rounded-full bg-purple-400" />
        </div>

        {/* ==================================================
            SKILL CATEGORIES
        ================================================== */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_10px_40px_rgba(88,60,140,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-purple-100 hover:shadow-[0_20px_50px_rgba(88,60,140,0.1)]"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {category.description}
                </p>

                {/* Skills */}
                <div className="mt-6 space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-700">
                          {skill.name}
                        </span>

                        <span className="text-[10px] font-medium text-slate-400">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-linear-to-r from-violet-600 to-blue-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================================================
            TOOLS
        ================================================== */}
        <div className="mt-16 rounded-3xl border border-purple-100 bg-linear-to-br from-purple-50/70 via-white to-blue-50/70 p-6 sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Text */}
            <div className="max-w-md">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-purple-600 shadow-sm">
                  <Terminal className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">Tools & Workflow</h3>

                  <p className="text-xs text-slate-500">
                    Tools I use to build and ship projects.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                From writing code and managing repositories to designing
                interfaces and deploying applications, these tools are part of
                my everyday development workflow.
              </p>
            </div>

            {/* Tool badges */}
            <div className="flex max-w-xl flex-wrap gap-3">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-3 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-purple-200 hover:text-purple-600"
                >
                  <GitBranch className="h-3.5 w-3.5 text-purple-500" />
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================================================
            LEARNING SECTION
        ================================================== */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Learning */}
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-8">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/30 blur-3xl" />

            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-purple-300">
                <Rocket className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-2xl font-bold">Always Learning</h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                Technology keeps changing, and so do I. I’m continuously
                learning new concepts, improving my workflow and building
                projects to turn knowledge into practical experience.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Clean Architecture",
                  "State Management",
                  "APIs",
                  "Performance",
                  "Accessibility",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Current focus */}
          <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_10px_40px_rgba(88,60,140,0.06)] sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
              <Braces className="h-5 w-5" />
            </div>

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              Currently Exploring
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              I’m focusing on building more complete applications instead of
              only individual UI components.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "API integration",
                "State management",
                "Loading & error states",
                "Authentication",
                "Scalable component architecture",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-50 text-[10px] font-bold text-purple-600">
                    {index + 1}
                  </span>

                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================================================
            CTA
        ================================================== */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            Want to see these skills in action?
          </p>

          <Link
            href="#projects"
            className="group mt-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Explore My Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ==================================================
   TECHNOLOGY BADGE
================================================== */

type TechnologyBadgeProps = {
  name: string;
  short: string;
  className: string;
};

function TechnologyBadge({ name, short, className }: TechnologyBadgeProps) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-slate-100 bg-white px-3 py-2.5 shadow-lg shadow-slate-900/5">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold ${className}`}
      >
        {short}
      </div>

      <div className="hidden sm:block">
        <p className="text-xs font-semibold text-slate-800">{name}</p>

        <p className="text-[9px] text-slate-400">Technology</p>
      </div>
    </div>
  );
}
