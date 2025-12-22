import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div className="relative h-full bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 border border-border/50">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
            {service.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {service.description}
          </p>
        </div>

        {/* Arrow indicator */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
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
