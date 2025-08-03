"use client";
import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { Robot } from "@/public/robot";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Scene() {
  const [boxSize, setBoxSize] = useState(1);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const containerRef = useRef(null);

  useGSAP(() => {
    const scaleProxy = { value: 1 };
    const rotationProxy = { x: 0, y: 0, z: 0 };
    const positionProxy = { opacity: 1, xPercent: 0, yPercent: 0 };

    // Breathing animation for the robot
    gsap.to(scaleProxy, {
      value: 1.1,
      duration: 2, // Slower breathing to reduce interference
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      onUpdate: () => setBoxSize(scaleProxy.value),
    });

    // Create a timeline for better control
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#Who",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        refreshPriority: -1, // Lower priority to prevent conflicts
      },
    });

    // First scroll section - entrance
    tl.to([positionProxy, rotationProxy], {
      duration: 0.3,
      opacity: 0.5,
      xPercent: -25,
      yPercent: 25,
      x: 0.4,
      y: 6.1,
      z: 0.5,
      ease: "power2.out",
      onUpdate: () => {
        if (containerRef.current) {
          gsap.set(containerRef.current, {
            opacity: positionProxy.opacity,
            xPercent: positionProxy.xPercent,
            yPercent: positionProxy.yPercent,
          });
        }
        setRotation([rotationProxy.x, rotationProxy.y, rotationProxy.z]);
      },
    })
      .to([positionProxy, rotationProxy], {
        duration: 0.4,
        opacity: 1,
        xPercent: 40,
        yPercent: 0,
        x: -0.7,
        y: 0,
        z: 0,
        ease: "power2.inOut",
        onUpdate: () => {
          if (containerRef.current) {
            gsap.set(containerRef.current, {
              opacity: positionProxy.opacity,
              xPercent: positionProxy.xPercent,
              yPercent: positionProxy.yPercent,
            });
          }
          setRotation([rotationProxy.x, rotationProxy.y, rotationProxy.z]);
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
        onUpdate: () => {
          if (containerRef.current) {
            gsap.set(containerRef.current, {
              opacity: positionProxy.opacity,
              xPercent: positionProxy.xPercent,
              yPercent: positionProxy.yPercent,
            });
          }
          setRotation([rotationProxy.x, rotationProxy.y, rotationProxy.z]);
        },
      });

    // Third scroll section - separate timeline for Win section
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#Win",
          start: "90% center",
          end: "120% center",
          scrub: 1,
          refreshPriority: -1,
        },
      })
      .to([positionProxy, rotationProxy], {
        duration: 1,
        opacity: 1,
        xPercent: 25,
        yPercent: 0,
        x: 0,
        y: -1,
        z: 0,
        ease: "power2.inOut",
        onUpdate: () => {
          if (containerRef.current) {
            gsap.set(containerRef.current, {
              opacity: positionProxy.opacity,
              xPercent: positionProxy.xPercent,
              yPercent: positionProxy.yPercent,
            });
          }
          setRotation([rotationProxy.x, rotationProxy.y, rotationProxy.z]);
        },
      });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed bottom-0 z-50 h-[50vh] w-full">
      <Canvas camera={{ fov: 75 }}>
        <group scale={0.03} rotation={[rotation[0], rotation[1], rotation[2]]}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Environment preset="park" />
          <Float speed={2} rotationIntensity={2} floatIntensity={2}>
            <Robot boxSize={boxSize} />
          </Float>
        </group>
      </Canvas>
    </div>
  );
}
