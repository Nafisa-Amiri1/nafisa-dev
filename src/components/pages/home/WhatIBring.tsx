"use client";

import { useEffect, useRef, useState } from "react";

import { values } from "@/data/WhatIBring.data";

function ValueItem({
  value,
  index,
}: {
  value: (typeof values)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`group relative border-t border-slate-200 py-9 transition-all duration-700 ease-out last:border-b md:py-11 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 90}ms`,
      }}
    >
      <span
        className={`absolute left-0 top-0 h-px w-0 bg-linear-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-16 ${
          isVisible ? "group-hover:w-16" : ""
        }`}
      />

      <div className="grid grid-cols-[56px_1fr] gap-5 sm:grid-cols-[72px_1fr] sm:gap-7">
        <div
          className={`pt-1 text-2xl font-light tracking-tight text-slate-300 transition-colors duration-300 group-hover:text-purple-500 sm:text-3xl ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {value.number}
        </div>

        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-[11px]">
            {value.eyebrow}
          </p>

          <h3 className="max-w-xl text-xl font-semibold tracking-[-0.02em] text-slate-950 transition-colors duration-300 group-hover:text-purple-600 sm:text-2xl">
            {value.title}
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-[15px] sm:leading-7">
            {value.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
            {value.keywords.map((keyword, keywordIndex) => (
              <div
                key={keyword}
                className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400"
              >
                {keywordIndex > 0 && (
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-slate-300"
                  />
                )}

                <span>{keyword}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function WhatIBring() {
  return (
    <section
      id="what-i-bring"
      className="relative overflow-hidden bg-white py-24 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 translate-x-1/2 rounded-full bg-purple-100/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[minmax(280px,0.75fr)_minmax(0,1.25fr)] lg:gap-24 xl:gap-32">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="max-w-md">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-7 bg-linear-to-r from-purple-500 to-blue-500" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  What I Bring
                </span>
              </div>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[clamp(3rem,4.2vw,4.5rem)]">
                What a team gets
                <span className="block text-slate-400">
                  by working with me.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-base leading-7 text-slate-500 sm:text-[17px] sm:leading-8">
                I bring a thoughtful approach to frontend development: I care
                about how an interface is structured, how it behaves for real
                users, and how the code can stay clear and maintainable as the
                project grows.
              </p>

              <div className="mt-10 hidden items-center gap-3 lg:flex">
                <span className="h-8 w-px bg-linear-to-b from-purple-500 to-blue-500" />

                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  How I work with a team
                </span>
              </div>
            </div>
          </div>

          <div>
            {values.map((value, index) => (
              <ValueItem key={value.number} value={value} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
