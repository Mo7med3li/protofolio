import { HeroSection }      from "@/components/hero-section";
import { AboutSection }     from "@/components/about-section";
import { SkillsSection }    from "@/components/skills-section";
import { ProjectsSection }  from "@/components/projects-section";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection }   from "@/components/contact-section";

export default function Home() {
  return (
    <>
      {/* Animated gradient mesh background — fixed, full-screen */}
      <div className="mesh-bg" aria-hidden="true" />

      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
