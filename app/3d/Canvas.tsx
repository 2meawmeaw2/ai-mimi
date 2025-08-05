"use client";
import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { Robot } from "@/public/robot";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Loader from "./Loading";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Scene(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [boxSize, setBoxSize] = useState<number>(1);
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Detect mobile viewport
  useEffect(() => {
    const updateMobile = (): void => setIsMobile(window.innerWidth <= 768);
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  // Helper to optimize mobile performance
  const setWill = (el: HTMLElement | null, prop: string): void => {
    if (el && isMobile) el.style.willChange = prop;
  };
  const removeWill = (el: HTMLElement | null): void => {
    if (el && isMobile) el.style.willChange = "auto";
  };

  // GSAP scroll-trigger animations
  useGSAP(() => {
    const scaleProxy = { value: 1 };
    const rotationProxy = { x: 0, y: 0, z: 0 };
    const positionProxy = { opacity: 1, xPercent: 0, yPercent: 0 };

    const applyProps = (): void => {
      if (containerRef.current) {
        gsap.set(containerRef.current, {
          opacity: positionProxy.opacity,
          xPercent: positionProxy.xPercent,
          yPercent: positionProxy.yPercent,
        });
      }
      setRotation([rotationProxy.x, rotationProxy.y, rotationProxy.z]);
    };

    const allTimelines = [
      {
        trigger: "#Who",
        start: "-140% center",
        end: "160% center",
        steps: [
          {
            duration: 1,
            xPercent: 50,
            yPercent: -10,
            x: 0,
            y: -7,
            z: 0,
            opacity: 0,
          },
          {
            duration: 2,
            xPercent: -25,
            yPercent: -50,
            x: 0,
            y: 0.25 * Math.PI,
            z: -0.25 * Math.PI,
            opacity: 1,
          },
        ],
      },
      {
        trigger: "#Program",
        start: "-10% center",
        end: "90% center",
        steps: [
          {
            xPercent: -40,
            yPercent: 10,
            x: 0,
            y: Math.PI * 2 + Math.PI / 4,
            z: 0,
            opacity: isMobile ? 0.4 : 1,
          },
          {
            xPercent: 40,
            yPercent: -40,
            x: Math.PI * 2,
            y: Math.PI * 2 - Math.PI / 4,
            z: Math.PI,
            opacity: 1,
          },
          {
            xPercent: -40,
            yPercent: -40,
            x: 0,
            y: Math.PI * 2 + Math.PI / 3.4,
            z: Math.PI * 2 + Math.PI / 6,
            opacity: 1,
          },
        ],
      },
      {
        trigger: "#Win",
        start: "top center",
        end: "90% center",
        steps: [
          {
            xPercent: -30,
            x: Math.PI,
            y: -Math.PI * 5,
            z: Math.PI * 2,
            opacity: 1,
          },
        ],
      },
      {
        trigger: "#Contact",
        start: "top center",
        end: "60% center",
        steps: [
          {
            xPercent: -35,
            yPercent: isMobile ? 0 : -10,
            x: Math.PI / 2,
            y: -Math.PI * 5.2,
            z: Math.PI * 1.85,
            opacity: 1,
          },
        ],
      },
    ];

    for (const section of allTimelines) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.trigger,
          start: section.start,
          end: section.end,
          scrub: 1,
          refreshPriority: -1,
        },
        onStart: () => setWill(containerRef.current, "transform, opacity"),
      });
      section.steps.forEach((step) => {
        tl.to([positionProxy, rotationProxy], {
          ...step,
          duration: 1.5,
          ease: "power2.inOut",
          onUpdate: applyProps,
        });
      });
    }

    gsap.to(scaleProxy, {
      value: 1.1,
      duration: isMobile ? 3 : 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      onUpdate: () => setBoxSize(scaleProxy.value),
    });
    return () => {
      removeWill(containerRef.current);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isMobile]);

  // Respect reduced motion preferences
  useEffect(() => {
    if (typeof window !== "undefined") {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduced) gsap.globalTimeline.timeScale(0.1);
    }
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed bottom-0 z-60 w-full pointer-events-none h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
        style={{ willChange: isMobile ? "transform, opacity" : "auto" }}
      >
        <Canvas
          frameloop={isMobile ? "demand" : undefined}
          shadows={!isMobile}
          camera={{ fov: 75, position: [0, 0, 5] }}
          performance={{ min: 0.1, max: isMobile ? 0.7 : 1, debounce: 100 }}
          dpr={[1, isMobile ? 1 : 2]}
          gl={{
            preserveDrawingBuffer: true,
            powerPreference: isMobile ? "low-power" : "high-performance",
          }}
          style={{ pointerEvents: "none" }}
        >
          <ambientLight intensity={isMobile ? 0.3 : 0.5} />
          {!isMobile && <Environment preset="sunset" />}
          <Float
            speed={isMobile ? 0.5 : 1}
            rotationIntensity={0.5}
            floatIntensity={isMobile ? 0.5 : 1}
            floatingRange={[-1, 1]}
          >
            <Suspense fallback={null}>
              <group scale={boxSize} rotation={rotation}>
                <Robot boxSize={boxSize} />
              </group>
            </Suspense>
          </Float>
        </Canvas>
      </div>
      <Loader />
    </>
  );
}
