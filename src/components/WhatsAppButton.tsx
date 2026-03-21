import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3"
    >
      {/* Desktop label */}
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="hidden md:block bg-foreground text-background text-sm font-medium px-4 py-2 rounded-full shadow-elegant"
      >
        Chat with us
      </motion.span>

      {/* WhatsApp button */}
      <motion.a
        href="https://wa.me/919356355950?text=Hi%20Event%20Krafters!%20I%20am%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center shadow-elegant-lg transition-colors duration-300"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton;
