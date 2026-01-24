import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FlyerSection from "@/components/sections/FlyerSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import AboutPreview from "@/components/sections/AboutPreview";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FlyerSection />
      <StatsSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <TeamSection />
      <AboutPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
