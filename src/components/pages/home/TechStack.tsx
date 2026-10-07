"use client";

import { useState } from "react";
import { Braces, Layers3, Terminal } from "lucide-react";
import { technologies } from "@/data/techstack-data";

const codeLines = [
  {
    number: "01",
    content: (
      <>
        <span className="text-purple-500">const</span>{" "}
        <span className="text-slate-900">Developer</span>{" "}
        <span className="text-slate-400">=</span>{" "}
        <span className="text-blue-500">{"{"}</span>
      </>
    ),
  },
  {
    number: "02",
    content: (
      <>
        {"  "}
        <span className="text-slate-500">name:</span>{" "}
        <span className="text-emerald-600">&quot;Nafisa&quot;</span>
        <span className="text-slate-400">,</span>
      </>
    ),
  },
  {
    number: "03",
    content: (
      <>
        {"  "}
        <span className="text-slate-500">role:</span>{" "}
        <span className="text-emerald-600">
          &rdquo;Frontend Developer&quot;
        </span>
        <span className="text-slate-400">,</span>
      </>
    ),
  },
  {
    number: "04",
    content: (
      <>
        {"  "}
        <span className="text-slate-500">focus:</span>{" "}
        <span className="text-emerald-600">&quot;Modern Web&quot;</span>
        <span className="text-slate-400">,</span>
      </>
    ),
  },
  {
    number: "05",
    content: (
      <>
        {"  "}
        <span className="text-slate-500">stack:</span>{" "}
        <span className="text-blue-500">[</span>
      </>
    ),
  },
  {
    number: "06",
    content: (
      <>
        {"    "}
        <span className="text-emerald-600">&quot;React&quot;</span>
        <span className="text-slate-400">,</span>{" "}
        <span className="text-emerald-600">&quot;Next.js&quot;</span>
        <span className="text-slate-400">,</span>
      </>
    ),
  },
  {
    number: "07",
    content: (
      <>
        {"    "}
        <span className="text-emerald-600">&quot;TypeScript&quot;</span>
        <span className="text-slate-400">,</span>
      </>
    ),
  },
  {
    number: "08",
    content: (
      <>
        {"    "}
        <span className="text-emerald-600">&quot;Tailwind CSS&quot;</span>
      </>
    ),
  },
  {
    number: "09",
    content: (
      <>
        {"  "}
        <span className="text-blue-500">]</span>
        <span className="text-slate-400">,</span>
      </>
    ),
  },
  {
    number: "10",
    content: (
      <>
        {"  "}
        <span className="text-slate-500">status:</span>{" "}
        <span className="text-emerald-600">&quot;Always learning&quot;</span>
      </>
    ),
  },
  {
    number: "11",
    content: (
      <>
        <span className="text-blue-500">{"}"}</span>
      </>
    ),
  },
];

export default function TechStack() {
  const [activeTech, setActiveTech] = useState("React");

  const activeTechnology =
    technologies.find((technology) => technology.name === activeTech) ??
    technologies[0];

  return (
    <section
      id="skills"
      className=" relative mx-auto w-[full] px-4 py-16 sm:px-6 lg:px-8 lg:py-24 overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-200/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-purple-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-600">
              Tech Stack
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Tools I use to turn
            <span className="block bg-linear-to-r from-purple-600 via-violet-500 to-blue-500 bg-clip-text text-transparent">
              ideas into interfaces.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            A focused set of technologies I use to build responsive,
            maintainable and user-friendly web experiences.
          </p>
        </div>

        <div className="relative mt-14 lg:mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_-35px_rgba(76,29,149,0.25)] lg:w-[72%]">
            <div className="flex h-12 items-center justify-between border-b border-slate-200 bg-slate-50/80 px-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>

              <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400">
                <Braces className="h-3.5 w-3.5" />
                developer.ts
              </div>

              <span className="text-[10px] text-slate-400">TypeScript</span>
            </div>
            <div className="overflow-x-auto bg-[#fbfbfd] px-4 py-6 sm:px-6 sm:py-8">
              <div className="min-w-107.5 font-mono text-xs leading-7 sm:text-sm">
                {codeLines.map((line) => (
                  <div key={line.number} className="flex">
                    <span className="w-8 shrink-0 select-none text-right text-slate-300">
                      {line.number}
                    </span>

                    <span className="ml-5 whitespace-pre">{line.content}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-slate-200 bg-white px-4 py-3 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Ready to build
              </div>

              <span>Ln 11, Col 1</span>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_25px_70px_-35px_rgba(76,29,149,0.28)] lg:absolute lg:right-0 lg:top-16 lg:mt-0 lg:w-[27%]">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div className="flex items-center gap-2">
                <Layers3 className="h-4 w-4 text-purple-500" />

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Inspector
                </span>
              </div>

              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            </div>

            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                Currently exploring
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                {activeTechnology.name}
              </h3>

              <p className="mt-1 text-sm text-purple-600">
                {activeTechnology.category}
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="font-mono text-xs leading-6 text-slate-600">
                  {activeTechnology.snippet}
                </p>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                {activeTechnology.description}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-950 px-4 py-3 shadow-lg sm:w-fit lg:absolute lg:-bottom-6 lg:left-[9%] lg:mt-0">
            <Terminal className="h-4 w-4 text-purple-400" />

            <span className="font-mono text-xs text-slate-300">
              <span className="text-purple-400">~/portfolio</span>{" "}
              <span className="text-slate-500">$</span>{" "}
              <span className="text-white">pnpm dev</span>
            </span>

            <span className="ml-1 h-3 w-px animate-pulse bg-slate-500" />
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 lg:mt-22">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="shrink-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Working with
              </p>
            </div>

            <div className="max-w-5xl">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                {technologies.map((technology, index) => (
                  <div key={technology.name} className="flex items-center">
                    <button
                      type="button"
                      onMouseEnter={() => setActiveTech(technology.name)}
                      onFocus={() => setActiveTech(technology.name)}
                      onClick={() => setActiveTech(technology.name)}
                      className={`group relative text-sm font-medium transition-all duration-300 sm:text-base ${
                        activeTech === technology.name
                          ? "text-slate-950"
                          : "text-slate-400 hover:text-slate-700"
                      }`}
                    >
                      {technology.name}

                      <span
                        className={`absolute -bottom-1 left-0 h-px bg-linear-to-r from-purple-500 to-blue-500 transition-all duration-300 ${
                          activeTech === technology.name
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </button>

                    {index !== technologies.length - 1 && (
                      <span className="ml-5 text-slate-200">·</span>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-6 text-slate-400">
                Hover or select a technology to explore how it fits into my
                development workflow.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            I focus on choosing the right tool for the problem—not using more
            tools just for the sake of it.
          </p>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            Always learning
          </div>
        </div>
      </div>
    </section>
  );
}
