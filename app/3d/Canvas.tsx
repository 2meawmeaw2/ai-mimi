"use client";
import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { Robot } from "@/public/robot";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Loader from "./Loading";

interface PositionProxy {
  opacity: number;
  xPercent: number;
  yPercent: number;
}

interface RotationProxy {
  x: number;
  y: number;
  z: number;
}

interface ScaleProxy {
  value: number;
}

type RotationTuple = [number, number, number];

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Scene(): React.JSX.Element {
  const [rotation, setRotation] = useState<RotationTuple>([0, 0, 0]);
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = (): boolean =>
      window.innerWidth <= 768 ||
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    const handleResize = (): void => setIsMobileDevice(checkMobile());

    setIsMobileDevice(checkMobile());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const setWillChange = (
    element: HTMLElement | null,
    properties: string
  ): void => {
    if (element && isMobileDevice) element.style.willChange = properties;
  };

  const removeWillChange = (element: HTMLElement | null): void => {
    if (element && isMobileDevice) element.style.willChange = "auto";
  };

  useGSAP(() => {
    const rotationProxy: RotationProxy = { x: 0, y: 0, z: 0 };
    const positionProxy: PositionProxy = {
      opacity: 1,
      xPercent: 0,
      yPercent: 0,
    };

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
            yPercent: -20,
            x: 0,
            y: -7,
            z: 0,
            opacity: 0,
          },
          {
            duration: 2,
            xPercent: -25,
            yPercent: -60,
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
            yPercent: 0,
            x: 0,
            y: Math.PI * 2 + Math.PI / 4,
            z: 0,
            opacity: isMobileDevice ? 0.4 : 1,
          },
          {
            xPercent: 40,
            yPercent: -50,
            x: Math.PI * 2,
            y: Math.PI * 2 - Math.PI / 4,
            z: Math.PI,
            opacity: 1,
          },
          {
            xPercent: -40,
            yPercent: -50,
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
            y: -Math.PI * 1 - Math.PI / 6,
            z: Math.PI * 2 - Math.PI / 6,
            opacity: 1,
          },
        ],
      },
      {
        trigger: "#Contact",
        start: "10% center",
        end: "60% center",
        steps: [
          {
            xPercent: -35, // smooth continuation
            yPercent: isMobileDevice ? -10 : -20, // slight vertical motion
            x: Math.PI / 2, // 90° — laying on back
            y: -Math.PI * 3.2, // turn head the opposite way
            z: Math.PI * 1.85, // reverse head tilt
            opacity: 1,
          },
        ],
      },
    ];

    for (const section of allTimelines) {
      const tl = gsap.timeline({
        scrollTrigger: {
          invalidateOnRefresh: true,

          trigger: section.trigger,
          start: section.start,
          end: section.end,
          scrub: 1,
          refreshPriority: -1,
        },
        onStart: () =>
          setWillChange(containerRef.current, "transform, opacity"),
      });

      for (const step of section.steps) {
        tl.to([positionProxy, rotationProxy], {
          ...step,
          duration: 1.5,
          ease: "power2.inOut",
          onUpdate: applyProps,
        });
      }
    }

    return () => {
      removeWillChange(containerRef.current);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobileDevice]);
  const useWindowWidth = () => {
    const [width, setWidth] = useState(
      typeof window !== "undefined" ? window.innerWidth : 0
    );

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
  };
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) gsap.globalTimeline.timeScale(0.1);
  }, []);
  return (
    <>
      {" "}
      <div
        ref={containerRef}
        className="fixed -bottom-10 z-60 h-[50dvh] w-full pointer-events-none"
        style={{ willChange: isMobileDevice ? "transform, opacity" : "auto" }}
      >
        <Canvas
          camera={{ fov: 75 }}
          performance={{ min: 0.1, max: 1, debounce: 200 }}
          dpr={
            typeof window !== "undefined"
              ? Math.min(window.devicePixelRatio, isMobileDevice ? 2 : 3)
              : 1
          }
          gl={{ preserveDrawingBuffer: true }}
          style={{ pointerEvents: "none" }}
        >
          <group scale={0.03} rotation={rotation}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="sunset" />
            <Float
              speed={isMobileDevice ? 2 : 2}
              rotationIntensity={isMobileDevice ? 2 : 1}
              floatIntensity={isMobileDevice ? 2 : 1}
              floatingRange={isMobileDevice ? [-0.6, 0.6] : [-2, 2]}
            >
              <Suspense>
                <Robot boxSize={useWindowWidth() > 1024 ? 1.4 : 1} />
              </Suspense>
            </Float>
          </group>
        </Canvas>
      </div>
      <Loader />
    </>
  );
}
