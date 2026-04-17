"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Calendar,
  Building2,
  BookOpen,
} from "lucide-react";

const EDUCATION = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "Menoufia University",
    location: "Menoufia, Egypt",
    period: "Graduated",
    type: "University",
    courses: [
      "Algorithms & Data Structures",
      "Problem Solving",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Software Engineering Principles",
      "Computer Networks",
      "Operating Systems",
      "Cloud Computing",
      "Artificial Intelligence",
      "Machine Learning",
      "Web Development",
      "Embedded Systems",
    ],
    icon: GraduationCap,
  },
];

const CERTIFICATIONS = [
  {
    title: "Next.js Training Program",
    issuer: "Elevate Tech",
    period: "2025 March - 2025 October",
    status: "Completed",
    statusColor: "text-primary bg-primary/10 border-primary/20",
    description:
      "Advanced training covering Next.js App Router, server components, performance optimization, and production deployment patterns.",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "Shadcn UI",
      "Next-Intl",
      "Agile",
    ],
    icon: Award,
  },
  {
    title: "Frontend Diploma — React.js",
    issuer: "Route Academy",
    period: "2024",
    status: "Completed",
    statusColor: "text-primary bg-primary/10 border-primary/20",
    description:
      "Comprehensive 6-month intensive program covering React ecosystem, modern JavaScript, REST API integration, and industry best practices.",
    skills: [
      "React.js",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Axios",
    ],
    icon: Award,
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-chip mb-4">04 — Education</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
            Learning & <span className="gradient-text">credentials</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            My academic foundation and professional certifications that shaped
            my engineering mindset.
          </p>
        </motion.div>

        <div className="space-y-10">
          {/* ── University ── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-bold text-foreground">Academic Education</h3>
              <div className="flex-1 h-px bg-border" />
            </div>

            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card p-6 md:p-8 hover:border-primary/30 transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 shadow-lg">
                    <edu.icon className="h-7 w-7 text-primary" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">
                        {edu.degree}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Building2 className="h-3.5 w-3.5" />
                          {edu.institution}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                        <BookOpen className="h-3.5 w-3.5" />
                        Relevant Coursework
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((c) => (
                          <span key={c} className="skill-pill text-xs">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Certifications ── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Award className="h-4 w-4 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">
                Certifications & Training
              </h3>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass-card p-6 flex flex-col hover:border-accent/30 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center shrink-0">
                      <cert.icon className="h-6 w-6 text-accent" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${cert.statusColor}`}
                    >
                      {cert.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-foreground mb-1">
                    {cert.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Building2 className="h-3 w-3" />
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {cert.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <span key={s} className="tech-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
