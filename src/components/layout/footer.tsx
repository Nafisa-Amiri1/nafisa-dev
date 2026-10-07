"use client";

import { ArrowUpRight, Mail, MapPin, MoveUp, Sparkles } from "lucide-react";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-linear-to-r from-transparent via-purple-400/70 to-transparent" />

        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-white/10 py-16 sm:py-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 p-7 backdrop-blur-sm sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1.5 text-xs font-semibold text-purple-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  HAVE A PROJECT IN MIND?
                </div>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Let&apos;s create something{" "}
                  <span className="bg-linear-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    meaningful.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  I&apos;m always open to new opportunities, interesting ideas,
                  and projects where I can learn, build, and make an impact.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-purple-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-purple-50"
              >
                Start a Conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/home" className="group inline-flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 to-blue-500 text-sm font-bold shadow-lg shadow-purple-900/30">
                N
                <Sparkles className="absolute -right-1 -top-1 h-3.5 w-3.5  rounded-full bg-purple-400 ring-4 ring-slate-950" />
              </div>

              <div>
                <p className="text-base font-bold text-white">Nafisa</p>

                <p className="text-[11px] text-slate-500">Frontend Developer</p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Frontend developer focused on building modern, responsive, and
              user-friendly web experiences with React, Next.js, and TypeScript.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="h-4 w-4 text-purple-400" />
              Herat, Afghanistan
            </div>

            <div className="mt-6 flex gap-2.5 ">
              <Link
                href="https://github.com/Nafisa-Amiri1"
                aria-label="GitHub"
                className="flex h-8 w-8  items-center justify-center rounded-xl border border-white/10 bg-white text-slate-400 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#000000"
                    fillRule="evenodd"
                    d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584c.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076c-.343-.93-.881-1.175-.881-1.175c-.734-.489.048-.489.048-.489c.783.049 1.224.832 1.224.832c.734 1.223 1.859.88 2.3.685c.048-.538.293-.88.489-1.076c-1.762-.196-3.621-.881-3.621-3.964c0-.88.293-1.566.832-2.153c-.05-.147-.343-.978.098-2.055c0 0 .685-.196 2.201.832c.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832c.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915c.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <Link
                href="https://www.linkedin.com/in/nafisa-amiri"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-slate-400 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#fff" rx="60" />
                    <rect width="256" height="256" fill="#0A66C2" rx="60" />
                    <path
                      fill="#fff"
                      d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
                    />
                  </g>
                </svg>
              </Link>

              <Link
                href="mailto:nafisaamiri107@gmail.com"
                aria-label="Email"
                className="flex h-8 w-8  items-center justify-center rounded-xl border border-white/10 bg-white/40 text-white-400 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Navigation</h3>

            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <span>{item.label}</span>

                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Technologies</h3>

            <ul className="mt-5 space-y-3">
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  {technology}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              Let&apos;s Connect
            </h3>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Have an opportunity or just want to say hello?
            </p>

            <Link
              href="mailto:nafisaamiri107@gmail.com"
              className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-purple-300 transition-colors hover:text-purple-200"
            >
              nafisaamiri107@gmail.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <div className="mt-6 flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs text-slate-500">
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              © {currentYear} Nafisa. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <Link
                href="https://drive.google.com/file/d/11WVCu5JvOw1QfVbvicOzLJlGbe9_kJfL/view?usp=drive_link"
                className="text-xs text-slate-500 transition-colors hover:text-white"
              >
                CV
              </Link>

              <Link
                href="https://github.com/Nafisa-Amiri1"
                className="text-xs text-slate-500 transition-colors hover:text-white"
              >
                GitHub
              </Link>

              <button
                aria-label="Back to top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-slate-400 transition-all hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-300"
              >
                <MoveUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
