"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-purple-50 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >
            <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-orange-500 shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt="Akram Hossain Tanveer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                Akram Hossain Tanveer
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300">
              Full Stack Developer & AI Enthusiast
            </p>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              I build modern, responsive web applications with clean code and
              thoughtful design. Passionate about user experience, performance,
              and exploring new technologies like Web3 & AI.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-5 pt-2">
              {[
                {
                  icon: Github,
                  href: "https://github.com/ImTanveerr",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/akram-hossain-tanveer-73266a359/",
                  label: "LinkedIn",
                },
                { icon: Mail, href: "#contact", label: "Contact" },
              ].map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                >
                  <Icon size={24} />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#projects")}
                className="px-8 py-3 bg-gradient-to-r from-orange-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#contact")}
                className="px-8 py-3 border-2 border-orange-600 text-orange-600 dark:text-orange-400 rounded-full font-medium hover:bg-orange-600 hover:text-white dark:hover:bg-orange-600 transition-colors"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/20 rounded-full"
            initial={{
              x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
              y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 800,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
