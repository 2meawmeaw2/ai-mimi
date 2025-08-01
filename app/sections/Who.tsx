"use client";
import React from "react";

import { BackgroundBeams } from "@/components/ui/background-beams";
import FeaturesSectionDemo from "@/components/features-section-demo-3";
const Who = () => {
  return (
    <section
      id="Who"
      className="relative   w-full font-arabic bg-black z-60 mt-10 py-10"
    >
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
