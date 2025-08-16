"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Flower App - Online Flower Store",
    description:
      "Collaborated in an Agile team to build a full-stack store with Next.js/TypeScript. Implemented secure authentication for 2 user roles via NextAuth.js. Developed type-safe forms with React Hook Form/Zod. Built a multi-language UI using next-intl and Shadcn/UI.",
    technologies: [
      "Next.js",
      "TypeScript",
      "NextAuth.js",
      "React Hook Form",
      "Zod",
      "next-intl",
      "Shadcn/UI",
    ],
    codeLink: "https://github.com/Mo7med3li/meals",
    demoLink: "https://meals-psi-one.vercel.app/",
  },
  {
    title: "Fresh-Cart - E-commerce Platform",
    description:
      "Constructed a client-side app with React and React Router DOM. Managed global state with Context API and handled API calls with Axios. Implemented user-friendly forms with validation using Formik and Yup.",
    technologies: [
      "React",
      "React Router DOM",
      "Context API",
      "Axios",
      "Formik",
      "Yup",
    ],
    codeLink: "https://github.com/Mo7med3li/e-commerce",
    demoLink: "https://e-commerce-two-gilt.vercel.app/",
  },
  {
    title: "Online Exam - Authenticated Examination System",
    description:
      "Engineered a secure, type-safe portal in Next.js/TypeScript with 2 user roles and 10+ protected routes. Built reliable forms for exam creation and submission using React Hook Form and Zod.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React Hook Form",
      "Zod",
      "Authentication",
    ],
    codeLink: "https://github.com/Mo7med3li/ExamApp",
    demoLink:
      "https://exam-app-29yi-92tit2m64-mohamed-alis-projects-f1c626db.vercel.app/en/auth/login?callbackUrl=%2F",
  },
  {
    title: "Yummy - Meal Discovery Application",
    description:
      "Developed a dynamic web app using vanilla JavaScript and jQuery to fetch data from a public API. Implemented a real-time search feature and designed a clean, responsive interface with Bootstrap.",
    technologies: ["JavaScript", "jQuery", "Bootstrap", "REST API"],
    codeLink: "#",
    demoLink: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills
            and experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
