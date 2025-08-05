"use client";
import { Spotlight } from "@/components/ui/spotlight";
import ShinyText from "../ShinyText/ShinyText";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(useGSAP, SplitText);

const Hero = () => {
  useGSAP(() => {
    document.body.classList.add("overflow-y-clip");
    document.body.classList.add("h-[100vh]");

    const split = SplitText.create(".para", {
      type: "lines",
    });
    const split2 = SplitText.create(".para2", {
      type: "words",
    });

    gsap.set(".hero", {
      clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    });
    gsap.set(".background-grid", {
      scale: 2,
    });

    const introTl = gsap.timeline();

    introTl
      .from(
        ".ai",
        {
          delay: 0.2,
          autoAlpha: 0,
          yPercent: 50,
          duration: 1,
          ease: "power2.out",
        },
        0
      )

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
          onComplete: () => {
            document.body.classList.remove("overflow-y-clip");
            document.body.classList.remove("h-[100vh]");
          },
        },
        "<"
      )
      .to(
        ".para2",
        {
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
          scale: 1.2,
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
        color: "white",
        duration: 0.1,
        stagger: {
          each: 0.03,
        },
        ease: "power1.inOut",
      });

    gsap.to("#Hero", {
      autoAlpha: 0,
      scrollTrigger: {
        scrub: 1,
        trigger: "#Hero",
        start: "20% top",
        end: "60% top",
      },
    });
  });

  return (
    <section id="Hero" className="fixed  top-0 h-[120vh] w-[100vw] font-arabic">
      <div className="bg-black/50 absolute inset-0 z-50 w-full h-full black-overlay" />

      {/* Main text overlay - responsive positioning and sizing */}
      <div className="pointer-events-none absolute z-60 top-[10%] sm:top-[15%] lg:top-[20%] w-full h-full main-text px-4 sm:px-6 lg:px-8">
        {/* "وأخيرا" heading - responsive font sizes */}
        <h2 className="overflow-clip text-center font-medium  sm:py-2 text-[5rem] sm:text-5xl md:text-6xl lg:text-7xl my-1 font-arabic">
          وأخيرا
        </h2>

        {/* Main AI course heading - responsive font sizes */}
        <h1 className="overflow-clip ai  text-center font-black text-2xl sm:text-[2rem] md:text-[3rem] lg:text-[4rem] text-yellow font-arabic py-3 sm:py-4 lg:py-6">
          <ShinyText
            text="! دورة الذكاء الاصطناعي للجميع"
            disabled={false}
            speed={3}
            className="custom-class text-yellow/80"
          />
          <div className="scale-x-0 origin-center  line">
            <div className="absolute translate-y-2 sm:translate-y-3 lg:translate-y-4 -translate-x-[5%] bottom-0 bg-gradient-to-r from-transparent via-yellow-300 to-transparent h-[2px] w-[120%] blur-sm" />
            <div className="absolute translate-y-2 sm:translate-y-3 lg:translate-y-4 -translate-x-[5%] bottom-0 bg-gradient-to-r from-transparent via-indigo-300 to-transparent h-px w-[120%]" />
            <div className="absolute translate-y-2 sm:translate-y-3 lg:translate-y-4 -translate-x-[5%] bottom-0 bg-gradient-to-r from-transparent via-yellow to-transparent h-[5px] w-[120%] blur-sm" />
            <div className="absolute translate-y-2 sm:translate-y-3 lg:translate-y-4 -translate-x-[5%] bottom-0 bg-gradient-to-r from-transparent via-yellow to-transparent h-px w-[120%]" />
          </div>
        </h1>
      </div>

      {/* Hero section */}
      <section className="hero relative z-20 h-screen w-full ">
        {/* Background grid - responsive dot sizes and gaps */}

        {/* Main content container */}
        <div className="relative w-full h-full flex flex-col justify-evenly items-center px-4 sm:px-6 lg:px-8">
          {/* Spotlight - responsive positioning */}
          <Spotlight
            className="-top-5 sm:-top-10 lg:-top-40 -left-5 sm:-left-10 lg:left-50 z-30"
            fill="#dec531"
          />

          {/* Content section - responsive sizing and spacing */}
          <div className="flex flex-col items-center justify-center gap-2 w-[95%] sm:w-[90%] max-w-[40rem] h-[60%] sm:h-[70%] mt-0 sm:mt-20 lg:mt-24">
            <div className="w-full h-20 sm:h-32 lg:h-40" />
            <div className="absolute z-50"></div>

            {/* Main paragraph - responsive text size and padding */}
            <p className=" text-white    bg-transparent text-center font-light font-arabic text-md  sm:text-xl lg:text-2xl p-3 sm:p-4 lg:p-2 w-[100%] rounded-xl sm:rounded-2xl  mt-6 sm:mt-8 lg:mt-10 border-2 border-black leading-relaxed">
              فريلانسر؟ صانع محتوى؟ صاحب مشروع؟ طالب؟ ولا حتى فضولي تحب تفهم
              كيفاش الذكاء الاصطناعي يقدر: يوفّرلك وقت , يسهّل خدمتك , ويزيدلك
              دخل <br />
              <b className="text-yellow"> هاد الدورة مديورة ليك.</b>
            </p>
            <a
              href="#Contact"
              className="bg-yellow text-center text-black font-black py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg sm:rounded-xl hover:bg-yellow/90 transition-colors duration-300 text-sm sm:text-base w-full max-w-xs mx-auto"
            >
              !!! سجل الآن – الأماكن محدودة
            </a>
          </div>
          <div className=" h-[20vh]  w-full" />
          {/* Bottom section - responsive spacing and sizes */}
        </div>
      </section>
    </section>
  );
};

export default Hero;
