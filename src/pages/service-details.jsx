import SEO from "../components/seo";
import { useParams, Link } from "react-router-dom";
import { data } from "../data/data";
import { ArrowLeft, ArrowRight, CheckCircle2, Shield, Zap, Globe, MessageSquare } from "lucide-react";
import CTASection from "../components/cta-section";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = data.services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-4xl font-heading font-black mb-4 text-foreground">Service Not Found</h2>
          <Link to="/services" className="text-primary font-bold flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const stats = [
    { label: "Success Rate", value: "99.9%", icon: Shield },
    { label: "Expert Support", value: "24/7", icon: MessageSquare },
    { label: "Uptime SLA", value: "99.99%", icon: Zap },
  ];

  const featureColors = [
    "bg-secondary border-primary/15 text-primary",
    "bg-amber-50 border-amber-200/60 text-accent",
    "bg-emerald-50 border-emerald-200/60 text-emerald-600",
    "bg-teal-50 border-teal-200/60 text-teal-600",
  ];

  return (
    <div className="bg-background">
      <SEO title={service.title} description={service.description} path={`/services/${service.id}`} />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-28 overflow-hidden bg-background">
        <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(5,150,105,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
            <div className="lg:w-1/2">
              {/* Back link */}
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-border text-primary font-bold text-xs uppercase tracking-wider mb-8 hover:bg-secondary/40 hover:border-primary/25 hover:-translate-x-0.5 transition-all duration-300 shadow-soft"
              >
                <ArrowLeft size={14} /> Back to Services
              </Link>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white border border-border shadow-card flex items-center justify-center mb-8 text-primary group-hover:shadow-glow">
                <service.icon size={30} strokeWidth={1.75} />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight text-foreground leading-[1.04] mb-7">
                {service.title}
              </h1>

              <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 font-medium">
                {service.description} We specialize in delivering high-performance, scalable solutions tailored to your unique business needs.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact-us"
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-glow hover:scale-[1.01] hover:bg-primary/90 transition-all duration-300 cursor-pointer text-center"
                >
                  Request a Quote
                </Link>
                <div className="w-full sm:w-auto flex items-center gap-3 px-5 py-4 bg-white border border-border rounded-xl shadow-soft">
                  <div className="w-8 h-8 rounded-full bg-primary/8 border border-primary/12 flex items-center justify-center text-primary">
                    <CheckCircle2 size={15} />
                  </div>
                  <span className="font-bold text-xs text-foreground uppercase tracking-wider">Available for projects</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              {/* Image frame */}
              <div
                className="relative rounded-[2.5rem] overflow-hidden shadow-premium border border-border/60 p-2.5 bg-white/60 backdrop-blur-xl animate-float"
                style={{
                  background: "linear-gradient(135deg, rgba(5,150,105,0.15), rgba(255,255,255,0.9), rgba(13,148,136,0.08))",
                }}
              >
                <img
                  src="/service_detail_main.png"
                  alt={service.title}
                  className="rounded-[2rem] w-full h-[420px] object-cover border border-border/30"
                />
              </div>

              {/* Floating stats card */}
              <div
                className="absolute -bottom-8 -left-8 bg-white border border-border p-6 rounded-2xl shadow-premium hidden sm:block animate-float"
                style={{ animationDelay: "1.2s" }}
              >
                <p className="text-[9px] font-black text-primary uppercase tracking-[0.25em] mb-4">Enterprise Grade</p>
                <div className="space-y-4">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center text-primary">
                        <stat.icon size={15} />
                      </div>
                      <div>
                        <div className="text-base font-black text-foreground leading-none mb-0.5">{stat.value}</div>
                        <div className="text-[9px] font-black text-muted uppercase tracking-widest">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="badge-green mb-4 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              What's Included
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground">
              Core <span className="text-gradient">Features</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className={`p-7 rounded-2xl border ${featureColors[idx % featureColors.length]} card-lift shadow-soft hover:shadow-card transition-all duration-400 group flex flex-col min-h-[200px]`}
              >
                <div className="flex-1">
                  <div className="w-11 h-11 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center mb-5">
                    <CheckCircle2 size={20} className="inherit" />
                  </div>
                  <h3 className="text-lg font-heading font-black text-foreground mb-2.5 group-hover:text-primary transition-colors duration-300">{feature}</h3>
                  <p className="text-sm text-muted leading-relaxed font-medium">
                    We implement industry-standard best practices to ensure your {feature.toLowerCase()} is robust, secure, and scalable.
                  </p>
                </div>
              </div>
            ))}

            {/* Global stack card */}
            <div className="p-7 rounded-2xl bg-gradient-to-br from-primary to-emerald-400 text-white shadow-glow md:col-span-2 lg:col-span-1 min-h-[200px] flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
                <Globe size={60} fill="white" />
              </div>
              <div>
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-5 text-white">
                  <Globe size={22} />
                </div>
                <h3 className="text-xl font-heading font-black mb-2">Global Stack</h3>
                <p className="text-sm text-white/80 leading-relaxed font-medium mb-5">
                  Deploy across multiple cloud regions for low latency and high availability globally.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-white font-black uppercase tracking-widest text-[10px] cursor-pointer hover:translate-x-1.5 transition-transform">
                Learn more about our stack
                <ArrowRight size={13} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
