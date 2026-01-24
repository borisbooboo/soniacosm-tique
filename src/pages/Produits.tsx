import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Sparkles, TrendingUp, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";
import { Input } from "@/components/ui/input";
import productsHeroBg from "@/assets/products-hero-bg.jpg";

const heroImages = [productsHeroBg];

const benefits = [
  {
    icon: Sparkles,
    title: "Qualité Premium",
    description: "Produits authentiques sélectionnés avec soin"
  },
  {
    icon: TrendingUp,
    title: "Tendances Actuelles",
    description: "Les dernières innovations beauté"
  },
  {
    icon: Shield,
    title: "Garantie Satisfaction",
    description: "Service client exceptionnel"
  }
];

const Produits = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Auto-change background image
  useEffect(() => {
    if (heroImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    if (selectedCategory) {
      const categoryName = categories.find(c => c.id === selectedCategory)?.name;
      if (categoryName) {
        result = result.filter(product => product.category === categoryName);
      }
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }
    
    return result;
  }, [selectedCategory, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery("");
  };

  return (
    <Layout>
      {/* Hero Header with Sliding Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBgIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentBgIndex]}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/85" />
          </motion.div>
        </AnimatePresence>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="font-body text-primary tracking-[0.3em] uppercase text-sm">
              Collection Exclusive
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
              Nos <span className="text-gold-gradient">Produits</span>
            </h1>
            <div className="divider-gold mb-8" />
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Découvrez notre gamme complète de cosmétiques et parfums de luxe, 
              soigneusement sélectionnés pour sublimer votre beauté naturelle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-card border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center gap-4 text-center md:text-left"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-foreground">{benefit.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-background border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Rechercher un produit par nom..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-12 h-14 bg-card border-primary/20 focus:border-primary text-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="font-display text-2xl text-foreground text-center mb-8">
              Explorez par <span className="text-gold-gradient">Catégorie</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(
                    selectedCategory === category.id ? null : category.id
                  )}
                  className={`group relative overflow-hidden rounded-lg aspect-[4/3] transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "hover:ring-2 hover:ring-primary/50"
                  }`}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    selectedCategory === category.id
                      ? "bg-primary/60"
                      : "bg-background/60 group-hover:bg-background/70"
                  }`} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <h3 className="font-display text-lg text-foreground mb-1">
                      {category.name}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Active Filters */}
          {(selectedCategory || searchQuery) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <span className="font-body text-muted-foreground">Filtres actifs:</span>
              
              {selectedCategory && (
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  {categories.find(c => c.id === selectedCategory)?.name}
                  <button onClick={() => setSelectedCategory(null)}>
                    <X className="w-4 h-4" />
                  </button>
                </span>
              )}
              
              {searchQuery && (
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  "{searchQuery}"
                  <button onClick={() => setSearchQuery("")}>
                    <X className="w-4 h-4" />
                  </button>
                </span>
              )}
              
              <button
                onClick={clearFilters}
                className="text-sm text-muted-foreground hover:text-primary underline"
              >
                Effacer tout
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-luxury bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="font-body text-muted-foreground">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""} trouvé{filteredProducts.length > 1 ? "s" : ""}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <motion.div
                key={`${selectedCategory}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="font-display text-2xl text-foreground mb-4">
                  Aucun produit trouvé
                </p>
                <p className="font-body text-muted-foreground mb-6">
                  Essayez d'ajuster vos filtres ou votre recherche.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-primary hover:underline font-body"
                >
                  Voir tous les produits
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl text-foreground mb-4">
              Pourquoi Choisir <span className="text-gold-gradient">SONIA</span> ?
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Une expérience d'achat unique avec des produits authentiques et un service personnalisé.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-card border border-primary/10"
            >
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="font-display text-xl text-foreground mb-2">Emballage Luxe</h3>
              <p className="font-body text-muted-foreground text-sm">
                Chaque produit est soigneusement emballé pour un effet cadeau garanti
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 rounded-lg bg-card border border-primary/10"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-display text-xl text-foreground mb-2">Conseils Personnalisés</h3>
              <p className="font-body text-muted-foreground text-sm">
                Notre équipe vous guide pour trouver les produits parfaits pour vous
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 rounded-lg bg-card border border-primary/10"
            >
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-display text-xl text-foreground mb-2">Livraison Rapide</h3>
              <p className="font-body text-muted-foreground text-sm">
                Livraison à Cotonou et dans tout le Bénin sous 24-48h
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h3 className="font-display text-2xl text-foreground mb-4">
              Comment Commander ?
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              C'est simple ! Cliquez sur le bouton <strong className="text-primary">"Acheter via WhatsApp"</strong> 
              sur le produit de votre choix. Vous serez automatiquement redirigée vers 
              WhatsApp avec un message pré-rempli contenant les informations du produit.
            </p>
            <div className="flex items-center justify-center gap-4 text-muted-foreground flex-wrap">
              <div className="flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display">1</span>
                <span className="font-body">Choisir</span>
              </div>
              <div className="w-8 h-px bg-primary/30 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display">2</span>
                <span className="font-body">Contacter</span>
              </div>
              <div className="w-8 h-px bg-primary/30 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display">3</span>
                <span className="font-body">Recevoir</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Produits;
