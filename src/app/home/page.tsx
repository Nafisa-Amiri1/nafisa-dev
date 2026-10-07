import TechStack from "@/components/pages/home/TechStack";
import Hero from "@/components/pages/home/Hero";
import HowIBuild from "@/components/pages/home/HowIBuild";
import SelectedWork from "@/components/pages/home/SelectedWork";
import WhatIBring from "@/components/pages/home/WhatIBring";
import FinalCTA from "@/components/pages/home/FinalCTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <TechStack />
      <HowIBuild />
      <SelectedWork />
      <WhatIBring />
      <FinalCTA />
    </div>
  );
}