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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group"
    >
      <div className="h-full bg-card rounded-2xl p-7 sm:p-8 shadow-elegant border border-border/30 hover:shadow-elegant-lg hover:border-border/50 transition-all duration-500 relative overflow-hidden">
        {/* Subtle quote icon */}
        <div className="absolute top-6 right-6 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500">
          <Quote className="w-20 h-20 text-foreground" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-gold text-gold" />
          ))}
        </div>

        {/* Text */}
        <p className="text-foreground/85 leading-relaxed mb-8 relative z-10 text-[15px]">
          "{testimonial.text}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full gradient-peach flex items-center justify-center shadow-soft">
            <span className="font-display text-base font-bold text-foreground">
              {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-foreground text-[15px]">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.event}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-peach/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-blush/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="section-header"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blush/15 border border-blush/20 text-sm font-medium text-foreground/80 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Client Love
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every event is a story, and we're honored to be part of so many beautiful celebrations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
