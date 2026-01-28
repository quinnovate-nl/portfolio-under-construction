import { motion } from "framer-motion";
import { Check, Camera, Baby, Users, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const packages = [
  {
    icon: Baby,
    title: "Babyshoot",
    description: "De eerste kostbare momenten van je kleine wonder",
    investment: "vanaf €275",
    features: [
      "2-3 uur sessie",
      "Inclusief outfit selectie",
      "15+ bewerkte foto's",
      "Online galerij",
      "Printbare bestanden",
    ],
  },
  {
    icon: Heart,
    title: "Zwangerschap",
    description: "De magie van het verwachten vastgelegd",
    investment: "vanaf €225",
    features: [
      "1-2 uur sessie",
      "Locatie naar keuze",
      "10+ bewerkte foto's",
      "Online galerij",
      "Partner mag mee",
    ],
    featured: true,
  },
  {
    icon: Users,
    title: "Familie",
    description: "Jullie band, jullie verhaal, jullie herinneringen",
    investment: "vanaf €250",
    features: [
      "1-2 uur sessie",
      "Thuis of op locatie",
      "15+ bewerkte foto's",
      "Online galerij",
      "Hele gezin welkom",
    ],
  },
  {
    icon: Camera,
    title: "Portret",
    description: "Jouw persoonlijkheid, prachtig in beeld",
    investment: "vanaf €175",
    features: [
      "1 uur sessie",
      "Styling advies",
      "8+ bewerkte foto's",
      "Online galerij",
      "Printbare bestanden",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
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
            Investering
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground">
            Kies jouw <span className="italic text-gradient-warm">perfecte</span> pakket
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Elk pakket is ontworpen om de mooiste herinneringen vast te leggen, 
            met persoonlijke aandacht en professionele kwaliteit.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  pkg.featured
                    ? "border-primary/50 bg-gradient-to-b from-soft-peach to-card"
                    : "bg-card"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      Populair
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <pkg.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-sm">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-serif text-3xl text-foreground mb-6">{pkg.investment}</p>
                  <ul className="space-y-3 text-left mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={pkg.featured ? "default" : "outline"}
                    className={`w-full ${pkg.featured ? "glow-warm" : ""}`}
                  >
                    <a href="#contact">Boek Nu</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 text-muted-foreground"
        >
          Combineer meerdere sessies voor een speciaal tarief.{" "}
          <a href="#contact" className="text-primary hover:underline">
            Neem contact op
          </a>{" "}
          voor maatwerk.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
