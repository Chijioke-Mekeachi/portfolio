import React from "react";
import TypingEffect from "../UI/Typing";
import { themes, useTheme } from "@/context/themeContext";
import Image from "next/image";

const Home = () => {
  const { themeIndex } = useTheme();
  const theme = themes[themeIndex];

  const stack: string[] = [
    "Front End Developer",
    "Full Stack Developer",
    "Backend Developer",
    "Ethical Hacker",
    "Penetration Tester",
  ];

  const name: string = "Chijoke Mekelachi";

  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-12 w-full min-h-screen gap-10 bg-gradient-to-b from-black/95 via-black/90 to-black/95`}
    >
      {/* Left Section */}
      <div
        className={`flex flex-col ${theme.surface} rounded-2xl p-8 md:p-12 w-full md:w-1/2 space-y-6 border border-white/10`}
      >
        <p
          className={`text-3xl md:text-5xl font-bold tracking-wide ${theme.textPrimaryColor}`}
        >
          {name}
        </p>

        <div className="text-lg md:text-2xl font-medium">
          <TypingEffect words={stack} />
        </div>

        <p
          className={`text-base md:text-xl ${theme.textSecondaryColor} leading-relaxed`}
        >
          I build modern, SEO-friendly applications and websites with
          cutting-edge frameworks. My focus is on performance, scalability, and
          security.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center w-full md:w-1/2">
        <div className="relative">
          <Image
            src="/Profile.jpeg"
            alt="my photo"
            width={250}
            height={250}
            className="rounded-full object-cover shadow-xl shadow-black/40 border-4 border-white/10"
          />
          {/* Accent Ring */}
          <span className="absolute inset-0 rounded-full border-2 border-cyan-400/40 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Home;
