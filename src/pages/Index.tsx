import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Sfeervolle fotografie"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-between px-6 py-8 md:px-12 lg:px-20"
        >
          <h2 className="font-handwritten text-3xl text-foreground md:text-4xl">
            ashley deborah
          </h2>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Binnenkort Online
            </span>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="flex flex-1 flex-col items-start justify-center px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-3xl"
          >
            {/* Title */}
            <h1 className="font-serif text-4xl font-medium leading-[1.15] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              <span className="block">Iets</span>
              <span className="block italic text-gradient-warm">bijzonders</span>
              <span className="block">is in de maak</span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Een nieuwe fotografie portfolio gewijd aan de mooiste momenten: 
              newborn, zwangerschap en familie. Binnenkort hier te bewonderen.
            </motion.p>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8"
            >
              <a
                href="https://instagram.com/ashleydeborah.fotografie"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-foreground transition-colors duration-300 hover:text-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground glow-warm">
                  <Instagram className="h-5 w-5" />
                </div>
                <span className="font-medium">@ashleydeborah.fotografie</span>
              </a>
              
              <a
                href="mailto:contact@ashleydeborah.nl"
                className="group flex items-center gap-3 text-foreground transition-colors duration-300 hover:text-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground glow-warm">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="font-medium">contact@ashleydeborah.nl</span>
              </a>
            </motion.div>
          </motion.div>
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center md:px-12 lg:px-20"
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Ashley Deborah · Alle rechten voorbehouden
          </p>
          <p className="font-serif text-lg italic text-muted-foreground">
            Kostbare momenten, voor altijd vastgelegd
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
