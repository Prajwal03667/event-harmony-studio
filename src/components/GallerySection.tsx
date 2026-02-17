import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images
import balloonImg from "@/assets/balloon-decoration.jpg";
import canopyImg from "@/assets/canopy-tent.jpg";
import pagodaImg from "@/assets/pagoda-tent.jpg";
import stageImg from "@/assets/stage-framing.jpg";
import pyroImg from "@/assets/cold-pyro.jpg";
import themeImg from "@/assets/theme-installation.jpg";

const galleryImages = [
  { title: "Birthday Balloon Arch", category: "Birthday", image: balloonImg, alt: "Birthday balloon arch decoration by EventKrafters Pune" },
  { title: "Canopy Setup", category: "Outdoor", image: canopyImg, alt: "Outdoor canopy tent event setup in Pune" },
  { title: "Pagoda Tent", category: "Wedding", image: pagodaImg, alt: "Wedding pagoda tent decoration EventKrafters" },
  { title: "Wedding Stage", category: "Wedding", image: stageImg, alt: "Wedding event stage setup in Pune by EventKrafters" },
  { title: "Cold Pyro Effects", category: "Special Effects", image: pyroImg, alt: "Cold pyro effects for events in Pune" },
  { title: "Theme Installation", category: "Corporate", image: themeImg, alt: "Corporate event theme installation EventKrafters Pune" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="section-padding gradient-cream relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="section-header"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-peach/15 border border-peach/20 text-sm font-medium text-foreground/80 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Our Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Stage, Sound, and Lighting{" "}
            <span className="text-gradient">Setup Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the magical moments we've helped create for our clients.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-elegant hover:shadow-elegant-lg transition-all duration-700 ${
                index === 0 || index === 5 ? "lg:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div className={`w-full ${index === 0 || index === 5 ? "lg:h-full h-40 sm:h-52" : "h-40 sm:h-52 lg:h-60"}`}>
                <img
                  src={image.image}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-foreground/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="text-center text-background p-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center mb-3">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <p className="font-display text-base sm:text-lg font-semibold">{image.title}</p>
                  <p className="text-sm opacity-80 mt-1">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="gradient-peach text-foreground font-semibold px-8 py-6 rounded-full shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover:scale-[1.02] border-0 group"
          >
            View Full Gallery
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
