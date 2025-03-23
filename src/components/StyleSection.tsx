
import { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface FashionItemProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

function FashionItem({ image, title, description, tags }: FashionItemProps) {
  return (
    <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-glow group">
      <div className="aspect-[4/5] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-tech-dark-blue/90 via-tech-dark-blue/40 to-transparent opacity-80"></div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-full bg-tech-accent/10 text-tech-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-foreground/70">{description}</p>
      </div>
    </div>
  );
}

export function StyleSection() {
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
  
  const fashionItems = [
    {
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Holographic Tech Jacket",
      description: "A sleek jacket with integrated AR displays that sync with Alex's mood and projects.",
      tags: ["Smart Clothing", "AR Integration"]
    },
    {
      image: "https://images.unsplash.com/photo-1618520402234-dbdae7b584ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Circuit Pattern Sweater",
      description: "A monochromatic sweater with subtle circuit board patterns that glow in low light.",
      tags: ["Minimalist", "Tech Pattern"]
    },
    {
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Smart Chronograph",
      description: "A premium timepiece with integrated coding assistant and health tracking.",
      tags: ["Accessory", "Smart Device"]
    },
    {
      image: "https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Light-Reactive Sneakers",
      description: "Footwear with LEDs that respond to music rhythm and coding productivity.",
      tags: ["Footwear", "Reactive LED"]
    }
  ];
  
  return (
    <section id="style" className="section py-24 bg-gradient-to-b from-background/90 to-background" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-tech-accent/10 text-tech-accent mb-3">
            Personal Expression
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">High-Tech Fashion</h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            Where forward-thinking style meets cutting-edge technology, creating a unique personal aesthetic.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fashionItems.map((item, index) => (
            <div key={index} className="animate-on-scroll opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
              <FashionItem 
                image={item.image}
                title={item.title}
                description={item.description}
                tags={item.tags}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-card p-8 animate-on-scroll opacity-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Fashion Philosophy</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                "Style is a form of self-expression that extends beyond clothing to encompass one's approach to life and work. My wardrobe reflects my dedication to innovation, quality, and the seamless integration of technology with everyday life."
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Alex carefully selects each piece based on its design excellence, functionality, and sustainability credentials, creating a cohesive aesthetic that's both distinctive and timeless.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tech-blue/10 to-tech-accent/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4">Style Principles</h4>
              <ul className="space-y-3">
                {[
                  "Minimalist foundation with technological accents",
                  "Form follows function in all design choices",
                  "Sustainable materials with cutting-edge treatments",
                  "Color palette derived from modern UI design",
                  "Each piece tells a story about the intersection of tech and fashion"
                ].map((principle, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-tech-accent">●</span>
                    <span className="text-foreground/80">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
