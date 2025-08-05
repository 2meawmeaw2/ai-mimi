"use client";
import Hero from "./sections/Hero";
import Who from "./sections/Who";
import Program from "./sections/program";
import Win from "./sections/win";
import Contact from "./sections/Contact";
import { Scene } from "./3d/Canvas";
import WorkShowcase from "@/components/features-section-demo-3";
export default function Home() {
  return (
    <>
      <Scene />
      <Hero />
      <Who />
      <WorkShowcase />

      <Program />
      <Win />

      <div className="min-h-screen bg-black font-arabic">
        <div className="container mx-auto px-4 py-8">
          <Contact />
        </div>
      </div>
    </>
  );
}
