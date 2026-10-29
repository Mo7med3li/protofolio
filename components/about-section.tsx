"use client";

import { motion, type Variants } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Layers,
  Users,
  Code2,
  Server,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Layers,
    label: "Component systems",
    desc: "Reusable UI built for consistency across modules",
  },
  {
    icon: Users,
    label: "Agile delivery",
    desc: "Scrum, Jira/ClickUp, reviews with backend & QA",
  },
  {
    icon: Code2,
    label: "Type-safe frontend",
    desc: "React, Next.js, TypeScript, Zod & TanStack forms",
  },
  {
    icon: Server,
    label: "Full-stack shipping",
    desc: "Node.js, Express, MongoDB — Saraha end to end",
  },
];

const CONTACTS = [
  { icon: MapPin, label: "Cairo, Egypt" },
  {
    icon: Mail,
    label: "mmkandeelz74@gmail.com",
    href: "mailto:mmkandeelz74@gmail.com",
  },
  {
    icon: Phone,
    label: "+20 150 574 8872",
    href: "tel:+201505748872",
  },
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-chip mb-4">01 — About</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
            Building software teams can{" "}
            <span className="gradient-text">maintain</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Frontend developer focused on production delivery, clear interfaces,
            and code that survives the next sprint.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
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
                I&apos;m{" "}
                <span className="font-semibold text-foreground">
                  Mohamed Ali Farag Qandil
                </span>
                , a Frontend Developer in Cairo building production web apps
                with{" "}
                <span className="text-primary font-medium">
                  React.js, Next.js, and TypeScript
                </span>
                . I ship responsive interfaces, reusable component systems, and
                type-safe forms, and integrate REST APIs on Agile teams.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At Blue Ribbon I develop and maintain features from staging to
                release with backend and QA. I&apos;ve also delivered a
                full-stack product (Saraha) with Node.js, Express.js, and
                MongoDB, and use AI-assisted tools (Cursor, Claude) with careful
                human review.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I hold a{" "}
                <span className="font-medium text-foreground">
                  B.Sc. in Computer Science
                </span>{" "}
                from Menoufia University (July 2025), with a foundation in
                algorithms, OOP, DBMS, and software engineering.
              </p>
            </div>

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

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6 space-y-5">
              <h3 className="text-base font-bold text-foreground">
                Contact Information
              </h3>
              <div className="space-y-4">
                {CONTACTS.map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-3">
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

            <div className="glass-card p-6 space-y-5">
              <h3 className="text-base font-bold text-foreground">Languages</h3>
              {[
                { lang: "Arabic", level: "Native" },
                { lang: "English", level: "Upper-Intermediate" },
              ].map(({ lang, level }) => (
                <div
                  key={lang}
                  className="flex justify-between items-center gap-3"
                >
                  <span className="text-sm font-medium text-foreground">
                    {lang}
                  </span>
                  <span className="text-xs text-muted-foreground">{level}</span>
                </div>
              ))}
            </div>

            <div className="glass-card p-6">
              <h3 className="text-base font-bold text-foreground mb-4">
                Quick Facts
              </h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {[
                  "B.Sc. Computer Science — Menoufia University (July 2025)",
                  "Based in Cairo, Egypt · open to remote",
                  "Frontend Developer @ Blue Ribbon",
                  "Full-stack: Node.js, Express, MongoDB",
                  "Quality focus: Core Web Vitals & Lighthouse",
                ].map((fact) => (
                  <li key={fact} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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
