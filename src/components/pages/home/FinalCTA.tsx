"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="final-cta"
      className="relative isolate overflow-hidden bg-[#faf9ff] py-28 sm:py-36 lg:py-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.10)_0%,rgba(96,165,250,0.05)_35%,transparent_70%)] blur-2xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-72 w-72 rounded-full bg-purple-200/10 blur-3xl"
      />

      <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
        <div
          className={`flex items-center justify-center gap-3 transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <span className="h-px w-7 bg-linear-to-r from-transparent to-purple-400 sm:w-10" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 sm:text-[11px]">
            Let&apos;s Work Together
          </span>

          <span className="h-px w-7 bg-linear-to-l from-transparent to-blue-400 sm:w-10" />
        </div>

        <h2
          className={`mx-auto mt-7 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-slate-950 transition-all duration-700 ease-out sm:mt-8 sm:text-5xl md:text-6xl lg:text-[4.5rem] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{
            transitionDelay: "100ms",
          }}
        >
          Have a{" "}
          <span className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            project
          </span>{" "}
          in mind?
        </h2>

        <p
          className={`mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-500 transition-all duration-700 ease-out sm:mt-8 sm:text-base sm:leading-8 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
          style={{
            transitionDelay: "200ms",
          }}
        >
          I&apos;m always open to meaningful frontend projects, internships, and
          opportunities to learn, contribute, and build something useful
          together.
        </p>

        <div
          className={`mt-9 flex flex-col items-center justify-center gap-3 transition-all duration-700 ease-out sm:mt-10 sm:flex-row ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
          style={{
            transitionDelay: "300ms",
          }}
        >
          <Link
            href="/contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 text-sm font-medium text-white shadow-sm shadow-purple-600/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/15 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:ring-offset-2"
          >
            <span>Get in Touch</span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            href="https://github.com/Nafisa-Amiri1"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-6 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:text-purple-600 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:ring-offset-2"
          >
            <span>View GitHub</span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
        <div className="mt-20 flex items-center gap-4 text-sm leading-6 text-slate-500 sm:mt-24 justify-center">
          <span className="h-px w-10 bg-slate-200 sm:w-16" />

          <div className="flex items-center gap-3">
            <span className="font-medium text-slate-600">Nafisa</span>

            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />

            <span className="text-slate-400">Frontend Developer</span>
          </div>

          <span className="h-px w-10 bg-slate-200 sm:w-16" />
        </div>
      </div>
    </section>
  );
}
