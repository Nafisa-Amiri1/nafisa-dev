import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Heart,
  Leaf,
  Palette,
  Sparkles,
  UserRound,
  Waves,
} from "lucide-react";

const stats = [
  {
    value: "2+",
    label: "Personal Projects",
    icon: Code2,
  },
  {
    value: "8+",
    label: "Months Learning",
    icon: BookOpen,
  },
  {
    value: "100%",
    label: "Passion",
    icon: Heart,
  },
  {
    value: "∞",
    label: "Growth Mindset",
    icon: Leaf,
  },
];

const interests = [
  {
    label: "Reading",
    icon: BookOpen,
  },
  {
    label: "Drawing",
    icon: Palette,
  },
  {
    label: "Nature",
    icon: Leaf,
  },
  {
    label: "Walking",
    icon: Waves,
  },
  {
    label: "Freedom",
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-125 w-125 rounded-full bg-purple-100/40 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-112.5 w-112.5 rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* ==================================================
              LEFT - IMAGE
          ================================================== */}
          <div className="relative mx-auto w-full max-w-130">
            {/* Orbit */}
            <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-200/60" />

            <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/40" />

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/30 blur-3xl" />

            {/* Floating particle */}
            <div className="absolute left-[8%] top-[20%] h-3 w-3 rounded-full bg-purple-400" />

            <div className="absolute right-[12%] top-[15%] h-4 w-4 rounded-full bg-blue-400" />

            <div className="absolute bottom-[15%] right-[8%] h-3 w-3 rounded-full bg-cyan-400" />

            {/* ==================================================
                TECHNOLOGY BADGES
            ================================================== */}

            {/* Code badge */}
            <div className="absolute left-0 top-[18%] z-20 flex items-center gap-2 rounded-xl border border-purple-100 bg-white/90 px-4 py-3 shadow-lg shadow-purple-900/10 backdrop-blur-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                <Code2 className="h-4 w-4" />
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-800">
                  Clean Code
                </p>
                <p className="text-[10px] text-slate-500">Better Web</p>
              </div>
            </div>

            {/* Next.js */}
            <div className="absolute left-0 top-[43%] z-20 flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-lg shadow-purple-900/10">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
                N
              </div>

              <span className="text-xs font-semibold text-slate-700">
                Next.js
              </span>
            </div>

            {/* React */}
            <div className="absolute right-0 top-[25%] z-20 flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-lg shadow-blue-900/10">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <ellipse cx="12" cy="12" rx="9" ry="3.5" />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="9"
                    ry="3.5"
                    transform="rotate(60 12 12)"
                  />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="9"
                    ry="3.5"
                    transform="rotate(120 12 12)"
                  />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>

              <span className="text-xs font-semibold text-slate-700">
                React
              </span>
            </div>

            {/* Tailwind */}
            <div className="absolute bottom-[24%] right-0 z-20 flex items-center gap-2 rounded-xl border border-cyan-100 bg-white px-4 py-3 shadow-lg shadow-cyan-900/10">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-50 text-cyan-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                    fill="#38bdf8"
                  />
                </svg>
              </div>

              <span className="text-xs font-semibold text-slate-700">
                Tailwind CSS
              </span>
            </div>

            {/* ==================================================
                PROFILE IMAGE
            ================================================== */}
            <div className="relative mx-auto aspect-square w-[78%] overflow-hidden rounded-full border-8 border-white bg-linear-to-br from-purple-100 via-blue-50 to-cyan-100 shadow-2xl shadow-purple-900/10">
              <Image
                src="/images/profile.jpg"
                alt="Nafiseh - Frontend Developer"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 70vw, 40vw"
              />
            </div>

            {/* Small handwritten-style message */}
            <div className="absolute bottom-[3%] left-[4%] max-w-37.5 -rotate-6 text-purple-500">
              <p className="font-serif text-sm italic leading-6">
                Let&apos;s build
                <br />
                something great
                <br />
                together! ♡
              </p>

              <ArrowRight className="ml-auto mt-1 h-5 w-5 rotate-45" />
            </div>
          </div>

          {/* ==================================================
              RIGHT - CONTENT
          ================================================== */}
          <div className="relative">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-2 text-sm font-medium text-purple-600">
              <UserRound className="h-4 w-4" />
              ABOUT ME
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Hi, I’m{" "}
              <span className="bg-linear-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                Nafisa
              </span>{" "}
              👋
            </h2>

            <h3 className="mt-4 text-xl font-semibold leading-8 text-slate-800 sm:text-2xl">
              Frontend developer, problem solver,
              <br className="hidden sm:block" />
              and lifelong learner.
            </h3>

            {/* Description */}
            <div className="mt-7 space-y-5 text-base leading-7 text-slate-600">
              <p>
                I’m a frontend developer who enjoys turning creative ideas into
                real and responsive web experiences. I love working with modern
                technologies like Next.js, React and Tailwind CSS, and I’m
                always excited to learn new things and improve my skills.
              </p>

              <p>
                When I’m not coding, you can find me reading, drawing, walking
                in nature, or simply enjoying the little things in life.
              </p>
            </div>

            {/* ==================================================
                STATS
            ================================================== */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-purple-100 bg-purple-50/30 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-purple-50"
                  >
                    <Icon className="h-5 w-5 text-purple-500" />

                    <p className="mt-3 text-xl font-bold text-slate-900">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-[11px] leading-4 text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* ==================================================
                BUTTONS
            ================================================== */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                View My Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
              >
                Get in Touch
              </Link>
            </div>

            {/* ==================================================
                INTERESTS
            ================================================== */}
            <div className="mt-9">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                Interests
              </p>

              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => {
                  const Icon = interest.icon;

                  return (
                    <span
                      key={interest.label}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 shadow-sm"
                    >
                      <Icon className="h-3.5 w-3.5 text-purple-500" />
                      {interest.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
