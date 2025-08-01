"use client";
import Image from "next/image";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import Who from "./sections/Who";

import SpotlightCard from "./SpotlightCard/SpotlightCard";
import Win from "./sections/win";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <div className="sticky top-0 ">
        <Who />{" "}
        <section
          id="Who"
          className="   h-[400vh] w-full font-arabic bg-black/100 z-50  py-10 "
        >
          <Win />
        </section>
      </div>
    </div>
  );
}
