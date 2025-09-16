"use client";

import React from "react";
import Navbar from "./Layer/Navbar";
import Home from "./Layer/Home";
import Projects from "./Layer/Projects";
import StackSection from "./Layer/StackSection";
import Footer from "./Layer/Footer";

const Main = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Navbar fixed at top */}
      <section className="fixed w-full top-0 left-0 z-50">
        <Navbar />
      </section>

      {/* Home Section */}
      <section
        id="home"
        className="w-full min-h-screen flex justify-center items-center pt-20"
      >
        <Home />
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full px-6 md:px-20 py-16">
        <Projects />
      </section>

      {/* Stack Section */}
      <section id="stack" className="w-full py-16 overflow-x-hidden">
        <StackSection />
      </section>

      {/* Footer */}
      <section id="footer" className="w-full">
        <Footer />
      </section>
    </div>
  );
};

export default Main;
