"use client";

import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Herat, Afghanistan",
    href: "#",
  },
  {
    icon: MessageCircle,
    title: "Let's Talk",
    value: "Available for opportunities",
    href: "#",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-white">
      {/* ==================================================
          BACKGROUND ATMOSPHERE
      ================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-125 w-125 rounded-full bg-purple-100/40 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* ==================================================
            HEADER
        ================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-600">
            <MessageCircle className="h-4 w-4" />
            GET IN TOUCH
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="bg-linear-to-r from-violet-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
              Great Together
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Have a project idea, an opportunity, or simply want to say hello?
            I’d love to hear from you. Send me a message and I’ll get back to
            you as soon as possible.
          </p>
        </div>

        {/* ==================================================
            CONTACT CONTENT
        ================================================== */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* ==================================================
              LEFT SIDE
          ================================================== */}
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-600/30 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-purple-300">
                <Send className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-2xl font-bold sm:text-3xl">
                Let’s talk
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                I’m always interested in learning, collaborating and working on
                meaningful projects. If you have an idea, feel free to reach
                out.
              </p>

              {/* Contact information */}
              <div className="mt-8 space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-purple-300">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-slate-400">
                          {item.title}
                        </p>

                        <p className="mt-1 truncate text-sm font-medium text-white">
                          {item.value}
                        </p>
                      </div>

                      <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-purple-300" />
                    </Link>
                  );
                })}
              </div>

              {/* Social links */}
              <div className="mt-8 border-t border-white/10 pt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Find Me Online
                </p>

                <div className="mt-4 flex gap-3">
                  <Link
                    href="#"
                    aria-label="GitHub"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:bg-white/10 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="200"
                      height="200"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#000000"
                        fill-rule="evenodd"
                        d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584c.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076c-.343-.93-.881-1.175-.881-1.175c-.734-.489.048-.489.048-.489c.783.049 1.224.832 1.224.832c.734 1.223 1.859.88 2.3.685c.048-.538.293-.88.489-1.076c-1.762-.196-3.621-.881-3.621-3.964c0-.88.293-1.566.832-2.153c-.05-.147-.343-.978.098-2.055c0 0 .685-.196 2.201.832c.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832c.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915c.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>

                  <Link
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:bg-white/10 hover:text-white"
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
                    href="#"
                    aria-label="Email"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:bg-white/10 hover:text-white"
                  >
                    <Mail className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-4">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>

                <p className="text-xs text-slate-300">
                  Open to new opportunities
                </p>
              </div>
            </div>
          </div>

          {/* ==================================================
              RIGHT SIDE - FORM
          ================================================== */}
          <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_15px_50px_rgba(88,60,140,0.07)] sm:p-9">
            {!submitted ? (
              <>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Send me a message
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Fill out the form below and I’ll get back to you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-purple-300 focus:bg-white focus:ring-4 focus:ring-purple-100"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-purple-300 focus:bg-white focus:ring-4 focus:ring-purple-100"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="What would you like to talk about?"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-purple-300 focus:bg-white focus:ring-4 focus:ring-purple-100"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell me about your project or idea..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-sm leading-6 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-purple-300 focus:bg-white focus:ring-4 focus:ring-purple-100"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-purple-600 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/30"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>

                  <p className="text-center text-[11px] leading-5 text-slate-400">
                    I usually respond within 1–2 business days.
                  </p>
                </form>
              </>
            ) : (
              /* ==================================================
                  SUCCESS STATE
              ================================================== */
              <div className="flex min-h-125 flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Message Sent!
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                  Thanks for reaching out. Your message has been received. I’ll
                  get back to you soon.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ==================================================
            BOTTOM CTA
        ================================================== */}
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-purple-100 bg-linear-to-r from-purple-50 via-white to-blue-50 p-7 text-center sm:p-9">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white text-purple-600 shadow-sm">
            <Mail className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-xl font-bold text-slate-900">
            Prefer email?
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            You can also contact me directly at
          </p>

          <a
            href="mailto:hello@example.com"
            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700"
          >
            hello@example.com
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
