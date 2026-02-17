import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-peach opacity-30" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-blush/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gold-light/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-background/70 backdrop-blur-sm border border-border/50 shadow-soft mb-10"
          >
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="font-medium text-foreground">Ready to Create Magic?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            Let's Craft Your{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Celebration</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="hsl(var(--gold))" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-foreground/75 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            From intimate gatherings to grand celebrations, our professional event management services in India 
            bring your vision to life with exquisite décor and flawless execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              size="lg"
              className="gradient-gold text-foreground font-semibold px-12 py-7 rounded-full shadow-elegant transition-all duration-500 hover:scale-[1.02] hover:shadow-elegant-lg text-lg border-0 group"
            >
              Get Free Quote
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-12"
          >
            <a 
              href="tel:+919356355950" 
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-background/70 backdrop-blur-sm border border-border/50 text-sm font-medium text-foreground hover:bg-background hover:shadow-soft transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-gold" />
              +91 93563 55950
            </a>
            <a 
              href="mailto:prajwalsshelar143@gmail.com" 
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-background/70 backdrop-blur-sm border border-border/50 text-sm font-medium text-foreground hover:bg-background hover:shadow-soft transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-gold" />
              prajwalsshelar143@gmail.com
            </a>
            <span className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-background/70 backdrop-blur-sm border border-border/50 text-sm font-medium text-foreground">
              <MapPin className="w-4 h-4 text-gold" />
              Rahatni, Pune
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
