import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  intro: string;
  services: string[];
  whyChooseUs?: { title: string; text: string }[];
  faqs?: FAQ[];
  ctaText: string;
  ctaLink: string;
}

const ServicePageLayout = ({
  title,
  metaTitle,
  metaDescription,
  canonicalPath,
  intro,
  services,
  whyChooseUs,
  faqs,
  ctaText,
  ctaLink,
}: ServicePageLayoutProps) => {
  useEffect(() => {
    document.title = metaTitle;

    // Meta description
    let descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute("content", metaDescription);
    } else {
      descMeta = document.createElement("meta");
      descMeta.setAttribute("name", "description");
      descMeta.setAttribute("content", metaDescription);
      document.head.appendChild(descMeta);
    }

    // Self-referencing canonical URL (each page points to its own URL)
    const canonicalUrl = `https://eventkrafters.netlify.app${canonicalPath}`;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = canonicalUrl;
    } else {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    }

    // OG tags
    const ogTags: Record<string, string> = {
      "og:title": metaTitle,
      "og:description": metaDescription,
      "og:url": canonicalUrl,
      "og:type": "website",
      "og:image": "https://eventkrafters.netlify.app/og-image.jpg",
      "og:site_name": "Event Krafters",
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute("content", content);
      } else {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        tag.setAttribute("content", content);
        document.head.appendChild(tag);
      }
    });

    // FAQ structured data (AEO — helps AI search engines extract Q&A content)
    const faqSchemaId = "service-faq-schema";
    if (faqs && faqs.length > 0) {
      let schema = document.getElementById(faqSchemaId) as HTMLScriptElement | null;
      if (!schema) {
        schema = document.createElement("script");
        schema.id = faqSchemaId;
        schema.type = "application/ld+json";
        document.head.appendChild(schema);
      }
      schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      });
    }

    window.scrollTo(0, 0);

    // Cleanup: restore homepage meta on unmount
    return () => {
      document.title = "Event Krafters | Professional Event Planner in Pune | Weddings, Birthdays & Corporate";
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", "Professional event management in Pimpri-Chinchwad, Pune. From luxury weddings to corporate events. Call +91 93563 55950 for a free quote!");
      const canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canon) canon.href = "https://eventkrafters.netlify.app/";
      const faqSchema = document.getElementById(faqSchemaId);
      if (faqSchema) faqSchema.remove();
    };
  }, [metaTitle, metaDescription, canonicalPath, faqs]);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <section className="pt-32 pb-20 gradient-cream relative overflow-hidden">
        <div className="absolute top-32 left-0 w-[500px] h-[500px] bg-peach/20 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blush/15 rounded-full blur-[120px] opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1]">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">
              Our Services
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="card-premium p-5 flex items-center gap-4"
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {whyChooseUs && (
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">
                Why Choose Event Krafters?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {whyChooseUs.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="card-premium p-6"
                  >
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <section className="section-padding bg-muted/30" id="faq">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-10">
                Common questions about our services in Pune and Pimpri-Chinchwad.
              </p>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="card-premium p-6"
                  >
                    <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              className="gradient-gold text-foreground font-semibold px-10 py-6 rounded-full shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover:scale-[1.02] text-base border-0 group"
            >
              <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                {ctaText}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default ServicePageLayout;
