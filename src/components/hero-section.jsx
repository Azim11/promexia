import { data } from "../data/data";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  TrendingUp,
  Zap,
  Globe,
  Shield,
} from "lucide-react";

export default function HeroSection() {
  const stats = [
    { label: "Client Satisfaction", value: "99%", icon: Shield },
    { label: "Projects Delivered", value: "500+", icon: Globe },
    { label: "Expert Engineers", value: "45+", icon: Zap },
    { label: "Avg. Client ROI", value: "127%", icon: TrendingUp },
  ];

  const trustItems = [
    "No lock-in contracts",
    "Dedicated support",
    "On-time delivery",
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 lg:pt-32 lg:pb-16 overflow-hidden bg-background">

      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div className="lg:col-span-6 xl:col-span-7">
            {/* Dynamic Badge & Live Status */}
            <div className="flex flex-wrap items-center gap-3 mb-6 animate-reveal">
              <div className="badge-green inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Web-Based Solutions Agency
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-surface border border-border text-muted">
                <Zap size={13} className="text-amber-500" />
                Custom Web Apps & Digital Marketing
              </div>
            </div>

            {/* Headline */}
            <h1
              className="text-[2.4rem] sm:text-5xl md:text-6xl xl:text-[4rem] font-heading font-black tracking-tight leading-[1.06] mb-6 animate-reveal"
              style={{ animationDelay: "0.08s" }}
            >
              <span className="text-foreground">{data.company.tagline.split("&")[0]}&</span>
              <br />
              <span className="text-gradient-hero relative">
                {data.company.tagline.split("&")[1] || "Digital Marketing Solutions"}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2.5"
                  viewBox="0 0 400 10"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 7 Q100 3 200 6 Q300 9 400 5"
                    stroke="url(#hGrad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="hGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#0284c7" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-base md:text-lg text-muted leading-relaxed max-w-xl mb-8 animate-reveal font-medium"
              style={{ animationDelay: "0.16s" }}
            >
              {data.company.description}
            </p>

            {/* Trust checklist */}
            <div
              className="flex flex-wrap items-center gap-4 mb-8 animate-reveal"
              style={{ animationDelay: "0.20s" }}
            >
              {trustItems.map((t, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                  <span className="text-xs font-semibold text-muted">{t}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center gap-3 justify-start mb-10 animate-reveal"
              style={{ animationDelay: "0.24s" }}
            >
              <Link
                to="/contact-us"
                className="group w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm text-white bg-primary shadow-glow hover:shadow-[0_12px_35px_rgba(5,150,105,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Launch Your Project
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>

              <Link
                to="/services"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm text-foreground bg-white border border-border hover:border-primary/30 hover:bg-secondary/60 transition-all duration-300 shadow-soft"
              >
                Explore Services
                <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
              </Link>
            </div>

            {/* Social proof row */}
            <div
              className="flex flex-wrap items-center gap-5 animate-reveal"
              style={{ animationDelay: "0.32s" }}
            >
              <div className="flex -space-x-2.5">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-background bg-surface overflow-hidden"
                  >
                    <img
                      src={`/avatars/avatar_${i}.png`}
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs font-black text-foreground ml-1.5">5.0</span>
                </div>
                <p className="text-[10px] font-semibold text-muted">Trusted by 500+ service businesses</p>
              </div>
            </div>
          </div>

          {/* ── Right: Visual ── */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            {/* Background glow */}
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-primary/10 via-transparent to-accent/8 blur-3xl -z-10" />

            {/* Main image frame */}
            <div className="relative animate-float">
              <div
                className="relative p-1 rounded-[2.5rem]"
                style={{
                  background: "linear-gradient(135deg, rgba(5,150,105,0.25), rgba(255,255,255,0.9), rgba(13,148,136,0.15))",
                }}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-[2.2rem] p-3 border border-white/90 shadow-premium">
                  <div className="relative rounded-[1.8rem] overflow-hidden">
                    <img
                      src="/hero_main.png"
                      alt={`Tailor-made web solutions by ${data.company.name}`}
                      className="w-full h-[300px] sm:h-[380px] lg:h-[320px] xl:h-[360px] object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />

                    {/* Live tag */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 glass px-3.5 py-1.5 rounded-full shadow-soft">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-[10px] font-black text-foreground tracking-wider uppercase">
                        Live Projects
                      </span>
                    </div>

                    {/* ROI bar */}
                    <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl px-5 py-3.5 shadow-card flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-primary/12 flex items-center justify-center text-primary">
                          <TrendingUp size={15} />
                        </div>
                        <div>
                          <div className="text-xs font-black text-foreground leading-none">+127% ROI</div>
                          <div className="text-[10px] text-muted font-semibold">Average client growth</div>
                        </div>
                      </div>
                      {/* Mini bar chart */}
                      <div className="flex items-end gap-1 h-8">
                        {[40, 60, 45, 80, 65, 90, 100].map((h, i) => (
                          <div
                            key={i}
                            className="w-1.5 rounded-t-sm"
                            style={{
                              height: `${h}%`,
                              background:
                                i === 6
                                  ? "linear-gradient(to top, #059669, #34d399)"
                                  : `rgba(5,150,105,${0.12 + i * 0.07})`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating efficiency card */}
              <div
                className="absolute -left-6 top-[22%] glass-surface p-4 rounded-2xl shadow-card max-w-[175px] hidden sm:block animate-float"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center mb-2.5 text-primary">
                  <CheckCircle2 size={16} />
                </div>
                <p className="text-sm font-black text-foreground leading-tight mb-1">98% Efficient</p>
                <p className="text-[11px] text-muted font-medium leading-snug">Performance engine active & live.</p>
              </div>

              {/* Floating metrics card */}
              <div
                className="absolute -right-5 bottom-[18%] bg-foreground text-white p-4 rounded-2xl shadow-premium border border-white/8 hidden sm:block animate-float"
                style={{ animationDelay: "2s" }}
              >
                <p className="text-[9px] font-black text-primary uppercase tracking-[0.2em] mb-2">Live Metrics</p>
                <div className="flex items-end gap-1.5 h-9">
                  {[35, 55, 40, 70, 55, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background:
                          i === 6
                            ? "#059669"
                            : `rgba(5,150,105,${0.2 + i * 0.1})`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Stats strip below image */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-border rounded-2xl px-4 py-3.5 text-center shadow-soft card-lift"
                  >
                    <Icon size={14} className="text-primary mx-auto mb-1.5" />
                    <div className="text-xl font-heading font-black text-foreground">{stat.value}</div>
                    <p className="text-[9px] font-bold text-muted uppercase tracking-wider leading-tight mt-0.5">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
