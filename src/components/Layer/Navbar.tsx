"use client";

import React, { useState } from "react";
import { themes, useTheme } from "@/context/themeContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  title: string;
  link: string;
}

const Navbar = () => {
  const { themeIndex, setThemeIndex } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const NavBarData: NavbarProps[] = [
    { title: "Home", link: "#home" },
    { title: "My Project", link: "#projects" },
    { title: "Tech Stack", link: "#stack" },
    { title: "Contact Me", link: "#footer" },
  ];

  const toggleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between py-4 px-6 ${themes[themeIndex].primaryGradient} backdrop-blur-md`}
    >
      {/* Logo */}
      <div
        className={`font-bold text-xl md:text-2xl font-mono cursor-pointer ${themes[themeIndex].textPrimaryColor}`}
      >
        M-Kali
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6">
        {NavBarData.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className={`font-mono text-sm md:text-base transition-colors duration-200 ${themes[themeIndex].textPrimaryColor} hover:${themes[themeIndex].textSecondaryColor}`}
          >
            {item.title}
          </a>
        ))}

        <button
          className={`ml-4 px-3 py-1 rounded-lg text-sm font-medium ${themes[themeIndex].secondaryGradient} ${themes[themeIndex].textPrimaryColor} hover:scale-105 transition-transform`}
          onClick={toggleTheme}
        >
          {themeIndex === 0 ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${themes[themeIndex].textPrimaryColor}`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-16 left-0 w-full flex flex-col items-center space-y-4 py-6 ${themes[themeIndex].primaryGradient} shadow-lg md:hidden`}
          >
            {NavBarData.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className={`font-mono text-lg transition-colors duration-200 ${themes[themeIndex].textPrimaryColor} hover:${themes[themeIndex].textSecondaryColor}`}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}

            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium ${themes[themeIndex].secondaryGradient} ${themes[themeIndex].textPrimaryColor} hover:scale-105 transition-transform`}
              onClick={toggleTheme}
            >
              {themeIndex === 0 ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
