import { motion } from "framer-motion";
import flyerWoman1 from "@/assets/cheveux.jpg";
import flyerWoman2 from "@/assets/about-hero-bg.jpg";
import flyerWoman3 from "@/assets/eclat deux.jpg";

const flyers = [
  {
    image: flyerWoman1,
    title: "Éclat Naturel",
    subtitle: "Révélez votre beauté",
  },
  {
    image: flyerWoman2,
    title: "c'est nous",
    subtitle: "Une signature unique",
  },
  {
    image: flyerWoman3,
    title: "Beauté Sublime",
    subtitle: "Votre teint, votre fierté",
  },
];

const FlyerSection = () => {
  return (
    <section className="section-luxury bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-primary tracking-[0.3em] uppercase text-sm">
            Inspirations Beauté
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4 mb-6">
            La Beauté <span className="text-gold-gradient">Sublimée</span>
          </h2>
          <div className="divider-gold" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flyers.map((flyer, index) => (
            <motion.div
              key={flyer.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4]"
            >
              <img
                src={flyer.image}
                alt={flyer.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className="font-display text-2xl text-foreground mb-2"
                >
                  {flyer.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                  className="font-body text-primary italic"
                >
                  {flyer.subtitle}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlyerSection;
