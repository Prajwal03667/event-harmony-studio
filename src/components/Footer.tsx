import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Balloon Decoration",
  "Canopy Tents",
  "Pagoda Tents",
  "Stage & Framing",
  "Cold Pyro & SFX",
  "Theme Installations",
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-peach/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blush/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Event Krafters Logo" 
                className="w-14 h-14 rounded-full object-cover bg-background shadow-soft"
              />
              <div>
                <p className="font-display text-lg font-semibold tracking-tight">Event Krafters</p>
                <p className="text-xs text-background/50 font-medium">Premium Decor Studio</p>
              </div>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-8">
              Transforming celebrations into unforgettable experiences with elegant décor, 
              premium setups, and meticulous attention to every detail.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -2 }}
                  className="w-11 h-11 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-base font-semibold mb-6 tracking-tight">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-background/60 hover:text-background transition-colors duration-300 text-sm"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-base font-semibold mb-6 tracking-tight">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-base font-semibold mb-6 tracking-tight">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-peach" />
                </div>
                <span className="text-background/60 text-sm leading-relaxed">
                  Rahatni, Pimpri-Chinchwad,<br />Pune, Maharashtra
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-peach" />
                </div>
                <a href="tel:+919356355950" className="text-background/60 hover:text-background transition-colors text-sm">
                  +91 93563 55950
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-peach" />
                </div>
                <a href="mailto:prajwalsshelar143@gmail.com" className="text-background/60 hover:text-background transition-colors text-sm truncate">
                  prajwalsshelar143@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm text-center md:text-left">
            © 2024 Event Krafters – Premium Decor Studio. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-background/40 hover:text-background/70 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/40 hover:text-background/70 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
