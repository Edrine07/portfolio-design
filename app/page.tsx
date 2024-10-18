"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ArrowDown } from "lucide-react";
import Link from "next/link";
import About from "@/components/sections/About";
import Project from "@/components/sections/Project";
import Footer from "@/components/sections/Footer";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Work");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-200">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "" : ""
        }`}
      >
        <div className="container mx-auto px-2 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/50 text-gray-100 flex items-center justify-center font-bold text-sm rounded-md">
              ED
            </div>
            <div>
              <h1 className="text-md font-medium">Edrine Hagosojos</h1>
              <p className="text-xs text-gray-400">Developer & Designer</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="border border-gray-100/40 backdrop-blur-sm rounded-full p-1">
              <button
                className={`px-6 py-2 rounded-full ${
                  activeTab === "Work"
                    ? "bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/50 text-gray-100 font-semibold"
                    : "text-gray-200"
                }`}
                onClick={() => setActiveTab("Work")}
              >
                Home
              </button>
              <button
                className={`px-6 py-2 rounded-full ${
                  activeTab === "Info"
                    ? "bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/50 text-gray-100 font-semibold"
                    : "text-gray-200"
                }`}
                onClick={() => setActiveTab("Info")}
              >
                About
              </button>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="https://www.linkedin.com/in/edrine-hagosojos/"
              className="hidden md:flex items-center space-x-1 text-sm hover:text-zinc-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <ExternalLink size={14} />
            </Link>
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/13CYSzhVn9Fa_z-tiS25hOx-gHYxbKL8b/view?usp=sharing/"
              className="hidden md:flex items-center space-x-1 text-sm hover:text-zinc-400"
            >
              <span>Resume</span>
              <ExternalLink size={14} />
            </Link>
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100/20 backdrop-blur-sm text-gray-200 border border-gray-50/50 focus:outline-none focus:ring-1 focus:ring-gray-50/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <span className="text-2xl font-semibold">@</span>
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <nav className="flex flex-col items-center py-4 space-y-4">
              <div className="border border-gray-100/40 backdrop-blur-sm rounded-full p-1 w-48 flex justify-center">
                <button
                  className={`px-4 py-1 rounded-full ${
                    activeTab === "Work"
                      ? "bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/50 text-gray-100 font-semibold"
                      : "text-gray-200"
                  }`}
                  onClick={() => {
                    setActiveTab("Work");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Home
                </button>
                <button
                  className={`px-4 py-1 rounded-full ${
                    activeTab === "Info"
                      ? "bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/50 text-gray-100 font-semibold"
                      : "text-gray-200"
                  }`}
                  onClick={() => {
                    setActiveTab("Info");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  About
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activeTab === "Work" && (
          <motion.div
            key="work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <main className="pt-48 pb-24 px-4">
              <div className="container mx-auto max-w-4xl">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-center"
                >
                  I craft products,
                  <br />
                  interactions &{" "}
                  <span className="bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text">
                    stories
                  </span>
                  .
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg sm:text-xl text-gray-400 mb-12 text-center"
                >
                  <p>Software Developer & UI/UX Designer.</p>
                  <p className="text-gray-500 pb-5">
                    Based in the Phillipines.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex justify-center"
                >
                  <ArrowDown size={32} className="animate-bounce" />
                </motion.div>
                <div className="lg:mt-48 mt-32">
                  <div className="">
                    <Project />
                  </div>
                </div>
                <div className="pt-12">
                  <Footer />
                </div>
              </div>
            </main>
          </motion.div>
        )}

        {activeTab === "Info" && (
          <motion.div
            key="info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <main className="pt-32 pb-24 px-4">
              <About />
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
