import ServicePageLayout from "@/components/ServicePageLayout";

const WeddingPlannerPune = () => (
  <ServicePageLayout
    metaTitle="Best Wedding Planner in Pune | Luxury Wedding Management | Event Krafters"
    metaDescription="Plan your dream wedding in Pune with Event Krafters. Complete wedding planning, decor, and coordination for a stress-free celebration."
    canonicalPath="/wedding-planner-pune"
    title="Wedding Planner in Pimpri-Chinchwad, Pune"
    intro="Event Krafters is Pimpri-Chinchwad's most trusted wedding planning company. From intimate ceremonies to grand receptions, we handle every detail of your special day."
    services={[
      "Wedding decoration & themes",
      "Mandap & stage setup",
      "Cold pyro & special effects",
      "Floral arrangements",
      "Lighting & ambiance",
      "Canopy & pagoda tent setup",
    ]}
    whyChooseUs={[
      {
        title: "15+ Years of Experience",
        text: "With over 500 weddings managed, we bring unmatched expertise to every celebration across Pune and Pimpri-Chinchwad.",
      },
      {
        title: "Attention to Detail",
        text: "Every flower, every light, every fabric is carefully curated to match your vision and create a truly magical atmosphere.",
      },
      {
        title: "Local Expertise in Pune",
        text: "As a Rahatni-based company, we know every venue and vendor in PCMC and Pune, ensuring seamless coordination for your big day.",
      },
    ]}
    faqs={[
      {
        question: "What wedding planning services do you offer in Pune?",
        answer:
          "We offer complete wedding planning and management in Pune and Pimpri-Chinchwad — wedding decoration and themes, mandap and stage setup, floral arrangements, lighting, canopy and pagoda tents, cold pyro effects, vendor coordination, and on-the-day management.",
      },
      {
        question: "How much does wedding planning cost in Pune?",
        answer:
          "Wedding planning packages are customised based on the number of guests, venue, and decor requirements. Contact us for a free, detailed quote — we respond within 2 hours.",
      },
      {
        question: "How far in advance should we book our wedding?",
        answer:
          "We recommend booking 2–3 months in advance to ensure availability and enough planning time. For peak wedding season dates, earlier booking is strongly advised.",
      },
      {
        question: "Do you handle outdoor and destination weddings?",
        answer:
          "Yes! We specialise in outdoor wedding setups including canopy tent installation, pagoda tents, stage framing, and lighting for weddings across Pune and PCMC.",
      },
      {
        question: "Can you manage only the decor, or full wedding planning?",
        answer:
          "Both. Whether you need only wedding decoration and stage setup or end-to-end planning with vendor coordination and day-of management, we tailor our services to your needs.",
      },
      {
        question: "How do we get started with Event Krafters?",
        answer:
          "Simply call or WhatsApp us at +91 93563 55950 or click the WhatsApp button on this page. Share your date, venue, and guest count, and we'll respond within 2 hours with a quote.",
      },
    ]}
    ctaText="Get a Free Wedding Quote"
    ctaLink="https://wa.me/919356355950?text=Hi!%20I%20need%20a%20wedding%20planning%20quote."
  />
);

export default WeddingPlannerPune;
