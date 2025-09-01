"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const project = {
    title: "Parcel Delivery Platform",
    description:
      "A full-stack application to manage deliveries, track parcels in real-time, and maintain customer & sender dashboards. Built with Next.js, Express, MongoDB",
    image: "/images/parcel.png",
    tags: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/ImTanveerr/BondhuCourier-f",
    live: "https://bondhucurrierf.vercel.app",
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Project
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my full-stack development skills in real-world applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Project Image */}
          <div className="relative w-full h-64">
            <Image
              src={project.image}
              alt={project.title}
              fill
              objectFit="cover"
              className="rounded-t-2xl"
            />
          </div>

          {/* Project Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-orange-600 to-purple-600 text-white rounded-lg font-medium shadow hover:shadow-lg transition-shadow duration-300"
              >
                View Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-6 py-3 border border-orange-600 text-orange-600 rounded-lg font-medium hover:bg-orange-600 hover:text-white transition-colors duration-300"
              >
                View Code
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
