import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from "lucide-react";
import contactInfo from "../data/contactInfo";

const faqs = [
  {
    id: "faq-1",
    question: "How quickly will I hear back after submitting a marketing inquiry?",
    answer:
      "We guarantee a response within 2 to 24 business hours. Our lead strategists review your domain and current market presence prior to our first call. For immediate assistance, feel free to chat with us via WhatsApp.",
  },
  {
    id: "faq-2",
    question: "Do you provide a complimentary SEO & website audit?",
    answer:
      "Yes! Every initial consultation includes a complimentary technical SEO evaluation, keyword ranking analysis, competitor breakdown, and growth roadmap tailored to your target audience.",
  },
  {
    id: "faq-3",
    question: "How long does it take to see organic SEO & marketing results?",
    answer:
      "Technical SEO improvements and PPC advertising campaigns deliver fast wins within 2 to 4 weeks. High-authority search engine rankings, brand organic traffic growth, and ROI typically compound over 3 to 6 months.",
  },
  {
    id: "faq-4",
    question: "How do you track and report campaign ROI & performance?",
    answer:
      "We believe in 100% transparency. You'll receive custom 24/7 rank tracking dashboards, monthly performance reports, keyword visibility metrics, and direct attribution tracking for lead conversions.",
  },
  {
    id: "faq-5",
    question: "Do you work with influencers and digital marketplace sellers?",
    answer:
      "Yes! We specialize in marketing strategies, influencer collaborations, social media growth, and conversion rate optimization tailored specifically for brands, marketplace sellers, and content creators.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-surface/50 border-t border-border relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge-green mb-4 inline-flex items-center gap-1.5">
            <HelpCircle size={13} />
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-foreground mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted font-medium text-base max-w-xl mx-auto">
            Everything you need to know before reaching out to {contactInfo.companyNameShort}.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-primary/30 shadow-card"
                    : "bg-white/80 border-border hover:border-border/80 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-foreground flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-300 flex-shrink-0 ${
                      isOpen
                        ? "bg-primary text-white border-primary rotate-180"
                        : "bg-surface text-muted border-border"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-muted font-medium text-sm sm:text-base leading-relaxed border-t border-border/40 mt-2">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-border shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="font-heading font-bold text-foreground text-sm sm:text-base">Have a unique request?</h4>
              <p className="text-xs text-muted font-medium">Our client team is ready to answer any custom technical questions.</p>
            </div>
          </div>
          <a
            href={`mailto:${contactInfo.email}`}
            className="px-5 py-2.5 bg-foreground text-white rounded-xl text-xs font-black uppercase tracking-wider hover:bg-primary transition-colors flex-shrink-0"
          >
            Email Support Direct
          </a>
        </div>
      </div>
    </section>
  );
}
