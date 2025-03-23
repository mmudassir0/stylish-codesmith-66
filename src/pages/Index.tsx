
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { WorkspaceSection } from "@/components/WorkspaceSection";
import { StyleSection } from "@/components/StyleSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
    
    // Add scroll revealing animations
    const revealElements = document.querySelectorAll('.animate-on-scroll');
    
    const revealElementOnScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          // Don't unobserve - this allows re-animation when revisiting sections
        }
      });
    };
    
    const observer = new IntersectionObserver(revealElementOnScroll, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      revealElements.forEach(element => {
        observer.unobserve(element);
      });
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
        <StyleSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
