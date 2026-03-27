import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found | Event Krafters";
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute("content", "The page you are looking for does not exist. Return to Event Krafters homepage for event planning services in Pune.");
    
    // Set noindex for 404
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (robotsMeta) {
      robotsMeta.content = "noindex, nofollow";
    }

    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    return () => {
      if (robotsMeta) {
        robotsMeta.content = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
      }
    };
  }, [location.pathname]);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <section className="min-h-[70vh] flex items-center justify-center gradient-cream relative overflow-hidden">
        <div className="absolute top-32 left-0 w-[500px] h-[500px] bg-peach/20 rounded-full blur-[100px] opacity-60" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-6xl sm:text-8xl font-bold text-foreground mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-2">Page Not Found</p>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist. Let us help you find what you need.
          </p>
          <Button
            asChild
            className="gradient-gold text-foreground font-semibold px-8 py-6 rounded-full shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover:scale-[1.02] border-0 group"
          >
            <a href="/">
              Back to Home
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default NotFound;
