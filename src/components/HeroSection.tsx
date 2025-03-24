
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Code, Database, Server, Layers, Github, Linkedin, ExternalLink } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "Building robust full-stack applications";
  
  useEffect(() => {
    // Typing animation
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);
  
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
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-tech-accent/10 text-tech-accent">
                  Full Stack Developer
                </span>
                <div className="flex space-x-3">
                  <a href="https://github.com/mudassirabbas" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-tech-accent transition-colors">
                    <Github size={18} />
                  </a>
                  <a href="https://linkedin.com/in/mudassirabbas" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-tech-accent transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Hi, I'm <span className="text-tech-accent">Mudassir Abbas</span> <br />
                <span className="bg-gradient-to-r from-tech-blue to-tech-accent bg-clip-text text-transparent">
                  Web Developer & Architect
                </span>
              </h1>
              <div className="mt-6 h-16">
                <p className="text-lg md:text-xl text-foreground/80 max-w-xl flex items-center">
                  <span>{typedText}</span>
                  <span className="ml-1 inline-block w-1 h-5 bg-tech-accent animate-cursor"></span>
                </p>
              </div>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Button 
                asChild
                variant="default"
                className="px-6 py-3 bg-tech-accent text-white hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
              >
                <a href="#projects">
                  View My Work <ArrowDown size={16} className="ml-2" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="px-6 py-3 hover:bg-foreground/5 transition-colors duration-300"
              >
                <a href="#contact">
                  Contact Me <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="pt-6 flex items-center gap-2 text-sm text-foreground/60">
              <span className="font-semibold">Tech Stack:</span>
              <div className="flex gap-1 flex-wrap">
                {["TypeScript", "React", "Node.js", "Next.js", "MongoDB", "PostgreSQL", "GraphQL", "AWS"].map((tech, i) => (
                  <span key={i} className="inline-block px-2 py-1 rounded-md bg-foreground/5 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
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
                    <p><span className="text-tech-purple">import</span> <span className="text-tech-light-blue">React</span>, { '{' } <span className="text-tech-light-blue">useState</span>, <span className="text-tech-light-blue">useEffect</span> { '}' } <span className="text-tech-purple">from</span> <span className="text-tech-accent">'react'</span>;</p>
                    <p><span className="text-tech-purple">import</span> { '{' } <span className="text-tech-light-blue">useQuery</span> { '}' } <span className="text-tech-purple">from</span> <span className="text-tech-accent">'@tanstack/react-query'</span>;</p>
                    <p className="mt-4"><span className="text-tech-purple">const</span> <span className="text-tech-blue">fetchProjects</span> = <span className="text-tech-purple">async</span> () => {'{'}</p>
                    <p className="ml-4"><span className="text-tech-purple">const</span> <span className="text-tech-blue">response</span> = <span className="text-tech-purple">await</span> fetch(<span className="text-tech-accent">'/api/projects'</span>);</p>
                    <p className="ml-4"><span className="text-tech-purple">const</span> <span className="text-tech-blue">data</span> = <span className="text-tech-purple">await</span> response.json();</p>
                    <p className="ml-4"><span className="text-tech-purple">return</span> data;</p>
                    <p>{'}'};</p>
                    <p className="mt-4"><span className="text-tech-purple">export const</span> <span className="text-tech-blue">ProjectsSection</span> = () => {'{'}</p>
                    <p className="ml-4"><span className="text-tech-purple">const</span> {'{'} data, isLoading, error {'}'} = useQuery({'{'}</p>
                    <p className="ml-8">queryKey: [<span className="text-tech-accent">'projects'</span>],</p>
                    <p className="ml-8">queryFn: fetchProjects</p>
                    <p className="ml-4">{'}'})</p>
                    <p className="mt-2 ml-4"><span className="text-tech-purple">if</span> (isLoading) <span className="text-tech-purple">return</span> <span className="text-tech-accent">'Loading...'</span>;</p>
                    <p className="ml-4"><span className="text-tech-purple">if</span> (error) <span className="text-tech-purple">return</span> <span className="text-tech-accent">'Error loading projects'</span>;</p>
                    <p className="mt-2 ml-4"><span className="text-tech-purple">return</span> (</p>
                    <p className="ml-8">&lt;<span className="text-tech-red">div</span>&gt;</p>
                    <p className="ml-12">{'{'}data.map(project => (</p>
                    <p className="ml-16">&lt;<span className="text-tech-red">ProjectCard</span> key={'{'}project.id{'}'} {...project} /&gt;</p>
                    <p className="ml-12">)){'}'};</p>
                    <p className="ml-8">&lt;/<span className="text-tech-red">div</span>&gt;</p>
                    <p className="ml-4">);</p>
                    <p>{'}'};</p>
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
              icon: <Layers size={24} className="text-tech-accent" />, 
              title: "Full Stack Development", 
              description: "Building complete applications from database design to responsive interfaces with modern tech stacks." 
            },
            { 
              icon: <Server size={24} className="text-tech-blue" />, 
              title: "Backend Architecture", 
              description: "Designing scalable APIs, microservices, and database systems optimized for performance and security." 
            },
            { 
              icon: <Code size={24} className="text-tech-accent" />, 
              title: "Frontend Engineering", 
              description: "Crafting responsive, accessible UIs with React, Next.js and modern frontend frameworks." 
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card p-6 transition-all duration-500 hover:shadow-glow hover:-translate-y-1",
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
