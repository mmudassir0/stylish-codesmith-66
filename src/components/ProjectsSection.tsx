
import { useEffect, useRef } from 'react';
import { Github, ExternalLink, Code, Database, Server, Layout } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  repoUrl: string;
  liveUrl?: string;
  delay?: number;
}

function ProjectCard({ 
  title, 
  description, 
  technologies, 
  imageUrl, 
  repoUrl, 
  liveUrl, 
  delay = 0 
}: ProjectCardProps) {
  return (
    <div 
      className="glass-card overflow-hidden opacity-0 animate-on-scroll"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tech-dark-blue/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 hover:scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-foreground/70 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <Badge key={i} variant="outline" className="bg-tech-accent/10 text-tech-accent border-tech-accent/20">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 mt-4">
          <Button asChild variant="outline" size="sm" className="gap-2">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              <span>Repo</span>
            </a>
          </Button>
          
          {liveUrl && (
            <Button asChild size="sm" className="gap-2 bg-tech-accent text-tech-accent-foreground hover:bg-tech-accent/90">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      childElements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution with React, Node.js, and MongoDB. Includes authentication, payments, and admin dashboard.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      repoUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Project Management System",
      description: "Collaborative task management application with real-time updates, team chat, and progress tracking.",
      technologies: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "Socket.io"],
      imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      repoUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Financial Dashboard",
      description: "Interactive financial analytics platform with data visualization, expense tracking, and budget planning tools.",
      technologies: ["React", "Redux", "Express", "D3.js", "Firebase"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      repoUrl: "#"
    },
    {
      title: "AI Content Generator",
      description: "Content creation tool powered by machine learning for generating blog posts, social media content, and marketing copy.",
      technologies: ["Python", "FastAPI", "React", "TensorFlow", "Docker"],
      imageUrl: "https://images.unsplash.com/photo-1677442135133-e758d4822cbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      repoUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Social Network API",
      description: "Robust RESTful API for a social networking application with authentication, user profiles, and activity feeds.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "AWS S3"],
      imageUrl: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      repoUrl: "#"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform mobile application for workout tracking, nutrition planning, and progress visualization.",
      technologies: ["React Native", "Redux", "Firebase", "GraphQL", "Node.js"],
      imageUrl: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      repoUrl: "#",
      liveUrl: "#"
    }
  ];
  
  return (
    <section id="projects" className="section py-24 bg-gradient-to-b from-background/80 to-background dark:from-background/90 dark:to-background" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-tech-accent/10 text-tech-accent mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Recent Projects</h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            A showcase of my technical skills through real-world applications and solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              repoUrl={project.repoUrl}
              liveUrl={project.liveUrl}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
