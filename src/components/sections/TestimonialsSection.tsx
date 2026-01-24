import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mme Ahouandjinou",
    role: "Directrice de Cabinet",
    content: "SONIA COSMÉTIQUE m'a permis de retrouver confiance en moi. Les produits sont d'une qualité exceptionnelle et le service est irréprochable.",
    rating: 5,
  },
  {
    name: "Christelle D.",
    role: "Entrepreneure",
    content: "Depuis que j'utilise les produits SONIA, mon teint n'a jamais été aussi lumineux. Je recommande à toutes les femmes qui veulent prendre soin de leur peau.",
    rating: 5,
  },
  {
    name: "Mme Houngbédji",
    role: "Médecin",
    content: "Une boutique de référence au Bénin. L'équipe est professionnelle et les conseils personnalisés font vraiment la différence.",
    rating: 5,
  },
  {
    name: "Aminatou K.",
    role: "Avocate",
    content: "Les parfums sont divins et tiennent toute la journée. SONIA COSMÉTIQUE est devenue mon adresse beauté incontournable.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-luxury bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-primary tracking-[0.3em] uppercase text-sm">
            Témoignages
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4 mb-6">
            Ce Que Disent <span className="text-gold-gradient">Nos Clientes</span>
          </h2>
          <div className="divider-gold" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card p-8 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-primary text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-foreground">{testimonial.name}</h4>
                  <p className="font-body text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
