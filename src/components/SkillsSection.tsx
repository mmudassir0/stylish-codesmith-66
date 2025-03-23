
import { useEffect, useRef } from 'react';
import { 
  Brain, 
  Code, 
  Database, 
  Fingerprint, 
  Layers, 
  LineChart, 
  Monitor, 
  Palette, 
  Scissors, 
  Shirt, 
  Sparkles, 
  Zap
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
      icon: <Code size={20} />,
      title: "Frontend Architecture",
      description: "Building elegant, responsive interfaces with React, Vue, and custom frameworks."
    },
    {
      icon: <Database size={20} />,
      title: "Backend Development",
      description: "Creating scalable, secure systems with Node.js, Python, and cloud architecture."
    },
    {
      icon: <Brain size={20} />,
      title: "AI & Machine Learning",
      description: "Implementing intelligent systems and predictive algorithms."
    },
    {
      icon: <Fingerprint size={20} />,
      title: "Blockchain Technology",
      description: "Developing secure, decentralized applications and smart contracts."
    },
    {
      icon: <Shirt size={20} />,
      title: "Fashion Technology",
      description: "Integrating tech into wearables and fashion-forward accessories."
    },
    {
      icon: <Palette size={20} />,
      title: "UX/UI Design",
      description: "Creating intuitive, beautiful user experiences and interfaces."
    },
    {
      icon: <LineChart size={20} />,
      title: "Data Visualization",
      description: "Transforming complex data into clear, actionable insights."
    },
    {
      icon: <Sparkles size={20} />,
      title: "Creative Coding",
      description: "Using code as a medium for artistic expression and experimentation."
    },
    {
      icon: <Layers size={20} />,
      title: "System Architecture",
      description: "Designing robust, scalable technology ecosystems."
    },
    {
      icon: <Monitor size={20} />,
      title: "DevOps & CI/CD",
      description: "Streamlining development workflows and deployment processes."
    },
    {
      icon: <Scissors size={20} />,
      title: "Design Thinking",
      description: "Approaching problems with a user-centered, iterative methodology."
    },
    {
      icon: <Zap size={20} />,
      title: "Performance Optimization",
      description: "Maximizing speed and efficiency across all technology stacks."
    }
  ];
  
  return (
    <section id="skills" className="section py-24 bg-gradient-to-b from-background/80 to-background" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-tech-accent/10 text-tech-accent mb-3">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Brilliance</h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            A diverse skill set spanning cutting-edge development, design thinking, and fashion technology integration.
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
