"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const skills = [
  { name: "React", icon: "/react.svg", color: "from-sky-400 to-cyan-500" },
  { name: "Next.js", icon: "/nextjs.svg", color: "from-gray-800 to-gray-600" },
  { name: "Node.js", icon: "/nodejs.svg", color: "from-green-500 to-emerald-600" },
  { name: "TailwindCSS", icon: "/tailwind.svg", color: "from-sky-500 to-blue-500" },
  { name: "Supabase", icon: "/supabase.svg", color: "from-emerald-500 to-green-600" },
  { name: "MongoDB", icon: "/mongodb.svg", color: "from-green-700 to-lime-500" },
  { name: "Python", icon: "/python.svg", color: "from-yellow-400 to-blue-500" },
  { name: "C++", icon: "/icons8-c++-144.svg", color: "from-blue-600 to-cyan-600" },
  { name: "Ethical Hacking", icon: "/cyberseec.svg", color: "from-fuchsia-500 to-purple-600" },
];

const StackSection = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % skills.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + skills.length) % skills.length);

  const prevIndex = (index - 1 + skills.length) % skills.length;
  const nextIndex = (index + 1) % skills.length;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden px-4">
      <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-14 drop-shadow-lg">
        My Tech Stack
      </h2>

      <div className="relative flex items-center justify-center w-full max-w-6xl h-[500px]">
        {/* Previous Card */}
        <motion.div
          key={`prev-${index}`}
          className="absolute left-6 w-56 h-80 rounded-2xl flex flex-col items-center justify-center backdrop-blur-md bg-white/5 border border-white/10 text-white opacity-60 scale-90 shadow-lg"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 0.6, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
        >
          <img src={skills[prevIndex].icon} alt="" className="w-16 h-16 mb-4" />
          <p className="text-lg">{skills[prevIndex].name}</p>
        </motion.div>

        {/* Active Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={skills[index].name}
            className={`absolute w-[320px] md:w-[420px] h-[460px] rounded-3xl flex flex-col items-center justify-center text-white shadow-2xl bg-gradient-to-tr ${skills[index].color} relative`}
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -40 }}
            transition={{ duration: 0.5 }}
          >
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-3xl border-4 border-cyan-400/40 blur-sm animate-pulse"></div>

            <img
              src={skills[index].icon}
              alt={skills[index].name}
              className="w-28 h-28 mb-6 drop-shadow-xl"
            />
            <p className="text-3xl font-bold tracking-wide">{skills[index].name}</p>
          </motion.div>
        </AnimatePresence>

        {/* Next Card */}
        <motion.div
          key={`next-${index}`}
          className="absolute right-6 w-56 h-80 rounded-2xl flex flex-col items-center justify-center backdrop-blur-md bg-white/5 border border-white/10 text-white opacity-60 scale-90 shadow-lg"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 0.6, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
        >
          <img src={skills[nextIndex].icon} alt="" className="w-16 h-16 mb-4" />
          <p className="text-lg">{skills[nextIndex].name}</p>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex gap-8 mt-16">
        <button
          onClick={handlePrev}
          className="p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all shadow-lg"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={handleNext}
          className="p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all shadow-lg"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default StackSection;
