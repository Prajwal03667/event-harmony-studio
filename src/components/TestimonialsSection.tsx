import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Rahul Sharma",
    event: "Wedding Reception",
    rating: 5,
    text: "Event Krafters transformed our wedding venue into a dream! The balloon arches and stage décor were absolutely stunning. Every guest was amazed.",
  },
  {
    name: "Sneha Patil",
    event: "Birthday Celebration",
    rating: 5,
    text: "My daughter's first birthday was magical thanks to the beautiful balloon installations. The team was professional and the setup was beyond our expectations.",
  },
  {
    name: "Rajesh Kulkarni",
    event: "Corporate Event",
    rating: 5,
    text: "Outstanding professionalism! The canopy and stage setup for our corporate gala was impeccable. Highly recommend for any event.",
  },
  {
    name: "Anita & Vikram Desai",
    event: "Engagement Ceremony",
    rating: 5,
    text: "The cold pyro effects during our engagement made the moment unforgettable. The entire décor was elegant and perfectly coordinated.",
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 80, rotateX: 15 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 80
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group"
    >
      <div className="h-full bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft border border-border/50 hover:shadow-soft-lg hover:border-peach/30 transition-all duration-300 relative overflow-hidden">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          <Quote className="w-16 h-16 text-peach-dark" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-gold text-gold" />
          ))}
        </div>

        {/* Text */}
        <p className="text-foreground/90 leading-relaxed mb-6 relative z-10">
          "{testimonial.text}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full gradient-peach flex items-center justify-center shadow-soft">
            <span className="font-display text-lg font-bold text-foreground">
              {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.event}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-peach/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blush/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blush/20 text-sm font-medium text-foreground/80 mb-4">
            Client Love
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every event is a story, and we're honored to be part of so many beautiful celebrations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
