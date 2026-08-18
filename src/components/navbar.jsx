import { useState, useEffect, useRef } from "react";
import { data } from "../data/data";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-border shadow-card py-0"
          : "bg-transparent py-2"
          }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 ">
              <img
                src="/logo.jpeg"
                alt={data.company.name}
                className="h-10 md:h-12 w-auto object-contain rounded-lg"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {data.navigation.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200 group ${isActive
                      ? "text-primary"
                      : "text-foreground/65 hover:text-foreground"
                      }`}
                  >
                    {item.name}
                    {/* Underline indicator */}
                    <span
                      className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-primary transition-all duration-300 ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-100"
                        }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/contact-us"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-sm shadow-glow hover:shadow-[0_8px_25px_rgba(5,150,105,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Get Started
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-border text-foreground/70 hover:text-foreground hover:bg-surface transition-all duration-200 relative"
              aria-label="Toggle menu"
            >
              <span className={`absolute transition-all duration-200 ${isOpen ? "opacity-100" : "opacity-0 rotate-90"}`}>
                <X size={18} />
              </span>
              <span className={`absolute transition-all duration-200 ${isOpen ? "opacity-0 -rotate-90" : "opacity-100"}`}>
                <Menu size={18} />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
            }`}
        >
          <div className="mx-4 mt-2 rounded-2xl bg-white border border-border shadow-premium overflow-hidden">
            <div className="p-4 space-y-1">
              {data.navigation.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${isActive
                      ? "bg-primary/8 text-primary"
                      : "text-foreground/70 hover:bg-surface hover:text-foreground"
                      }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                );
              })}
            </div>
            <div className="p-4 pt-0">
              <div className="h-px bg-border mb-4" />
              <Link
                to="/contact-us"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold text-white bg-primary shadow-glow"
              >
                Get Started Free
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
