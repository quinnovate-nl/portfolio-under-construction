import { motion } from "framer-motion";
import { Heart, Camera, Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-soft-peach/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              {/* Placeholder for about image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blush/30 to-primary/20 flex items-center justify-center">
                <span className="text-muted-foreground font-medium">Foto Ashley</span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Over Mij
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground leading-tight">
              Hey, ik ben{" "}
              <span className="italic text-gradient-warm">Ashley</span>
            </h2>
            
            <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Als fotograaf geloof ik dat de mooiste momenten vaak de kleinste zijn. 
                Een zachte blik, een spontane lach, de tedere band tussen ouders en kind – 
                dat zijn de herinneringen die ik vastleg.
              </p>
              <p>
                Met een warme en ontspannen aanpak zorg ik ervoor dat jij je op je gemak voelt 
                voor de camera. Want de beste foto's ontstaan wanneer je gewoon jezelf bent.
              </p>
              <p>
                Gevestigd in Nederland, beschikbaar voor sessies door heel het land en daarbuiten.
              </p>
            </div>

            {/* Stats/Features */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <p className="font-serif text-2xl text-foreground">5+</p>
                <p className="text-xs text-muted-foreground">Jaren ervaring</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <p className="font-serif text-2xl text-foreground">200+</p>
                <p className="text-xs text-muted-foreground">Blije gezinnen</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <p className="font-serif text-2xl text-foreground">5.0</p>
                <p className="text-xs text-muted-foreground">Beoordeling</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
