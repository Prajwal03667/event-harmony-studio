import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  { title: "Wedding Balloon Arch", category: "Wedding" },
  { title: "Birthday Theme Setup", category: "Birthday" },
  { title: "Corporate Stage", category: "Corporate" },
  { title: "Engagement Décor", category: "Engagement" },
  { title: "Pagoda Tent Setup", category: "Outdoor" },
  { title: "Cold Pyro Moment", category: "Special Effects" },
];

const colors = [
  "from-peach/60 to-peach-dark/60",
  "from-blush/60 to-blush-dark/60",
  "from-gold-light/60 to-gold/60",
  "from-champagne/60 to-peach/60",
  "from-peach-dark/60 to-blush/60",
  "from-blush-dark/60 to-gold-light/60",
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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`group relative aspect-square rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer shadow-soft hover:shadow-soft-lg transition-all duration-500 ${
                index === 0 || index === 5 ? "lg:row-span-2 lg:aspect-auto" : ""
              }`}
            >
              {/* Placeholder gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colors[index]}`} />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--background)) 2px, transparent 2px)`,
                  backgroundSize: '30px 30px'
                }} />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center mb-3">
                    <span className="font-display text-2xl font-bold text-foreground">{image.category[0]}</span>
                  </div>
                  <p className="font-medium text-foreground/90 text-sm">{image.category}</p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-background">
                  <div className="w-14 h-14 mx-auto rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center mb-3">
                    <Eye className="w-6 h-6" />
                  </div>
                  <p className="font-display text-lg font-semibold">{image.title}</p>
                  <p className="text-sm opacity-80">{image.category}</p>
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
