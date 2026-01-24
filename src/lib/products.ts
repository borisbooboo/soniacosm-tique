import productSerum from "@/assets/product-serum.jpg";
import productCream from "@/assets/product-cream.jpg";
import productPerfume from "@/assets/product-perfume.jpg";
import productOil from "@/assets/product-oil.jpg";
import productMask from "@/assets/product-mask.jpg";
import productLip from "@/assets/product-lip.jpg";
import productSkincareSet from "@/assets/product-skincare-set.jpg";
import productMakeupPalette from "@/assets/product-makeup-palette.jpg";
import productBodyLotion from "@/assets/product-body-lotion.jpg";
import productHairCare from "@/assets/product-hair-care.jpg";
import productPerfumeCollection from "@/assets/product-perfume-collection.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  benefits: string;
  skinType: string;
  image: string;
  category: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "soin-visage",
    name: "Soin Visage",
    description: "Sérums, crèmes et masques pour un teint parfait",
    image: productSerum,
  },
  {
    id: "soin-corps",
    name: "Soin Corps",
    description: "Huiles, lotions et soins pour une peau soyeuse",
    image: productBodyLotion,
  },
  {
    id: "parfum",
    name: "Parfum",
    description: "Fragrances exclusives et envoûtantes",
    image: productPerfumeCollection,
  },
  {
    id: "maquillage",
    name: "Maquillage",
    description: "Sublimez votre beauté naturelle",
    image: productMakeupPalette,
  },
  {
    id: "cheveux",
    name: "Cheveux",
    description: "Shampooings et soins capillaires premium",
    image: productHairCare,
  },
];

export const products: Product[] = [
  // Soin Visage
  {
    id: "serum-eclat-or",
    name: "Sérum Éclat d'Or",
    description: "Sérum anti-âge aux extraits d'or 24K pour une peau lumineuse et rajeunie",
    benefits: "Réduit les rides, illumine le teint, hydrate en profondeur",
    skinType: "Tous types de peau",
    image: productSerum,
    category: "Soin Visage",
    featured: true,
  },
  {
    id: "creme-luxe-nuit",
    name: "Crème Luxe Nuit",
    description: "Crème de nuit régénérante enrichie en vitamines et peptides",
    benefits: "Régénère, nourrit, combat les signes de l'âge",
    skinType: "Peaux matures et sèches",
    image: productCream,
    category: "Soin Visage",
    featured: true,
  },
  {
    id: "masque-eclat-teint",
    name: "Masque Éclat Teint",
    description: "Masque illuminateur enrichi en vitamine C et acide hyaluronique",
    benefits: "Unifie le teint, hydrate, révèle l'éclat naturel",
    skinType: "Teint terne et fatigué",
    image: productMask,
    category: "Soin Visage",
  },
  {
    id: "serum-vitamine-c",
    name: "Sérum Vitamine C Pure",
    description: "Concentré antioxydant puissant pour une peau éclatante",
    benefits: "Anti-taches, éclat, protection antioxydante",
    skinType: "Peaux ternes et fatiguées",
    image: productSerum,
    category: "Soin Visage",
  },
  {
    id: "coffret-soin-complet",
    name: "Coffret Soin Complet",
    description: "Ensemble premium comprenant sérum, crème et masque anti-âge",
    benefits: "Routine complète pour une peau parfaite",
    skinType: "Tous types de peau",
    image: productSkincareSet,
    category: "Soin Visage",
    featured: true,
  },
  
  // Parfums
  {
    id: "parfum-essence-divine",
    name: "Essence Divine",
    description: "Eau de parfum sensuelle aux notes de jasmin, rose et bois de santal",
    benefits: "Fragrance longue tenue, notes florales et boisées",
    skinType: "Usage quotidien",
    image: productPerfume,
    category: "Parfum",
    featured: true,
  },
  {
    id: "parfum-nuit-royale",
    name: "Nuit Royale",
    description: "Parfum intense aux notes d'oud, ambre et vanille",
    benefits: "Fragrance séduisante et sophistiquée",
    skinType: "Soirées et occasions spéciales",
    image: productPerfumeCollection,
    category: "Parfum",
  },
  {
    id: "parfum-fleur-dor",
    name: "Fleur d'Or",
    description: "Eau de parfum florale aux notes de rose, pivoine et musc blanc",
    benefits: "Légère et féminine, tenue 8h",
    skinType: "Usage quotidien",
    image: productPerfume,
    category: "Parfum",
  },
  {
    id: "collection-miniatures",
    name: "Collection Miniatures",
    description: "Coffret de 5 miniatures de nos parfums les plus populaires",
    benefits: "Découvrez nos fragrances signature",
    skinType: "Idéal pour voyager",
    image: productPerfumeCollection,
    category: "Parfum",
  },
  
  // Soin Corps
  {
    id: "huile-corps-precieuse",
    name: "Huile Précieuse Corps",
    description: "Huile sèche nourrissante aux huiles d'argan et de rose musquée",
    benefits: "Nourrit, adoucit, laisse un fini satiné",
    skinType: "Tous types de peau",
    image: productOil,
    category: "Soin Corps",
    featured: true,
  },
  {
    id: "lait-corps-hydratant",
    name: "Lait Corps Hydratant",
    description: "Lotion corporelle légère au beurre de karité et vitamine E",
    benefits: "Hydratation 24h, peau douce et parfumée",
    skinType: "Peaux sèches et normales",
    image: productBodyLotion,
    category: "Soin Corps",
  },
  {
    id: "gommage-corps-eclat",
    name: "Gommage Corps Éclat",
    description: "Exfoliant doux aux cristaux de sucre et huiles précieuses",
    benefits: "Élimine les cellules mortes, peau lisse",
    skinType: "Tous types de peau",
    image: productBodyLotion,
    category: "Soin Corps",
  },
  
  // Maquillage
  {
    id: "baume-levres-dore",
    name: "Baume Lèvres Doré",
    description: "Soin des lèvres hydratant avec des particules d'or",
    benefits: "Hydrate, protège, sublime les lèvres",
    skinType: "Lèvres sèches",
    image: productLip,
    category: "Maquillage",
  },
  {
    id: "palette-yeux-luxe",
    name: "Palette Yeux Luxe",
    description: "Palette de 12 fards à paupières aux tons chauds et dorés",
    benefits: "Couleurs pigmentées et longue tenue",
    skinType: "Maquillage jour et soir",
    image: productMakeupPalette,
    category: "Maquillage",
    featured: true,
  },
  {
    id: "fond-de-teint-eclat",
    name: "Fond de Teint Éclat",
    description: "Fond de teint couvrant avec fini lumineux naturel",
    benefits: "Couvrance modulable, tenue 12h",
    skinType: "Tous types de peau",
    image: productCream,
    category: "Maquillage",
  },
  {
    id: "rouge-levres-mat",
    name: "Rouge à Lèvres Mat Velours",
    description: "Rouge à lèvres mat longue tenue aux couleurs intenses",
    benefits: "Confort, couleur intense, tenue 8h",
    skinType: "Toutes les lèvres",
    image: productLip,
    category: "Maquillage",
  },
  
  // Cheveux
  {
    id: "shampooing-reparateur",
    name: "Shampooing Réparateur",
    description: "Shampooing nourrissant à l'huile d'argan et kératine",
    benefits: "Répare, fortifie, brillance intense",
    skinType: "Cheveux secs et abîmés",
    image: productHairCare,
    category: "Cheveux",
  },
  {
    id: "masque-capillaire",
    name: "Masque Capillaire Intense",
    description: "Soin profond au beurre de karité et protéines de soie",
    benefits: "Nutrition intense, cheveux souples",
    skinType: "Cheveux très secs",
    image: productHairCare,
    category: "Cheveux",
  },
  {
    id: "huile-cheveux-precieuse",
    name: "Huile Cheveux Précieuse",
    description: "Huile légère aux 5 huiles précieuses pour cheveux brillants",
    benefits: "Brillance, protection thermique",
    skinType: "Tous types de cheveux",
    image: productOil,
    category: "Cheveux",
  },
  {
    id: "serum-pointes",
    name: "Sérum Pointes Sèches",
    description: "Sérum réparateur concentré pour pointes abîmées",
    benefits: "Répare les pointes, anti-fourches",
    skinType: "Pointes sèches et fourchues",
    image: productHairCare,
    category: "Cheveux",
  },
];

export const WHATSAPP_NUMBER = "+971564789374";
export const EMAIL = "soniacosmetique@gmail.com";

export const generateWhatsAppLink = (product: Product): string => {
  const message = encodeURIComponent(
    `Bonjour, je suis intéressée par ce produit de SONIA COSMÉTIQUE:\n\n` +
    `🏷️ *${product.name}*\n` +
    `📝 ${product.description}\n` +
    `✨ Bienfaits: ${product.benefits}\n\n` +
    `Pouvez-vous me donner plus d'informations ?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${message}`;
};

export const generateGeneralWhatsAppLink = (): string => {
  const message = encodeURIComponent(
    `Bonjour SONIA COSMÉTIQUE!\n\n` +
    `Je souhaite en savoir plus sur vos produits cosmétiques et parfums.\n\n` +
    `Merci de me recontacter.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${message}`;
};
