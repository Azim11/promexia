import { data } from "../data/data";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const location = useLocation();
  const isServicesPage = location.pathname === "/services";

  const accentColors = [
    { bar: "bg-primary", badge: "badge-green", num: "text-primary/20" },
    { bar: "bg-accent", badge: "badge-amber", num: "text-accent/20" },
    { bar: "bg-emerald-400", badge: "badge-green", num: "text-emerald-200" },
    { bar: "bg-primary", badge: "badge-green", num: "text-primary/20" },
    { bar: "bg-accent", badge: "badge-amber", num: "text-accent/20" },
    { bar: "bg-rose-500", badge: "badge-green", num: "text-rose-200" },
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-background">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(5,150,105,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="badge-green mb-5 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Our Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground leading-[1.08]">
              Everything you need to{" "}
              <span className="text-gradient">dominate</span>{" "}
              digital.
            </h2>
          </div>
          <p className="text-base text-muted font-medium leading-relaxed max-w-xs">
            End-to-end web services that scale your business, automate workflows, and delight your users.
          </p>
        </div>

        {/* Service cards — horizontal wide layout */}
        <div className="space-y-4">
          {data.services.map((service, idx) => {
            const accent = accentColors[idx % accentColors.length];
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group flex flex-col md:flex-row items-start md:items-center gap-6 bg-white border border-border rounded-2xl p-6 md:p-7 hover:border-primary/25 hover:shadow-card transition-all duration-300 relative overflow-hidden"
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${accent.bar} rounded-l-2xl transition-all duration-300 group-hover:w-1.5`} />

                {/* Number */}
                <div className={`flex-shrink-0 text-[2.8rem] font-heading font-black ${accent.num} leading-none select-none hidden md:block`}>
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="flex-shrink-0 w-13 h-13 md:w-14 md:h-14 rounded-2xl bg-surface border border-border flex items-center justify-center text-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                  <service.icon size={22} strokeWidth={1.75} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-heading font-black text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed font-medium line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Features pills */}
                <div className="flex-shrink-0 hidden lg:flex flex-wrap gap-2 max-w-[260px]">
                  {service.features.slice(0, 3).map((f, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-semibold px-3 py-1 rounded-full bg-surface border border-border text-foreground/65"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Arrow CTA */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 ml-auto md:ml-0">
                  <ArrowUpRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View all CTA */}
        {!isServicesPage && (
          <div className="mt-10 flex justify-center">
            <Link
              to="/services"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-foreground text-white font-bold text-sm hover:bg-primary transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
            >
              Explore All Services
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
