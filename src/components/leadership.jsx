import { data } from "../data/data";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export default function LeadershipSection() {
  const { leadership } = data.about;

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(5,150,105,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 animate-reveal">
          <div className="badge-green mb-5 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Our Leadership
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground">
            Meet the vision behind <span className="text-gradient">excellence</span>.
          </h2>
        </div>

        {/* Leadership card — horizontal layout */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white border border-border rounded-3xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-500 group">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-emerald-400" />

            <div className="p-10 md:p-14 flex flex-col items-center text-center">
              {/* Avatar placeholder — initial */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center mb-6 shadow-glow text-white text-2xl font-heading font-black">
                {leadership.name.charAt(0)}
              </div>

              <h3 className="text-3xl font-heading font-black text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {leadership.name}
              </h3>
              <p className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-6">
                {leadership.position}
              </p>

              <p className="text-base sm:text-lg text-muted leading-relaxed mb-10 font-medium max-w-xl">
                {leadership.bio}
              </p>

              {/* Contact buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${leadership.contact.email}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border text-sm font-bold text-foreground hover:text-primary hover:border-primary/25 hover:bg-secondary/40 transition-all duration-300 shadow-soft"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 text-primary">
                    <Mail size={15} />
                  </div>
                  {leadership.contact.email}
                </a>
                <a
                  href={`tel:${leadership.contact.phone}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border text-sm font-bold text-foreground hover:text-primary hover:border-primary/25 hover:bg-secondary/40 transition-all duration-300 shadow-soft"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 text-primary">
                    <Phone size={15} />
                  </div>
                  {leadership.contact.phone}
                </a>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-10 right-12 hidden md:block opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500 text-primary">
              <ArrowUpRight size={90} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
