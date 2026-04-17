"use client";

import { motion, type Variants } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  BookOpen,
  Coffee,
  Target,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Target,
    label: "Frontend Specialist",
    desc: "React & Next.js production development",
  },
  {
    icon: Globe,
    label: "Agile Practitioner",
    desc: "Scrum, Jira, cross-team collaboration",
  },
  {
    icon: BookOpen,
    label: "Lifelong Learner",
    desc: "Continuously expanding to full-stack",
  },
  {
    icon: Coffee,
    label: "Clean Code Advocate",
    desc: "Readable, maintainable, tested code",
  },
];

const CONTACTS = [
  { icon: MapPin, label: "Cairo, Egypt" },
  {
    icon: Mail,
    label: "mmkandeelz74@gmail.com",
    href: "mailto:mmkandeelz74@gmail.com",
  },
  { icon: Phone, label: "+201505748872" },
];

export function AboutSection() {
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-chip mb-4">01 — About</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
            Passionate about{" "}
            <span className="gradient-text">great software</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm a frontend developer who cares deeply about user experience,
            performance, and writing code that teams love to maintain.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* ── Left: Bio ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="glass-card p-8 space-y-5">
              <h3 className="text-xl font-bold text-foreground">
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm{" "}
                <span className="font-semibold text-foreground">
                  Mohamed Ali Farag Qandil
                </span>
                , a Frontend Developer based in Cairo, Egypt, specializing in
                building{" "}
                <span className="text-primary font-medium">
                  fast, responsive, and accessible
                </span>{" "}
                web applications using React.js and Next.js. I'm passionate
                about writing clean, maintainable code and applying computer
                science fundamentals to solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I have hands-on experience working in collaborative, Agile
                environments utilizing Scrum and Jira. I'm currently expanding
                my skill set into backend development with Node.js and
                Express.js to evolve into a full-stack engineer, whilst
                deepening my React ecosystem expertise through the Next.js
                Training Program at{" "}
                <span className="font-medium text-foreground">
                  Elevate Tech
                </span>
                .
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I hold a{" "}
                <span className="font-medium text-foreground">
                  B.Sc. in Computer Science
                </span>{" "}
                from Menoufia University, Egypt — where I built a rigorous
                foundation in algorithms, OOP, database management systems, and
                software engineering principles.
              </p>
            </div>

            {/* Highlight cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {HIGHLIGHTS.map(({ icon: Icon, label, desc }) => (
                <motion.div
                  key={label}
                  variants={cardVariant}
                  className="bento-card group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm text-foreground">
                    {label}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Contact + Languages ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact card */}
            <div className="glass-card p-6 space-y-5">
              <h3 className="text-base font-bold text-foreground">
                Contact Information
              </h3>
              <div className="space-y-4">
                {CONTACTS.map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors truncate"
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        {label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card p-6 space-y-5">
              <h3 className="text-base font-bold text-foreground">Languages</h3>
              {[
                { lang: "Arabic", level: "Native", pct: 100 },
                { lang: "English", level: "B2 — Upper-Intermediate", pct: 75 },
              ].map(({ lang, level, pct }) => (
                <div key={lang} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">
                      {lang}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {level}
                    </span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.4,
                        delay: 0.2,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div className="glass-card p-6">
              <h3 className="text-base font-bold text-foreground mb-4">
                Quick Facts
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "🎓 B.Sc. Computer Science – Menoufia University",
                  "📍 Based in Cairo, Egypt",
                  "💼 Currently @ BlueRibbon Egypt",
                  "🚀 Open to remote opportunities worldwide",
                  "📖 Currently mastering Node.js & Express.js",
                ].map((fact) => (
                  <li key={fact} className="flex items-start gap-2">
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
