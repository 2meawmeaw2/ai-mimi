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
      <div className="">
        <Who />{" "}
        <section
          id="Who"
          className="   h-[400vh] w-full font-arabic bg-black z-50   "
        >
          <Win />
        </section>
      </div>
    </div>
  );
}
