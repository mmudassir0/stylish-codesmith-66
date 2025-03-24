
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
  Terminal,
  Globe,
  Cpu,
  Layers,
  Workflow,
  TestTube,
  Gauge,
  ShieldCheck,
  BrainCircuit,
  Puzzle
} from 'lucide-react';
import { cn } from "@/lib/utils";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
  delay?: number;
}

function SkillCard({ icon, title, description, skills, delay = 0 }: SkillCardProps) {
  return (
    <div 
      className="glass-card p-6 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 opacity-0 animate-on-scroll"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-tech-accent/10 text-tech-accent mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-foreground/70 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-foreground/5 rounded-full">
            {skill}
          </span>
        ))}
      </div>
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
  
  const skillGroups = [
    {
      icon: <Code size={20} />,
      title: "Frontend Development",
      description: "Building responsive, accessible, and performant user interfaces",
      skills: ["React", "Next.js", "TypeScript", "Redux", "TailwindCSS", "Material UI", "Framer Motion", "Jest/RTL"]
    },
    {
      icon: <Server size={20} />,
      title: "Backend Development",
      description: "Creating robust server applications and APIs for modern applications",
      skills: ["Node.js", "Express", "NestJS", "Python/FastAPI", "REST", "GraphQL", "WebSockets", "Microservices"]
    },
    {
      icon: <Database size={20} />,
      title: "Database Engineering",
      description: "Designing and optimizing databases for performance and reliability",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "Mongoose", "SQL", "NoSQL"]
    },
    {
      icon: <Layers size={20} />,
      title: "Architecture & Design",
      description: "Designing scalable system architectures and elegant solutions",
      skills: ["System Design", "Domain-Driven Design", "Design Patterns", "API Design", "Event-Driven", "SOLID", "Clean Architecture"]
    },
    {
      icon: <Cloud size={20} />,
      title: "DevOps & Cloud",
      description: "Deploying and managing applications in cloud environments",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Terraform", "Serverless", "Linux"]
    },
    {
      icon: <Terminal size={20} />,
      title: "Development Tools",
      description: "Leveraging tools and workflows for efficient development",
      skills: ["Git", "Webpack", "Vite", "npm/yarn", "ESLint", "Prettier", "Storybook", "Postman"]
    },
    {
      icon: <TestTube size={20} />,
      title: "Testing & Quality",
      description: "Ensuring reliability and quality through comprehensive testing",
      skills: ["Jest", "React Testing Library", "Cypress", "Playwright", "Mocha", "Chai", "TDD", "Unit/E2E Testing"]
    },
    {
      icon: <Gauge size={20} />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, efficiency, and user experience",
      skills: ["Lazy Loading", "Code Splitting", "Memoization", "Web Vitals", "Lighthouse", "Profiling", "Caching Strategies"]
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Security & Authentication",
      description: "Implementing robust security measures and authentication flows",
      skills: ["JWT", "OAuth", "RBAC", "HTTPS/TLS", "Input Validation", "Auth0", "Firebase Auth", "Security Headers"]
    },
    {
      icon: <Cpu size={20} />,
      title: "State Management",
      description: "Managing application state efficiently across components",
      skills: ["Redux", "Context API", "Zustand", "Recoil", "Jotai", "React Query", "SWR", "RTK Query"]
    },
    {
      icon: <Globe size={20} />,
      title: "API Development",
      description: "Building robust, well-documented, and performant APIs",
      skills: ["REST", "GraphQL", "OpenAPI/Swagger", "API Gateways", "Rate Limiting", "Webhooks", "HATEOAS", "API Versioning"]
    },
    {
      icon: <BrainCircuit size={20} />,
      title: "AI & Machine Learning",
      description: "Integrating AI and ML capabilities into web applications",
      skills: ["TensorFlow.js", "Hugging Face", "OpenAI API", "LangChain", "ChatGPT Integration", "ML Model Deployment", "Vector Databases"]
    },
  ];
  
  return (
    <section id="skills" className="section py-24 bg-gradient-to-b from-background/80 to-background" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-tech-accent/10 text-tech-accent mb-3">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Full Stack Skill Set</h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            A comprehensive toolkit of development skills spanning frontend, backend, and DevOps - refined through years of building production applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillGroups.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              skills={skill.skills}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="mt-16 animate-on-scroll opacity-0">
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Professional Development Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: <Puzzle size={24} className="text-tech-accent" />,
                  title: "Problem Solving",
                  description: "Breaking down complex problems into manageable components with systematic solutions and elegant code."
                },
                {
                  icon: <GitBranch size={24} className="text-tech-blue" />,
                  title: "Clean Code & Best Practices",
                  description: "Writing maintainable, documented code following industry standards and design patterns."
                },
                {
                  icon: <Workflow size={24} className="text-tech-orange" />,
                  title: "Agile Methodology",
                  description: "Working efficiently in teams with sprint planning, daily standups, and iterative development."
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto rounded-full w-14 h-14 flex items-center justify-center bg-tech-accent/10 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
