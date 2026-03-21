import ServicePageLayout from "@/components/ServicePageLayout";

const WeddingPlannerPune = () => (
  <ServicePageLayout
    metaTitle="Wedding Planner in Pune & Pimpri-Chinchwad | Event Krafters"
    metaDescription="Top wedding planners in Pune & Pimpri-Chinchwad. Complete wedding decoration, stage setup, cold pyro & theme installations. Call +91 93563 55950."
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
    ctaText="Get a Free Wedding Quote"
    ctaLink="https://wa.me/919356355950?text=Hi!%20I%20need%20a%20wedding%20planning%20quote."
  />
);

export default WeddingPlannerPune;
