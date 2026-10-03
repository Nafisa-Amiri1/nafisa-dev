import About from "@/components/pages/about";
import Blog from "@/components/pages/blog";
import Contact from "@/components/pages/contact";
import Hero from "@/components/pages/hero";
import Projects from "@/components/pages/project";
import Skills from "@/components/pages/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </>
  );
}
