import { data } from "../data/data";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck } from "lucide-react";

export default function HowWeWorkSection() {
  const stepColors = [
    { dot: "bg-primary", border: "border-primary", text: "text-primary", light: "bg-primary/8 border-primary/12", icon: "text-primary" },
    { dot: "bg-accent", border: "border-accent", text: "text-accent", light: "bg-amber-50 border-amber-200/60", icon: "text-accent" },
    { dot: "bg-emerald-500", border: "border-emerald-500", text: "text-emerald-600", light: "bg-emerald-50 border-emerald-200/60", icon: "text-emerald-600" },
    { dot: "bg-teal-500", border: "border-teal-500", text: "text-teal-600", light: "bg-teal-50 border-teal-200/60", icon: "text-teal-600" },
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-background">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="badge-green mb-5 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            The Process
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground leading-[1.08] mb-4">
            From vision to{" "}
            <span className="text-gradient">reality</span>{" "}
            in four steps.
          </h2>
          <p className="text-base md:text-lg text-muted font-medium leading-relaxed">
            Our structured approach ensures transparency, efficiency, and exceptional results for every project.
          </p>
        </div>

        {/* Timeline — vertical with alternating sides on desktop */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-border to-transparent hidden lg:block" />

          <div className="space-y-10 lg:space-y-12">
            {data.process.map((step, idx) => {
              const color = stepColors[idx % stepColors.length];
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step number dot on timeline */}
                  <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 ${color.border} items-center justify-center z-20 shadow-card`}>
                    <span className={`text-[10px] font-black ${color.text}`}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="w-full lg:w-[calc(50%-2.5rem)] bg-white border border-border rounded-2xl p-8 hover:border-primary/20 hover:shadow-card transition-all duration-300 card-lift relative overflow-hidden group">
                    {/* Ghost number */}
                    <div className="absolute -bottom-3 -right-2 text-[64px] font-heading font-black text-foreground/[0.03] leading-none select-none">
                      {String(idx + 1).padStart(2, "0")}
                    </div>

                    {/* Mobile badge */}
                    <div className={`lg:hidden inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${color.light} border mb-4`}>
                      <span className={`text-[10px] font-black ${color.text} uppercase tracking-wider`}>
                        Step {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl ${color.light} border flex items-center justify-center ${color.icon} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon size={22} />
                    </div>

                    <h3 className={`text-xl font-heading font-black text-foreground mb-3 group-hover:${color.text} transition-colors duration-300 relative z-10`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed font-medium relative z-10">
                      {step.description}
                    </p>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-white border border-border rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft hover:shadow-card transition-all duration-300">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-primary/8 border border-primary/12 flex items-center justify-center text-primary flex-shrink-0">
              <CalendarCheck size={26} />
            </div>
            <div>
              <h4 className="text-xl font-heading font-black text-foreground mb-0.5">On-Time Delivery Guarantee</h4>
              <p className="text-sm text-muted font-medium leading-relaxed">We respect your timelines and deliver milestones with surgical precision.</p>
            </div>
          </div>
          <Link
            to="/contact-us"
            className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-white bg-foreground whitespace-nowrap transition-all duration-300 hover:bg-primary hover:shadow-glow hover:scale-[1.02]"
          >
            Schedule a Discovery Call
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
