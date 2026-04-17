"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Star } from "lucide-react";

const PROJECTS = [
  {
    featured: false,
    title: "Flower App",
    description:
      "Full-stack e-commerce platform with internationalization support, secure authentication via NextAuth, multi-step forms with Zod validation, and a polished Shadcn/UI component system. Built with performance and accessibility in mind and with agile methodology.",
    tech: [
      "Next.js",
      "TypeScript",
      "NextAuth",
      "Shadcn/UI",
      "Zod",
      "Next-Intl",
    ],
    codeLink: "https://github.com/Mo7med3li/flower-app",
    demoLink: "https://flower-app-theta.vercel.app",
    highlight: "Full-Stack",
  },
  {
    featured: true,
    title: "Fresh-Cart",
    description:
      "Feature-rich e-commerce platform leveraging TanStack Query for server state, Formik + Yup for form management, and Context API for cart state. Fully responsive and performant.",
    tech: ["React", "Tailwind", "Formik", "TanStack Query", "Context API"],
    codeLink: "https://github.com/Mo7med3li/e-commerce",
    demoLink: "https://e-commerce-two-gilt.vercel.app/",
    highlight: "E-Commerce",
  },
  {
    featured: true,
    title: "Online Exam",
    description:
      "Secure examination platform with two user roles (student/admin), 7+ protected routes, real-time validation, and a seamless i18n experience via Next-Intl.",
    tech: ["Next.js", "TypeScript", "NextAuth", "Next-intl"],
    codeLink: "https://github.com/Mo7med3li/ExamApp",
    demoLink: "https://exam-app-beryl.vercel.app/",
    highlight: "EdTech",
  },
  {
    featured: true,
    title: "Fitness App",
    description:
      "Gym management SaaS with authentication, multi-language support, advanced form handling, and React Query for efficient API data synchronization.",
    tech: ["React", "TypeScript", "Shadcn UI", "React Query", "React-intl"],
    codeLink: "https://github.com/Mo7med3li/fitness-app",
    demoLink: "https://fitness-gym-app-beryl.vercel.app/",
    highlight: "SaaS",
  },
  {
    featured: false,
    title: "Task Management",
    description:
      "Fullstack project management dashboard with JWT authentication, Prisma ORM for database operations, and a polished Shadcn UI design system.",
    tech: ["Next.js", "Prisma", "Tailwind", "Shadcn", "JWT"],
    codeLink: "https://github.com/Mo7med3li/Task-management",
    demoLink: "https://fullstack-next-js-xvkm.vercel.app/home",
    highlight: "Full-Stack",
  },
];

export function ProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 relative">
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
          <span className="section-chip mb-4">03 — Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A selection of projects that demonstrate my ability to ship
            production-quality software.
          </p>
        </motion.div>

        {/* Featured projects (large cards) */}
        <div className="space-y-8 mb-10">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass-card p-8 md:p-10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1 space-y-4">
                  {/* Title row */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="tech-tag">{project.highlight}</span>
                    <div className="flex items-center gap-1 text-primary">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span className="text-xs font-semibold">
                        Featured Project
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-pill text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex md:flex-col gap-3 shrink-0">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border glass-card text-sm font-medium hover:border-primary/40 transition-all hover:-translate-y-0.5"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects (small grid) */}
        <div className="grid md:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card p-6 flex flex-col hover:border-primary/30 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Folder className="h-5 w-5 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Source code"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <span className="tech-tag w-fit mb-3">{project.highlight}</span>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-xs font-mono text-primary/70">
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs font-mono text-muted-foreground">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/Mo7med3li"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border glass-card text-sm font-medium hover:border-primary/40 hover:text-primary transition-all hover:-translate-y-0.5"
          >
            <Github className="h-4 w-4" />
            View all projects on GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
