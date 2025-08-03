"use client";
import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Robot } from "@/public/robot";
import { Float } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
export function Scene() {
  const [boxSize, setBoxSize] = useState(1);
  const animationRef = useRef({ value: 1 });
  useGSAP(() => {
    gsap.to(animationRef.current, {
      value: 1.1,
      duration: 2,
      ease: "back.inOut",
      yoyo: true,
      repeat: -1,
      onUpdate: () => {
        console.log("GSAP animating:", animationRef.current.value);
        setBoxSize(animationRef.current.value);
      },
    });
    gsap.to(".canvas-container", {
      autoAlpha: 0,
      xPercent: -25,
      yPercent: 10,
      ease: "back.inOut",
      scrollTrigger: {
        trigger: "#Who",
        start: "-30% bottom",
        end: "top bottom",
        scrub: 1,
      },
    });

    gsap.to(".canvas-container", {
      autoAlpha: 1,
      duration: 2,
      yPercent: 0,
      xPercent: -25,
      ease: "back.inOut",
      scrollTrigger: {
        trigger: "#Who",
        start: "top 30%",
        end: "20% 30%",
        markers: true,
        scrub: 1,
      },
    });
  });

  return (
    <div className="fixed bottom-0 z-65 h-[50vh] canvas-container w-full">
      <Canvas
        camera={{
          fov: 75,
        }}
      >
        <axesHelper />
        <group scale={0.03} rotation={[-0.7, 1, 0.5]}>
          {/* Basic lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          {/* Environment for realistic lighting */}
          <Environment preset="park" />

          {/* Camera controls */}
          <OrbitControls enablePan enableZoom enableRotate />

          {/* Your model goes here */}
          <Float floatIntensity={3} speed={4} rotationIntensity={2}>
            <Robot boxSize={boxSize} />
          </Float>
        </group>
      </Canvas>
    </div>
  );
}
