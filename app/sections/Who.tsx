"use client";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Who: React.FC = () => {
  useGSAP(() => {
    gsap.to(".bgblurmewa", {
      yPercent: -100,
      scrollTrigger: {
        trigger: "#Who",
        start: "-40% center",
        end: "0% center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section id="Who" className="relative w-full font-arabic z-40 mt-[120vh]">
      {/* Animated Background Element */}
      <div className="absolute bgblurmewa -top-50 left-1/2 -translate-x-1/2 -z-40 h-[90dvh] w-[100vw] blur-[100px]">
        <div
          style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
          className="bg-yellow rounded-full w-full h-full"
        ></div>
      </div>

      <div className="w-[90%] max-w-4xl mt-10 py-10 mx-auto my-10 rounded-xl border border-yellow/50 flex flex-col items-center justify-center shadow-lg shadow-yellow/20 gap-6 backdrop-blur-sm bg-gradient-to-b from-black/80 to-black/1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow text-center drop-shadow-[0_2px_4px_rgba(234,179,8,0.5)] perspective-1000">
          من عندمن راح تتعلم ؟
        </h1>

        <div className="divider-line w-16 h-1 bg-yellow rounded-full origin-center"></div>

        <p className="text-sm  font-light md:text-xl text-white/90 text-center w-[90%] max-w-2xl p-4 leading-relaxed">
          أنا إكرام، مهندسة معمارية، مصمّمة، وصانعة محتوى. جربت الذكاء الاصطناعي
          في كل مجالات حياتي: من خدمتي كمصمّمة، لمشاريعي، لمحتواي، وحتى في حياتي
          اليومية. وعلى مدار العامين اللي فاتوا، علّمت الأطفال، النساء، والشباب
          كيفاش يستغلو الذكاء الاصطناعي بطريقتهم، وحسب احتياجهم. اليوم، جمعت كل
          هاد التجربة في دورة واحدة، مبنية باش تكون بسيطة، تطبيقية، وفعالة… لأي
          واحد حاب يخدم بذكاء.
        </p>
      </div>
    </section>
  );
};

export default Who;
