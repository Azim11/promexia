import SEO from "../components/seo";
import { FileText, Calendar, Printer, ArrowRight } from "lucide-react";
import PageHeader from "../components/page-header";
import SectionLayout from "../components/section-layout";
import { termsData } from "../data/terms";

export default function TermsConditions() {
  const { meta, intro, sections, contact } = termsData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <SEO title="Terms & Conditions" path="/terms-conditions" />
      <PageHeader title="Terms & Conditions" breadcrumb="Legal" />

      <SectionLayout className="bg-slate-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="lg:sticky lg:top-32 space-y-8 animate-reveal">
              <div className="bg-white rounded-[2rem] p-8 border border-border shadow-soft">
                <div className="flex items-center gap-3 text-primary mb-6">
                  <div className="p-2.5 bg-primary/5 border border-primary/5 rounded-xl text-primary">
                    <FileText size={20} />
                  </div>
                  <span className="font-heading font-bold text-lg text-slate-800">
                    Agreement Status
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between text-xs sm:text-sm p-3 bg-slate-50 border border-border/60 rounded-xl">
                    <span className="text-slate-500 font-semibold flex items-center gap-2">
                      <Calendar size={14} /> Effective Date
                    </span>
                    <span className="font-black text-slate-700">
                      {meta.lastUpdated}
                    </span>
                  </div>

                  <button
                    onClick={handlePrint}
                    className="w-full py-3.5 flex items-center justify-center gap-2 border border-border/80 rounded-xl text-foreground font-black text-xs uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    <Printer size={15} />
                    <span>Print Agreement</span>
                  </button>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="hidden lg:block pl-4 animate-reveal" style={{ animationDelay: "0.15s" }}>
                <p className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-4">
                  Contents
                </p>
                <ul className="space-y-1 ml-0 list-none p-0">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#section-${s.id}`}
                        className="flex items-center gap-3 py-2 text-sm text-slate-500 hover:text-primary transition-all duration-300 group font-semibold"
                      >
                        <span className="text-xs font-mono text-slate-400 group-hover:text-primary transition-colors">
                          0{i + 1}
                        </span>
                        <span className="truncate group-hover:translate-x-0.5 transition-transform duration-300">{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="prose prose-lg max-w-none text-slate-600 font-semibold animate-reveal" style={{ animationDelay: "0.15s" }}>
              {/* Intro */}
              <p className="text-base sm:text-lg leading-relaxed mb-12 text-slate-700 border-l-4 border-primary pl-6 py-3.5 bg-primary/5 rounded-r-2xl font-bold">
                {intro}
              </p>

              {/* Sections Loop */}
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className="mb-16 last:mb-0 scroll-mt-32 border-b border-border/60 pb-12 last:border-0 group"
                  id={`section-${section.id}`}
                >
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="text-3xl font-heading font-black text-primary/10 select-none group-hover:text-primary/20 transition-colors duration-300">
                      0{index + 1}.
                    </span>
                    <h2 className="text-2xl font-heading font-black text-slate-950 m-0 group-hover:text-primary transition-colors duration-300">
                      {section.title}
                    </h2>
                  </div>

                  {section.content && (
                    <p className="text-sm sm:text-base leading-relaxed mb-6">{section.content}</p>
                  )}

                  {section.list && (
                    <ul className="space-y-3.5 pl-2 list-none p-0 mt-6">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <ArrowRight
                            size={14}
                            className="mt-1.5 text-primary shrink-0 animate-pulse"
                          />
                          <span className="leading-relaxed text-slate-700 text-sm sm:text-base font-bold">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.footer && (
                    <div className="mt-6 p-5 bg-amber-50/70 rounded-2xl text-xs sm:text-sm text-amber-900/70 italic border border-amber-100 font-semibold">
                      {section.footer}
                    </div>
                  )}
                </div>
              ))}

              {/* Contact Footer */}
              <div className="mt-12 bg-white rounded-[2.5rem] p-8 border border-border shadow-premium flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-heading font-black text-slate-950 mb-1">
                    Still have questions?
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                    Contact our professional legal team for clarifications.
                  </p>
                </div>
                <div className="flex gap-3 w-full md:w-auto relative z-10">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex-1 md:flex-none px-6 py-3.5 bg-primary text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-primary/95 shadow-glow transition-all duration-300 border border-primary/20 text-center"
                  >
                    Email Us
                  </a>
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex-1 md:flex-none px-6 py-3.5 bg-slate-950 text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-slate-900 transition-all duration-300 text-center"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}
