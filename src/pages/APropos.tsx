import { motion } from "framer-motion";
import { Sparkles, Heart, Award, Star, Target, Eye, Users, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import StoreGallery from "@/components/sections/StoreGallery";
import logo from "@/assets/logo.jpg";
import storeInterior from "@/assets/hero-bg.jpg";
import storeDisplay from "@/assets/store-display.jpg";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";

const values = [
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Nous sélectionnons uniquement des produits de qualité supérieure pour votre peau.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Notre amour pour la beauté guide chaque conseil que nous vous prodiguons.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Des années d'expérience dans l'univers des cosmétiques et parfums de luxe.",
  },
  {
    icon: Star,
    title: "Confiance",
    description: "Votre satisfaction et votre confiance sont notre plus belle récompense.",
  },
];

const timeline = [
  { year: "2019", event: "Création de SONIA COSMÉTIQUE à Cotonou" },
  { year: "2022", event: "Ouverture de notre première grande boutique" },
  { year: "20124", event: "Partenariat avec les grandes marques internationales" },
  { year: "2025", event: "Lancement de notre service de livraison" },
  { year: "2026", event: "Plus de 15 000 clients satisfaits" },
];

const APropos = () => {
  return (
    <Layout>
      {/* Hero Header with Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHeroBg}
            alt="SONIA COSMÉTIQUE"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="font-body text-primary tracking-[0.3em] uppercase text-sm">
              Notre Histoire
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
              À Propos de <span className="text-gold-gradient">Nous</span>
            </h1>
            <div className="divider-gold" />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg bg-background border border-primary/20"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-4">Notre Mission</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Offrir à chaque femme et chaque homme l'accès aux meilleurs produits cosmétiques
                et parfums, avec un service personnalisé qui fait la différence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg bg-background border border-primary/20"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-4">Notre Vision</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Devenir la référence incontournable de la beauté au Bénin et en Afrique de l'Ouest,
                en proposant l'excellence à prix accessible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-luxury bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary/20">
                <img
                  src={logo}
                  alt="SONIA COSMÉTIQUE"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                SONIA COSMÉTIQUE
              </h2>
              <p className="font-display text-xl text-primary italic mb-8">
                "Mon teint, mon combat"
              </p>
              
              <div className="space-y-6 font-body text-muted-foreground text-lg leading-relaxed">
                <p>
                  <strong className="text-foreground">SONIA COSMÉTIQUE</strong> est née 
                  d'une passion profonde pour la beauté et le bien-être. Située au cœur 
                  de Cotonou, notre parfumerie est devenue une référence pour les femmes 
                  qui recherchent l'excellence en matière de soins cosmétiques et de parfums.
                </p>
                
                <p>
                  Notre slogan <em className="text-primary">"Mon teint, mon combat"</em> 
                  n'est pas qu'une simple phrase. C'est notre engagement envers chaque 
                  cliente : vous accompagner dans votre quête d'un teint parfait, 
                  lumineux et en parfaite santé.
                </p>
                
                <p>
                  Nous croyons fermement que chaque femme mérite de révéler sa beauté 
                  naturelle. C'est pourquoi nous sélectionnons avec soin des produits 
                  de qualité exceptionnelle, adaptés à tous les types de peau et à 
                  toutes les envies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-body text-primary tracking-[0.3em] uppercase text-sm">
              Notre Parcours
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mt-4 mb-6">
              Notre <span className="text-gold-gradient">Histoire</span>
            </h2>
            <div className="divider-gold" />
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/30 mt-2" />
                  )}
                </div>
                <div className="pt-3">
                  <span className="font-display text-2xl text-primary">{item.year}</span>
                  <p className="font-body text-muted-foreground mt-1">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Gallery */}
      <StoreGallery />

      {/* Additional Store Images Section */}
      <section className="section-luxury bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-primary tracking-[0.3em] uppercase text-sm">
              Immersion
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mt-4 mb-6">
              Vivez l'Expérience <span className="text-gold-gradient">SONIA</span>
            </h2>
            <div className="divider-gold" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-lg aspect-video"
            >
              <img
                src={storeInterior}
                alt="Intérieur de la boutique"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-display text-2xl text-foreground">Un Espace Premium</h3>
                <p className="font-body text-muted-foreground">Conçu pour votre confort</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-lg aspect-video"
            >
              <img
                src={storeDisplay}
                alt="Rayons de produits"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-display text-2xl text-foreground">Sélection Exclusive</h3>
                <p className="font-body text-muted-foreground">Les meilleures marques</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Clients Love Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl text-foreground mb-4">
              Pourquoi Nos Clients <span className="text-gold-gradient">Nous Aiment</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">Service VIP</h3>
              <p className="font-body text-muted-foreground text-sm">
                Un accueil chaleureux et des conseils personnalisés pour chaque cliente
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">Produits Authentiques</h3>
              <p className="font-body text-muted-foreground text-sm">
                Garantie 100% originaux, directement des grandes marques
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">Prix Justes</h3>
              <p className="font-body text-muted-foreground text-sm">
                Le luxe accessible à tous, sans compromis sur la qualité
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-luxury bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-primary tracking-[0.3em] uppercase text-sm">
              Ce Qui Nous Définit
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mt-4 mb-6">
              Nos Valeurs
            </h2>
            <div className="divider-gold" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-lg bg-background border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
