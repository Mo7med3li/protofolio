"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Frontend Developer",
    company: "Blue Ribbon",
    type: "Full-time",
    location: "Hybrid",
    period: "Nov 2025 – Present",
    current: true,
    bullets: [
      "Develop and maintain production features in React.js, Next.js, and TypeScript — from staging to release — with backend and QA.",
      "Built 25+ reusable UI components that sped up delivery and kept the interface consistent across modules.",
      "Completed 180+ tasks (features and bug fixes) in production, improving stability and reliability.",
      "Migrated the live panel from Ant Design to Shadcn UI and from Formik to TanStack Form, and adapted it to a new backend.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Shadcn UI", "TanStack Form", "REST APIs"],
  },
  {
    role: "Frontend Intern",
    company: "Elevate Tech",
    type: "Internship",
    location: "Remote",
    period: "Mar 2025 – Nov 2025",
    current: false,
    bullets: [
      "Built 15+ reusable React and Next.js components used across Agile sprint deliverables.",
      "Integrated 15+ REST API endpoints with Axios for data fetching and form submission.",
      "Implemented type-safe forms in TypeScript and localized the UI with next-intl (2 languages).",
      "Took part in 15+ code reviews per sprint, improving quality and reducing merge conflicts.",
    ],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "NextAuth",
      "next-intl",
      "Axios",
      "Tailwind CSS",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-chip mb-4">05 — Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
            Where I&apos;ve <span className="gradient-text">worked</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Production delivery on collaborative teams — measured by what shipped,
            not just what was attended.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-8">
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary via-accent/50 to-transparent hidden md:block" />

            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative md:pl-20"
              >
                <div className="absolute left-5 top-8 hidden md:flex items-center justify-center">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      exp.current
                        ? "border-primary bg-primary/20 shadow-lg shadow-primary/30"
                        : "border-muted-foreground/40 bg-background"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${exp.current ? "bg-primary animate-pulse" : "bg-muted-foreground/40"}`}
                    />
                  </div>
                </div>

                <div className="glass-card p-6 md:p-8 hover:border-primary/30 transition-all hover:-translate-y-1 duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-semibold text-base">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="h-3.5 w-3.5" />
                          {exp.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + j * 0.06 }}
                        className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
