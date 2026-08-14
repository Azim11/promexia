import SEO from "../components/seo";
import { ShieldCheck, Mail, Phone, MapPin, Calendar } from "lucide-react";
import PageHeader from "../components/page-header";
import SectionLayout from "../components/section-layout";
import { privacyData } from "../data/privacy";

export default function PrivacyPolicy() {
  const { meta, sections, contact } = privacyData;

  return (
    <>
      <SEO title="Privacy Policy" path="/privacy-policy" />
      <PageHeader title="Privacy Policy" breadcrumb="Legal" />

      <SectionLayout className="bg-slate-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Sidebar / Meta Info */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="lg:sticky lg:top-32 space-y-8 animate-reveal">
              <div className="bg-white rounded-[2rem] p-8 border border-border shadow-soft">
                <div className="flex items-center gap-3 text-primary mb-6">
                  <div className="p-2.5 bg-primary/5 border border-primary/5 rounded-xl text-primary">
                    <ShieldCheck size={22} />
                  </div>
                  <span className="font-heading font-bold text-lg text-slate-800">
                    Legal Document
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs sm:text-sm p-3 bg-slate-50 border border-border/60 rounded-xl">
                    <span className="text-slate-500 font-semibold flex items-center gap-2">
                      <Calendar size={14} /> Last Updated
                    </span>
                    <span className="font-black text-slate-700">
                      {meta.lastUpdated}
                    </span>
                  </div>
                </div>

                <div className="w-full h-px bg-border/60 my-6"></div>

                <p className="text-xs text-slate-400 italic leading-relaxed font-semibold">
                  Please read this policy carefully to understand our policies
                  and practices regarding your information and how we will treat it.
                </p>
              </div>

              {/* Quick Contact Widget */}
              <div className="bg-slate-950 text-white rounded-[2rem] p-8 hidden lg:block shadow-premium border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_65%)] opacity-[0.25] rounded-full blur-[40px] pointer-events-none"></div>
                <div className="relative z-10">
                  <h4 className="font-heading font-black text-lg mb-3">Have questions?</h4>
                  <p className="text-xs text-slate-400 mb-6 font-semibold leading-relaxed">
                    Our technical and legal teams are available to clarify any data points.
                  </p>
                  <a
                    href={`mailto:${contact.details.email}`}
                    className="text-xs font-black text-white border-b border-primary hover:text-primary transition-all duration-300 pb-0.5 uppercase tracking-widest cursor-pointer"
                  >
                    Contact Legal Team
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="prose prose-lg max-w-none text-slate-600 font-semibold animate-reveal" style={{ animationDelay: "0.15s" }}>
              {/* Loop through sections */}
              {sections.map((section) => (
                <div key={section.id} className="mb-16 last:mb-0 group scroll-mt-32">
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="text-sm font-black text-primary/40 font-mono">
                      0{section.id}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-950 m-0 group-hover:text-primary transition-colors duration-300">
                      {section.title}
                    </h2>
                  </div>

                  {section.content && (
                    <p className="text-base sm:text-lg leading-relaxed mb-6">
                      {section.content}
                    </p>
                  )}

                  {/* Render List if exists */}
                  {section.list && (
                    <ul className="grid gap-3.5 mt-6 list-none p-0">
                      {section.list.map((item, index) => (
                         <li
                          key={index}
                          className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border/80 shadow-soft hover:border-primary/20 transition-all duration-350"
                        >
                          <span className="mt-2.5 w-1.5 h-1.5 bg-primary/80 rounded-full flex-shrink-0 animate-pulse"></span>
                          <span className="leading-relaxed text-sm sm:text-base font-bold text-slate-700">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Contact Section Specifics */}
              <div className="mt-20 p-8 md:p-10 bg-white rounded-[2.5rem] border border-border shadow-premium relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-heading font-black text-slate-950 mb-4">
                    {contact.sectionTitle}
                  </h2>
                  <p className="text-slate-500 font-semibold mb-10 max-w-2xl text-sm sm:text-base leading-relaxed">
                    {contact.intro}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6.5">
                    <div className="p-5 rounded-2xl border border-border bg-slate-50/50 hover:bg-white hover:border-primary/25 transition-all duration-355 group/card">
                      <div className="w-10 h-10 bg-white border border-border/85 rounded-xl flex items-center justify-center text-primary mb-5 group-hover/card:bg-primary group-hover/card:text-white transition-all duration-300">
                        <Mail size={18} strokeWidth={2} />
                      </div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
                        Email
                      </p>
                      <a
                        href={`mailto:${contact.details.email}`}
                        className="font-bold text-slate-800 hover:text-primary transition-all duration-300 block truncate text-sm"
                      >
                        {contact.details.email}
                      </a>
                    </div>

                    <div className="p-5 rounded-2xl border border-border bg-slate-50/50 hover:bg-white hover:border-primary/25 transition-all duration-355 group/card">
                      <div className="w-10 h-10 bg-white border border-border/85 rounded-xl flex items-center justify-center text-primary mb-5 group-hover/card:bg-primary group-hover/card:text-white transition-all duration-300">
                        <Phone size={18} strokeWidth={2} />
                      </div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
                        Phone
                      </p>
                      <a
                        href={`tel:${contact.details.phone}`}
                        className="font-bold text-slate-800 hover:text-primary transition-all duration-300 block text-sm"
                      >
                        {contact.details.phone}
                      </a>
                    </div>

                    <div className="p-5 rounded-2xl border border-border bg-slate-50/50 hover:bg-white hover:border-primary/25 transition-all duration-355 group/card">
                      <div className="w-10 h-10 bg-white border border-border/85 rounded-xl flex items-center justify-center text-primary mb-5 group-hover/card:bg-primary group-hover/card:text-white transition-all duration-300">
                        <MapPin size={18} strokeWidth={2} />
                      </div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
                        Office
                      </p>
                      <p className="font-bold text-slate-800 text-xs leading-relaxed">
                        {contact.details.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}
