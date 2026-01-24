import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Sparkles,
    title: "Produits Premium",
    description: "Une sélection rigoureuse de cosmétiques et parfums de haute qualité.",
  },
  {
    icon: Heart,
    title: "Conseils Personnalisés",
    description: "Des experts beauté à votre écoute pour sublimer votre teint naturel.",
  },
  {
    icon: Award,
    title: "Satisfaction Garantie",
    description: "Votre satisfaction est notre priorité absolue, nous nous engageons à vous offrir le meilleur.",
  },
];

const AboutPreview = () => {
  return (
    <section className="section-luxury bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-primary tracking-[0.3em] uppercase text-sm">
              Notre Histoire
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mt-4 mb-6">
              L'Excellence au Service de <span className="text-gold-gradient">Votre Beauté</span>
            </h2>
            <div className="w-16 h-px bg-primary mb-8" />
            
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Chez <strong className="text-foreground">SONIA COSMÉTIQUE</strong>, nous croyons que chaque femme 
              mérite de révéler sa beauté naturelle. Notre parfumerie, située au cœur de Cotonou, 
              vous offre une expérience unique dans l'univers du luxe et du bien-être.
            </p>
            
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Notre slogan <em className="text-primary">"Mon teint, mon combat"</em> reflète notre 
              engagement à vous accompagner dans votre quête d'un teint parfait et d'une 
              confiance en soi rayonnante.
            </p>

            <Button asChild variant="luxury-outline" size="lg">
              <Link to="/a-propos">En Savoir Plus</Link>
            </Button>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex gap-5 p-6 rounded-lg bg-background/50 border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
