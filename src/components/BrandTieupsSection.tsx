import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import brandBMW from "@/assets/brand-bmw.png";
import brandFord from "@/assets/brand-ford.png";
import brandMercedes from "@/assets/brand-mercedes.png";
import brandSkoda from "@/assets/brand-skoda.png";

const brands = [
  { name: "BMW", logo: brandBMW },
  { name: "Ford", logo: brandFord },
  { name: "Mercedes-Benz", logo: brandMercedes },
  { name: "Škoda", logo: brandSkoda },
];

const BrandTieupsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-light/15 border border-gold-light/20 text-sm font-medium text-foreground/80 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Our Partners
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Décor Partner for <span className="text-gradient">Premium Venues</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with premium venues and brands to deliver exceptional event experiences.
          </p>
        </motion.div>

        {/* Brand Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group"
            >
              <div className="aspect-square rounded-2xl bg-card border border-border/40 shadow-soft flex flex-col items-center justify-center p-6 hover:shadow-elegant hover:border-border/60 transition-all duration-500">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                <span className="text-sm font-medium text-muted-foreground text-center mt-4 group-hover:text-foreground transition-colors duration-300">
                  {brand.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandTieupsSection;
