import SEO from "../components/seo";
import CTASection from "../components/cta-section";
import FeaturedServicesDeep from "../components/featured-section";
import HeroSection from "../components/hero-section";
import HowWeWorkSection from "../components/how-work";
import ServicesSection from "../components/service-section";
import TestimonialSection from "../components/testimonial";
import WhyUsSection from "../components/why-us";
import PricingSection from "../components/pricing-section";

export default function Home() {
  return (
    <>
      <SEO title="Home" path="/" />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <HowWeWorkSection />
      <FeaturedServicesDeep />
      <PricingSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
