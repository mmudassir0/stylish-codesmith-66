
import { useEffect, useRef } from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            // Don't unobserve to ensure elements stay visible when revisiting
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
      // Reset any existing animation classes
      el.classList.remove('animate-fade-in-up');
      observer.observe(el);
    });
    
    return () => {
      childElements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  const faqs = [
    {
      question: "What services do you offer as a full stack developer?",
      answer: "I provide comprehensive web development services including frontend and backend development, database design, API development, deployment, and maintenance. I specialize in building complete web applications from conception to deployment using modern technologies."
    },
    {
      question: "What technologies do you primarily work with?",
      answer: "My core tech stack includes JavaScript/TypeScript, React, Next.js, Node.js, Express, MongoDB, and PostgreSQL. I'm also experienced with AWS, Docker, GraphQL, and various frontend frameworks. I continuously expand my skillset to stay current with industry trends."
    },
    {
      question: "How do you approach a new development project?",
      answer: "I start with thorough requirements gathering and planning to understand project goals. Then I create a technical architecture, develop iteratively with regular client feedback, implement thorough testing, and finally deploy with proper documentation. Communication is maintained throughout the entire process."
    },
    {
      question: "Can you handle both small projects and large enterprise applications?",
      answer: "Yes, I work on projects of all sizes. For small projects, I focus on rapid development and efficient solutions. For larger enterprise applications, I implement scalable architecture, ensure maintainability, and can work as part of a development team to deliver complex features."
    },
    {
      question: "How do you ensure the quality and security of your code?",
      answer: "I implement comprehensive testing strategies including unit, integration, and end-to-end tests. I follow security best practices for authentication, data protection, and input validation. I also conduct code reviews, use static analysis tools, and stay updated on security vulnerabilities."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, I offer maintenance packages that include regular updates, security patches, performance monitoring, and bug fixes. I can also provide training for your team and documentation to ensure smooth operation of your application after the initial development."
    }
  ];

  return (
    <section id="faq" className="section py-24 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-tech-accent/10 text-tech-accent mb-3 flex items-center justify-center mx-auto gap-2">
            <HelpCircle size={14} />
            <span>FAQ</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            Common questions about my development services and process
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-background/50 dark:bg-background/20 p-6 rounded-xl border border-border/40 shadow-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/30 last:border-0">
                <AccordionTrigger className="text-lg font-medium py-5 hover:text-tech-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-5 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
