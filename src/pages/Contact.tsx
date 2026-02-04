import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle, Mail, Sparkles, Heart, Star, Navigation, ExternalLink, Maximize2, Minimize2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { generateGeneralWhatsAppLink, WHATSAPP_NUMBER, EMAIL } from "@/lib/products";
import { toast } from "sonner";
import storeInterior from "@/assets/inter.jpg";
import storeExterior from "@/assets/exterieur.jpg";
import storeDisplay from "@/assets/produit.jpg";
import aboutHeroBg from "@/assets/inter.jpg";

const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  email: z.string().email("Veuillez entrer une adresse email valide").max(255),
  phone: z.string().optional(),
  subject: z.string().min(3, "Le sujet doit contenir au moins 3 caractères").max(200),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères").max(1000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const reasons = [
  { icon: Sparkles, title: "Conseils Experts", description: "Équipe professionnelle à votre écoute" },
  { icon: Heart, title: "Service Premium", description: "Une expérience client exceptionnelle" },
  { icon: Star, title: "Réponse Rapide", description: "Nous répondons sous 24h max" },
];

// Coordonnées de la boutique
const BOUTIQUE_COORDINATES = {
  lat: 6.3654, // Latitude approximative de Cotonou
  lng: 2.4183, // Longitude approximative de Cotonou
  address: "En face du complexe scolaire privée HONKLOHON Zogbadjè-Agori, Cotonou, Bénin"
};

const MAP_EMBED_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.907428155398!2d2.4183!3d6.3654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023556d5e6e1c7b%3A0x7c07f05c8e8e8e8e!2sComplexe%20Scolaire%20Priv%C3%A9%20HONKLOHON!5e0!3m2!1sfr!2sbj!4v169876543210!5m2!1sfr!2sbj`;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);
  const [mapZoom, setMapZoom] = useState(15);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    const whatsappMessage = `Bonjour SONIA COSMÉTIQUE,

Je suis ${data.name}.
Email: ${data.email}${data.phone ? `\nTéléphone: ${data.phone}` : ""}

Sujet: ${data.subject}

${data.message}`;
    
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappLink, "_blank");
    
    setIsSubmitted(true);
    toast.success("Message préparé ! Vous allez être redirigé vers WhatsApp.");
    
    setTimeout(() => {
      form.reset();
      setIsSubmitted(false);
    }, 3000);
  };

  const openGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps?q=${BOUTIQUE_COORDINATES.lat},${BOUTIQUE_COORDINATES.lng}&z=${mapZoom}`,
      "_blank"
    );
  };

  const openWaze = () => {
    window.open(
      `https://www.waze.com/ul?ll=${BOUTIQUE_COORDINATES.lat},${BOUTIQUE_COORDINATES.lng}&navigate=yes`,
      "_blank"
    );
  };

  const getDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        window.open(
          `https://www.google.com/maps/dir/${userLat},${userLng}/${BOUTIQUE_COORDINATES.lat},${BOUTIQUE_COORDINATES.lng}/`,
          "_blank"
        );
      });
    } else {
      openGoogleMaps();
    }
  };

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
              Parlons Beauté
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
              Contactez-<span className="text-gold-gradient">Nous</span>
            </h1>
            <div className="divider-gold mb-8" />
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Vous avez des questions ? Besoin de conseils personnalisés ? 
              Notre équipe est à votre écoute pour vous accompagner dans votre 
              parcours beauté.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-12 bg-card border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 justify-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-foreground">{reason.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Images Banner */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { image: storeExterior, title: "Notre Façade", subtitle: "Venez nous rendre visite" },
              { image: storeInterior, title: "L'Intérieur", subtitle: "Un espace élégant" },
              { image: storeDisplay, title: "Nos Produits", subtitle: "Sélection premium" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg aspect-video group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="font-display text-lg text-foreground">{item.title}</p>
                  <p className="font-body text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl text-foreground mb-3">
                Notre <span className="text-gold-gradient">Emplacement</span>
              </h2>
              <p className="font-body text-muted-foreground">
                Retrouvez-nous facilement à Cotonou
              </p>
            </div>

            <div className={`${isMapFullscreen ? 'fixed inset-0 z-50 p-4 bg-background' : 'relative rounded-xl overflow-hidden border border-primary/20 shadow-lg'}`}>
              {/* Map Controls */}
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMapZoom(prev => Math.min(prev + 1, 20))}
                  className="bg-card/80 backdrop-blur-sm"
                >
                  <span className="text-lg">+</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMapZoom(prev => Math.max(prev - 1, 10))}
                  className="bg-card/80 backdrop-blur-sm"
                >
                  <span className="text-lg">-</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsMapFullscreen(!isMapFullscreen)}
                  className="bg-card/80 backdrop-blur-sm"
                >
                  {isMapFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </Button>
              </div>

              {/* Google Maps Embed */}
              <div className="relative aspect-video w-full">
                <iframe
                  src={`${MAP_EMBED_URL}&z=${mapZoom}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation SONIA COSMÉTIQUE"
                  className="absolute inset-0"
                />
                
                {/* Custom Map Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                
                {/* Location Marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-pulse">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -left-2 w-12 h-12 border-2 border-primary/30 rounded-full animate-ping" />
                  </div>
                </div>
              </div>

              {/* Map Actions Bar */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex gap-2 bg-card/80 backdrop-blur-sm rounded-full p-1 border border-primary/20">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={getDirections}
                    className="rounded-full gap-2"
                  >
                    <Navigation className="w-4 h-4" />
                    Itinéraire
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={openGoogleMaps}
                    className="rounded-full gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Google Maps
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={openWaze}
                    className="rounded-full gap-2"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                    </svg>
                    Waze
                  </Button>
                </div>
              </div>

              {/* Address Info Overlay */}
              <div className="absolute top-4 left-4 z-10 max-w-xs">
                <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-primary/20 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-foreground text-sm font-semibold mb-1">
                        SONIA COSMÉTIQUE
                      </h3>
                      <p className="font-body text-xs text-muted-foreground leading-tight">
                        {BOUTIQUE_COORDINATES.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Zoom Indicator */}
            <div className="mt-4 flex items-center justify-center gap-4">
              <span className="font-body text-sm text-muted-foreground">
                Zoom: {mapZoom}x
              </span>
              <div className="w-32 bg-primary/10 rounded-full h-2">
                <div 
                  className="bg-primary rounded-full h-full transition-all duration-300"
                  style={{ width: `${((mapZoom - 10) / 10) * 100}%` }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-luxury bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card p-8 md:p-10 rounded-lg border border-primary/20"
              >
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                  Envoyez-nous un Message
                </h2>
                <p className="font-body text-muted-foreground mb-8">
                  Remplissez le formulaire et nous vous répondrons via WhatsApp.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2">
                      Message Envoyé !
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Vous êtes redirigé vers WhatsApp...
                    </p>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Nom complet *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Votre nom"
                                  className="bg-background border-primary/20 focus:border-primary"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Email *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="votre@email.com"
                                  className="bg-background border-primary/20 focus:border-primary"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Téléphone</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="+229 XX XX XX XX"
                                  className="bg-background border-primary/20 focus:border-primary"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Sujet *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Ex: Demande de conseil"
                                  className="bg-background border-primary/20 focus:border-primary"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Décrivez votre demande..."
                                rows={5}
                                className="bg-background border-primary/20 focus:border-primary resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" variant="luxury" size="lg" className="w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Envoyer via WhatsApp
                      </Button>
                    </form>
                  </Form>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Contact Cards */}
                <div className="bg-card p-8 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-2">
                        Adresse
                      </h3>
                      <p className="font-body text-muted-foreground">
                        {BOUTIQUE_COORDINATES.address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-2">
                        Téléphone / WhatsApp
                      </h3>
                      <a 
                        href={`tel:${WHATSAPP_NUMBER}`}
                        className="font-body text-primary hover:underline"
                      >
                        {WHATSAPP_NUMBER}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-2">
                        Email
                      </h3>
                      <a 
                        href={`mailto:${EMAIL}`}
                        className="font-body text-primary hover:underline"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-2">
                        Horaires d'ouverture
                      </h3>
                      <p className="font-body text-muted-foreground">
                        Lundi - Samedi: 9h - 20h<br />
                        Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Direct CTA */}
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-lg border border-primary/30 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#25D366]/20 flex items-center justify-center mb-4">
                    <MessageCircle className="w-8 h-8 text-[#25D366]" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">
                    Réponse Rapide ?
                  </h3>
                  <p className="font-body text-muted-foreground mb-6">
                    Contactez-nous directement sur WhatsApp pour une réponse immédiate.
                  </p>
                  <Button asChild variant="whatsapp" size="lg" className="w-full">
                    <a
                      href={generateGeneralWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Écrire sur WhatsApp
                    </a>
                  </Button>
                </div>

                {/* Social Media */}
                <div className="text-center pt-6">
                  <h3 className="font-display text-lg text-foreground mb-4">
                    Suivez-nous
                  </h3>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-card border border-primary/20 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-card border border-primary/20 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                      aria-label="TikTok"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;