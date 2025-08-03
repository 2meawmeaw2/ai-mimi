"use client";
import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { Robot } from "@/public/robot";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Type declarations
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
  const [boxSize, setBoxSize] = useState<number>(1);
  const [rotation, setRotation] = useState<RotationTuple>([0, 0, 0]);
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile - now properly handled for SSR
  useEffect(() => {
    const checkMobile = (): boolean => {
      return (
        window.innerWidth <= 768 ||
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      );
    };

    setIsMobileDevice(checkMobile());

    // Optional: Update on resize
    const handleResize = (): void => {
      setIsMobileDevice(checkMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper function to set will-change optimization
  const setWillChange = (
    element: HTMLElement | null,
    properties: string
  ): void => {
    if (element && isMobileDevice) {
      element.style.willChange = properties;
    }
  };

  const removeWillChange = (element: HTMLElement | null): void => {
    if (element && isMobileDevice) {
      element.style.willChange = "auto";
    }
  };

  useGSAP(() => {
    const scaleProxy: ScaleProxy = { value: 1 };
    const rotationProxy: RotationProxy = { x: 0, y: 0, z: 0 };
    const positionProxy: PositionProxy = {
      opacity: 1,
      xPercent: 0,
      yPercent: 0,
    };

    // Set will-change for the container element at the start
    if (containerRef.current) {
      setWillChange(containerRef.current, "transform, opacity");
    }

    // Breathing animation for the robot
    gsap.to(scaleProxy, {
      value: 1.1,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      onStart: (): void => {
        // Will-change is already set above for the entire animation sequence
      },
      onUpdate: (): void => setBoxSize(scaleProxy.value),
    });

    // Create a timeline for better control
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#Who",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        refreshPriority: -1,
      },
      onComplete: (): void => {
        // Remove will-change when this scroll section is complete
        // Note: We'll keep it since other animations might still be running
      },
      onStart: (): void => {
        // Ensure will-change is set when scroll animation starts
        if (containerRef.current) {
          setWillChange(containerRef.current, "transform, opacity");
        }
      },
    });

    // First scroll section - entrance
    tl.to([positionProxy, rotationProxy], {
      duration: 0.3,
      opacity: 0.5,
      xPercent: -40,
      yPercent: 10,
      x: 0,
      y: 7,
      z: 0,
      ease: "power2.out",
      onUpdate: (): void => {
        if (containerRef.current) {
          gsap.set(containerRef.current, {
            opacity: positionProxy.opacity,
            xPercent: positionProxy.xPercent,
            yPercent: positionProxy.yPercent,
          });
        }
        setRotation([
          rotationProxy.x,
          rotationProxy.y,
          rotationProxy.z,
        ] as RotationTuple);
      },
    })
      .to([positionProxy, rotationProxy], {
        duration: 0.4,
        opacity: 1,
        xPercent: 40,
        yPercent: -60,
        x: 0,
        y: -1,
        z: 0,
        ease: "power2.inOut",
        onUpdate: (): void => {
          if (containerRef.current) {
            gsap.set(containerRef.current, {
              opacity: positionProxy.opacity,
              xPercent: positionProxy.xPercent,
              yPercent: positionProxy.yPercent,
            });
          }
          setRotation([
            rotationProxy.x,
            rotationProxy.y,
            rotationProxy.z,
          ] as RotationTuple);
        },
      })
      // Second scroll section - middle
      .to([positionProxy, rotationProxy], {
        duration: 0.4,
        opacity: 1,
        xPercent: 0,
        yPercent: 0,
        x: -0.7,
        y: -6.1,
        z: 0,
        ease: "power2.inOut",
        onUpdate: (): void => {
          if (containerRef.current) {
            gsap.set(containerRef.current, {
              opacity: positionProxy.opacity,
              xPercent: positionProxy.xPercent,
              yPercent: positionProxy.yPercent,
            });
          }
          setRotation([
            rotationProxy.x,
            rotationProxy.y,
            rotationProxy.z,
          ] as RotationTuple);
        },
      });

    // Third scroll section - separate timeline for Win section
    const winTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#Win",
        start: "90% center",
        end: "120% center",
        scrub: 1,
        refreshPriority: -1,
      },
      onStart: (): void => {
        // Ensure will-change is still active for this section
        if (containerRef.current) {
          setWillChange(containerRef.current, "transform, opacity");
        }
      },
    });

    winTimeline.to([positionProxy, rotationProxy], {
      duration: 1,
      opacity: 1,
      xPercent: 40,
      yPercent: 0,
      x: 0,
      y: -1,
      z: 0,
      ease: "power2.inOut",
      onUpdate: (): void => {
        if (containerRef.current) {
          gsap.set(containerRef.current, {
            opacity: positionProxy.opacity,
            xPercent: positionProxy.xPercent,
            yPercent: positionProxy.yPercent,
          });
        }
        setRotation([
          rotationProxy.x,
          rotationProxy.y,
          rotationProxy.z,
        ] as RotationTuple);
      },
    });

    const lastTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#Contact",
        start: "top bottom",
        end: "90% bottom",
        scrub: 1.2,
        refreshPriority: -1,
      },
      onStart: (): void => {
        // Ensure will-change is still active for this section
        if (containerRef.current) {
          setWillChange(containerRef.current, "transform, opacity");
        }
      },
    });

    lastTimeline.to([positionProxy, rotationProxy], {
      opacity: 1,
      xPercent: 0,
      yPercent: 10,
      x: 0,
      y: 6,
      z: 0,
      ease: "power2.inOut",
      onUpdate: (): void => {
        if (containerRef.current) {
          gsap.set(containerRef.current, {
            opacity: positionProxy.opacity,
            xPercent: positionProxy.xPercent,
            yPercent: positionProxy.yPercent,
          });
        }
        setRotation([
          rotationProxy.x,
          rotationProxy.y,
          rotationProxy.z,
        ] as RotationTuple);
      },
    });

    // Cleanup function
    return (): void => {
      // Remove will-change when component unmounts or animations are cleaned up
      if (containerRef.current) {
        removeWillChange(containerRef.current);
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobileDevice]); // Add isMobileDevice as dependency

  // Additional mobile optimization: Reduce motion for users who prefer it
  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersReducedMotion: boolean = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        // Optionally disable or reduce animations for accessibility
        gsap.globalTimeline.timeScale(0.1); // Slow down all animations
      }
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-0 z-50 h-[50vh] w-full"
      style={{
        // Set initial will-change in CSS for better performance on first load
        willChange: isMobileDevice ? "transform, opacity" : "auto",
      }}
    >
      <Canvas
        camera={{ fov: 75 }}
        // Performance optimizations for mobile
        performance={{
          min: 0.1, // Lower minimum performance threshold
          max: 1, // Maximum performance threshold
          debounce: 200, // Debounce resize events
        }}
        // Reduce pixel ratio on mobile for better performance
        dpr={
          typeof window !== "undefined"
            ? isMobileDevice
              ? Math.min(window.devicePixelRatio, 2)
              : window.devicePixelRatio
            : 1 // Default value for SSR
        }
      >
        <group scale={0.03} rotation={[rotation[0], rotation[1], rotation[2]]}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Environment preset="park" />
          <Float
            speed={isMobileDevice ? 1 : 2} // Reduce float speed on mobile
            rotationIntensity={isMobileDevice ? 1 : 2} // Reduce rotation intensity on mobile
            floatIntensity={2} // Reduce float intensity on mobile
          >
            <Robot boxSize={boxSize} />
          </Float>
        </group>
      </Canvas>
    </div>
  );
}
