import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateGeneralWhatsAppLink, WHATSAPP_NUMBER } from "@/lib/products";

const CTASection = () => {
  return (
    <section className="section-luxury bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="font-body text-primary tracking-[0.3em] uppercase text-sm">
            Passez à l'Action
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4 mb-6">
            Prête à Révéler <span className="text-gold-gradient">Votre Éclat</span> ?
          </h2>
          <div className="divider-gold mb-8" />
          
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Contactez-nous dès maintenant pour découvrir nos produits et bénéficier 
            de conseils beauté personnalisés. Notre équipe est à votre écoute !
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-body text-sm text-muted-foreground">Adresse</p>
                <p className="font-body text-foreground">Cotonou, Bénin</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-body text-sm text-muted-foreground">Téléphone</p>
                <p className="font-body text-foreground">{WHATSAPP_NUMBER}</p>
              </div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild variant="whatsapp" size="xl">
              <a
                href={generateGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Commander via WhatsApp
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
