
import { useEffect, useRef } from 'react';
import { 
  Code, 
  Database, 
  Layout, 
  Server, 
  Cloud,
  Lock,
  Smartphone,
  BarChart,
  Search,
  Zap,
  GitBranch,
  Terminal
} from 'lucide-react';
import { cn } from "@/lib/utils";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function SkillCard({ icon, title, description, delay = 0 }: SkillCardProps) {
  return (
    <div 
      className="glass-card p-6 transition-all duration-300 hover:shadow-glow hover:translate-y-[-2px] opacity-0 animate-on-scroll"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-tech-accent/10 text-tech-accent mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-foreground/70">{description}</p>
    </div>
  );
}

export function SkillsSection() {
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
  
  const skills = [
    {
      icon: <Layout size={20} />,
      title: "Frontend Development",
      description: "Building responsive UIs with React, Next.js, and modern CSS frameworks like Tailwind."
    },
    {
      icon: <Server size={20} />,
      title: "Backend Development",
      description: "Creating scalable server applications with Node.js, Express, and REST/GraphQL APIs."
    },
    {
      icon: <Database size={20} />,
      title: "Database Management",
      description: "Designing efficient database schemas and optimizing queries in MongoDB and PostgreSQL."
    },
    {
      icon: <Cloud size={20} />,
      title: "Cloud Services",
      description: "Deploying and managing applications using AWS, Azure, or Google Cloud Platform."
    },
    {
      icon: <Code size={20} />,
      title: "JavaScript/TypeScript",
      description: "Proficient in modern JavaScript and TypeScript for building maintainable applications."
    },
    {
      icon: <Lock size={20} />,
      title: "Security & Authentication",
      description: "Implementing robust authentication flows and securing applications against common threats."
    },
    {
      icon: <BarChart size={20} />,
      title: "Performance Optimization",
      description: "Enhancing application speed and efficiency through testing and code improvements."
    },
    {
      icon: <Smartphone size={20} />,
      title: "Responsive Design",
      description: "Creating interfaces that work flawlessly across all device sizes and screen types."
    },
    {
      icon: <GitBranch size={20} />,
      title: "Version Control",
      description: "Managing code with Git, implementing CI/CD pipelines, and collaborative workflows."
    },
    {
      icon: <Search size={20} />,
      title: "Testing & Debugging",
      description: "Writing comprehensive tests and efficiently debugging complex applications."
    },
    {
      icon: <Terminal size={20} />,
      title: "DevOps",
      description: "Setting up deployment pipelines, containerization with Docker, and server management."
    },
    {
      icon: <Zap size={20} />,
      title: "API Development",
      description: "Designing and building REST and GraphQL APIs with proper documentation and testing."
    }
  ];
  
  return (
    <section id="skills" className="section py-24 bg-gradient-to-b from-background/80 to-background" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-tech-accent/10 text-tech-accent mb-3">
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            A comprehensive toolkit of development skills honed through years of building web applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
