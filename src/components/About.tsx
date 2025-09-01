"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

const About = () => {
  const education = {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "United International University",
    year: "2023 – Present",
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I&apos;m Akram Hossain Tanveer, a Computer Science & Engineering
            student and full stack developer passionate about creating modern,
            user-friendly web applications. I love exploring AI, Web3, and
            emerging technologies while working on projects that combine
            creativity and technology.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            🎓 Education
          </h3>

          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow mb-8">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {education.degree}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              {education.institution}
            </p>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {education.year}
            </span>
          </div>

          {/* Download CV Button */}
          <a
            href="/Tanveer CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform"
          >
            <Download className="w-5 h-5" />
            Preview / Download CV
          </a>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
