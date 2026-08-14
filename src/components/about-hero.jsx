import { Sparkles, ArrowRight, Shield, Zap } from "lucide-react";
import { data } from "../data/data";
import contactInfo from "../data/contactInfo";

export default function AboutHero() {
  const { hero } = data.about;

  return (
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-28 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(5,150,105,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: Content */}
          <div className="relative z-10">
            <div className="badge-green mb-6 inline-flex animate-reveal">
              <Sparkles size={11} className="animate-pulse" />
              {hero.subtitle}
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight text-foreground leading-[1.04] mb-7 animate-reveal"
              style={{ animationDelay: "0.1s" }}
            >
              We are{" "}
              <span className="text-gradient font-black">{contactInfo.companyNameShort}</span>.
              <br />
              <span className="text-foreground/70 text-4xl sm:text-5xl">{hero.title}</span>
            </h1>

            <p
              className="text-base sm:text-lg text-muted leading-relaxed max-w-xl mb-12 font-medium animate-reveal"
              style={{ animationDelay: "0.2s" }}
            >
              {hero.description}
            </p>

            {/* Stats row */}
            <div
              className="flex flex-wrap gap-8 sm:gap-12 animate-reveal"
              style={{ animationDelay: "0.3s" }}
            >
              <div>
                <div className="text-4xl md:text-5xl font-heading font-black text-foreground mb-1 leading-none text-gradient">10+</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-muted">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div>
                <div className="text-4xl md:text-5xl font-heading font-black text-foreground mb-1 leading-none text-gradient">500+</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-muted">Web Projects</div>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div>
                <div className="text-4xl md:text-5xl font-heading font-black text-foreground mb-1 leading-none text-gradient">99%</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-muted">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right: Visual grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-5 relative z-10 animate-reveal" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-5 pt-10">
                <div className="rounded-[1.75rem] overflow-hidden h-56 shadow-card border border-border/50 p-2 bg-white/60 backdrop-blur-xl card-lift">
                  <img
                    src="/about_hero_1.png"
                    alt={`Bespoke software architecture by ${contactInfo.companyName}`}
                    className="w-full h-full object-cover rounded-[1.3rem]"
                  />
                </div>
                <div className="p-6 rounded-[1.75rem] bg-gradient-to-br from-primary to-emerald-400 text-white shadow-glow border border-primary/20">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4 text-white">
                    <Zap size={20} />
                  </div>
                  <h4 className="text-lg font-heading font-black mb-1">Innovation</h4>
                  <p className="text-xs text-white/80 font-medium leading-relaxed">Pushing visual and technical boundaries with every pixel.</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="p-6 rounded-[1.75rem] bg-white border border-border shadow-card card-lift">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center mb-4 text-primary">
                    <Shield size={20} />
                  </div>
                  <h4 className="text-lg font-heading font-black text-foreground mb-1">Trust</h4>
                  <p className="text-xs text-muted font-medium leading-relaxed">Built on clear, long-term technical partnerships and reliability.</p>
                </div>
                <div className="rounded-[1.75rem] overflow-hidden h-64 shadow-card border border-border/50 p-2 bg-white/60 backdrop-blur-xl card-lift">
                  <img
                    src="/about_hero_2.png"
                    alt="Modern UI/UX design collaboration"
                    className="w-full h-full object-cover rounded-[1.3rem]"
                  />
                </div>
              </div>
            </div>

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[80px] -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
