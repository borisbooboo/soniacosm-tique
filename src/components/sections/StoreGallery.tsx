import { motion } from "framer-motion";
import storeInterior from "@/assets/store-interior.jpg";
import storeExterior from "@/assets/store-exterior.jpg";
import storeDisplay from "@/assets/store-display.jpg";

const galleryImages = [
  {
    image: storeExterior,
    title: "Notre Façade",
    description: "Un espace élégant au cœur de Cotonou",
  },
  {
    image: storeInterior,
    title: "L'Intérieur",
    description: "Un univers de luxe et de beauté",
  },
  {
    image: storeDisplay,
    title: "Nos Rayons",
    description: "Une sélection premium de produits",
  },
];

const StoreGallery = () => {
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
            Notre Boutique
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4 mb-6">
            Découvrez Notre <span className="text-gold-gradient">Espace</span>
          </h2>
          <div className="divider-gold mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Située en face de NFFTD à Cotonou, notre boutique vous accueille dans un cadre 
            luxueux où chaque détail a été pensé pour votre confort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreGallery;
