import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Building2, Hotel, CalendarHeart, Users } from "lucide-react";

const clientTypes = [
  { icon: Heart, label: "Rahatni Families" },
  { icon: Building2, label: "PCMC Corporates" },
  { icon: Hotel, label: "Banquet Halls" },
  { icon: CalendarHeart, label: "Event Planners" },
  { icon: Users, label: "Wedding Couples" },
];

const TrustedClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 lg:py-24 gradient-cream relative overflow-hidden">
      {/* Subtle decorations */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-peach/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blush/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-gradient">500+ Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Across Rahatni & PCMC Region
          </p>
        </motion.div>

        {/* Client Types */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group"
            >
              <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-background border border-border/50 shadow-soft hover:shadow-elegant hover:border-border transition-all duration-500 cursor-default">
                <div className="w-9 h-9 rounded-full gradient-peach flex items-center justify-center">
                  <client.icon className="w-4 h-4 text-foreground" />
                </div>
                <span className="font-medium text-foreground text-sm sm:text-base">{client.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClientsSection;
