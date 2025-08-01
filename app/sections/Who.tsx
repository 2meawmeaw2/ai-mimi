"use client";
import { ArrowDown } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";

import { BackgroundBeams } from "@/components/ui/background-beams";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import FeaturesSectionDemo from "@/components/features-section-demo-3";
const Who = () => {
  useGSAP(() => {});
  return (
    <section
      id="Who"
      className="relative   w-full font-arabic bg-black z-60 mt-10 py-10"
    >
      <BackgroundBeams className="text-yellow pointer-events-none" />
      <div className="w-[90%] mt-10 py-10 mx-auto my-10 rounded-lg  border-1 border-yellow flex flex-col items-center justify-center shadow-lg shadow-yellow/30 gap-4">
        <h1 className="text-4xl font-bold text-yellow text-shadow-lg text-shadow-yellow/30">
          : شكون أنا
        </h1>
        <p className="text-lg text-white text-center w-[90%] p-2 bg-black/50 rounded-lg text-shadow-lg text-shadow-yellow/50">
          انا محمد عبد الله من المغرب وانا مطور واجهات مستخدم ومطور واجهات
          مستخدم ومطور واجهات مستخدم ومطور واجهات مستخدم ومطور واجهات مستخدم
          ومطور واجهات مستخدم ومطور واجهات مستخدم ومطور واجهات
        </p>
      </div>
      <FeaturesSectionDemo />
    </section>
  );
};
export default Who;
