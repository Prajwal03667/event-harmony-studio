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
  { title: "Birthday Balloon Arch", category: "Birthday", image: balloonImg },
  { title: "Canopy Setup", category: "Outdoor", image: canopyImg },
  { title: "Pagoda Tent", category: "Wedding", image: pagodaImg },
  { title: "Wedding Stage", category: "Wedding", image: stageImg },
  { title: "Cold Pyro Effects", category: "Special Effects", image: pyroImg },
  { title: "Theme Installation", category: "Corporate", image: themeImg },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 lg:py-32 gradient-cream relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-peach/20 text-sm font-medium text-foreground/80 mb-4">
            Our Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Explore Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse into the magical moments we've helped create for our clients.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 40 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer shadow-soft hover:shadow-soft-lg transition-all duration-500 ${
                index === 0 || index === 5 ? "lg:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div className={`w-full ${index === 0 || index === 5 ? "lg:h-full h-36 sm:h-48" : "h-36 sm:h-48 lg:h-56"}`}>
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-background p-2">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center mb-2 sm:mb-3">
                    <Eye className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <p className="font-display text-sm sm:text-lg font-semibold">{image.title}</p>
                  <p className="text-xs sm:text-sm opacity-80">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="gradient-peach text-foreground font-semibold px-8 py-6 rounded-full shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-105 border-0"
          >
            View Full Gallery
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
