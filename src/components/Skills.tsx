"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "Next.js", icon: "/icons/next.js.svg" },
        { name: "TypeScript", icon: "/icons/typescript.svg" },
        { name: "TailwindCSS", icon: "/icons/tailwind.svg" },

        { name: "Shadcn UI", icon: "/icons/shadcn.png" },

        { name: "Redux", icon: "/icons/redux.svg" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "NodeJS", icon: "/icons/node.js.svg" },
        { name: "TypeScript", icon: "/icons/typescript.svg" },
        { name: "Express", icon: "/icons/express.png" },
        { name: "Python", icon: "/icons/python.svg" },
        { name: "Flask", icon: "/icons/flask.svg" },
      ],
    },
    {
      title: "Database & ORMs",
      skills: [
  
        { name: "Redis", icon: "/icons/redis.webp" },
        { name: "Prisma", icon: "/icons/prisma.png" },
        { name: "PostgreSQL", icon: "/icons/postgresql.png" },
        { name: "Turso", icon: "/icons/turso.png" },
        { name: "MongoDB", icon: "/icons/mongo.jpg" },
      ],
    },
    {
      title: "Other Tools",
      skills: [
        { name: "Postman", icon: "/icons/Postman.svg" },
        { name: "GitHub", icon: "/icons/github.png" },
        { name: "Docker", icon: "/icons/docker.png" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          My Skills
        </motion.h2>

        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {cat.title}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 justify-center items-center">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 relative mb-2">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
