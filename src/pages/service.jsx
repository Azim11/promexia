import SEO from "../components/seo";
import CTASection from "../components/cta-section";
import FeaturedServicesDeep from "../components/featured-section";
import PricingSection from "../components/pricing-section";
import ServicesSection from "../components/service-section";

export default function Service() {
  return (
    <>
      <SEO title="Services" path="/services" />
      <div className="space-y-40 pt-20">
        <ServicesSection />
        <FeaturedServicesDeep />
        <PricingSection />
        <CTASection />
      </div>
    </>
  );
}
