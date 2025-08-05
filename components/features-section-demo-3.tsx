"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "واجهة مستخدم تفاعلية",
    description:
      "تصميم واجهة باستخدام React.js و TailwindCSS لمنتج رقمي معاصر.",
    image: "/projects/ui1.jpg",
  },
  {
    title: "لوحة تحكم ديناميكية",
    description: "لوحة تحكم مبنية بـ Next.js مع تكامل API وتحليل بيانات.",
    image: "/projects/dashboard.jpg",
  },
  {
    title: "صفحة هبوط تسويقية",
    description: "إنشاء صفحة هبوط سريعة الاستجابة مع تجربة مستخدم جذابة.",
    image: "/projects/landing.jpg",
  },
  {
    title: "تطبيق تعليمي للأطفال",
    description: "تطبيق ويب تفاعلي لتحفيظ الأطفال مبادئ البرمجة.",
    image: "/projects/eduapp.jpg",
  },
];

export default function WorkShowcase() {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 80, rotationX: -60, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to(titleRef.current, {
      textShadow:
        "0 0 20px rgba(234,179,8,0.8), 0 0 40px rgba(234,179,8,0.6), 0 0 60px rgba(234,179,8,0.4)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    gsap.fromTo(
      ".scroll-card",
      {
        opacity: 0,
        y: 40,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="w-full  py-20 mt-20 z-60 font-arabic relative">
      <h2
        ref={titleRef}
        className="text-4xl md:text-5xl font-bold text-yellow text-center mb-12 drop-shadow-[0_2px_4px_rgba(234,179,8,0.5)]"
      >
        أعمالي
      </h2>

      <div ref={containerRef} className="overflow-x-auto  no-scrollbar px-4">
        <div className="flex   mx-auto gap-6 w-max pl-4 pr-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="scroll-card  min-w-[300px] max-w-[300px] flex-shrink-0 bg-gradient-to-br from-black/90 to-black/70 border border-yellow/30 rounded-xl shadow-lg shadow-yellow/10 p-4"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded-lg w-full h-[180px] object-cover border border-yellow/20"
              />
              <h3 className="text-xl text-yellow font-bold mt-4">
                {proj.title}
              </h3>
              <p className="text-white/90 text-sm mt-2 leading-relaxed">
                {proj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
