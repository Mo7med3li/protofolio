"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives my
            passion for frontend development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Professional Summary
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Software Developer specialized in frontend development, skilled in
              building fast, responsive, and accessible web applications with
              React.js and Next.js. Passionate about writing clean, maintainable
              code and applying computer science fundamentals to solve
              real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have experience working in collaborative, Agile environments
              utilizing Scrum and Jira to deliver projects efficiently.
              Currently, I'm expanding my skills through the Next.js Training
              Program at Elevate Tech. Currently expanding my skills into
              backend development using Node.js and Express.js to become a more
              versatile full-stack developer.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I hold a B.Sc. in Computer Science from Menoufia University,
              Egypt, where I studied algorithms, object-oriented programming,
              database management systems, and software engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Cairo, Egypt</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href="mailto:mmkandeelz74@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      mmkandeelz74@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+201003029886</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Arabic</span>
                    <span className="text-muted-foreground">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span>English</span>
                    <span className="text-muted-foreground">
                      B2 (Upper-Intermediate)
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
