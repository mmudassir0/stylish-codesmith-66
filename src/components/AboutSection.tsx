
import { useEffect, useRef } from 'react';
import { Code2, Database, Server, Laptop, Lightbulb } from 'lucide-react';
import { cn } from "@/lib/utils";

interface SkillProps {
  icon: React.ReactNode;
  title: string;
  level: number;
}

function Skill({ icon, title, level }: SkillProps) {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <div className="w-10 h-10 rounded-lg bg-tech-accent/10 flex items-center justify-center text-tech-accent">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">{title}</span>
          <span className="text-xs text-foreground/60">{level}%</span>
        </div>
        <div className="h-2 bg-tech-light-gray/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-tech-accent to-tech-blue rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
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
  
  return (
    <section id="about" className="section bg-gradient-to-b from-background to-background/80 py-24" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-tech-accent/10 text-tech-accent mb-3">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mudassir Abbas</h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            A passionate full stack developer dedicated to creating seamless digital experiences with clean, efficient code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-on-scroll opacity-0">
            <div className="rounded-2xl overflow-hidden relative shadow-xl">
              <div className="aspect-[3/4] bg-gradient-to-br from-tech-blue/20 to-tech-accent/20 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-90 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-tech-dark-blue/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">Mudassir Abbas</h3>
                  <p className="text-sm text-tech-light-gray">Full Stack Developer</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full bg-tech-accent/20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-36 h-36 rounded-full bg-tech-blue/20 blur-2xl"></div>
          </div>
          
          <div className="space-y-8 animate-on-scroll opacity-0">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Full Stack Developer & Problem Solver</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                With over 5 years of experience in web development, I specialize in building robust full stack applications that solve real-world problems. My journey in technology began with a passion for creating efficient solutions.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I enjoy working across the entire development stack, from crafting intuitive user interfaces to designing scalable backend systems and optimizing database performance. My goal is to deliver clean, maintainable code that creates exceptional user experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects Completed", value: "35+" },
                { label: "Clients Served", value: "20" },
                { label: "Tech Articles", value: "15" },
                { label: "GitHub Stars", value: "500+" }
              ].map((item, index) => (
                <div key={index} className="p-4 glass-card">
                  <div className="text-2xl font-bold mb-1 text-tech-accent">{item.value}</div>
                  <div className="text-sm text-foreground/70">{item.label}</div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Core Technologies</h4>
              <div className="space-y-2">
                <Skill icon={<Code2 size={20} />} title="JavaScript/TypeScript" level={95} />
                <Skill icon={<Laptop size={20} />} title="React/Next.js" level={90} />
                <Skill icon={<Server size={20} />} title="Node.js/Express" level={88} />
                <Skill icon={<Database size={20} />} title="MongoDB/PostgreSQL" level={85} />
                <Skill icon={<Lightbulb size={20} />} title="System Architecture" level={82} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
