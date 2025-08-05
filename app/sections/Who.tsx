"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import WorkShowcase from "@/components/features-section-demo-3";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Who: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    // Background animation (your existing one)
    gsap.to(".bgblurmewa", {
      yPercent: -100,
      scrollTrigger: {
        trigger: "#Who",
        start: "10% center",
        end: "40% center",
        scrub: 1,
      },
    });

    // Title animation - entire title appears with dramatic effect
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 100,
          rotationX: -90,
          scale: 0.5,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Continuous glow pulse for title
      gsap.to(titleRef.current, {
        textShadow:
          "0 0 20px rgba(234,179,8,0.8), 0 0 40px rgba(234,179,8,0.6), 0 0 60px rgba(234,179,8,0.4)",
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut",
      });
    }

    // Container slide up animation
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating animation for the container
      gsap.to(containerRef.current, {
        y: -10,
        duration: 3,
        yoyo: true,
        repeat: 2,
        ease: "power2.inOut",
      });
    }

    // Paragraph text reveal animation - word by word
    if (paragraphRef.current) {
      const words = paragraphRef.current.querySelectorAll(".word");
      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 30,
          rotationY: 45,
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Highlight tech words with special animation
      const techWords = paragraphRef.current.querySelectorAll(".tech-word");
      gsap.fromTo(
        techWords,
        {
          backgroundSize: "0% 100%",
        },
        {
          backgroundSize: "100% 100%",
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Divider line animation
    gsap.fromTo(
      ".divider-line",
      {
        scaleX: 0,
        opacity: 0,
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".divider-line",
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Function to split Arabic text into words for title
  const splitArabicIntoWords = (text: string): React.ReactNode[] => {
    return text.split(" ").map((word: string, index: number) => (
      <span key={index} className="word-title inline-block mx-1">
        {word}
      </span>
    ));
  };

  // Function to split text into words for paragraph
  const splitTextIntoWords = (text: string): React.ReactNode[] => {
    return text.split(" ").map((word: string, index: number) => {
      // Check if word contains tech terms
      const isTechWord = ["React.js", "Next.js"].some((tech: string) =>
        word.includes(tech)
      );

      const techWordStyle: React.CSSProperties = isTechWord
        ? {
            backgroundImage:
              "linear-gradient(120deg, rgba(234,179,8,0.3) 0%, rgba(234,179,8,0.6) 100%)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom",
            backgroundSize: "0% 100%",
          }
        : {};

      return (
        <span
          key={index}
          className={`word inline-block mr-1 ${
            isTechWord
              ? "tech-word bg-gradient-to-r from-yellow/20 to-yellow/40 bg-no-repeat bg-left-bottom px-1 rounded"
              : ""
          }`}
          style={techWordStyle}
        >
          {word}
        </span>
      );
    });
  };

  return (
    <section id="Who" className="relative w-full font-arabic z-40 mt-[120vh]">
      {/* Animated Background Element */}
      <div className="absolute bgblurmewa -top-50 left-1/2 -translate-x-1/2 -z-40 h-[90vh] w-[100vw] blur-[100px]">
        <div
          style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
          className="bg-yellow rounded-full w-full h-full"
        ></div>
      </div>

      <div
        ref={containerRef}
        className="w-[90%] max-w-4xl mt-10 py-10 mx-auto my-10 rounded-xl border border-yellow/50 flex flex-col items-center justify-center shadow-lg shadow-yellow/20 gap-6 backdrop-blur-sm bg-gradient-to-b from-black/80 to-black/1"
      >
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-yellow text-center drop-shadow-[0_2px_4px_rgba(234,179,8,0.5)] perspective-1000"
        >
          {splitArabicIntoWords(":أنا شكون")}
        </h1>

        <div className="divider-line w-16 h-1 bg-yellow rounded-full origin-center"></div>

        <p
          ref={paragraphRef}
          className="text-lg md:text-xl text-white/90 text-center w-[90%] max-w-2xl p-4 leading-relaxed"
        >
          {splitTextIntoWords(
            `أنا محمد عبد الله، مطور واجهات مستخدم من المغرب. متخصص في إنشاء تطبيقات ويب تفاعلية باستخدام React.js و Next.js. لدي خبرة في بناء واجهات مستخدم جذابة وسلسة، مع التركيز على تجربة المستخدم والأداء العالي. أسعى دائمًا لتحويل الأفكار الإبداعية إلى واقع رقمي ملموس.`
          )}
        </p>
      </div>
    </section>
  );
};

export default Who;
