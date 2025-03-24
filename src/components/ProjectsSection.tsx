
import { useEffect, useRef } from 'react';
import { 
  Github, 
  ExternalLink, 
  Code, 
  Database, 
  Server, 
  Layout,
  Layers,
  Cpu,
  ShoppingCart,
  MessageSquare,
  LineChart,
  Briefcase,
  Search
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  imageUrl: string;
  repoUrl: string;
  liveUrl?: string;
  delay?: number;
}

function ProjectCard({ 
  title, 
  description, 
  technologies, 
  features,
  imageUrl, 
  repoUrl, 
  liveUrl, 
  delay = 0 
}: ProjectCardProps) {
  return (
    <div 
      className="glass-card overflow-hidden opacity-0 animate-on-scroll transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-52 overflow-hidden">
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
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
          <ul className="text-xs text-foreground/70 space-y-1 list-disc list-inside">
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex gap-3 mt-4">
          <Button asChild variant="outline" size="sm" className="gap-2">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              <span>Code</span>
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
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach(el => {
      // Reset any potentially existing animation classes
      el.classList.remove('animate-fade-in-up');
      observer.observe(el);
    });
    
    return () => {
      if (childElements) {
        childElements?.forEach(el => {
          observer.unobserve(el);
        });
      }
    };
  }, []);
  
  const projects = [
    {
      title: "Modern E-Commerce Platform",
      description: "A comprehensive e-commerce solution with advanced features including real-time inventory management and analytics.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redis", "Stripe", "Docker"],
      features: [
        "JWT authentication with role-based access control",
        "Real-time inventory updates using Socket.io",
        "Payment processing with Stripe",
        "Responsive admin dashboard with sales analytics",
        "Containerized deployment with Docker and CI/CD"
      ],
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      repoUrl: "https://github.com/mudassirabbas",
      liveUrl: "#"
    },
    {
      title: "Agile Project Management System",
      description: "Team collaboration platform with real-time updates, ticket tracking, and advanced reporting.",
      technologies: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "GraphQL", "AWS"],
      features: [
        "Real-time collaboration with WebSockets",
        "Agile sprint planning and burndown charts",
        "File sharing with AWS S3 integration",
        "Time tracking and reporting",
        "CI/CD pipeline with GitHub Actions"
      ],
      imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      repoUrl: "https://github.com/mudassirabbas",
      liveUrl: "#"
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Interactive financial platform with advanced data visualization, expense tracking, and forecasting.",
      technologies: ["React", "Redux Toolkit", "Node.js", "MongoDB", "D3.js", "TailwindCSS"],
      features: [
        "Interactive charts and visualizations with D3.js",
        "Budget planning with AI-assisted forecasting",
        "Bank account integration via Plaid API",
        "Exportable reports in multiple formats",
        "Responsive design for all devices"
      ],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      repoUrl: "https://github.com/mudassirabbas"
    },
    {
      title: "AI Content Generator Platform",
      description: "SaaS platform leveraging LLM models for generating blog posts, social media content, and SEO optimization.",
      technologies: ["Python", "FastAPI", "React", "PostgreSQL", "TensorFlow", "Docker", "Azure"],
      features: [
        "GPT-3.5 integration for content generation",
        "Customizable templates for different content types",
        "Content SEO analysis and recommendations",
        "User subscription management with Stripe",
        "Multi-tenant architecture"
      ],
      imageUrl: "https://images.unsplash.com/photo-1677442135133-e758d4822cbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      repoUrl: "https://github.com/mudassirabbas",
      liveUrl: "#"
    },
    {
      title: "Real-time Communication API",
      description: "Scalable backend service supporting chat, notifications, and activity feeds for social applications.",
      technologies: ["Node.js", "Express", "Socket.io", "MongoDB", "Redis", "Kubernetes", "AWS"],
      features: [
        "WebSocket-based real-time communication",
        "Scalable message queuing with Redis",
        "Comprehensive API documentation with Swagger",
        "Microservices architecture",
        "Load testing and performance optimization"
      ],
      imageUrl: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      repoUrl: "https://github.com/mudassirabbas"
    },
    {
      title: "Cross-platform Fitness App",
      description: "Mobile application for workout tracking, nutrition planning, and progress visualization with social features.",
      technologies: ["React Native", "TypeScript", "Firebase", "GraphQL", "Node.js", "TensorFlow Lite"],
      features: [
        "Cross-platform development for iOS and Android",
        "Exercise recognition with TensorFlow Lite",
        "Offline-first functionality with local storage",
        "Social sharing and challenges",
        "Push notifications with Firebase"
      ],
      imageUrl: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      repoUrl: "https://github.com/mudassirabbas",
      liveUrl: "#"
    }
  ];
  
  return (
    <section id="projects" className="section py-24 bg-gradient-to-b from-background/80 to-background dark:from-background/90 dark:to-background" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-tech-accent/10 text-tech-accent mb-3">
            Full Stack Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            A selection of my most significant full-stack development work, showcasing end-to-end implementation from database design to UI/UX.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              features={project.features}
              imageUrl={project.imageUrl}
              repoUrl={project.repoUrl}
              liveUrl={project.liveUrl}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll opacity-0">
          <p className="text-foreground/70 mb-6">
            These projects represent a portion of my work. View more on my GitHub profile.
          </p>
          <Button asChild variant="outline" className="gap-2">
            <a href="https://github.com/mudassirabbas" target="_blank" rel="noopener noreferrer">
              <Github size={18} />
              <span>View All Projects</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
