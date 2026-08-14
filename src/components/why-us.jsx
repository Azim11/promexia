import { data } from "../data/data";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyUsSection() {
  const FirstIcon = data.whyUs[0].icon;

  const cellColors = [
    { bg: "bg-secondary", border: "border-primary/15", icon: "text-primary", iconBg: "bg-primary/10 border-primary/15" },
    { bg: "bg-amber-50", border: "border-amber-200/60", icon: "text-accent", iconBg: "bg-amber-100 border-amber-200/60" },
    { bg: "bg-emerald-50", border: "border-emerald-200/60", icon: "text-emerald-600", iconBg: "bg-emerald-100 border-emerald-200/60" },
    { bg: "bg-teal-50", border: "border-teal-200/60", icon: "text-teal-600", iconBg: "bg-teal-100 border-teal-200/60" },
  ];

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(5,150,105,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="badge-green mb-5 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground leading-[1.08] mb-4">
            Engineered for{" "}
            <span className="text-gradient">performance</span>{" "}
            and reliability.
          </h2>
          <p className="text-base md:text-lg text-muted font-medium leading-relaxed">
            We've refined our process over 10+ years to deliver web solutions that aren't just beautiful, but built to solve your toughest business challenges.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">

          {/* Large featured card — spans 2 cols */}
          <div className="lg:col-span-2 relative bg-gradient-to-br from-primary to-rose-500 text-white rounded-3xl p-10 overflow-hidden flex flex-col justify-between min-h-[340px] group shadow-glow">
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-black/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white mb-8">
                <FirstIcon size={26} />
              </div>
              <div className="text-[60px] font-heading font-black text-white/8 absolute top-10 right-10 leading-none select-none">01</div>
              <h3 className="text-2xl font-heading font-black mb-3">{data.whyUs[0].title}</h3>
              <p className="text-white/80 text-sm leading-relaxed font-medium">{data.whyUs[0].description}</p>
            </div>

            <div className="relative z-10 flex items-center gap-3 mt-10">
              <div className="flex -space-x-2.5">
                {[1, 2, 3].map((i) => (
                  <img key={i} src={`/avatars/avatar_${i}.png`} className="w-8 h-8 rounded-full border-2 border-white/40 object-cover" alt="" />
                ))}
              </div>
              <p className="text-[11px] text-white/70 font-semibold">500+ projects delivered</p>
            </div>
          </div>

          {/* 2x2 right grid — 3 cols */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {data.whyUs.slice(1, 5).map((item, idx) => {
              const color = cellColors[idx];
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`group relative ${color.bg} border ${color.border} rounded-3xl p-8 hover:shadow-card transition-all duration-300 card-lift overflow-hidden`}
                >
                  <div className="absolute -bottom-6 -right-4 text-[72px] font-heading font-black select-none leading-none opacity-20 text-foreground">
                    {String(idx + 2).padStart(2, "0")}
                  </div>
                  <div className={`w-12 h-12 rounded-xl ${color.iconBg} border flex items-center justify-center ${color.icon} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-heading font-black text-foreground mb-2.5 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed font-medium">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quality assurance banner */}
        <div className="mt-6 bg-surface border border-border rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-13 h-13 rounded-2xl bg-primary/8 border border-primary/12 flex items-center justify-center text-primary flex-shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h4 className="text-xl font-heading font-black text-foreground mb-0.5">100% Quality Assurance</h4>
              <p className="text-sm text-muted font-medium leading-relaxed">
                Every project undergoes rigorous testing and peer reviews. We leave no details unchecked.
              </p>
            </div>
          </div>
          <Link
            to="/contact-us"
            className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-white bg-primary whitespace-nowrap transition-all duration-300 hover:scale-[1.02] shadow-glow hover:shadow-[0_12px_35px_rgba(5,150,105,0.5)]"
          >
            Start Your Journey
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
