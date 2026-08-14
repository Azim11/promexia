import SEO from "../components/seo";
import AboutHero from "../components/about-hero";
import CTASection from "../components/cta-section";
import IdentitySection from "../components/identity-section";
import LeadershipSection from "../components/leadership";
import NarrativeSection from "../components/narrative-section";

export default function About() {
  return (
    <>
      <SEO title="About Us" path="/about" />
      <AboutHero />
      <IdentitySection />
      <NarrativeSection />
      <LeadershipSection />
      <CTASection />
    </>
  );
}
