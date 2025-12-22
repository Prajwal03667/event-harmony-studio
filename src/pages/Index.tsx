import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustedClientsSection from "@/components/TrustedClientsSection";
import BrandTieupsSection from "@/components/BrandTieupsSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TrustedClientsSection />
      <BrandTieupsSection />
      <StatsSection />
      <TestimonialsSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
