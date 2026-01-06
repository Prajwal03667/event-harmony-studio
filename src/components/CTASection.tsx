import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-peach opacity-40" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blush/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-light/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-background/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background/50 backdrop-blur-sm border border-background/30 mb-8"
          >
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="font-medium text-foreground">Ready to Create Magic?</span>
            <Sparkles className="w-5 h-5 text-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 px-2"
          >
            Let's Craft Your{" "}
            <span className="relative inline-block">
              Celebration
              <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--gold))" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            From intimate gatherings to grand celebrations, we bring your vision to life 
            with exquisite décor and flawless execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="gradient-gold text-foreground font-semibold px-10 py-7 rounded-full shadow-soft-lg transition-all duration-300 hover:scale-105 text-lg border-0 pulse-soft"
            >
              Contact Event Krafters
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </motion.div>

          {/* Contact Info Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10"
          >
            <a href="tel:+919356355950" className="px-4 sm:px-5 py-2 rounded-full bg-background/50 backdrop-blur-sm text-xs sm:text-sm font-medium text-foreground hover:bg-background/70 transition-colors">
              📞 +91 93563 55950
            </a>
            <a href="mailto:prajwalsshelar143@gmail.com" className="px-4 sm:px-5 py-2 rounded-full bg-background/50 backdrop-blur-sm text-xs sm:text-sm font-medium text-foreground hover:bg-background/70 transition-colors">
              📧 prajwalsshelar143@gmail.com
            </a>
            <span className="px-4 sm:px-5 py-2 rounded-full bg-background/50 backdrop-blur-sm text-xs sm:text-sm font-medium text-foreground">
              📍 Rahatni, Pune
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
