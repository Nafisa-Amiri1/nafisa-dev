"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";

const filters = [
  "All",
  "Web Apps",
  "UI Components",
  "Next.js",
  "React",
  "Tailwind CSS",
];

const projects = [
  {
    title: "AFplay",
    description:
      "A modern landing page for sustainable living with beautiful UI and smooth animations.",
    image: "/images/image1.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "js"],
    categories: ["Web Apps", "Next.js", "React", "Tailwind CSS"],
    href: "#",
  },
  {
    title: "Chat-App",
    description:
      "A modern chat application with responsive UI, state management and API integration.",
    image: "/images/image2.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    categories: ["Web Apps", "Next.js", "React", "Tailwind CSS"],
    href: "#",
  },
  {
    title: "EIMS Dashboard",
    description:
      "An employee management system with CRUD operations, filters and dynamic tables.",
    image: "/images/projects/eims.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    categories: ["Web Apps", "React", "Tailwind CSS"],
    href: "#",
  },
  {
    title: "Shisha Corner",
    description:
      "A multi-language website with modern design, carousel and reusable server components.",
    image: "/images/projects/shisha-corner.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl"],
    categories: ["Web Apps", "Next.js", "Tailwind CSS"],
    href: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal developer portfolio with modern design, animations and responsive layouts.",
    image: "/images/projects/portfolio.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    categories: ["Web Apps", "Next.js", "React", "Tailwind CSS"],
    href: "#",
  },
  {
    title: "Admin Dashboard UI",
    description:
      "A clean dashboard interface with charts, statistics and reusable components.",
    image: "/images/projects/admin-dashboard.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    categories: ["UI Components", "React", "Tailwind CSS"],
    href: "#",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeFilter),
        );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-125 w-125 rounded-full bg-purple-100/40 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-112.5 w-112.5 rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* ==================================================
            SECTION HEADER
        ================================================== */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-600">
              <Sparkles className="h-4 w-4" />
              MY PROJECTS
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              My Latest{" "}
              <span className="bg-linear-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Here are some of the projects I&apos;ve built to improve my skills
              and explore new technologies. Each project helped me learn
              something new and grow as a developer.
            </p>
          </div>

          {/* View all */}
          <Link
            href="#"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-purple-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-all hover:border-purple-400 hover:text-purple-600"
          >
            View All Projects

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ==================================================
            FILTERS
        ================================================== */}
        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-md shadow-purple-500/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* ==================================================
            PROJECT GRID
        ================================================== */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_10px_40px_rgba(88,60,140,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(88,60,140,0.12)]"
            >
              {/* ==================================================
                  PROJECT IMAGE
              ================================================== */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* View project button */}
                <Link
                  href={project.href}
                  className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white text-slate-800 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-purple-600 hover:text-white"
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>

              {/* ==================================================
                  PROJECT CONTENT
              ================================================== */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-purple-50 px-3 py-1.5 text-[11px] font-medium text-purple-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-5 border-t border-slate-100 pt-4">
                  <Link
                    href={project.href}
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold text-purple-600"
                  >
                    View Project

                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="mt-10 rounded-3xl border border-dashed border-slate-200 py-20 text-center">
            <p className="text-sm text-slate-500">
              No projects found for this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}