"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  image: string;
}

export default function WorkShowcase() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollWrapRef = useRef<HTMLDivElement | null>(null);

  const projects: Project[] = [
    {
      title: "صناعة المحتوى",
      description: "نكتب، نصمّم وننشر محتوى احترافي في وقت قياسي.",
      image: "/projects/2.jpg",
    },
    {
      title: "بوت التدبر",
      description: "خدمت بوت يساعد الناس يتدبروا القرآن بطريقة ذكية وبسيطة.",
      image: "/projects/1.jpg",
    },
    {
      title: "دليل تسويقي للمدارس القرآنية",
      description:
        "بـAI بنيت خطة تسويق كاملة لمؤسسة دينية… من غير ما نكون خبيرة تسويق.",
      image: "/projects/3.jpg",
    },
    {
      title: "خدمتي كمصممة ولات أسرع",
      description:
        "الخدمة لي كانت تديلي ساعتين، ولات تديلي 10 دقايق وزدت دخلت دراهم أكثر.",
      image: "/projects/4.jpg",
    },
    {
      title: "حتى في Skin Care!",
      description: "نخمم معاه روتين، نقارن منتجات ونفهم بشرتي.",
      image: "/projects/5.jpg",
    },
    {
      title: "مشروع تخرجي (PFE)",
      description:
        "خدمت دراسة وتحليل وتنظيم كامل المشروع بدكاء، وفرّت الوقت ورفعت المستوى.",
      image: "/projects/6.jpg",
    },
    {
      title: "الذكاء الاصطناعي = الشاف تاعي",
      description: "عاوني نلقى وصفات، نبدّل المكونات، ونرتجل كي نكون محتاسة.",
      image: "/projects/7.jpg",
    },
    {
      title: "بوت طبيب الكتب",
      description:
        "خدمته باش يقترح كتب حسب احتياج كل شخص… وناس بزاف بداو يقراو بفضلو.",
      image: "/projects/8.jpg",
    },
    {
      title: "قصص مخصصة لأطفال العائلة",
      description: "نخلي كل طفل يسمع قصة من عالمه، حسب عمره واهتمامه.",
      image: "/projects/9.jpg",
    },
    {
      title: "أي موقع نخمم فيه… نخدمو",
      description: "بفضل أدوات AI، ماكاش فكرة نحب نخدمها وما نقدرش نحققها.",
      image: "/projects/10.jpg",
    },
  ];

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

    let ctx: gsap.Context | undefined;

    if (window.innerWidth >= 1024) {
      ctx = gsap.context(() => {
        const wrapper = scrollWrapRef.current;
        if (!wrapper) return;

        const totalWidth = wrapper.scrollWidth / 2;

        gsap.to(wrapper, {
          x: `-=${totalWidth}`,
          duration: projects.length * 2,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize(gsap.utils.wrap(-totalWidth, 0)),
          },
        });
      });
    }

    return () => ctx?.revert();
  }, []);

  useEffect(() => {
    const resize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="w-full py-20 mt-20 z-60 font-arabic relative">
      <h2
        ref={titleRef}
        className="text-4xl md:text-5xl font-bold text-yellow text-center mb-12 drop-shadow-[0_2px_4px_rgba(234,179,8,0.5)]"
      >
        وش قدرت ندير بفضل الذكاء الاصطناعي؟
      </h2>

      <div
        ref={containerRef}
        className="overflow-x-auto lg:overflow-hidden no-scrollbar px-4"
      >
        <div className="flex mx-auto gap-6 w-max pl-4 pr-8" ref={scrollWrapRef}>
          {[...projects, ...projects].map((proj, index) => (
            <div
              key={index}
              className="scroll-card min-w-[300px] max-w-[300px] flex-shrink-0 bg-gradient-to-br from-black/90 to-black/70 border border-yellow/30 rounded-xl shadow-lg shadow-yellow/10 p-4"
            >
              <div className="relative w-full h-[180px] border border-yellow/20 rounded-lg overflow-hidden">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority={index === 0}
                />
              </div>
              <h3 className="text-xl text-right text-yellow font-bold mt-4">
                {proj.title}
              </h3>
              <p className="text-white/90 text-right text-sm mt-2 leading-relaxed">
                {proj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
