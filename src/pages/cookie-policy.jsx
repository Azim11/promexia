import SEO from "../components/seo";
import { Cookie, Mail, Phone, MapPin, Calendar, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import PageHeader from "../components/page-header";
import SectionLayout from "../components/section-layout";
import contactInfo from "../data/contactInfo";

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const meta = { lastUpdated: "July 2026" };
  const contact = {
    sectionTitle: "Contact Us About Cookies",
    intro: "If you have any questions about our use of cookies or other technologies, please contact us.",
    details: {
      email: contactInfo.email,
      phone: contactInfo.phone,
      address: contactInfo.address,
    }
  };

  const sections = [
    {
      id: 1,
      title: "What are cookies?",
      content: "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.",
    },
    {
      id: 2,
      title: "How we use cookies",
      content: "We use cookies to understand how you interact with our website, to improve your experience, and to personalize the content and advertisements we show you. Specifically, we use cookies for:",
      list: [
        "Essential website operations and secure navigation",
        "Remembering your preferences and settings across sessions",
        "Analyzing site traffic, usage metrics, and user behavior",
        "Delivering targeted marketing and measuring conversion effectiveness"
      ]
    },
    {
      id: 3,
      title: "Types of cookies we use",
      content: "Our website uses both session and persistent cookies. Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device until they expire or until you proactively delete them.",
      list: [
        "Strictly Necessary Cookies: Essential for the website to function properly. Cannot be switched off.",
        "Performance Cookies: Collect anonymous data on how visitors use the site to improve performance.",
        "Functional Cookies: Allow the site to remember choices you make (like your language).",
        "Targeting Cookies: Used to deliver advertisements more relevant to you and your interests."
      ]
    },
    {
      id: 4,
      title: "Managing your cookie preferences",
      content: "You have the right to decide whether to accept or decline cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent banner presented to you when you first visit our site. Additionally, most web browsers allow some control of most cookies through the browser settings.",
    }
  ];

  return (
    <>
      <SEO title="Cookie Policy" path="/cookie-policy" />
      <PageHeader title="Cookie Policy" breadcrumb="Legal" />

      <SectionLayout className="bg-slate-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Sidebar / Meta Info */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="lg:sticky lg:top-32 space-y-8 animate-reveal">
              <div className="bg-white rounded-[2rem] p-8 border border-border shadow-soft">
                <div className="flex items-center gap-3 text-primary mb-6">
                  <div className="p-2.5 bg-primary/5 border border-primary/5 rounded-xl text-primary">
                    <Cookie size={22} />
                  </div>
                  <span className="font-heading font-bold text-lg text-slate-800">
                    Cookie Document
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
                  and practices regarding your data via cookies.
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
                    <div className="p-5 rounded-2xl border border-border bg-slate-50/50 hover:bg-white hover:border-primary/25 transition-all duration-350 group/card">
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

                    <div className="p-5 rounded-2xl border border-border bg-slate-50/50 hover:bg-white hover:border-primary/25 transition-all duration-350 group/card">
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

                    <div className="p-5 rounded-2xl border border-border bg-slate-50/50 hover:bg-white hover:border-primary/25 transition-all duration-350 group/card">
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
