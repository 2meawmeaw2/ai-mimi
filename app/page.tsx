"use client";
import Hero from "./sections/Hero";
import Who from "./sections/Who";

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
