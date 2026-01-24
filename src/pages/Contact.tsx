import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle, Mail, Sparkles, Heart, Star } from "lucide-react";
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

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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
                        Cotonou, Bénin<br />
                        En face de NFFTD
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

      {/* Map/Location Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl text-foreground mb-4">
              Venez Nous <span className="text-gold-gradient">Rencontrer</span>
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Notre boutique vous accueille du lundi au samedi. Venez découvrir 
              notre sélection de produits et bénéficiez de conseils personnalisés.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-body text-foreground">
                Cotonou, Bénin - En face de NFFTD
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
