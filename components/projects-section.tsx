"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Star } from "lucide-react";
import Image from "next/image";

type Project = {
  featured: boolean;
  title: string;
  description: string;
  outcome: string;
  tech: string[];
  codeLink: string;
  demoLink: string;
  highlight: string;
  image?: string;
  backendLink?: string;
  apiLink?: string;
};

const PROJECTS: Project[] = [
  {
    featured: true,
    title: "Saraha — Anonymous Messaging",
    description:
      "Full-stack anonymous messaging app (Sarahah-style). Users share a public link; anyone can send honest messages with optional images. Logged-in senders can reveal identity so recipients can reply. Shipped both the Next.js client and an Express REST API with JWT, email OTP, Google login, and MongoDB.",
    outcome:
      "Deployed end-to-end product: infinite-scroll inbox, share links, anonymous/identified send, replies, and admin account controls.",
    tech: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "NextAuth",
      "Zod",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    codeLink: "https://github.com/Mo7med3li/saraha-web",
    backendLink: "https://github.com/Mo7med3li/saraha-app",
    demoLink: "https://saraha-web.vercel.app",
    apiLink: "https://saraha-app-teal-sigma.vercel.app/api-docs",
    highlight: "Full-Stack",
    image: "/images/projects/saraha.png",
  },
  {
    featured: true,
    title: "Flower App — Online Store",
    description:
      "E-commerce store with role-based auth, type-safe multi-step forms, and next-intl localization across 10+ pages. Built for performance and accessibility with a Shadcn/UI system.",
    outcome:
      "2 user roles, Zod-validated forms, multi-language UI, and a responsive storefront ready for real catalog flows.",
    tech: [
      "Next.js",
      "TypeScript",
      "NextAuth",
      "Shadcn/UI",
      "Zod",
      "next-intl",
    ],
    codeLink: "https://github.com/Mo7med3li/flower-app",
    demoLink: "https://flower-app-theta.vercel.app",
    highlight: "E-Commerce",
    image: "/images/projects/flower-app.png",
  },
  {
    featured: true,
    title: "Online Exam",
    description:
      "Secure examination portal with session-based access control, protected routes, and reliable form handling — localized with next-intl.",
    outcome:
      "Student/admin roles and protected exam flows with type-safe validation.",
    tech: ["Next.js", "TypeScript", "NextAuth", "next-intl"],
    codeLink: "https://github.com/Mo7med3li/ExamApp",
    demoLink: "https://exam-app-beryl.vercel.app/",
    highlight: "EdTech",
    image: "/images/projects/online-exam.png",
  },
  {
    featured: false,
    title: "Task Management",
    description:
      "Full-stack project management dashboard with JWT auth, Prisma ORM, and four CRUD modules under a Shadcn UI design system.",
    outcome: "4 CRUD modules with authenticated access and a responsive admin UI.",
    tech: ["Next.js", "Prisma", "Tailwind", "Shadcn", "JWT"],
    codeLink: "https://github.com/Mo7med3li/Task-management",
    demoLink: "https://fullstack-next-js-xvkm.vercel.app/home",
    highlight: "Full-Stack",
  },
  {
    featured: false,
    title: "Fitness App",
    description:
      "Fitness product with multilingual UI, secure authentication, and 5+ type-safe forms — built in Agile collaboration.",
    outcome: "2 languages, auth, and form-heavy flows synced with React Query.",
    tech: ["React", "TypeScript", "Shadcn UI", "React Query", "react-intl"],
    codeLink: "https://github.com/Mo7med3li/fitness-app",
    demoLink: "https://fitness-gym-app-beryl.vercel.app/",
    highlight: "SaaS",
  },
  {
    featured: false,
    title: "Fresh-Cart",
    description:
      "Client-side e-commerce with Context API cart state, Axios API integration, and Formik/Yup validation across 20+ product listings.",
    outcome: "Responsive catalog and cart flows with validated checkout forms.",
    tech: ["React", "Tailwind", "Formik", "Yup", "Context API"],
    codeLink: "https://github.com/Mo7med3li/e-commerce",
    demoLink: "https://e-commerce-two-gilt.vercel.app/",
    highlight: "E-Commerce",
  },
];

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex md:flex-col gap-3 shrink-0 flex-wrap">
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
        {project.backendLink ? "Frontend" : "Source"}
      </a>
      {project.backendLink && (
        <a
          href={project.backendLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border glass-card text-sm font-medium hover:border-primary/40 transition-all hover:-translate-y-0.5"
        >
          <Github className="h-4 w-4" />
          Backend
        </a>
      )}
      {project.apiLink && (
        <a
          href={project.apiLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border glass-card text-sm font-medium hover:border-primary/40 transition-all hover:-translate-y-0.5"
        >
          <ExternalLink className="h-4 w-4" />
          API Docs
        </a>
      )}
    </div>
  );
}

export function ProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-chip mb-4">03 — Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
            Things I&apos;ve <span className="gradient-text">built</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Selected work with live demos — problem, stack, and what shipped.
          </p>
        </motion.div>

        <div className="space-y-8 mb-10">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass-card overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {project.image && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[16/9] bg-muted/40 border-b border-border/50 overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1280px) 100vw, 1100px"
                  />
                </a>
              )}

              <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1 space-y-4">
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

                  <p className="text-sm text-foreground/90 leading-relaxed border-l-2 border-primary/40 pl-3">
                    <span className="font-semibold text-foreground">
                      Outcome:{" "}
                    </span>
                    {project.outcome}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-pill text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <ProjectLinks project={project} />
              </div>
            </motion.div>
          ))}
        </div>

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
