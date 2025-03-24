
import { useEffect, useRef } from 'react';
import { ArrowDown, Code, Database, Server } from 'lucide-react';
import { cn } from "@/lib/utils";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 pb-8">
      <div 
        ref={heroRef}
        className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 transition-all duration-1000 opacity-0 translate-y-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-left">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-tech-accent/10 text-tech-accent mb-5">
                Full Stack Developer
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Hi, I'm <span className="text-tech-accent">Mudassir Abbas</span> <br />
                <span className="bg-gradient-to-r from-tech-blue to-tech-accent bg-clip-text text-transparent">
                  Web Developer & Architect
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl">
                I build robust, high-performance web applications from frontend to backend. Specializing in modern JavaScript frameworks and cloud architecture.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-lg bg-tech-accent text-white font-medium flex items-center gap-2 transition-all hover:shadow-glow hover:translate-y-[-2px]"
              >
                View My Work <ArrowDown size={16} />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg border border-foreground/20 text-foreground font-medium flex items-center gap-2 transition-colors hover:bg-foreground/5"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="w-full h-[500px] relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-dark-blue to-tech-black rounded-xl overflow-hidden shine shadow-lg">
                <div className="absolute top-5 left-5 right-5 h-10 bg-tech-gray/10 rounded flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-sm font-mono text-tech-light-gray opacity-60">~/projects/fullstack-app</div>
                </div>
                <div className="absolute top-20 left-5 right-5 bottom-5 overflow-hidden">
                  <div className="font-mono text-sm text-tech-light-gray">
                    <p><span className="text-tech-accent">const</span> <span className="text-tech-blue">developer</span> = {`{`}</p>
                    <p className="ml-4"><span className="text-tech-light-blue">name</span>: <span className="text-tech-accent">'Mudassir Abbas'</span>,</p>
                    <p className="ml-4"><span className="text-tech-light-blue">title</span>: <span className="text-tech-accent">'Full Stack Developer'</span>,</p>
                    <p className="ml-4"><span className="text-tech-light-blue">skills</span>: [<span className="text-tech-accent">'JavaScript'</span>, <span className="text-tech-accent">'React'</span>, <span className="text-tech-accent">'Node.js'</span>, <span className="text-tech-accent">'MongoDB'</span>],</p>
                    <p className="ml-4"><span className="text-tech-light-blue">experience</span>: <span className="text-tech-accent">'5+ years'</span>,</p>
                    <p className="ml-4"><span className="text-tech-light-blue">location</span>: <span className="text-tech-accent">'Remote'</span>,</p>
                    <p className="ml-4"><span className="text-tech-light-blue">currentProject</span>: <span className="text-tech-accent">'E-Commerce Platform'</span>,</p>
                    <p className="ml-4"><span className="text-tech-light-blue">interests</span>: [</p>
                    <p className="ml-8"><span className="text-tech-accent">'Cloud Architecture'</span>,</p>
                    <p className="ml-8"><span className="text-tech-accent">'API Development'</span>,</p>
                    <p className="ml-8"><span className="text-tech-accent">'Database Design'</span></p>
                    <p className="ml-4">],</p>
                    <p className="ml-4"><span className="text-tech-light-blue">status</span>: <span className="text-tech-accent">'Available for hire'</span></p>
                    <p>{`}`};</p>
                    <p className="mt-4 animate-pulse">_</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-tech-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-tech-blue/20 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Code size={24} className="text-tech-accent" />, 
              title: "Frontend Development", 
              description: "Creating responsive, accessible, and high-performance user interfaces with modern frameworks." 
            },
            { 
              icon: <Server size={24} className="text-tech-blue" />, 
              title: "Backend Development", 
              description: "Building scalable server-side applications, RESTful APIs, and microservices." 
            },
            { 
              icon: <Database size={24} className="text-tech-accent" />, 
              title: "Database Architecture", 
              description: "Designing efficient database schemas, optimizing queries, and implementing data security." 
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card p-6 transition-all duration-500 hover:shadow-glow",
                "opacity-0 translate-y-10"
              )}
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
              onAnimationEnd={(e) => {
                e.currentTarget.classList.remove('opacity-0', 'translate-y-10');
                e.currentTarget.classList.add('opacity-100', 'translate-y-0', 'animate-fade-in-up');
              }}
            >
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-background/80 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-tech-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-64 w-96 h-96 bg-tech-blue/5 rounded-full blur-3xl"></div>
    </section>
  );
}
