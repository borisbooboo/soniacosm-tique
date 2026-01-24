import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Heart, Sparkles, Award } from "lucide-react";
import satisfiedWoman1 from "@/assets/eclat.jpg";
import satisfiedWoman2 from "@/assets/boris.jpg";
import satisfiedCouple from "@/assets/couple deux.jpg";

const stats = [
  { 
    icon: Users, 
    value: 1200, 
    suffix: "+",
    label: "Clients Satisfaits",
    description: "Des femmes et des hommes comblés"
  },
  { 
    icon: Heart, 
    value: 98, 
    suffix: "%",
    label: "Taux de Satisfaction",
    description: "Avis positifs de nos clients"
  },
  { 
    icon: Sparkles, 
    value: 500, 
    suffix: "+",
    label: "Produits Premium",
    description: "Cosmétiques et parfums de luxe"
  },
  { 
    icon: Award, 
    value: 10, 
    suffix: " ans",
    label: "D'Expérience",
    description: "Au service de votre beauté"
  },
];

const clientImages = [
  { src: satisfiedWoman1, alt: "Cliente satisfaite avec crème" },
  { src: satisfiedCouple, alt: "Couple heureux chez SONIA" },
  { src: satisfiedWoman2, alt: "Belle homme épanouie" },
];

interface AnimatedCounterProps {
  value: number;
  suffix: string;
  duration?: number;
}

const AnimatedCounter = ({ value, suffix, duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;
      
      if (progress < 1) {
        setCount(Math.floor(value * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl lg:text-6xl text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="section-luxury bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-primary tracking-[0.3em] uppercase text-sm">
            Notre Succès
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Des Milliers de <span className="text-gold-gradient">Clients Heureux</span>
          </h2>
          <div className="divider-gold mb-6" />
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Femmes, hommes et couples font confiance à SONIA COSMÉTIQUE pour leur beauté.
            Même les personnalités des ministères font leurs achats chez nous.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 md:p-8 rounded-lg bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <h3 className="font-display text-lg text-foreground mt-3 mb-2">
                {stat.label}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Client Images Gallery */}
        <div className="grid md:grid-cols-3 gap-6">
          {clientImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative overflow-hidden rounded-lg aspect-square group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-display text-foreground text-lg">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <Award className="w-5 h-5 text-primary" />
            <span className="font-body text-foreground">
              Référence beauté au Bénin depuis plus de 10 ans
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
