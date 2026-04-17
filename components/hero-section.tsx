"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const TITLES = [
  "Frontend Developer",
  "React & Next.js Expert",
  "UI/UX Implementer",
  "TypeScript Enthusiast",
];

const STATS = [
  { label: "Projects Built", value: "6+" },
  { label: "Tech Stack", value: "15+" },
  { label: "Months of XP", value: "18+" },
];

export function HeroSection() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const target = TITLES[titleIdx];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(
        () => setDisplayed(target.slice(0, displayed.length + 1)),
        60,
      );
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIdx]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/20 blur-[100px] dark:bg-primary/15 animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/15 blur-[120px] dark:bg-accent/10 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* ── LEFT: Text ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {/* Status chip */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={item} className="space-y-2">
              <p className="text-muted-foreground text-sm font-mono tracking-widest uppercase">
                👋 Hello, World! I'm
              </p>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
                Mohamed <span className="block gradient-text">Ali Qandil</span>
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div variants={item}>
              <div className="text-2xl md:text-3xl font-semibold text-foreground/80 min-h-[2.5rem] flex items-center gap-1">
                <Sparkles className="h-5 w-5 text-primary shrink-0" />
                <span>{displayed}</span>
                <span className="w-0.5 h-7 bg-primary cursor-blink ml-0.5" />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={item}
              className="text-muted-foreground text-lg leading-relaxed max-w-lg"
            >
              Crafting{" "}
              <span className="text-foreground font-medium">
                fast, accessible
              </span>{" "}
              and{" "}
              <span className="text-foreground font-medium">pixel-perfect</span>{" "}
              web experiences with{" "}
              <span className="text-primary font-medium">React</span> &{" "}
              <span className="text-primary font-medium">Next.js</span>. Turning
              complex problems into elegant UI solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 active:translate-y-0"
              >
                View My Work
                <ArrowDown className="h-4 w-4" />
              </button>

              <a
                href="mailto:mmkandeelz74@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/60 backdrop-blur-sm font-semibold text-sm hover:border-primary/40 hover:bg-primary/5 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="h-4 w-4" />
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
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

          {/* ── RIGHT: Avatar + Stats ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Avatar with spinning ring */}
            <div className="relative">
              {/* Outer spinning ring */}
              <div className="absolute -inset-3 rounded-full avatar-ring opacity-70" />
              <div
                className="absolute -inset-[14px] rounded-full bg-background"
                style={{ zIndex: -1 }}
              />

              {/* Avatar */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl float"
                style={{ zIndex: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-10" />
                <Image
                  src="/images/mohamed-photo.jpg"
                  alt="Mohamed Ali Farag Qandil - Frontend Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Experience badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
                className="absolute -bottom-4 -right-4 glass-card px-3 py-2 shadow-xl"
              >
                <p className="text-xs text-muted-foreground">Experience</p>
                <p className="font-bold text-primary">18+ Months</p>
              </motion.div>

              {/* Tech badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.0, type: "spring", bounce: 0.5 }}
                className="absolute -top-4 -left-4 glass-card px-3 py-2 shadow-xl"
              >
                <p className="text-xs text-muted-foreground">Stack</p>
                <p className="font-bold text-primary">React & Next.js</p>
              </motion.div>
            </div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 w-full max-w-sm lg:max-w-none"
            >
              {STATS.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="glass-card p-4 text-center hover:border-primary/30 transition-all hover:-translate-y-1"
                >
                  <p className="stat-number">{value}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">
                    {label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
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
