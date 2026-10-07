import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { capabilities } from "@/data/hero-date";

export default function Hore() {
  return (
    <section className="relative overflow-hidden bg-white mt-9">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 rounded-full bg-purple-200/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-125 w-125 rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-8">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-2 text-sm font-medium text-purple-600">
              <Sparkles className="h-4 w-4" />
              FRONTEND DEVELOPER
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-[64px]">
              Turning ideas into{" "}
              <span className="bg-linear-to-r from-violet-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                beautiful web
              </span>{" "}
              experiences.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              I&apos;m Nafisa Amiri, a frontend developer who loves building
              modern, responsive and user-friendly websites with Next.js, React
              and Tailwind CSS.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/30"
              >
                View My Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
              >
                About Me
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-slate-100 pt-8 sm:grid-cols-4 sm:gap-4">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                        <Icon className="h-4 w-4" />
                      </div>

                      <span className="text-xs font-semibold text-slate-800 sm:text-sm">
                        {item.title}
                      </span>
                    </div>

                    <span className="text-xs text-slate-500">{item.value}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mx-auto h-125 w-full max-w-150 lg:h-145">
            <div className="absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-200/50 sm:h-125 sm:w-125" />

            <div className="absolute left-1/2 top-1/2 h-82.5 w-82.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/40 sm:h-100 sm:w-100" />

            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/20 blur-3xl" />

            <div className="absolute left-1/2 top-1/2 z-50 h-105 w-105 -translate-x-1/2 -translate-y-1/2 animate-[spin_18s_linear_infinite] sm:h-125 sm:w-125">
              <div className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-2xl bg-slate-950 text-xs font-bold text-white shadow-xl shadow-slate-900/20">
                <span className="animate-[spin_18s_linear_infinite_reverse]">
                  Next.js
                </span>
              </div>

              <div className="absolute right-0 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl bg-blue-50 text-blue-500 shadow-lg">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 animate-[spin_18s_linear_infinite_reverse]"
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

              <div className="absolute bottom-0 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-2xl bg-yellow-400 text-xl font-bold text-slate-900 shadow-lg">
                <span className="animate-[spin_18s_linear_infinite_reverse]">
                  JS
                </span>
              </div>

              <div className="absolute left-0 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl bg-white text-cyan-500 shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                    fill="#38bdf8"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute left-[12%] top-[25%] h-3 w-3 animate-pulse rounded-full bg-purple-400" />
            <div className="absolute right-[15%] top-[18%] h-4 w-4 animate-pulse rounded-full bg-blue-400" />
            <div className="absolute bottom-[18%] left-[20%] h-3 w-3 animate-pulse rounded-full bg-cyan-400" />
            <div className="absolute bottom-[28%] right-[8%] h-3 w-3 animate-pulse rounded-full bg-purple-400" />

            <div className="absolute left-[8%] top-[22%] z-10 w-[82%] -rotate-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-purple-900/10">
              <div className="flex h-9 items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
              </div>

              <div className="p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-md bg-linear-to-br from-purple-500 to-blue-500" />

                    <span className="text-xs font-bold text-slate-800">
                      EcoHome
                    </span>
                  </div>

                  <div className="hidden gap-4 sm:flex">
                    <span className="text-[8px] text-slate-400">Home</span>
                    <span className="text-[8px] text-slate-400">Projects</span>
                    <span className="text-[8px] text-slate-400">Contact</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col justify-center">
                    <div className="h-3 w-24 rounded bg-slate-800" />
                    <div className="mt-2 h-3 w-20 rounded bg-slate-800" />

                    <div className="mt-4 h-2 w-28 rounded bg-slate-200" />
                    <div className="mt-2 h-2 w-20 rounded bg-slate-200" />

                    <div className="mt-5 h-6 w-20 rounded-full bg-purple-500" />
                  </div>

                  <div className="h-32 rounded-xl bg-linear-to-br from-blue-100 via-purple-100 to-cyan-100" />
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="h-10 rounded-lg bg-purple-50" />
                  <div className="h-10 rounded-lg bg-blue-50" />
                  <div className="h-10 rounded-lg bg-cyan-50" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-[13%] left-[3%] z-30 w-[68%] rotate-2 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl shadow-purple-900/30">
              <div className="flex h-9 items-center gap-1.5 border-b border-slate-800 px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />

                <span className="ml-3 text-[9px] text-slate-500">page.tsx</span>
              </div>

              <div className="flex min-h-47.5">
                <div className="w-8 border-r border-slate-800 py-4 text-center text-[8px] leading-5 text-slate-600">
                  1<br />
                  2<br />
                  3<br />
                  4<br />
                  5<br />
                  6<br />
                  7<br />8
                </div>

                <div className="overflow-hidden p-4 font-mono text-[8px] leading-5 sm:text-[9px]">
                  <div className="text-purple-400">export default function</div>

                  <div className="text-blue-400">Home() {"{"}</div>

                  <div className="pl-3 text-slate-400">return (</div>

                  <div className="pl-6 text-cyan-400">&lt;main</div>

                  <div className="pl-8 text-slate-400">
                    className=
                    <span className="text-green-400">
                      &quot;min-h-screen&quot;
                    </span>
                  </div>

                  <div className="pl-6 text-cyan-400">&gt;</div>

                  <div className="pl-8 text-purple-400">&lt;Hero /&gt;</div>

                  <div className="pl-8 text-purple-400">&lt;Projects /&gt;</div>

                  <div className="pl-8 text-purple-400">&lt;Skills /&gt;</div>

                  <div className="pl-6 text-cyan-400">&lt;/main&gt;</div>

                  <div className="pl-3 text-slate-400">);</div>

                  <div className="text-blue-400">{"}"}</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[7%] right-[4%] z-40 w-31.25 rotate-6 overflow-hidden rounded-3xl border-[5px] border-slate-900 bg-white shadow-2xl shadow-purple-900/30 sm:w-36.25">
              <div className="relative h-5 bg-slate-900">
                <div className="absolute left-1/2 top-1 h-1.5 w-10 -translate-x-1/2 rounded-full bg-slate-700" />
              </div>

              <div className="p-2.5">
                <div className="mb-3 flex items-center justify-between">
                  <div className="h-3 w-3 rounded bg-purple-500" />
                  <div className="h-1.5 w-8 rounded bg-slate-200" />
                </div>

                <div className="h-24 rounded-xl bg-linear-to-br from-purple-100 via-blue-100 to-cyan-100" />

                <div className="mt-3 h-2 w-16 rounded bg-slate-800" />
                <div className="mt-2 h-1.5 w-20 rounded bg-slate-200" />

                <div className="mt-4 h-6 w-14 rounded-full bg-purple-500" />

                <div className="mt-4 grid grid-cols-3 gap-1">
                  <div className="h-6 rounded bg-purple-50" />
                  <div className="h-6 rounded bg-blue-50" />
                  <div className="h-6 rounded bg-cyan-50" />
                </div>
              </div>

              <div className="h-5 bg-white">
                <div className="mx-auto h-1 w-10 rounded-full bg-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
