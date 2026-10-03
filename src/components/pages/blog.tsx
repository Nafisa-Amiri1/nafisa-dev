"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Mail,
  Search,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";

const categories = [
  "All Posts",
  "Next.js",
  "React",
  "Tailwind CSS",
  "JavaScript",
  "Web Development",
  "Tools",
];

const articles = [
  {
    title: "Getting Started with Next.js 16",
    description:
      "A simple and practical guide to set up your first Next.js project with TypeScript and Tailwind CSS.",
    image: "/images/blog/nextjs.jpg",
    category: "Next.js",
    date: "Sep 25, 2025",
    readTime: "5 min read",
    slug: "getting-started-with-nextjs-16",
  },
  {
    title: "React Hooks: A Beginner-Friendly Guide",
    description:
      "Learn the most important React hooks with simple examples and practical use cases.",
    image: "/images/blog/react.jpg",
    category: "React",
    date: "Sep 18, 2025",
    readTime: "7 min read",
    slug: "react-hooks-beginners-guide",
  },
  {
    title: "10 Tailwind CSS Tips for Better UI",
    description:
      "Small tips that can make a big difference in your Tailwind CSS workflow and design.",
    image: "/images/blog/tailwind.jpg",
    category: "Tailwind CSS",
    date: "Sep 12, 2025",
    readTime: "6 min read",
    slug: "tailwind-css-tips",
  },
  {
    title: "JavaScript ES2024 Features You Should Know",
    description:
      "Explore modern JavaScript features that can make your code cleaner and more powerful.",
    image: "/images/blog/javascript.jpg",
    category: "JavaScript",
    date: "Sep 5, 2025",
    readTime: "6 min read",
    slug: "javascript-es2024-features",
  },
  {
    title: "Building a Responsive Layout with Flexbox",
    description:
      "A step-by-step guide to create a responsive layout using CSS Flexbox.",
    image: "/images/blog/flexbox.jpg",
    category: "Web Development",
    date: "Aug 28, 2025",
    readTime: "5 min read",
    slug: "responsive-layout-flexbox",
  },
  {
    title: "Git Tips for a Smoother Workflow",
    description:
      "Useful Git commands and tips to help you work faster and avoid common mistakes.",
    image: "/images/blog/git.jpg",
    category: "Tools",
    date: "Aug 20, 2025",
    readTime: "7 min read",
    slug: "git-tips-workflow",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All Posts" || article.category === activeCategory;

      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        article.title.toLowerCase().includes(searchValue) ||
        article.description.toLowerCase().includes(searchValue) ||
        article.category.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section id="blog" className="relative overflow-hidden bg-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-125 w-125 rounded-full bg-purple-100/40 blur-3xl" />

        <div className="absolute right-0 top-[25%] h-112.5 w-112.5 rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* ==================================================
            BLOG HERO
        ================================================== */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-600">
              <Sparkles className="h-4 w-4" />
              MY BLOG
            </div>

            <h2 className="max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl">
              Thoughts, Ideas &{" "}
              <span className="bg-linear-to-r from-violet-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                Tech Insights
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              I share my journey as a frontend developer — from technical
              articles and best practices to personal thoughts, learning
              experiences and helpful resources.
            </p>

            {/* Topics */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "Tailwind CSS",
                "Web Development",
                "JavaScript",
              ].map((topic) => (
                <span
                  key={topic}
                  className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative mx-auto h-80 w-full max-w-130">
            {/* Orbit */}
            <div className="absolute left-1/2 top-1/2 h-65 w-65 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-200/60" />

            <div className="absolute left-1/2 top-1/2 h-77.5 w-77.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/40" />

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/20 blur-3xl" />

            {/* Next badge */}
            <div className="absolute left-[13%] top-[12%] z-20 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-lg font-bold text-white shadow-lg">
              N
            </div>

            {/* React badge */}
            <div className="absolute right-[16%] top-[5%] z-20 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-500 shadow-lg">
              <span className="text-xl">⚛</span>
            </div>

            {/* Tailwind badge */}
            <div className="absolute right-[4%] top-[35%] z-20 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-xl font-bold text-cyan-500 shadow-lg">
              ~
            </div>

            {/* Browser */}
            <div className="absolute left-[13%] top-[22%] z-10 w-[74%] -rotate-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-purple-900/10">
              <div className="flex h-7 items-center gap-1 border-b border-slate-100 bg-slate-50 px-3">
                <span className="h-2 w-2 rounded-full bg-red-300" />
                <span className="h-2 w-2 rounded-full bg-yellow-300" />
                <span className="h-2 w-2 rounded-full bg-green-300" />
              </div>

              <div className="p-4">
                <div className="h-3 w-24 rounded bg-purple-100" />

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <div className="h-3 w-24 rounded bg-slate-800" />
                    <div className="mt-2 h-2 w-32 rounded bg-slate-200" />
                    <div className="mt-2 h-2 w-24 rounded bg-slate-200" />

                    <div className="mt-4 h-5 w-16 rounded-full bg-purple-500" />
                  </div>

                  <div className="h-20 rounded-xl bg-linear-to-br from-purple-100 via-blue-100 to-cyan-100" />
                </div>

                <div className="mt-4 flex gap-2">
                  <div className="h-2 w-14 rounded bg-slate-200" />
                  <div className="h-2 w-10 rounded bg-slate-200" />
                  <div className="h-2 w-12 rounded bg-slate-200" />
                </div>
              </div>
            </div>

            {/* Floating books */}
            <div className="absolute bottom-[8%] left-[15%] z-20 space-y-1">
              <div className="h-6 w-36 rounded bg-purple-500 px-3 text-[9px] font-semibold leading-6 text-white shadow-lg">
                Clean Code
              </div>

              <div className="h-6 w-40 rounded bg-blue-500 px-3 text-[9px] font-semibold leading-6 text-white shadow-lg">
                Web Performance
              </div>

              <div className="h-6 w-32 rounded bg-cyan-500 px-3 text-[9px] font-semibold leading-6 text-white shadow-lg">
                Tech & Life
              </div>
            </div>

            {/* Note */}
            <div className="absolute right-[4%] bottom-[18%] rotate-6 rounded-xl bg-white px-4 py-3 text-center text-xs font-medium text-purple-500 shadow-lg">
              Write
              <br />
              Learn
              <br />
              Share ♡
            </div>
          </div>
        </div>

        {/* ==================================================
            LATEST ARTICLES HEADER
        ================================================== */}
        <div className="mt-20 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Latest Articles
          </h3>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-purple-600"
          >
            View All Posts
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ==================================================
            BLOG CONTENT
        ================================================== */}
        <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_280px]">
          {/* Main articles */}
          <div>
            {/* Search + filters */}
            <div className="mb-7 flex flex-col gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search articles..."
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-purple-300 focus:ring-4 focus:ring-purple-100"
                />
              </div>

              {/* Categories */}
              <div className="flex gap-2 overflow-x-auto pb-1">
                {categories.map((category) => {
                  const isActive = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition-all ${
                        isActive
                          ? "bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-md shadow-purple-500/20"
                          : "border border-slate-200 bg-white text-slate-600 hover:border-purple-200 hover:text-purple-600"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Article grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_rgba(88,60,140,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(88,60,140,0.1)]"
                  >
                    {/* Image */}
                    <Link
                      href={`/blog/${article.slug}`}
                      className="relative block aspect-video overflow-hidden bg-slate-100"
                    >
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />

                      {/* Category */}
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-purple-600 shadow-sm backdrop-blur-sm">
                        {article.category}
                      </span>
                    </Link>

                    {/* Content */}
                    <div className="p-4">
                      <Link href={`/blog/${article.slug}`}>
                        <h4 className="line-clamp-2 text-base font-bold leading-6 text-slate-900 transition-colors group-hover:text-purple-600">
                          {article.title}
                        </h4>
                      </Link>

                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                        {article.description}
                      </p>

                      {/* Meta */}
                      <div className="mt-4 flex items-center gap-4 text-[10px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {article.date}
                        </span>

                        <span className="flex items-center gap-1">
                          <Clock3 className="h-3.5 w-3.5" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 py-20 text-center">
                <p className="text-sm text-slate-500">No articles found.</p>
              </div>
            )}
          </div>

          {/* ==================================================
              SIDEBAR
          ================================================== */}
          <aside className="space-y-5">
            {/* Categories */}
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_30px_rgba(88,60,140,0.05)]">
              <h4 className="font-bold text-slate-900">Categories</h4>

              <div className="mt-4 space-y-1">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-xs transition-colors ${
                      activeCategory === category
                        ? "bg-purple-50 font-semibold text-purple-600"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                    }`}
                  >
                    <span>{category}</span>

                    <span
                      className={
                        activeCategory === category
                          ? "text-purple-500"
                          : "text-slate-400"
                      }
                    >
                      {index === 0 ? 12 : index < 4 ? 3 : 2}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Subscribe */}
            <div className="overflow-hidden rounded-2xl border border-purple-100 bg-linear-to-br from-purple-50 to-blue-50 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-purple-600 shadow-sm">
                <Mail className="h-5 w-5" />
              </div>

              <h4 className="mt-4 font-bold text-slate-900">Stay Updated</h4>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Get notified when I publish new articles and learning resources.
              </p>

              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-11 w-full rounded-xl border border-purple-100 bg-white px-3 text-xs outline-none placeholder:text-slate-400 focus:border-purple-300 focus:ring-4 focus:ring-purple-100"
                />

                <button
                  type="submit"
                  className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-purple-600 text-xs font-semibold text-white shadow-md shadow-purple-500/20 transition-all hover:-translate-y-0.5"
                >
                  Subscribe
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
