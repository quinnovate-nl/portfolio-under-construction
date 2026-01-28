import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    quote:
      "Ashley wist precies hoe ze onze pasgeboren baby rustig moest houden. De foto's zijn prachtig en we koesteren ze voor altijd.",
    name: "Lisa & Mark",
    role: "Ouders van baby Emma",
  },
  {
    id: 2,
    quote:
      "De zwangerschapsfotoshoot was zo ontspannen en leuk. Ashley maakte me helemaal op mijn gemak en de resultaten zijn adembenemend.",
    name: "Sophie",
    role: "Aanstaande moeder",
  },
  {
    id: 3,
    quote:
      "Onze gezinsfoto's zijn zo natuurlijk geworden. Ashley ving echte momenten tussen ons en onze kinderen. Absoluut een aanrader!",
    name: "Familie de Vries",
    role: "Gezin met 3 kinderen",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Ervaringen
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground">
            Wat klanten{" "}
            <span className="italic text-gradient-warm">zeggen</span>
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-primary/30" />
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-foreground text-lg leading-relaxed mb-8 font-serif italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    {/* Placeholder for testimonial photo */}
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-blush/30 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
