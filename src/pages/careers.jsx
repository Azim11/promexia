import SEO from "../components/seo";
import PageHeader from "../components/page-header";
import CTASection from "../components/cta-section";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles, Terminal, Zap } from "lucide-react";
import contactInfo from "../data/contactInfo";

const positions = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    icon: Terminal,
    desc: "Build highly interactive, performance-driven web interfaces for our enterprise clients using React and modern CSS architectures.",
  },
  {
    title: "UI/UX Product Designer",
    department: "Design",
    location: "Los Angeles, CA / Hybrid",
    type: "Full-time",
    icon: Sparkles,
    desc: "Shape the future of digital experiences. Lead the visual direction of high-impact client projects with bold, unforgettable designs.",
  },
  {
    title: "Cloud Infrastructure Architect",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    icon: Zap,
    desc: "Design and implement scalable, secure cloud architectures. Optimize our deployment pipelines and ensure 99.9% uptime.",
  },
];

const cultureValues = [
  { label: "Remote-First", desc: "Work from anywhere, flexibly." },
  { label: "Innovation", desc: "Bleeding-edge tech stack." },
  { label: "Growth", desc: "Continuous learning culture." },
  { label: "Impact", desc: "Work that matters globally." },
];

const deptColors = {
  Engineering: "badge-green",
  Design: "badge-amber",
};

export default function Careers() {
  return (
    <div className="bg-background min-h-screen">
      <SEO title="Careers" path="/careers" />
      <PageHeader title={`Join ${contactInfo.companyName}`} breadcrumb="Careers" />

      {/* Culture Section */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(225,29,72,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="badge-green inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Our Culture
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-foreground leading-[1.08]">
                Build the{" "}
                <span className="text-gradient">Future of Web Tech.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed max-w-lg font-medium">
                At {contactInfo.companyName}, we don't just write code — we engineer digital transformation. We're looking for bold thinkers, relentless problem-solvers, and creative minds.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {cultureValues.map((val, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white border border-border shadow-soft hover:border-primary/20 hover:shadow-card transition-all duration-300 group">
                    <div className="text-xl font-heading font-black text-foreground mb-1 group-hover:text-primary transition-colors">{val.label}</div>
                    <p className="text-xs text-muted font-medium">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-premium border border-border group h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent z-10 mix-blend-multiply group-hover:opacity-60 transition-opacity duration-700" />
              <img
                src="/careers_main.png"
                alt={`${contactInfo.companyName} Team`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent z-20" />

              {/* Floating overlay card */}
              <div className="absolute bottom-6 left-6 glass-surface px-5 py-4 rounded-2xl z-30 shadow-card">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-black text-foreground uppercase tracking-wider">45+ Team Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="badge-green mb-5 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Open Positions
            </div>
            <h3 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-4">
              Find your <span className="text-gradient">place</span> with us.
            </h3>
            <p className="text-muted max-w-xl mx-auto font-medium">
              Discover where you fit in. We are always looking for exceptional talent to join our ranks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {positions.map((pos, idx) => (
              <div
                key={idx}
                className="group bg-white border border-border rounded-3xl p-8 hover:border-primary/25 hover:shadow-card card-lift transition-all duration-400 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/8 border border-primary/12 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                  <pos.icon size={22} />
                </div>

                <div className="mb-4">
                  <span className={`${deptColors[pos.department] || "badge-green"} inline-flex`}>
                    {pos.department}
                  </span>
                </div>

                <h4 className="text-xl font-heading font-black text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {pos.title}
                </h4>

                <p className="text-muted text-sm leading-relaxed mb-6 flex-grow font-medium">{pos.desc}</p>

                <div className="flex items-center gap-4 text-xs font-medium text-muted mb-6">
                  <span className="flex items-center gap-1.5"><MapPin size={13} /> {pos.location}</span>
                  <span className="flex items-center gap-1.5"><Clock size={13} /> {pos.type}</span>
                </div>

                <button className="flex items-center justify-between w-full py-3.5 px-5 rounded-xl bg-surface text-foreground text-sm font-bold border border-border group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                  <span>Apply Now</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
