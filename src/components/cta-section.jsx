import { Link } from "react-router-dom";
import { ArrowRight, Zap, ShieldCheck, Clock, Star } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    label: "Fast Delivery",
    desc: "High-quality, responsive code at the speed of your business.",
    color: "text-primary",
    bg: "bg-primary/8",
    border: "border-primary/15",
  },
  {
    icon: ShieldCheck,
    label: "Secure & Scalable",
    desc: "Enterprise-grade security and scalable architectures by default.",
    color: "text-accent",
    bg: "bg-amber-50",
    border: "border-amber-200/60",
  },
  {
    icon: Clock,
    label: "24/7 Support",
    desc: "Round-the-clock priority technical support for every client.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200/60",
  },
];

export default function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary/6 via-secondary/60 to-amber-50/50 border border-primary/15 shadow-card">

          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(5,150,105,0.12)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(217,119,6,0.07)_0%,transparent_70%)] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-0">

            {/* Left: Content */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="badge-green mb-6 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Ready to Launch?
              </div>

              <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground leading-[1.08] mb-5">
                Ready to build your next{" "}
                <span className="text-gradient-warm">digital engine</span>?
              </h2>
              <p className="text-muted text-base md:text-lg font-medium leading-relaxed mb-8">
                Consult with our solutions architects today for a tailormade proposal.
              </p>

              {/* Star proof */}
              <div className="flex items-center gap-3 mb-10">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-muted font-medium">Rated 4.9/5 by 2,000+ clients</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact-us"
                  className="group flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-sm text-white bg-primary shadow-glow transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(5,150,105,0.5)]"
                >
                  Get Started Today
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
                <Link
                  to="/pricing"
                  className="flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-sm text-foreground bg-white border border-border hover:border-primary/25 hover:bg-secondary/40 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Right: Highlight cards */}
            <div className="p-10 md:p-16 flex flex-col gap-4 justify-center border-t lg:border-t-0 lg:border-l border-primary/10">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className={`group flex items-center gap-5 ${h.bg} ${h.border} border rounded-2xl p-5 hover:shadow-soft transition-all duration-300`}
                >
                  <div className={`w-11 h-11 rounded-xl ${h.bg} border ${h.border} flex items-center justify-center ${h.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <h.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-heading font-black text-foreground mb-0.5">{h.label}</h4>
                    <p className="text-xs text-muted font-medium leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}

              {/* SLA highlight */}
              <div className="relative overflow-hidden rounded-2xl p-6 flex items-center justify-between group hover:scale-[1.01] transition-all duration-300 bg-primary shadow-glow border border-primary/40">
                <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                  <ShieldCheck size={80} className="text-white" />
                </div>
                <div className="relative z-10">
                  <div className="text-4xl font-heading font-black text-white leading-none mb-1">99%</div>
                  <p className="text-[10px] font-black text-white/80 uppercase tracking-widest">Uptime SLA Guarantee</p>
                </div>
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-white border border-white/25">
                  <ShieldCheck size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
