import { data } from "../data/data";
import { Check, ArrowRight, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const brandLogos = ["TechCorp", "Cloudly", "DataStream", "Vortex", "NexaHub", "FlowAI"];

export default function PricingSection() {
  return (
    <section className="py-28 relative overflow-hidden bg-white">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(5,150,105,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge-green mb-5 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Pricing Plans
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground leading-[1.08] mb-4">
            Scalable pricing for{" "}
            <span className="text-gradient">every stage</span>{" "}
            of growth.
          </h2>
          <p className="text-base md:text-lg text-muted font-medium leading-relaxed">
            {data.pricing.header.description}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {data.pricing.tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-3xl flex flex-col justify-between transition-all duration-400 card-lift overflow-hidden ${
                tier.isPopular
                  ? "shadow-glow"
                  : "hover:shadow-card"
              }`}
              style={
                tier.isPopular
                  ? {
                      background: "linear-gradient(155deg, #059669 0%, #10b981 60%, #34d399 100%)",
                      border: "1px solid rgba(5,150,105,0.3)",
                    }
                  : {
                      background: "#ffffff",
                      border: "1px solid #e5e7eb",
                    }
              }
            >
              {/* Popular badge */}
              {tier.isPopular && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2">
                  <div
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-b-full text-[9px] font-black uppercase tracking-widest text-white shadow-lg bg-foreground"
                  >
                    <Zap size={10} fill="white" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8 md:p-9">
                {/* Tier name */}
                <div className="mb-7 pt-4">
                  <div className={`text-xs font-black uppercase tracking-[0.18em] mb-3 ${tier.isPopular ? "text-white/80" : "text-muted"}`}>
                    {tier.name}
                  </div>
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className={`text-4xl sm:text-5xl font-heading font-black ${tier.isPopular ? "text-white" : "text-foreground"}`}>
                      {tier.price === "Custom" ? "Custom" : `$${tier.price}`}
                    </span>
                    {tier.price !== "Custom" && (
                      <span className={`text-xs font-bold ${tier.isPopular ? "text-white/60" : "text-muted"}`}>/ project</span>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed font-medium ${tier.isPopular ? "text-white/75" : "text-muted"}`}>
                    {tier.description}
                  </p>
                </div>

                <div className={`h-px mb-7 ${tier.isPopular ? "bg-white/20" : "bg-border"}`} />

                {/* Features */}
                <ul className="space-y-3.5 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        tier.isPopular
                          ? "bg-white/25 text-white border border-white/30"
                          : "bg-primary/8 text-primary border border-primary/12"
                      }`}>
                        <Check size={10} strokeWidth={3.5} />
                      </div>
                      <span className={`text-sm font-medium ${tier.isPopular ? "text-white/90" : "text-foreground/80"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-8 md:px-9 pb-8 md:pb-9">
                <Link
                  to={`/checkout?plan=${tier.id === 1 ? "starter" : tier.id === 2 ? "business" : "enterprise"}`}
                  className={`group w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] ${
                    tier.isPopular
                      ? "bg-white text-primary hover:bg-white/90 shadow-md"
                      : "bg-primary text-white hover:bg-primary/90 shadow-glow"
                  }`}
                >
                  {tier.buttonText}
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Trust logos */}
        <div className="mt-20 text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />
          <p className="text-[10px] font-black text-muted uppercase tracking-[0.25em] mb-8">Trusted by world-class teams</p>
          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-14">
            {brandLogos.map((logo, i) => (
              <div
                key={i}
                className="text-base font-heading font-black text-foreground/20 hover:text-primary transition-all duration-300 tracking-tight cursor-default hover:scale-105"
              >
                {logo}
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
            ))}
            <span className="ml-2 text-sm font-bold text-foreground">4.9/5</span>
            <span className="text-sm text-muted font-medium">from 2,000+ clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
