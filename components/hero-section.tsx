"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FACTS = [
  { label: "Production tasks shipped", value: "180+" },
  { label: "Reusable UI components", value: "25+" },
  { label: "Stack focus", value: "React / Next" },
];

export function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/15 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-7"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to new opportunities
              </span>
            </motion.div>

            <motion.div variants={item} className="space-y-3">
              <p className="text-muted-foreground text-sm font-mono tracking-widest uppercase">
                Frontend Developer · Cairo, Egypt
              </p>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
                Mohamed{" "}
                <span className="block gradient-text">Ali Qandil</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-foreground/80">
                React.js · Next.js · TypeScript
              </p>
            </motion.div>

            <motion.p
              variants={item}
              className="text-muted-foreground text-lg leading-relaxed max-w-lg"
            >
              I build production web apps with responsive interfaces, reusable
              component systems, and type-safe forms — integrating REST APIs on
              Agile teams. Recently shipped a full-stack product with Node.js,
              Express, and MongoDB.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3">
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                View My Work
                <ArrowDown className="h-4 w-4" />
              </button>

              <Link
                href="/Mohamed Ali Qandil-Front End Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/60 backdrop-blur-sm font-semibold text-sm hover:border-primary/40 hover:bg-primary/5 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Link>

              <a
                href="mailto:mmkandeelz74@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/60 backdrop-blur-sm font-semibold text-sm hover:border-primary/40 hover:bg-primary/5 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4">
              {[
                {
                  href: "https://github.com/Mo7med3li",
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/mohamed-ali-58363a304/",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:mmkandeelz74@gmail.com",
                  icon: Mail,
                  label: "Email",
                },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <span className="w-9 h-9 rounded-lg glass-card flex items-center justify-center group-hover:border-primary/40 transition-all">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium hidden sm:block">
                    {label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-full avatar-ring opacity-60" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border border-border/40">
                <Image
                  src="/images/mohamed-photo.jpg"
                  alt="Mohamed Ali Farag Qandil - Frontend Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="grid grid-cols-3 gap-3 w-full max-w-md"
            >
              {FACTS.map(({ label, value }) => (
                <div
                  key={label}
                  className="glass-card p-4 text-center hover:border-primary/30 transition-all"
                >
                  <p className="stat-number text-lg md:text-xl">{value}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToProjects}
      >
        <span className="text-xs text-muted-foreground font-mono tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/40 flex items-center justify-center"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
