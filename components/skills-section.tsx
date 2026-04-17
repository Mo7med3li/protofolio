"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend Core",
    color: "from-violet-500 to-purple-600",
    icon: "⚛️",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 95 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5 / CSS3", level: 100 },
    ],
  },
  {
    id: "styling",
    label: "UI & Styling",
    color: "from-pink-500 to-rose-500",
    icon: "🎨",
    skills: [
      { name: "Tailwind CSS", level: 100 },
      { name: "Shadcn/UI", level: 95 },
      { name: "Ant Design", level: 80 },
      { name: "Material-UI (MUI)", level: 80 },
      { name: "Bootstrap", level: 90 },
      { name: "Responsive Design", level: 100 },
    ],
  },
  {
    id: "state",
    label: "State & Data",
    color: "from-sky-500 to-cyan-500",
    icon: "🔄",
    skills: [
      { name: "TanStack Query", level: 95 },
      { name: "Redux Toolkit", level: 85 },
      { name: "Context API", level: 90 },
      { name: "React Hook Form", level: 90 },
      { name: "Formik", level: 90 },
      { name: "TanStack Form", level: 95 },
      { name: "Zod / Yup", level: 95 },
    ],
  },
  {
    id: "auth",
    label: "Auth & I18n",
    color: "from-emerald-500 to-teal-500",
    icon: "🔐",
    skills: [
      { name: "NextAuth.js", level: 90 },
      { name: "Next-Intl", level: 90 },
      { name: "React-intl", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "Axios", level: 90 },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    color: "from-orange-500 to-amber-500",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "GitHub Actions", level: 90 },
      { name: "Vercel", level: 90 },
      { name: "Figma", level: 90 },
      { name: "Jira / Slack / ClickUp", level: 90 },
    ],
  },
];

const ALL_PILLS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Shadcn UI",
  "MUI",
  "Ant Design",
  "Bootstrap",
  "Redux Toolkit",
  "Context API",
  "Zustand",
  "TanStack Query",
  "React Hook Form",
  "TanStack Form",
  "Formik",
  "Zod",
  "Yup",
  "NextAuth.js",
  "Next-Intl",
  "React-intl",
  "RESTful APIs",
  "Axios",
  "Git",
  "GitHub",
  "GitHub Actions",
  "Chrome DevTools",
  "Vercel",
  "Figma",
  "Jira",
  "ClickUp",
  "Slack",
  "Postman",
  "Api Dog",
  "Node.js (Learning)",
  "Express.js (Learning)",
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend");
  const active = SKILL_CATEGORIES.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="py-28 relative">
      {/* subtle section bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-chip mb-4">02 — Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
            My technical <span className="gradient-text">toolkit</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Technologies and tools I use to build world-class web experiences.
          </p>
        </motion.div>

        {/* Tabs + proficiency panel */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Tab selector */}
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
                <span className="text-xl">{cat.icon}</span>
                <span className="font-semibold text-sm">{cat.label}</span>
                {activeTab === cat.id && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shrink-0 hidden lg:block" />
                )}
              </button>
            ))}
          </motion.div>

          {/* Proficiency bars */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3 glass-card p-6 md:p-8 space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{active.icon}</span>
              <div>
                <h3 className="font-bold text-foreground">{active.label}</h3>
                <p className="text-xs text-muted-foreground">
                  {active.skills.length} technologies
                </p>
              </div>
            </div>

            {active.skills.map(({ name, level }, i) => (
              <div key={name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">
                    {name}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {level}%
                  </span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{
                      duration: 1,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* All skills cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8"
        >
          <h3 className="text-base font-bold text-foreground mb-6 text-center">
            Complete Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {ALL_PILLS.map((skill, i) => (
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
