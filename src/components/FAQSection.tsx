
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "How does Mudassir Abbas blend tech and fashion?",
      answer: "Mudassir Abbas seamlessly integrates cutting-edge technology with fashion-forward sensibilities. From smart wearables with hidden tech features to minimalist designs inspired by clean code architecture, his approach creates harmony between digital innovation and sartorial expression."
    },
    {
      question: "What programming languages does Mudassir specialize in?",
      answer: "Mudassir is proficient in multiple programming paradigms, with expertise in JavaScript/TypeScript, Python, Rust, and Golang. He particularly enjoys functional programming and is passionate about clean, efficient code that's both performant and maintainable."
    },
    {
      question: "How does Mudassir stay updated with tech trends?",
      answer: "Through a combination of continuous learning, open-source contributions, tech conferences, and an extensive network of fellow innovators. He dedicates time each week to experiment with emerging technologies and regularly shares his findings through his technical blog and social channels."
    },
    {
      question: "Can Mudassir help with my tech project?",
      answer: "Absolutely! Mudassir is open to consulting opportunities, speaking engagements, and collaborative projects that align with his expertise in modern web development, AI implementation, and technology integration. Feel free to reach out through the contact section."
    },
    {
      question: "What's unique about Mudassir's workspace setup?",
      answer: "Mudassir's workspace is a perfect blend of minimalist design and technological abundance. It features custom-built mechanical keyboards, ambient lighting that shifts based on his focus states, and an ergonomic setup that prioritizes both health and productivity. Every element is carefully chosen to enhance creativity and efficiency."
    },
  ];

  return (
    <section id="faq" className="section py-24 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-tech-accent/10 text-tech-accent mb-3 flex items-center justify-center mx-auto gap-2">
            <HelpCircle size={14} className="animate-pulse" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            Everything you need to know about Mudassir Abbas and his approach to technology and style.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-background/50 dark:bg-background/20 p-6 rounded-xl border border-border/40 shadow-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/30 last:border-0">
                <AccordionTrigger className="text-lg font-medium py-5 hover:text-tech-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-foreground/60 text-sm">
            Can't find what you're looking for? <a href="#contact" className="text-tech-accent hover:underline">Reach out directly</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
