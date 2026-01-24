import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const FeaturedProducts = () => {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section-luxury bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-primary tracking-[0.3em] uppercase text-sm">
            Sélection Exclusive
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4 mb-6">
            Nos Produits Phares
          </h2>
          <div className="divider-gold mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Découvrez notre sélection de produits cosmétiques et parfums premium, 
            soigneusement choisis pour sublimer votre beauté.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button asChild variant="luxury-outline" size="lg">
            <Link to="/produits">
              Voir Tous les Produits
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
