import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { WorkspaceSection } from "@/components/WorkspaceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
    
    // Set page title
    document.title = "Mudassir Abbas | Full Stack Developer";
    
    // Add scroll revealing animations with improved implementation
    const revealElements = document.querySelectorAll('.animate-on-scroll');
    
    const revealElementOnScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          // Keep observing to ensure visibility is maintained
        }
      });
    };
    
    // Use a more reliable intersection threshold
    const observer = new IntersectionObserver(revealElementOnScroll, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    revealElements.forEach(element => {
      // Reset any potentially existing animation classes
      element.classList.remove('animate-fade-in-up');
      observer.observe(element);
    });
    
    return () => {
      if (revealElements) {
        revealElements.forEach(element => {
          observer.unobserve(element);
        });
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-background dark:text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorkspaceSection />
        <ProjectsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
