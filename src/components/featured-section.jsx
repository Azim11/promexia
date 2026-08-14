import { data } from "../data/data";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  "/featured_service_1.png",
  "/featured_service_2.png",
];

export default function FeaturedServicesDeep() {
  return (
    <section className="py-28 overflow-hidden bg-gradient-surface">
      <div className="section-divider" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="badge-green mb-5 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Core Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground leading-[1.08] mb-4">
            Engineered for{" "}
            <span className="text-gradient">Scale</span>{" "}
            and Speed.
          </h2>
          <p className="text-base md:text-lg text-muted font-medium leading-relaxed">
            We don't just build websites — we create digital engines that power your business growth.
          </p>
        </div>

        <div className="space-y-28">
          {data.featuredServices.map((service, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:items-center gap-14 lg:gap-20 ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Visual */}
              <div className="lg:w-[46%] relative group">
                {/* Outer glow */}
                <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-primary/8 to-accent/6 blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Image frame */}
                <div
                  className="relative rounded-[2.5rem] p-1 shadow-premium"
                  style={{
                    background: "linear-gradient(135deg, rgba(5,150,105,0.2), rgba(255,255,255,0.85), rgba(13,148,136,0.12))",
                  }}
                >
                  <div className="bg-white/80 backdrop-blur-xl rounded-[2.1rem] p-3 border border-white/90">
                    <div className="relative rounded-[1.7rem] overflow-hidden">
                      <img
                        src={images[idx]}
                        alt={service.title}
                        className="w-full h-[340px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Floating stat card — light style */}
                <div
                  className={`absolute ${idx % 2 === 0 ? "-right-5" : "-left-5"} -bottom-7 
                    bg-white border border-border p-5 rounded-2xl shadow-premium max-w-[170px] animate-float`}
                  style={{ animationDelay: `${idx * 1.2}s` }}
                >
                  <div className="text-3xl font-heading font-black leading-none mb-1.5 text-gradient">
                    {service.stat.value}
                  </div>
                  <p className="text-[10px] font-black text-muted uppercase tracking-widest leading-tight">
                    {service.stat.label}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-[54%]">
                <div className="badge-amber mb-6 inline-flex">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {service.category}
                </div>

                <h3 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-5 leading-[1.12]">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-muted mb-10 leading-relaxed font-medium">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="space-y-5 mb-10">
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex gap-4 group/b">
                      <div className="w-9 h-9 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center text-primary flex-shrink-0 group-hover/b:bg-primary group-hover/b:text-white transition-all duration-300 mt-0.5">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <h4 className="text-base font-black text-foreground mb-0.5 group-hover/b:text-primary transition-colors duration-300">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-muted font-medium leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/services/${idx === 0 ? 1 : 2}`}
                  className="group/btn inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl font-bold text-sm text-white bg-primary shadow-glow hover:shadow-[0_12px_35px_rgba(5,150,105,0.5)] hover:scale-[1.02] transition-all duration-300"
                >
                  Learn more about {service.category}
                  <ArrowRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
