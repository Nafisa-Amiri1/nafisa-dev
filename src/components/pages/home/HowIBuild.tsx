"use client";

import { useEffect, useRef, useState } from "react";
import { steps } from "@/data/HowIBuild.data";

export default function HowIBuild() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const stepElements = Array.from(
      section.querySelectorAll<HTMLElement>("[data-process-step]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.getAttribute("data-process-step"));

          setActiveStep(index);

          setVisibleSteps((current) =>
            current.includes(index) ? current : [...current, index],
          );
        });
      },
      {
        rootMargin: "-20% 0px -45% 0px",
        threshold: 0,
      },
    );

    stepElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-i-build"
      className="relative w-full overflow-hidden bg-white pt-15 sm:pt-19 lg:pt-26"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-violet-200/20 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-200/20 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div className="mb-7 inline-flex items-center gap-3">
              <span className="h-px w-7 bg-violet-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-600">
                How I Build
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
              My actual{" "}
              <span className="bg-linear-to-r from-violet-600 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                development
              </span>{" "}
              process.
            </h2>

            <blockquote className="mt-8 max-w-md border-l border-violet-200 pl-5 text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              “I don’t just write code. I think about how people will use it.”
            </blockquote>

            <div className="mt-12 hidden items-center gap-5 lg:flex">
              <span className="h-px w-10 bg-linear-to-r from-violet-500 to-blue-400" />

              <span className="flex gap-1">
                <span className="h-1 w-1 rounded-full bg-violet-400" />
                <span className="h-1 w-1 rounded-full bg-purple-300" />
                <span className="h-1 w-1 rounded-full bg-blue-300" />
              </span>

              <span className="max-w-32 text-[9px] font-medium uppercase leading-4 tracking-[0.25em] text-slate-400">
                Better interfaces
                <br />
                for real people
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-5 left-3.75 top-5 w-px bg-slate-100 sm:left-5.75"
            />
            <div
              aria-hidden="true"
              className="absolute left-3.75 top-5 w-px bg-linear-to-b from-violet-500 via-purple-400 to-blue-400 transition-all duration-700 ease-out sm:left-5.75"
              style={{
                height: `${Math.min(
                  100,
                  ((activeStep + 1) / steps.length) * 100,
                )}%`,
              }}
            />

            <div className="space-y-14 sm:space-y-20">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                const isVisible = visibleSteps.includes(index);

                return (
                  <article
                    key={step.number}
                    data-process-step={index}
                    className={`group relative grid grid-cols-[48px_1fr] gap-5 transition-all duration-700 sm:grid-cols-[72px_1fr] sm:gap-6 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <div className="relative flex justify-start">
                      <span
                        className={`absolute left-0 top-0 text-4xl font-light tracking-tighter transition-all duration-500 sm:text-5xl ${
                          isActive ? "text-slate-300" : "text-slate-200"
                        }`}
                      >
                        {step.number}
                      </span>

                      <span
                        className={`absolute left-2.75 top-13.75 z-10 h-2.25 w-2.25 rounded-full border-2 border-white transition-all duration-500 sm:left-4.75 ${
                          isActive
                            ? "scale-125 bg-violet-500 shadow-[0_0_0_5px_rgba(139,92,246,0.10),0_0_20px_rgba(139,92,246,0.45)]"
                            : "bg-slate-200"
                        }`}
                      />
                    </div>

                 
                    <div className="pt-1 sm:pt-0">
                      <div
                        className={`mb-5 flex h-10 w-10 items-center justify-center border transition-all duration-500 sm:h-11 sm:w-11 ${
                          isActive
                            ? "border-violet-200 bg-violet-50 text-violet-600"
                            : "border-slate-100 bg-white text-slate-400"
                        }`}
                      >
                        <Icon size={19} strokeWidth={1.7} />
                      </div>

                      <h3
                        className={`text-xl font-semibold tracking-tight transition-all duration-500 sm:text-2xl ${
                          isActive
                            ? "translate-y-0 text-slate-950"
                            : "text-slate-800"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p
                        className={`mt-3 max-w-xl text-sm leading-7 transition-all duration-700 sm:text-base sm:leading-7 ${
                          isActive ? "text-slate-500" : "text-slate-400"
                        }`}
                      >
                        {step.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {step.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className={`text-[9px] font-medium uppercase tracking-[0.18em] transition-all duration-500 ${
                              isActive
                                ? "bg-violet-50 text-violet-500"
                                : "bg-slate-50 text-slate-400"
                            } px-3 py-1.5`}
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-100 pt-8 lg:mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-slate-400">
              Better interfaces for real people
            </span>

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-slate-200" />

              <span className="text-[9px] uppercase tracking-[0.25em] text-slate-300">
                01 — 04
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
