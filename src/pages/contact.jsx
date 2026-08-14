import SEO from "../components/seo";
import PageHeader from "../components/page-header";
import ContactSection from "../components/contact-section";
import MapSection from "../components/map-section";
import ContactFAQ from "../components/contact-faq";
import CTASection from "../components/cta-section";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="Contact Us" path="/contact-us" />

      {/* Page Hero Header */}
      <PageHeader title="Get in Touch" breadcrumb="Contact Us" />

      {/* Main Contact Section (Details Hub & Interactive Form) */}
      <ContactSection />

      {/* Interactive Map Visual */}
      <MapSection />

      {/* Frequently Asked Questions */}
      <ContactFAQ />

      {/* Final Call to Action */}
      <CTASection />
    </>
  );
}
