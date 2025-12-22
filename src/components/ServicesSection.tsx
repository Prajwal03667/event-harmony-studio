import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, TentTree, Castle, Frame, Flame, Palette } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Balloon Decoration",
    description: "Stunning balloon arches, garlands, and custom installations for every celebration.",
    color: "from-peach to-peach-dark",
  },
  {
    icon: TentTree,
    title: "Canopy Tents",
    description: "Elegant outdoor coverage with premium canopy tent setups for any venue.",
    color: "from-blush to-blush-dark",
  },
  {
    icon: Castle,
    title: "Pagoda Tents",
    description: "Majestic pagoda structures that add grandeur to your special occasions.",
    color: "from-gold-light to-gold",
  },
  {
    icon: Frame,
    title: "Stage & Framing",
    description: "Professional stage setups with beautiful framing and backdrop designs.",
    color: "from-peach-dark to-gold",
  },
  {
    icon: Flame,
    title: "Cold Pyro & SFX",
    description: "Mesmerizing cold pyro effects and special effects for magical moments.",
    color: "from-blush-dark to-peach",
  },
  {
    icon: Palette,
    title: "Theme Installations",
    description: "Custom themed décor installations tailored to your unique vision.",
    color: "from-gold to-peach-dark",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group cursor-pointer"
    >
      <div className="relative h-full bg-card rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-500 border border-border/50 overflow-hidden">
        {/* Background Gradient on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-soft group-hover:shadow-glow transition-all duration-500`}
        >
          <service.icon className="w-8 h-8 text-foreground" />
        </motion.div>

        {/* Content */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {service.description}
        </p>

        {/* Arrow indicator */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-full gradient-peach flex items-center justify-center">
            <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-peach/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blush/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-peach/20 text-sm font-medium text-foreground/80 mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Premium Event <span className="text-gradient">Decoration Services</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From intimate celebrations to grand events, we craft beautiful moments 
            with our comprehensive range of décor services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
