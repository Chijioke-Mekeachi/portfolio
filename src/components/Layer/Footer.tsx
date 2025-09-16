"use client";

import React, { useState } from "react";
import { useTheme, themes } from "@/context/themeContext";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const FooterWithContact = () => {
  const { themeIndex } = useTheme();
  const theme = themes[themeIndex];

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks, ${form.name}! Your message has been sent.`);
    setForm({ name: "", email: "", message: "" });
  };

  const navLinks = ["Home", "About", "Skills", "Portfolio", "Contact"];

  return (
    <footer className={`${theme.surface} w-full pt-16 px-6 md:px-20`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Brand / Links */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className={`text-2xl md:text-3xl font-bold ${theme.textPrimaryColor}`}>
              Chijioke Mekelachi
            </h1>
            <p className={`${theme.textSecondaryColor} text-sm mt-1`}>
              Building modern, cutting-edge web & mobile applications.
            </p>
          </div>

          

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/chijioke-mekeachi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/mekelachi-chijioke"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/CMekelachi85842"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:mekelachichijioke@gmail.com"
              className="hover:text-red-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-lg"
          >
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${theme.textPrimaryColor}`}>
              Contact Me
            </h2>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="flex-1 p-4 rounded-xl bg-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="flex-1 p-4 rounded-xl bg-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-4 rounded-2xl bg-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
              required
            />

            <button
              type="submit"
              className="self-end px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl text-white font-bold shadow-lg hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className={`border-t mt-12 pt-6 ${theme.textSecondaryColor} opacity-40`} />

      {/* Copyright */}
      <p className={`text-sm text-center mt-4 ${theme.textSecondaryColor}`}>
        &copy; {new Date().getFullYear()} Chijioke Mekelachi. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterWithContact;
