import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageHeader({ title, breadcrumb }) {
  return (
    <div className="relative pt-40 pb-18 overflow-hidden bg-background">
      {/* Background dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[350px] bg-[radial-gradient(circle,rgba(225,29,72,0.07)_0%,transparent_70%)] pointer-events-none" />
      {/* Horizontal accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-7">
          <Link
            to="/"
            className="text-muted hover:text-primary transition-colors duration-200 flex items-center gap-1.5 text-xs font-bold"
          >
            <Home size={12} />
            Home
          </Link>
          <ChevronRight size={11} className="text-muted/40" />
          <span className="text-primary font-black text-xs uppercase tracking-wider">
            {breadcrumb || title}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight text-foreground mb-6 leading-[1.04]">
          {title}
        </h1>

        {/* Decorative accent */}
        <div className="flex items-center justify-center gap-2">
          <div className="h-px w-10 bg-border" />
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-primary to-accent" />
          <div className="h-2 w-2 rounded-full bg-accent/60 animate-pulse" />
          <div className="h-px w-10 bg-border" />
        </div>
      </div>
    </div>
  );
}
