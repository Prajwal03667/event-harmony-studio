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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gold-light/20 text-sm font-medium text-foreground/80 mb-4">
            Our Partners
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Décor Partner for <span className="text-gradient">Trusted Venues</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with premium venues and brands to deliver exceptional event experiences.
          </p>
        </motion.div>

        {/* Brand Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.08 }}
              className="group"
            >
              <div className="aspect-square rounded-2xl bg-card border border-border/50 shadow-soft flex flex-col items-center justify-center p-6 hover:shadow-soft-lg hover:border-peach/30 transition-all duration-300">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm font-medium text-muted-foreground text-center mt-3 group-hover:text-foreground transition-colors duration-300">
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
