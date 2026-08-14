import SEO from "../components/seo";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-background min-h-[88vh] flex items-center justify-center relative overflow-hidden">
      <SEO title="Page Not Found" path="/404" />

      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-[radial-gradient(circle,rgba(5,150,105,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="text-center max-w-xl mx-auto px-5 relative z-10 animate-reveal">
        {/* 404 display */}
        <div className="relative mb-10 select-none">
          <h1 className="text-[10rem] md:text-[14rem] font-heading font-black leading-none tracking-tighter text-gradient opacity-15">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white border border-border px-7 py-4 rounded-2xl shadow-premium whitespace-nowrap">
              <div className="flex items-center gap-2.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-base md:text-lg font-heading font-black text-foreground uppercase tracking-widest">
                  Page Not Found
                </span>
              </div>
              <p className="text-xs text-muted font-medium">Error 404</p>
            </div>
          </div>
        </div>

        <p className="text-base sm:text-lg text-muted leading-relaxed mb-10 max-w-sm mx-auto font-medium">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="group w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-glow hover:scale-[1.01] hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home size={15} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group w-full sm:w-auto px-8 py-4 bg-white text-foreground border border-border rounded-xl font-black text-xs uppercase tracking-widest hover:bg-surface hover:border-primary/20 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 shadow-soft cursor-pointer"
          >
            <ArrowLeft size={15} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
