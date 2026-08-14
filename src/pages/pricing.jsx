import { useEffect } from "react";
import SEO from "../components/seo";
import PricingSection from "../components/pricing-section";
import CTASection from "../components/cta-section";

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="Pricing" path="/pricing" />
      <div className="space-y-40 pt-20">
        <PricingSection />
        <CTASection />
      </div>
    </>
  );
}
