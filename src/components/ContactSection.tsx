
import { useEffect, useRef, useState } from 'react';
import { AtSign, Github, Instagram, Linkedin, Send, Twitter } from 'lucide-react';
import { cn } from "@/lib/utils";

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };
  
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
    <section id="contact" className="section py-24 bg-gradient-to-b from-background to-tech-dark-blue/5" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-tech-accent/10 text-tech-accent mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Alex</h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            Interested in collaborations, speaking engagements, or just want to chat about the intersection of tech and fashion?
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll opacity-0">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              {submitted ? (
                <div className="bg-tech-accent/20 border border-tech-accent/30 rounded-lg p-4 text-center">
                  <p className="text-tech-accent font-medium mb-2">Message Sent Successfully!</p>
                  <p className="text-foreground/80 text-sm">Thank you for reaching out. Alex will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-tech-accent/50"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-tech-accent/50"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-tech-accent/50 resize-none"
                      placeholder="I'd like to discuss..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all",
                      "bg-tech-accent text-white hover:shadow-glow disabled:opacity-70"
                    )}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="space-y-8 animate-on-scroll opacity-0">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6">Connect</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-foreground/5 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-tech-accent/10 flex items-center justify-center text-tech-accent">
                    <Linkedin size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">LinkedIn</h4>
                    <p className="text-sm text-foreground/70">Professional updates and tech insights</p>
                  </div>
                </a>
                
                <a href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-foreground/5 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-tech-accent/10 flex items-center justify-center text-tech-accent">
                    <Twitter size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Twitter</h4>
                    <p className="text-sm text-foreground/70">Tech opinions and quick updates</p>
                  </div>
                </a>
                
                <a href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-foreground/5 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-tech-accent/10 flex items-center justify-center text-tech-accent">
                    <Github size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">GitHub</h4>
                    <p className="text-sm text-foreground/70">Open source projects and contributions</p>
                  </div>
                </a>
                
                <a href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-foreground/5 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-tech-accent/10 flex items-center justify-center text-tech-accent">
                    <Instagram size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Instagram</h4>
                    <p className="text-sm text-foreground/70">Fashion tech and behind-the-scenes</p>
                  </div>
                </a>
                
                <a href="mailto:alex@techstyle.design" className="flex items-center gap-4 p-3 rounded-lg hover:bg-foreground/5 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-tech-accent/10 flex items-center justify-center text-tech-accent">
                    <AtSign size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Email</h4>
                    <p className="text-sm text-foreground/70">alex@techstyle.design</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4">Currently Working On</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-foreground/5">
                  <h4 className="font-medium text-tech-accent mb-1">Neural UI Framework</h4>
                  <p className="text-sm text-foreground/70">
                    An AI-driven UI system that adapts to user behavior and preferences in real-time.
                  </p>
                </div>
                
                <div className="p-3 rounded-lg bg-foreground/5">
                  <h4 className="font-medium text-tech-accent mb-1">AR Fashion Collection</h4>
                  <p className="text-sm text-foreground/70">
                    Clothing with embedded AR capabilities, changing patterns based on environment and mood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
