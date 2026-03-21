import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Which areas in Pune do you serve?",
    answer:
      "Event Krafters serves Pimpri-Chinchwad, Rahatni, Wakad, Hinjewadi, Nigdi, Akurdi, Kasarwadi, and all areas across Pune, Maharashtra.",
  },
  {
    question: "What types of events do you manage?",
    answer:
      "We manage weddings, birthday parties, corporate events, conferences, product launches, annual meets, and private celebrations. We also provide balloon decoration, cold pyro effects, tent setup, and stage framing.",
  },
  {
    question: "How much does event planning cost in Pune?",
    answer:
      "Our pricing depends on the type of event, number of guests, and services required. Birthday decoration packages start from ₹5,000. Wedding planning packages are customised. Contact us for a free quote.",
  },
  {
    question: "Do you provide services for outdoor events?",
    answer:
      "Yes! We specialise in outdoor event setup including canopy tent installation, pagoda tent setup, stage framing, and lighting for outdoor weddings and corporate events across Pune.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2–4 weeks in advance for birthday events and 2–3 months in advance for weddings to ensure availability and proper planning time.",
  },
  {
    question: "How can I get a quote?",
    answer:
      "Simply call or WhatsApp us at +91 93563 55950 or click the WhatsApp button on this page. We respond within 2 hours with a detailed quote.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-peach/30 text-sm font-medium text-foreground/80 mb-4">
            FAQs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our event planning services in Pune and Pimpri-Chinchwad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-premium px-6 border border-border/40"
              >
                <AccordionTrigger className="text-left font-display text-base sm:text-lg font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
