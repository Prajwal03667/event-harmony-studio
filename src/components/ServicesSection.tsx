import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

// Import images
import balloonImg from "@/assets/balloon-decoration.jpg";
import canopyImg from "@/assets/canopy-tent.jpg";
import pagodaImg from "@/assets/pagoda-tent.jpg";
import stageImg from "@/assets/stage-framing.jpg";
import pyroImg from "@/assets/cold-pyro.jpg";
import themeImg from "@/assets/theme-installation.jpg";

const services = [
  {
    title: "Balloon Decoration",
    description: "Stunning balloon arches, garlands, and custom installations for every celebration.",
    image: balloonImg,
  },
  {
    title: "Canopy Tents",
    description: "Elegant outdoor coverage with premium canopy tent setups for any venue.",
    image: canopyImg,
  },
  {
    title: "Pagoda Tents",
    description: "Majestic pagoda structures that add grandeur to your special occasions.",
    image: pagodaImg,
  },
  {
    title: "Stage & Framing",
    description: "Professional stage setups with beautiful framing and backdrop designs.",
    image: stageImg,
  },
  {
    title: "Cold Pyro & SFX",
    description: "Mesmerizing cold pyro effects and special effects for magical moments.",
    image: pyroImg,
  },
  {
    title: "Theme Installations",
    description: "Custom themed décor installations tailored to your unique vision.",
    image: themeImg,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1, 
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group cursor-pointer"
    >
      <div className="relative h-full bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-lg transition-all duration-700 border border-border/30 hover:border-border/60">
        {/* Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Hover arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1 }}
            className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-soft"
          >
            <ArrowUpRight className="w-5 h-5 text-foreground" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gradient transition-all duration-500">
            {service.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-peach/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blush/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="section-header"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-peach/15 border border-peach/20 text-sm font-medium text-foreground/80 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            What We Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
            Premium Event{" "}
            <span className="text-gradient">Decoration</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From intimate celebrations to grand events, we craft beautiful moments 
            with our comprehensive range of décor services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
