"use client";
import SpotlightCard from "../SpotlightCard/SpotlightCard";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Win: React.FC = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".win",
        start: "top top",
        end: "300% top",
        scrub: 1.5,
        pin: true,
        markers: true,
      },
    });

    tl.from(".card1", {
      yPercent: 20,
      x: window.innerWidth,
      rotation: 45,
      // Add explicit duration
    })
      .from(".card2", {
        yPercent: -20,
        x: -window.innerWidth,
        rotation: -40,
      }) // Overlap timing to control pacing
      .from(".card3", {
        yPercent: 30,
        x: -window.innerWidth,
        rotation: 60,
      })

      .from(".card4", {
        yPercent: -30,
        x: window.innerWidth,
        rotation: -50,
      })
      .from(".card5", {
        yPercent: 40,
        x: window.innerWidth,
        rotation: 70,
      });
  });
  const rotations = [
    "rotate(-8deg)",
    "rotate(12deg)",
    "rotate(4deg)",
    "rotate(-15deg)",
    "rotate(9deg)",
  ];
  const cards = [1, 2, 3, 4, 5];

  return (
    <div
      id="Win"
      className="win relative z-50  min-h-[100dvh] w-full  lg:pt-20 font-arabic "
    >
      <div className="w-full h-full sticky top-0">
        <h1 className="overflow-clip  text-center font-black text-2xl md:text-4xl  text-yellow  py-6">
          وش راح نربح من هذي الدورة
        </h1>
        <div className=" w-full h-[100vh]  relative  flex justify-center items-start pt-[30vh] ">
          {cards.map((_, i) => (
            <SpotlightCard
              key={i}
              className={`card${i + 1} z-${
                (i + 2) * 10
              }  w-[60%] h-[40%] max-w-100  border-2 border-yellow shadow-sm shadow-yellow/60`}
              spotlightColor="rgba(222, 197, 49, 0.3)"
              style={{ transform: `translateY(-50%) ${rotations[i]}` }}
            >
              <div className="w-full h-full bg-black absolute inset-0 -z-10" />
              <div className="w-full h-full bg-yellow/6 absolute inset-0 -z-10" />
              <div className="flex flex-col items-start justify-center gap-10 h-full text-white max-w-xs p-6 ">
                <div className="text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="gold"
                    viewBox="0 0 24 24"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))",
                    }}
                  >
                    <path d="M12 2l1.09 3.47L17 7l-3.47 1.09L12 12l-1.09-3.47L7 7l3.47-1.09L12 2zM6 14l.87 2.61L10 17l-2.13.39L6 20l-.87-2.61L2 17l2.13-.39L6 14zm12 0l.87 2.61L22 17l-2.13.39L18 20l-.87-2.61L14 17l2.13-.39L18 14z" />
                  </svg>
                </div>
                <h2 className="text-xl font-black text-white text-right w-full">
                  عزّز تجربتك
                </h2>
                <p className="text-sm text-white/70 leading-relaxed text-right">
                  استفد من مزايا حصرية، وخصائص مميزة، ودعم متواصل على مدار
                  الساعة كعضو دائم في النادي.
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Win;
