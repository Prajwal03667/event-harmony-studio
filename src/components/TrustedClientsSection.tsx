import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Building2, Hotel, CalendarHeart, Users } from "lucide-react";

const clientTypes = [
  { icon: Heart, label: "Rahatni Families", color: "bg-peach/20 border-peach/30 text-peach-dark" },
  { icon: Building2, label: "PCMC Corporates", color: "bg-blush/20 border-blush/30 text-blush-dark" },
  { icon: Hotel, label: "Banquet Halls", color: "bg-gold-light/20 border-gold-light/30 text-gold" },
  { icon: CalendarHeart, label: "Event Planners", color: "bg-peach/20 border-peach/30 text-peach-dark" },
  { icon: Users, label: "Wedding Couples", color: "bg-blush/20 border-blush/30 text-blush-dark" },
];

const TrustedClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 gradient-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-peach/20 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blush/20 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-gradient">50+ Events</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Across Rahatni & PCMC Region
          </p>
        </motion.div>

        {/* Client Pills */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className={`flex items-center gap-3 px-6 py-4 rounded-full border-2 ${client.color} backdrop-blur-sm shadow-soft cursor-pointer transition-all duration-300 hover:shadow-soft-lg`}
            >
              <client.icon className="w-5 h-5" />
              <span className="font-medium text-foreground">{client.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClientsSection;
