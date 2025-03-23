
import { useEffect, useRef } from 'react';
import { 
  Coffee, 
  Headphones, 
  Keyboard, 
  Laptop, 
  LucideIcon, 
  Maximize2, 
  Monitor, 
  Mouse, 
  Ruler, 
  Smartphone
} from 'lucide-react';
import { cn } from "@/lib/utils";

interface GadgetProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

function Gadget({ icon, name, description }: GadgetProps) {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-foreground/5 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-tech-accent/10 flex items-center justify-center text-tech-accent shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-foreground mb-1">{name}</h4>
        <p className="text-sm text-foreground/70">{description}</p>
      </div>
    </div>
  );
}

export function WorkspaceSection() {
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
  
  const gadgets = [
    {
      icon: <Monitor size={20} />,
      name: "Curved Ultrawide Display",
      description: "49\" display with adaptive color technology for perfect color representation."
    },
    {
      icon: <Laptop size={20} />,
      name: "Carbon Fiber Laptop",
      description: "Custom-built with matte black finish and holographic accents."
    },
    {
      icon: <Keyboard size={20} />,
      name: "Mechanical Keyboard",
      description: "Customized with RGB lighting that syncs with code execution."
    },
    {
      icon: <Mouse size={20} />,
      name: "Biometric Mouse",
      description: "Ergonomic design with fingerprint authentication and customizable weights."
    },
    {
      icon: <Headphones size={20} />,
      name: "Noise-Canceling Headphones",
      description: "With ambient sound filtering and productivity mode."
    },
    {
      icon: <Coffee size={20} />,
      name: "Smart Mug",
      description: "Maintains perfect temperature and displays hydration reminders."
    },
    {
      icon: <Smartphone size={20} />,
      name: "AR Glasses",
      description: "For testing AR applications and distraction-free coding sessions."
    },
    {
      icon: <Ruler size={20} />,
      name: "Digital Sketchpad",
      description: "For wireframing and translating fashion concepts to digital designs."
    }
  ];
  
  return (
    <section id="workspace" className="section py-24 bg-gradient-to-b from-background to-background/90" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-tech-accent/10 text-tech-accent mb-3">
            Environment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Futuristic Workspace</h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            A carefully curated environment where innovation flourishes, combining cutting-edge technology with mindful design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1 animate-on-scroll opacity-0">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Where Magic Happens</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Alex's workspace is a harmony of minimalist design and cutting-edge technology. The ergonomic layout is optimized for productivity while maintaining a zen-like atmosphere.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Ambient lighting adapts to the time of day, and a carefully selected array of plants improves air quality while adding organic elements to the high-tech environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gadgets.map((gadget, index) => (
                <Gadget 
                  key={index}
                  icon={gadget.icon}
                  name={gadget.name}
                  description={gadget.description}
                />
              ))}
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 animate-on-scroll opacity-0">
            <div className="aspect-square bg-gradient-to-br from-tech-blue/10 to-tech-accent/10 rounded-2xl relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-tech-dark-blue/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 right-6">
                <button className="p-2 rounded-full bg-tech-accent/90 text-white hover:bg-tech-accent transition-colors">
                  <Maximize2 size={20} />
                </button>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-full bg-tech-accent/20 blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full bg-tech-blue/20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
