import { motion } from "framer-motion";
import { Instagram, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Atmospheric photography"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
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
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse-slow" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Coming Soon
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@photographer.com"
              className="text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </nav>
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
            <h1 className="font-serif text-5xl font-medium leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
              <span className="block">Something</span>
              <span className="block italic text-gradient-gold">beautiful</span>
              <span className="block">is on its way</span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              A new photography portfolio capturing light, shadow, and the 
              stories in between. Sign up to be the first to experience it.
            </motion.p>

            {/* Email Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12"
            >
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full border-gradient bg-secondary/50 px-5 py-4 text-foreground placeholder:text-muted-foreground backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-primary sm:min-w-[300px]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 bg-primary px-8 py-4 font-medium text-primary-foreground transition-all duration-300 hover:bg-gold-glow glow-gold"
                  >
                    <span>Notify Me</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border-gradient bg-secondary/30 px-6 py-5 backdrop-blur-sm"
                >
                  <p className="text-foreground">
                    <span className="text-primary">Thank you!</span> We'll be in touch when we launch.
                  </p>
                </motion.div>
              )}
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
            © 2025 · All rights reserved
          </p>
          <p className="font-serif text-lg italic text-muted-foreground">
            Capturing moments, crafting stories
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
