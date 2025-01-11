"use client"
import { AboutCard, EducationCard, ExperienceCard, LocationCard, PolicyCard, ProjectsCard, TechStackCard, TestimonialsCard } from "@/components/cards";
import FlickeringGrid from "@/components/containers/flickering-grid";
import useWindowDimensions from "@/hooks/useWindowDimension";
import React from "react";

export default function Home() {

  const { width, height } = useWindowDimensions();

  return (
    <main className="w-screen h-screen bg-[#000000]">
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        width={width}
        height={height}
      />

      <div className="w-full h-full flex items-center justify-center relative">
        <div className="w-[60%] h-[80%] grid grid-cols-4 grid-rows-8 gap-4">

          <AboutCard />
          <TechStackCard />
          <ExperienceCard />
          <TestimonialsCard />
          <LocationCard />
          <ProjectsCard />
          <EducationCard />
          <PolicyCard />

        </div>
      </div>
    </main>

  );
}
