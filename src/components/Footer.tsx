
import { ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-tech-dark-blue/5 py-12 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-semibold">
              <span className="bg-gradient-to-r from-tech-accent to-tech-blue bg-clip-text text-transparent">
                CodeStyle
              </span>
            </a>
            <p className="mt-2 text-foreground/70 text-sm">
              Where technical brilliance meets fashion-forward thinking.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <a 
              href="#" 
              className="mb-4 px-4 py-2 rounded-full bg-tech-accent/10 text-tech-accent flex items-center gap-2 transition-colors hover:bg-tech-accent/20"
            >
              Back to top <ArrowUp size={16} />
            </a>
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} Alex Chen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
