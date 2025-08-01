"use client";
import DotGrid from "../DotGrid/DotGrid";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";
import ShinyText from "../ShinyText/ShinyText";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import TextType from "../TextType/TextType";
gsap.registerPlugin(useGSAP, SplitText);
const Hero = () => {
  useGSAP(() => {
    let split = SplitText.create(".para", {
      type: "lines",
      // only split into words and lines (not characters)

      // there are many other options - see below for a complete list
    });
    let split2 = SplitText.create(".para2", {
      type: "words",
      // only split into words and lines (not characters)

      // there are many other options - see below for a complete list
    });

    gsap.set(".hero", {
      clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    });
    gsap.set(".background-grid", {
      scale: 2,
    });
    gsap.set(".para2", {
      backgroundColor: "transparent",
    });

    const introTl = gsap.timeline();

    introTl
      .from(
        ".ai",
        {
          delay: 1,
          autoAlpha: 0,
          yPercent: 50,
          duration: 1,
          ease: "power2.out",
        },
        0
      )
      .to(".hero", {
        clipPath: "polygon(49.5% 0%, 50.5% 0%, 50.5% 100%, 49.5% 100%)",
        duration: 0.8,
        ease: "power2.out",
      })

      .to(
        ".hero",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.2,
          ease: "power2.out",
        },
        "+=1"
      )
      .to(
        ".black-overlay",
        {
          autoAlpha: 0,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        ".para2",
        {
          backgroundColor: "#dec531",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      )
      .from(
        ".main-text",
        {
          yPercent: 25,
          duration: 1,
          ease: "power1.inOut",
          scale: 1.4,
        },
        "-=100%"
      )

      .to(
        ".background-grid",
        {
          duration: 1.5,
          scale: 1,
          ease: "power1.inOut",
        },
        "<"
      )

      .to(
        ".line",
        {
          scaleX: 0.7,
          ease: "power1.inOut",
        },
        "-=1"
      )

      .from(
        split.lines,
        {
          autoAlpha: 0,
          yPercent: 100,
          stagger: {
            each: 0.05,
          },
          ease: "power1.inOut",
        },
        "-=1"
      )
      .to(split2.words, {
        color: "black",
        duration: 0.1,
        stagger: {
          each: 0.1,
          from: "end",
        },
        ease: "power1.inOut",
      });
  });

  return (
    <section id="Hero" className="sticky top-0">
      <div className="bg-black/50 absolute inset-0 z-50 w-full h-full black-overlay" />
      <div className="pointer-events-none absolute z-60 top-50 w-full h-full  main-text ">
        {" "}
        <h2 className="overflow-clip text-center font-black py-3 text-7xl my-1 font-arabic ">
          وأخيرا
        </h2>
        <h1 className="overflow-clip ai text-center font-black text-8xl  text-yellow font-arabic py-6 ">
          <ShinyText
            text="AI دورة"
            disabled={false}
            speed={3}
            className="custom-class text-yellow/80 "
          />
          <div className="scale-x-0 origin-center line ">
            <div className="absolute  translate-y-4 -translate-x-[5%]  bottom-0 bg-gradient-to-r from-transparent via-yellow-300 to-transparent h-[2px] w-[120%] blur-sm" />
            <div className="absolute   translate-y-4 -translate-x-[5%]  bottom-0 bg-gradient-to-r from-transparent via-indigo-300 to-transparent h-px w-[120%]" />
            <div className="absolute  translate-y-4 -translate-x-[5%]  bottom-0 bg-gradient-to-r from-transparent via-yellow to-transparent h-[5px] w-[120%] blur-sm" />
            <div className="absolute  translate-y-4 -translate-x-[5%]  bottom-0 bg-gradient-to-r from-transparent via-yellow to-transparent h-px w-[120%]" />
          </div>
        </h1>
      </div>
      <section className="hero relative z-20 h-screen w-full border-1 ">
        <div className="absolute -z-10 inset-0 w-full h-full background-grid ">
          {" "}
          <DotGrid
            dotSize={2}
            gap={10}
            baseColor="#4f441c"
            activeColor="#fff829"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className="w-full absolute inset-0 h-screen ">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#dec531"
          />
        </div>
        <div className=" relative  w-full h-full flex flex-col justify-evenly items-center  ">
          <Spotlight
            className="-top-10 lg:-top-40 -left-10 lg:left-50 z-30 "
            fill="#dec531"
          />{" "}
          <div className="flex flex-col items-center justify-center  gap-2  w-[90%] max-w-[40rem] h-[50%] ">
            <div className="w-full h-100" />
            <div className="absolute z-50"></div>
            <p className="overflow-clip para2  para text-center font-arabic text-2xl p-2 w-[100%] rounded-2xl bg-yellow text-black/50 mt-10 border-2 border-black">
              ليمن: انا درتها لاصحاب المشاريع والفريلانسرز بصح تقدرو تشوفو
              البرنامج بالاك تفيدكم انتما تاني
            </p>
          </div>
          <div className="w-full h-[20%] flex flex-col items-center justify-evenly  ">
            <h2 className="overflow-clip para font-arabic font-black text-2xl text-white border-2 border-yellow rounded-2xl px-10 py-2  ">
              اضرب تقرعيجة
            </h2>
            <ArrowDown className="size-15 rounded-full p-2 animate-bounce text-white bg-yellow shadow-lg shadow-yellow/80" />
          </div>
        </div>
      </section>
    </section>
  );
};
export default Hero;
