import SEO from "../components/seo";
import {
  RefreshCcw,
  Clock,
  Printer,
  AlertCircle,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import PageHeader from "../components/page-header";
import SectionLayout from "../components/section-layout";
import { refundData } from "../data/refund";

export default function RefundPolicy() {
  const { meta, intro, importantNotice, sections, contact } = refundData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <SEO title="Refund Policy" path="/refund-policy" />
      <PageHeader title="Refund Policy" breadcrumb="Legal" />

      <SectionLayout className="bg-slate-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Sidebar */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="lg:sticky lg:top-32 space-y-8 animate-reveal">
              <div className="bg-white rounded-[2rem] p-8 border border-border shadow-soft">
                <div className="flex items-center gap-3 text-foreground mb-8">
                  <div className="w-11 h-11 bg-primary/5 border border-primary/5 rounded-xl flex items-center justify-center text-primary">
                    <RefreshCcw size={22} />
                  </div>
                  <span className="font-heading font-bold text-lg text-slate-800">Policy Status</span>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between text-xs sm:text-sm p-3 bg-slate-50 border border-border/60 rounded-xl">
                    <span className="text-slate-500 font-semibold flex items-center gap-2">
                      <Clock size={14} /> Last Updated
                    </span>
                    <span className="font-black text-primary">
                      {meta.lastUpdated}
                    </span>
                  </div>

                  <button
                    onClick={handlePrint}
                    className="w-full py-3.5 flex items-center justify-center gap-2 border border-border/80 rounded-xl text-foreground font-black text-xs uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    <Printer size={15} />
                    <span>Print Policy</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="prose prose-lg max-w-none text-slate-600 font-semibold animate-reveal animate-delay-150">
              {/* Intro */}
              <p className="text-lg sm:text-xl leading-relaxed mb-10 text-slate-900">
                {intro}
              </p>

              {/* Important Notice Alert */}
              <div className="bg-amber-50/70 border border-amber-100 p-6 md:p-8 rounded-[2rem] mb-12 flex flex-col md:flex-row gap-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="shrink-0">
                  <div className="w-11 h-11 bg-amber-100 text-amber-600 border border-amber-200/55 rounded-xl flex items-center justify-center">
                    <AlertCircle size={22} />
                  </div>
                </div>
                <div className="relative z-10">
                  <h4 className="font-heading font-black text-amber-900 mb-2 text-base sm:text-lg">
                    Important Notice
                  </h4>
                  <p className="text-amber-850/80 text-sm sm:text-base leading-relaxed m-0 font-medium">
                    {importantNotice}
                  </p>
                </div>
              </div>

              {/* Sections Loop */}
              {sections.map((section) => (
                <div key={section.id} className="mb-16 last:mb-0 group scroll-mt-32">
                  <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-950 mb-6 flex items-center gap-3.5 group-hover:text-primary transition-colors duration-300">
                    <span className="w-6 h-1 bg-primary rounded-full"></span>
                    {section.title}
                  </h2>

                  {section.content && (
                    <p className="text-sm sm:text-base leading-relaxed mb-6">{section.content}</p>
                  )}

                  {/* Complex List */}
                  {section.list && (
                    <ul className="grid gap-4 mt-6 list-none p-0">
                      {section.list.map((item, index) => (
                        <li
                          key={index}
                          className="flex flex-col sm:flex-row sm:items-center bg-white p-5 rounded-2xl border border-border/80 hover:border-primary/25 transition-all duration-350 shadow-soft"
                        >
                          <div className="flex items-center mb-2 sm:mb-0 sm:w-1/3 shrink-0">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shrink-0 animate-pulse"></div>
                            <span className="font-black text-slate-900 text-xs sm:text-sm uppercase tracking-wider">
                              {item.label}
                            </span>
                          </div>
                          <span className="text-xs sm:text-sm sm:pl-6 text-slate-500 border-l-0 sm:border-l border-border/50 font-semibold leading-relaxed">
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Simple List */}
                  {section.simpleList && (
                    <ul className="space-y-3.5 mt-6 ml-2 list-none p-0">
                      {section.simpleList.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2
                            size={16}
                            className="text-primary mt-1 shrink-0 animate-pulse"
                          />
                          <span className="leading-relaxed text-sm sm:text-base font-bold text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Contact Box */}
              <div className="mt-20 bg-slate-950 text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-white/5 group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_65%)] opacity-[0.2] rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_65%)] opacity-[0.1] rounded-full blur-[80px] pointer-events-none"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-heading font-black mb-4">{contact.title}</h3>
                  <p className="text-slate-400 mb-10 max-w-xl text-sm sm:text-base font-semibold leading-relaxed">
                    {contact.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                    <div className="flex gap-4 group/item">
                      <div className="p-3 bg-white/5 border border-white/10 rounded-xl h-fit text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                        <Mail size={22} />
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">
                          Email Support
                        </span>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-lg sm:text-xl font-bold hover:text-primary transition-colors block duration-300 truncate"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4 group/item">
                      <div className="p-3 bg-white/5 border border-white/10 rounded-xl h-fit text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                        <Phone size={22} />
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">
                          Phone Support
                        </span>
                        <a
                          href={`tel:${contact.phone}`}
                          className="text-lg sm:text-xl font-bold hover:text-primary transition-colors block duration-300"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4 md:col-span-2 pt-8 border-t border-white/5 group/item">
                      <div className="p-3 bg-white/5 border border-white/10 rounded-xl h-fit text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                        <MapPin size={22} />
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">
                          Mailing Address
                        </span>
                        <p className="text-slate-350 leading-relaxed font-semibold text-sm sm:text-base">
                          {contact.address}
                        </p>
                      </div>
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
