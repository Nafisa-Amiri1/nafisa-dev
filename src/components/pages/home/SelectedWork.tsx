"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/SelectedWork.data";
import Link from "next/link";

type ProjectItem = (typeof projects)[number];

function BrowserPreview({ project }: { project: ProjectItem }) {
  if (!project.preview) {
    return (
      <div className="flex aspect-16/10 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Project Preview
        </span>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_24px_70px_-35px_rgba(15,23,42,0.3)] transition-transform duration-700 ease-out group-hover:scale-[1.015]">
      <div className="flex h-9 items-center gap-1.5 border-b border-slate-100 bg-slate-50/90 px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <div className="ml-3 flex h-5 min-w-0 flex-1 items-center rounded-md border border-slate-200/80 bg-white px-3">
          <span className="truncate text-[9px] text-slate-400">
            afplay.vercel.app
          </span>
        </div>
      </div>

      <div className="aspect-16/10 overflow-hidden">
        <iframe
          src={project.preview}
          title={`${project.title} website preview`}
          className="h-full w-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function SelectedWork() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll<HTMLElement>(
      "[data-project-index]",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(
            (entry.target as HTMLElement).dataset.projectIndex,
          );

          setVisibleProjects((current) =>
            current.includes(index) ? current : [...current, index],
          );

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="selected-work"
      className="bg-white pt-16 sm:pt-32 lg:pt-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-600">
            Selected Work
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
            Real projects.
            <br />
            <span className="text-slate-400">Real contributions.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base ">
            A selection of projects where I contributed to building responsive
            interfaces, reusable components, and real product experiences.
          </p>
        </div>

        <div className="mt-14 sm:mt-28">
          {projects.map((project, index) => {
            const isVisible = visibleProjects.includes(index);
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={project.number}
                data-project-index={index}
                className={`group border-t border-slate-300 pt-8 transition-all duration-700 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div
                  className={`grid items-center gap-10 lg:grid-cols-[1.5fr_0.85fr] lg:gap-16 ${
                    isReversed ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    {project.preview ? (
                      <BrowserPreview project={project} />
                    ) : (
                      <div className="flex aspect-16/10 items-center justify-center overflow-hidden  rounded-xl border border-slate-200 bg-slate-50 transition-transform duration-700 ease-out group-hover:scale-[1.015]">
                        <div className="text-center">
                          <span className="block text-5xl font-light tracking-[-0.06em] text-slate-200">
                            {project.number}
                          </span>

                          <span className="mt-2 block text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Project Preview
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <span className="text-5xl font-light tracking-[-0.06em] text-slate-200 sm:text-6xl">
                      {project.number}
                    </span>

                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-600">
                      {project.category}
                    </p>

                    <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                      {project.contribution}
                    </p>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
                      {project.description}
                    </p>

                    <div className="mt-8">
                      <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                        What I contributed
                      </p>

                      <ul className="space-y-2.5">
                        {project.contributions.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                          >
                            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 border-t border-slate-100 pt-5">
                      <p className="text-xs leading-6 text-slate-400">
                        {project.stack.map((technology, technologyIndex) => (
                          <span key={technology}>
                            {technology}
                            {technologyIndex < project.stack.length - 1 && (
                              <span className="mx-2 text-slate-200">·</span>
                            )}
                          </span>
                        ))}
                      </p>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
                      <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                        {project.liveStatus}
                      </span>

                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition-colors duration-300 hover:text-violet-600"
                      >
                        View Project
                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.7}
                          className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
