import { data } from "../data/data";
import contactInfo from "../data/contactInfo";

export default function NarrativeSection() {
  const cardColors = [
    { bg: "bg-secondary", border: "border-primary/15", numColor: "text-primary/15" },
    { bg: "bg-amber-50", border: "border-amber-200/50", numColor: "text-accent/15" },
    { bg: "bg-emerald-50", border: "border-emerald-200/50", numColor: "text-emerald-300/30" },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="section-divider absolute left-0 right-0" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {data.about.narrative.map((item, idx) => {
            const color = cardColors[idx % cardColors.length];
            return (
              <div
                key={idx}
                className={`relative p-8 md:p-10 rounded-3xl ${color.bg} border ${color.border} shadow-soft hover:shadow-card card-lift transition-all duration-400 group flex flex-col justify-between overflow-hidden min-h-[280px]`}
              >
                {/* Ghost number */}
                <div className={`absolute -bottom-6 -right-6 text-8xl font-heading font-black ${color.numColor} select-none`}>
                  0{idx + 1}
                </div>

                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-xl bg-white/70 border border-white/80 text-xs font-black text-foreground/60 mb-6 w-fit shadow-soft">
                  0{idx + 1}
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-foreground mb-5 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted leading-relaxed font-medium">
                    {idx === 0 && (
                      <span className="font-black text-primary mr-1.5">{contactInfo.companyNameShort}</span>
                    )}
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
