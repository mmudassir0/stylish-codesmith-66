
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm" 
                   : "py-5 bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold flex items-center">
          <span className="bg-gradient-to-r from-tech-accent to-tech-blue bg-clip-text text-transparent">
            CodeStyle
          </span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['About', 'Skills', 'Workspace', 'Style', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="nav-link"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-foreground hover:text-accent transition-colors"
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background z-50 transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-foreground hover:text-accent transition-colors"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center space-y-8 h-[calc(100%-80px)]">
          {['About', 'Skills', 'Workspace', 'Style', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-xl font-medium hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
