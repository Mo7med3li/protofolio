"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    title: "B.Sc. in Computer Science",
    institution: "Menoufia University, Egypt",
    status: "Graduated",
    description:
      "Relevant Coursework: Algorithms, Object-Oriented Programming, DBMS, Software Engineering",
    icon: GraduationCap,
  },
];

const certifications = [
  {
    title: "Next.js Training Program",
    institution: "Elevate Tech",
    status: "2025 – Present",
    description:
      "Advanced training in Next.js development and modern web technologies",
    icon: Award,
  },
  {
    title: "Frontend Diploma (React.js)",
    institution: "Route Academy",
    status: "2024",
    description:
      "Comprehensive training in React.js and frontend development best practices",
    icon: Award,
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational background and professional certifications that have
            shaped my development journey.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Education
            </h3>
            <div className="grid gap-6">
              {education.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-1">
                            {item.title}
                          </CardTitle>
                          <p className="text-primary font-medium">
                            {item.institution}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {item.status}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Certifications & Training
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-secondary/10 rounded-lg">
                          <item.icon className="h-6 w-6 text-yellow-500" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-1">
                            {item.title}
                          </CardTitle>
                          <p className=" font-medium text-muted-foreground">
                            {item.institution}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {item.status}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
