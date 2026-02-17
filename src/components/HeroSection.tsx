import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-0">
      {/* Background Elements - More subtle and professional */}
      <div className="absolute inset-0 gradient-cream" />
      <div className="absolute top-32 left-0 w-[500px] h-[500px] bg-peach/20 rounded-full blur-[100px] opacity-60" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blush/15 rounded-full blur-[120px] opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-light/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/60 shadow-soft mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm font-medium text-foreground/90 tracking-wide">Premium Event Styling</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 sm:mb-8"
            >
              Event Management{" "}
              <span className="text-gradient">Company in Pune</span>{" "}
              <span className="block mt-2">for Weddings & Corporate Events</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              EventKrafters is a professional event management company in Pune offering wedding planning, 
              corporate event management, stunning balloon décor, elegant tent setups, and mesmerizing stage effects. 
              Your trusted event planner in Pune for every celebration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="gradient-gold text-foreground font-semibold px-8 py-6 rounded-full shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover:scale-[1.02] text-base border-0 group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-background/60 backdrop-blur-sm border-2 border-border/60 text-foreground font-semibold px-8 py-6 rounded-full hover:bg-background hover:border-foreground/20 transition-all duration-500 text-base"
              >
                View Our Work
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 pt-8 border-t border-border/50"
            >
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                  <span className="ml-2 text-sm font-medium text-muted-foreground">5.0 Rating</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <span className="text-sm font-medium text-muted-foreground">500+ Events Completed</span>
                <div className="w-px h-4 bg-border hidden sm:block" />
                <span className="text-sm font-medium text-muted-foreground hidden sm:block">15+ Years Experience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Subtle glow */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full bg-peach/20 blur-[60px]" />
            
            {/* Decorative Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] lg:w-[520px] lg:h-[520px] rounded-full border border-dashed border-border/40"
            />

            {/* Main Circle with Logo */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-background shadow-elegant-lg flex items-center justify-center overflow-hidden border border-border/30"
            >
              <img 
                src={logo} 
                alt="EventKrafters - Professional event management company in Pune" 
                className="w-[85%] h-[85%] object-contain"
              />
            </motion.div>

            {/* Floating accent elements */}
            <motion.div
              animate={{ y: [-15, 5, -15], x: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 sm:top-12 right-4 sm:right-8 w-14 h-14 sm:w-18 sm:h-18 rounded-2xl gradient-gold opacity-90 shadow-elegant flex items-center justify-center"
            >
              <Sparkles className="w-6 h-6 text-foreground/80" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-16 sm:bottom-24 left-4 sm:left-8 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blush shadow-soft"
            />
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-4 sm:-left-6 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-peach shadow-soft"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave - More subtle */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 100L48 91.7C96 83.3 192 66.7 288 58.3C384 50 480 50 576 54.2C672 58.3 768 66.7 864 70.8C960 75 1056 75 1152 70.8C1248 66.7 1344 58.3 1392 54.2L1440 50V100H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
