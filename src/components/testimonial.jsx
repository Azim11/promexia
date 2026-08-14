import { data } from "../data/data";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cardBorders = [
  "border-primary/20 hover:border-primary/35",
  "border-accent/20 hover:border-accent/35",
  "border-emerald-300/30 hover:border-emerald-400/40",
  "border-teal-300/30 hover:border-teal-400/40",
];

const cardAccents = [
  "from-primary/[0.04] to-transparent",
  "from-accent/[0.04] to-transparent",
  "from-emerald-500/[0.04] to-transparent",
  "from-teal-500/[0.04] to-transparent",
];

export default function TestimonialSection() {
  return (
    <section className="py-28 bg-gradient-surface relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(225,29,72,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(217,119,6,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="badge-green mb-5 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Wall of Love
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground leading-[1.08]">
              Don't just take our{" "}
              <span className="text-gradient">word</span>{" "}
              for it.
            </h2>
          </div>

          {/* Global rating */}
          <div className="flex items-center gap-4 bg-white border border-border px-6 py-4 rounded-2xl shadow-soft self-start">
            <div className="text-center">
              <div className="text-2xl font-heading font-black text-foreground mb-0.5">4.9</div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-sm font-black text-foreground">2,000+</div>
              <div className="text-[11px] text-muted font-semibold">happy clients</div>
            </div>
          </div>
        </div>

        {/* Testimonial grid — 2 columns */}
        <div className="grid md:grid-cols-2 gap-5">
          {data.testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`group relative p-8 md:p-10 rounded-3xl bg-white border ${cardBorders[idx % cardBorders.length]} shadow-soft hover:shadow-card transition-all duration-400 card-lift overflow-hidden flex flex-col justify-between`}
            >
              {/* Accent gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cardAccents[idx % cardAccents.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-primary/[0.05] group-hover:text-primary/[0.08] transition-colors duration-500 pointer-events-none">
                <Quote size={52} fill="currentColor" />
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-base md:text-lg font-semibold text-foreground leading-[1.7] mb-8 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              {/* Author */}
              <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-border/60">
                <div className="w-11 h-11 rounded-2xl overflow-hidden border border-border flex-shrink-0 shadow-soft">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-black text-foreground leading-tight">{testimonial.author}</h4>
                  <p className="text-[11px] text-muted font-semibold mt-0.5">
                    {testimonial.position}
                    <span className="text-primary mx-1.5">·</span>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA — light warm style */}
        <div className="mt-8 relative overflow-hidden rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-br from-primary/8 via-secondary/50 to-amber-50/60 border border-primary/15">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(225,29,72,0.10)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 text-center lg:text-left max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-foreground mb-2.5 leading-tight">
              Ready to be our next success story?
            </h3>
            <p className="text-muted text-sm font-medium leading-relaxed">
              Join 500+ ambitious companies scaling with our tailor-made web ecosystems.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full lg:w-auto flex-shrink-0">
            <Link
              to="/contact-us"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-white bg-primary shadow-glow transition-all duration-300 hover:scale-[1.02]"
            >
              Get a Quote
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/services"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-foreground bg-white border border-border hover:border-primary/25 hover:bg-secondary/40 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
