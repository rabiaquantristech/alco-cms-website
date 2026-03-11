"use client";
import Hero from "@/component/Hero";
import Brand from "@/component/Brand";
import WhatIsNlp from "@/component/whatIsNlp";
import AralanLarikIntro from "@/component/AralanLarikIntro";
import OurProgram from "@/component/OurProgram";
import Accredited from "@/component/Accredited";
import WhyTrainWithAL from "@/component/WhyTrainWithAL";
import ALCOCenter from "@/component/ALCOCenter";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Brand />
      <WhatIsNlp />
      <AralanLarikIntro />
      <OurProgram />
      <Accredited />
      <WhyTrainWithAL />
      <ALCOCenter />
    </div>
  );
}