import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Contact from "./pages/contact";
import Pricing from "./pages/pricing";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsConditions from "./pages/terms-and-condition";
import RefundPolicy from "./pages/refund-policy";
import CookiePolicy from "./pages/cookie-policy";
import ServiceDetails from "./pages/service-details";
import Checkout from "./pages/checkout";
import NotFound from "./pages/not-found";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Careers from "./pages/careers";
import CookieConsent from "./components/cookie-consent";
import ScrollToTop from "./components/scroll-to-top";

// Wrapper to handle animated page transitions
function RoutesSection() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
      <ScrollToTop/>
        <RoutesSection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
