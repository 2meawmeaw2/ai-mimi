"use client";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FeaturesSectionDemo from "@/components/features-section-demo-3";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Who = () => {
  useGSAP(() => {
    gsap.to(
      ".bgblurmewa",

      {
        yPercent: -100,
        scrollTrigger: {
          trigger: "#Who",
          start: "10% center",
          end: "40% center",
          scrub: 1,
          markers: true,
        },
      }
    );
  });

  return (
    <section
      id="Who"
      className="relative overflow-hidden bg-black w-full font-arabic z-60 mt-[120vh]"
    >
      {/* Animated Background Element */}
      <div className="absolute bgblurmewa  -top-50 left-1/2 -translate-x-1/2 -z-40 h-[90vh] w-[100vw] blur-[100px]">
        <div
          style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
          className="bg-yellow rounded-full w-full h-full"
        ></div>
      </div>

      <div className="w-[90%] max-w-4xl mt-10 py-10 mx-auto my-10 rounded-xl border border-yellow/50 flex flex-col items-center justify-center shadow-lg shadow-yellow/20 gap-6 backdrop-blur-sm bg-gradient-to-b from-black/80 to-black">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow text-center drop-shadow-[0_2px_4px_rgba(234,179,8,0.5)]">
          : شكون أنا
        </h1>

        <div className="w-16 h-1 bg-yellow rounded-full"></div>

        <p className="text-lg md:text-xl text-white/90 text-center w-[90%] max-w-2xl p-4 leading-relaxed">
          أنا محمد عبد الله، مطور واجهات مستخدم من المغرب. متخصص في إنشاء
          تطبيقات ويب تفاعلية باستخدام
          <span className="text-yellow"> React.js و Next.js</span>. لدي خبرة في
          بناء واجهات مستخدم جذابة وسلسة، مع التركيز على تجربة المستخدم والأداء
          العالي. أسعى دائمًا لتحويل الأفكار الإبداعية إلى واقع رقمي ملموس.
        </p>
      </div>

      <FeaturesSectionDemo />
    </section>
  );
};

export default Who;
