"use client";
import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const warningTimeout = setTimeout(() => {
      if (progress < 100) setShowWarning(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(warningTimeout);
  }, [progress]);

  useEffect(() => {
    if (progress >= 100) {
      setFadeOut(true);
      const timeout = setTimeout(() => setVisible(false), 500); // match animation duration
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-80 flex flex-col items-center justify-center bg-black text-white transition-all duration-500 ${
        fadeOut
          ? "opacity-0 scale-90 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      <div className="relative w-[33.6px] h-[33.6px] [perspective:67.2px] mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 w-full h-full bg-yellow origin-left animate-spinner"
            style={{ animationDelay: `${0.15 * (i + 1)}s` }}
          />
        ))}
      </div>
      <p className="text-sm font-mono tracking-wide">{Math.floor(progress)}%</p>
      {showWarning && (
        <p className="text-xs text-red-500 mt-2 font-mono">
          :D اذا طولت المشكل في الانترنت تاعك مشي فينا
        </p>
      )}
    </div>
  );
};

export default Loader;
