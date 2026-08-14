import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] sm:left-auto sm:right-6 sm:max-w-md">
      <div className="bg-white border border-border rounded-2xl p-5 shadow-premium flex flex-col sm:flex-row items-start gap-4 relative overflow-hidden">
        {/* Accent top border */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />

        {/* Icon */}
        <div className="flex-shrink-0 w-10 h-10 bg-primary/8 border border-primary/15 rounded-xl flex items-center justify-center text-primary">
          <Cookie size={20} />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-foreground font-heading font-bold text-sm mb-1.5">Your Privacy Matters</h3>
          <p className="text-muted text-xs leading-relaxed font-medium mb-4">
            We use cookies to enhance your browsing experience and analyze traffic.{" "}
            <Link to="/cookie-policy" className="text-primary hover:underline font-bold">
              Cookie Policy
            </Link>
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDecline}
              className="flex-1 px-4 py-2.5 rounded-xl border border-border text-foreground font-bold text-xs uppercase tracking-wider hover:bg-surface hover:border-primary/20 transition-all cursor-pointer"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-4 py-2.5 rounded-xl bg-primary text-white font-bold text-xs uppercase tracking-wider hover:bg-primary/90 shadow-glow transition-all cursor-pointer"
            >
              Accept All
            </button>
          </div>
        </div>

        {/* Close */}
        <button
          onClick={handleDecline}
          className="absolute top-3.5 right-3.5 text-muted hover:text-foreground transition-colors p-1"
          aria-label="Close"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
