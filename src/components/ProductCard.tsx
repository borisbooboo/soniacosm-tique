import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product, generateWhatsAppLink } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group card-luxury rounded-lg overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-body tracking-wider uppercase">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        
        <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <div className="space-y-2">
          <p className="text-foreground/80 font-body text-xs">
            <span className="text-primary">✨</span> {product.benefits}
          </p>
          <p className="text-muted-foreground font-body text-xs">
            Pour: {product.skinType}
          </p>
        </div>

        {/* CTA Button */}
        <Button
          asChild
          variant="luxury-outline"
          size="lg"
          className="w-full mt-4"
        >
          <a
            href={generateWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4" />
            Acheter via WhatsApp
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
