import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Clock, CheckCircle2, Layers, Headphones } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Industry expertise",
  },
  {
    icon: CheckCircle2,
    value: 500,
    suffix: "+",
    label: "Projects Completed",
    description: "Happy celebrations",
  },
  {
    icon: Layers,
    value: 6,
    suffix: "",
    label: "Core Services",
    description: "Complete solutions",
  },
  {
    icon: Headphones,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    description: "Always here for you",
  },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2500;
      const steps = 80;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
      {displayValue}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding gradient-cream relative overflow-hidden">
      {/* Subtle decorations */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-peach/10 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blush/10 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Corporate Event Management{" "}
            <span className="text-gradient">Experts in Pune</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Delivering excellence in event decoration for over a decade
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-center"
            >
              <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-elegant border border-border/30 hover:shadow-elegant-lg hover:border-border/50 transition-all duration-500 h-full">
                <motion.div 
                  initial={{ scale: 0, rotate: -10 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
                  transition={{ duration: 0.6, delay: index * 0.12 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="w-16 h-16 mx-auto rounded-2xl gradient-gold flex items-center justify-center mb-6 shadow-soft"
                >
                  <stat.icon className="w-7 h-7 text-foreground" />
                </motion.div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="font-semibold text-foreground mt-3 mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
