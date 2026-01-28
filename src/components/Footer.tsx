import { motion } from "framer-motion";
import { Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-12 md:gap-8"
        >
          {/* Brand */}
          <div>
            <h3 className="font-handwritten text-3xl mb-4">ashley deborah</h3>
            <p className="text-background/70 leading-relaxed">
              Newborn, zwangerschap en familie fotografie. 
              Kostbare momenten, voor altijd vastgelegd.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Navigatie</h4>
            <ul className="space-y-2">
              {["Home", "Portfolio", "Investering", "Over mij", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@ashleydeborah.nl"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@ashleydeborah.nl
              </a>
              <a
                href="https://instagram.com/ashleydeborah.fotografie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @ashleydeborah.fotografie
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-background/60">
            © {currentYear} Ashley Deborah Fotografie. Alle rechten voorbehouden.
          </p>
          <p className="text-sm text-background/60 flex items-center gap-1">
            Gemaakt met <Heart className="h-3 w-3 text-blush fill-blush" /> in Nederland
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
