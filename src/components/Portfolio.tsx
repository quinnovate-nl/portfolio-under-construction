import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const categories = [
  { id: "all", label: "Alles" },
  { id: "babyshoot", label: "Babyshoot" },
  { id: "familie", label: "Familie" },
  { id: "portret", label: "Portret" },
  { id: "zwangerschap", label: "Zwangerschap" },
];

// Placeholder images - replace with actual portfolio images
const portfolioItems = [
  { id: 1, category: "babyshoot", alt: "Newborn baby fotografie" },
  { id: 2, category: "zwangerschap", alt: "Zwangerschapsfotografie" },
  { id: 3, category: "familie", alt: "Gezinsfotografie" },
  { id: 4, category: "portret", alt: "Portretfotografie" },
  { id: 5, category: "babyshoot", alt: "Baby fotografie" },
  { id: 6, category: "familie", alt: "Familie portret" },
  { id: 7, category: "zwangerschap", alt: "Zwangerschap portret" },
  { id: 8, category: "portret", alt: "Individueel portret" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground">
            Mijn <span className="italic text-gradient-warm">werk</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Een selectie van mijn favoriete momenten die ik heb mogen vastleggen.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <AspectRatio ratio={4 / 5} className="overflow-hidden rounded-lg">
                  <div className="relative h-full w-full bg-gradient-to-br from-soft-peach to-muted">
                    {/* Placeholder - replace with actual images */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm font-medium capitalize">
                        {item.category}
                      </span>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                      <span className="text-background text-sm font-medium px-4 py-2 bg-foreground/80 rounded-full">
                        Bekijk
                      </span>
                    </div>
                  </div>
                </AspectRatio>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/ashleydeborah.fotografie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Bekijk meer op Instagram
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
