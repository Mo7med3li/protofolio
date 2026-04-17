"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: "mmkandeelz74@gmail.com",
    href: "mailto:mmkandeelz74@gmail.com",
    desc: "Best way to reach me",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+201505748872",
    href: "tel:+201505748872",
    desc: "Available on WhatsApp too",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cairo, Egypt",
    href: null,
    desc: "Open to remote worldwide",
  },
];

const SOCIAL_LINKS = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@Mo7med3li",
    href: "https://github.com/Mo7med3li",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Mohamed Ali",
    href: "https://www.linkedin.com/in/mohamed-ali-58363a304/",
  },
];

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submit
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 relative">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-chip mb-4">06 — Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
            Let's work <span className="gradient-text">together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a project
            in mind, a question, or just want to say hi — my inbox is always
            open! 👋
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* ── Left: Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {CONTACT_METHODS.map(({ icon: Icon, label, value, href, desc }) => (
              <div
                key={label}
                className="glass-card p-5 flex items-start gap-4 hover:border-primary/30 transition-all hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-foreground">
                      {value}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="glass-card p-5 space-y-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Find me online
              </p>
              {SOCIAL_LINKS.map(({ icon: Icon, label, handle, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/60 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg glass-card flex items-center justify-center">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {label}
                    </p>
                    <p className="text-xs text-muted-foreground">{handle}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="glass-card p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-semibold text-emerald-500">
                  Currently Available
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Open to full-time positions, freelance projects, and exciting
                collaborations. Typically respond within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* ── Right: Contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-sm">
                    Thanks for reaching out! I'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        message: "",
                        subject: "",
                      });
                    }}
                    className="text-sm text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      Send a Message
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      All fields are required.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Mohamed Ali"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, name: e.target.value }))
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/30 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="[EMAIL_ADDRESS]"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, email: e.target.value }))
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/30 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-subject"
                      className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      placeholder="Job opportunity / Project collaboration / ..."
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, subject: e.target.value }))
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/30 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/30 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-8 border-t border-border/50"
        >
          <p className="text-muted-foreground text-sm">
            Designed &amp; built with ❤️ by{" "}
            <span className="text-primary font-medium">Mohamed Ali Qandil</span>
          </p>
          <p className="text-muted-foreground/60 text-xs mt-1">
            © {new Date().getFullYear()} · All rights reserved
          </p>
        </motion.div>
      </div>
    </section>
  );
}
