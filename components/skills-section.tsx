"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "⚛️",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "PWA",
    ],
  },
  {
    id: "styling",
    label: "UI & Styling",
    icon: "🎨",
    skills: [
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI",
      "Ant Design",
      "Bootstrap",
    ],
  },
  {
    id: "state",
    label: "State & Forms",
    icon: "🔄",
    skills: [
      "TanStack Query",
      "Redux Toolkit",
      "Zustand",
      "Context API",
      "TanStack Form",
      "React Hook Form",
      "Formik",
      "Zod",
      "Yup",
    ],
  },
  {
    id: "apis",
    label: "APIs, Auth & Backend",
    icon: "🔐",
    skills: [
      "REST APIs",
      "Axios",
      "NextAuth.js",
      "JWT",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "next-intl",
      "react-intl",
    ],
  },
  {
    id: "tools",
    label: "Tools & Quality",
    icon: "🛠️",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Vercel",
      "VS Code",
      "Cursor",
      "Jira",
      "ClickUp",
      "Core Web Vitals",
      "Lighthouse",
      "Chrome DevTools",
      "React DevTools",
    ],
  },
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend");
  const active = SKILL_CATEGORIES.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-chip mb-4">02 — Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
            Technical <span className="gradient-text">toolkit</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Technologies I use in production — grouped by how I actually work,
            not fake proficiency bars.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
          >
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all whitespace-nowrap min-w-max lg:min-w-0 lg:w-full
                  ${
                    activeTab === cat.id
                      ? "glass-card border-primary/40 shadow-lg shadow-primary/10 text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
              >
                <span className="text-xl" aria-hidden>
                  {cat.icon}
                </span>
                <span className="font-semibold text-sm">{cat.label}</span>
                {activeTab === cat.id && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shrink-0 hidden lg:block" />
                )}
              </button>
            ))}
          </motion.div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-3 glass-card p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl" aria-hidden>
                {active.icon}
              </span>
              <div>
                <h3 className="font-bold text-foreground">{active.label}</h3>
                <p className="text-xs text-muted-foreground">
                  Used in shipped projects & production work
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {active.skills.map((name, i) => (
                <motion.span
                  key={name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03, duration: 0.25 }}
                  className="skill-pill"
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8"
        >
          <h3 className="text-base font-bold text-foreground mb-2 text-center">
            Also comfortable with
          </h3>
          <p className="text-xs text-muted-foreground text-center mb-6">
            CS foundations: Data Structures, Algorithms, C++, SQL
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "TanStack Query",
              "NextAuth.js",
              "Zod",
              "Tailwind CSS",
              "Shadcn UI",
              "GitHub Actions",
              "Vercel",
            ].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, duration: 0.3 }}
                className="skill-pill"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
