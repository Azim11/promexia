import { data } from "../data/data";

const iconColors = [
  "bg-secondary border-primary/15 text-primary",
  "bg-amber-50 border-amber-200/60 text-accent",
  "bg-emerald-50 border-emerald-200/60 text-emerald-600",
  "bg-teal-50 border-teal-200/60 text-teal-600",
];

export default function IdentitySection() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.about.identity.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl bg-white border border-border shadow-soft hover:shadow-card card-lift transition-all duration-400 flex flex-col"
            >
              <div className={`w-13 h-13 rounded-2xl ${iconColors[idx % iconColors.length]} border flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-heading font-black text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
