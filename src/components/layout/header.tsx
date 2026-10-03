"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-white ">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex min-h-14 items-center justify-between rounded-2xl border border-white/80 bg-white/80 px-5 shadow-[0_8px_30px_rgba(88,60,140,0.06)] backdrop-blur-xl sm:px-7">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-purple-700 text-lg font-bold text-white shadow-md shadow-purple-500/20">
             N
            </div>

            <span className="text-xl font-semibold tracking-tight text-slate-900">
              Nafisa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  index === 0
                    ? "text-violet-600"
                    : "text-slate-700 hover:text-violet-600"
                }`}
              >
                {item.label}

                {/* Active underline */}
                {index === 0 && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-violet-600" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/25 lg:flex"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-800 transition-colors hover:bg-purple-50 hover:text-violet-600 lg:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_8px_30px_rgba(88,60,140,0.08)] backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-purple-50 text-violet-600"
                      : "text-slate-700 hover:bg-purple-50 hover:text-violet-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white"
              >
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}