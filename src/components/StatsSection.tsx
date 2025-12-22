import { motion, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Clock, CheckCircle2, Layers, Headphones } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    color: "from-peach to-peach-dark",
  },
  {
    icon: CheckCircle2,
    value: 500,
    suffix: "+",
    label: "Projects Completed",
    color: "from-blush to-blush-dark",
  },
  {
    icon: Layers,
    value: 6,
    suffix: "",
    label: "Major Sectors",
    color: "from-gold-light to-gold",
  },
  {
    icon: Headphones,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    color: "from-peach-dark to-gold",
  },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
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
    <span ref={ref} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
      {displayValue}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 gradient-cream relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-peach/15 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blush/15 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Journey in <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Delivering excellence in event decoration for over a decade
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-soft-lg transition-all duration-300">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-soft`}>
                  <stat.icon className="w-8 h-8 text-foreground" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
