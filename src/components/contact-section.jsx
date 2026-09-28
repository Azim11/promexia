import { useState } from "react";
import { data } from "../data/data";
import contactInfo from "../data/contactInfo";
import {
  Send,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Copy,
  Check,
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Zap,
  MessageCircle,
  Home,
} from "lucide-react";

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState(null);
  const [selectedService, setSelectedService] = useState("Search Engine Optimization (SEO)");
  const [selectedBudget, setSelectedBudget] = useState("$2k - $5k");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    websiteUrl: "",
    message: "",
  });

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const budgetOptions = [
    "< $2k",
    "$2k - $5k",
    "$5k - $15k",
    "$15k+",
  ];

  return (
    <section id="contact-us" className="py-20 relative overflow-hidden bg-background">
      {/* Background radial highlights */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(5,150,105,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(13,148,136,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Copy Toast Notification */}
      {copiedKey && (
        <div className="fixed bottom-8 right-8 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-premium border border-white/10 flex items-center gap-3 animate-fadeUp">
          <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center">
            <Check size={14} />
          </div>
          <span className="text-xs font-bold font-heading">Copied to clipboard!</span>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <div className="max-w-3xl mb-16">
          <div className="badge-green mb-4 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-wider">Accepting New SEO & Marketing Clients</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-foreground leading-[1.08] mb-6">
            Let's scale your <span className="text-gradient">organic traffic & revenue.</span>
          </h1>

          <p className="text-muted text-base sm:text-lg font-medium leading-relaxed">
            Ready to dominate search rankings, maximize ROAS, and elevate your content strategy? Connect directly with the growth team at <strong className="text-foreground">{contactInfo.companyName}</strong> for a complimentary SEO & marketing audit.
          </p>
        </div>

        {/* Main Grid: Left Details Hub + Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): Interactive Hub & Cards */}
          <div className="lg:col-span-5 space-y-6">

            {/* Entity Badge Card */}
            <div className="p-6 rounded-3xl bg-white border border-border shadow-soft relative overflow-hidden group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted">Company Identity</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-wider">
                  {contactInfo.businessEntityType}
                </span>
              </div>
              <h3 className="text-2xl font-heading font-black text-foreground mb-2">
                {contactInfo.companyName}
              </h3>
              <div className="space-y-1.5 text-xs text-muted font-semibold">
                <p><strong className="text-foreground">Line of Business:</strong> {contactInfo.industry}</p>
                <p><strong className="text-foreground">Monetization:</strong> {contactInfo.sourceOfMoney}</p>
                <p><strong className="text-foreground">URL:</strong> {contactInfo.url && (contactInfo.url.startsWith('http') || contactInfo.url.includes('.')) ? (
                  <a href={contactInfo.url.startsWith('http') ? contactInfo.url : `https://${contactInfo.url}`} target="_blank" rel="noreferrer" className="text-primary hover:underline">{contactInfo.url}</a>
                ) : (
                  <span className="text-muted italic">{contactInfo.url}</span>
                )}</p>
                {contactInfo.beneficiaryName && (
                  <p><strong className="text-foreground">Beneficiary Name:</strong> {contactInfo.beneficiaryName}</p>
                )}
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              
              {/* Contact Person */}
              <div className="p-5 rounded-2xl bg-white border border-border shadow-soft hover:border-primary/30 transition-all duration-300 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-bold">
                    <User size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-muted block">Contact Person</span>
                    <span className="text-base font-bold text-foreground block">{contactInfo.contactPerson}</span>
                    <span className="text-xs text-muted font-medium">{contactInfo.contactPersonRole}</span>
                  </div>
                </div>
              </div>

              {/* Email Card with Copy */}
              <div className="p-5 rounded-2xl bg-white border border-border shadow-soft hover:border-primary/30 transition-all duration-300 flex items-center justify-between group">
                <div className="flex items-center gap-4 min-w-0 pr-2">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-bold">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-black uppercase tracking-wider text-muted block">Direct Email</span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm font-bold text-foreground hover:text-primary transition-colors block truncate break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(contactInfo.email, "email")}
                  className="p-2.5 rounded-xl bg-surface border border-border text-muted hover:text-primary hover:bg-primary/5 transition-all cursor-pointer flex-shrink-0"
                  title="Copy Email"
                >
                  {copiedKey === "email" ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card with Copy */}
              <div className="p-5 rounded-2xl bg-white border border-border shadow-soft hover:border-primary/30 transition-all duration-300 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-bold">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-muted block">Primary Phone</span>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-sm font-bold text-foreground hover:text-primary transition-colors block"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(contactInfo.phone, "phone")}
                  className="p-2.5 rounded-xl bg-surface border border-border text-muted hover:text-primary hover:bg-primary/5 transition-all cursor-pointer flex-shrink-0"
                  title="Copy Phone Number"
                >
                  {copiedKey === "phone" ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Business Address Card */}
              <div className="p-5 rounded-2xl bg-white border border-border shadow-soft hover:border-primary/30 transition-all duration-300 flex items-start justify-between group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-bold">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-muted block">Business & Registered Address</span>
                    <p className="text-xs sm:text-sm font-medium text-foreground leading-relaxed mt-0.5">
                      {contactInfo.addressDetails.addressLine1}<br />
                      {contactInfo.addressDetails.city}, {contactInfo.addressDetails.state} {contactInfo.addressDetails.postalCode}<br />
                      {contactInfo.addressDetails.country}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(contactInfo.address, "address")}
                  className="p-2.5 rounded-xl bg-surface border border-border text-muted hover:text-primary hover:bg-primary/5 transition-all cursor-pointer flex-shrink-0 mt-1"
                  title="Copy Business Address"
                >
                  {copiedKey === "address" ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Contact Person Residential Address Card */}
              {contactInfo.residentialAddressDetails && (
                <div className="p-5 rounded-2xl bg-white border border-border shadow-soft hover:border-primary/30 transition-all duration-300 flex items-start justify-between group">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-bold">
                      <Home size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-muted block">Contact Person Residential Address</span>
                      <p className="text-xs sm:text-sm font-medium text-foreground leading-relaxed mt-0.5">
                        {contactInfo.residentialAddressDetails.addressLine1}{contactInfo.residentialAddressDetails.addressLine2 ? `, ${contactInfo.residentialAddressDetails.addressLine2}` : ""}<br />
                        {contactInfo.residentialAddressDetails.city} {contactInfo.residentialAddressDetails.postalCode}<br />
                        {contactInfo.residentialAddressDetails.country}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(contactInfo.residentialAddress, "residentialAddress")}
                    className="p-2.5 rounded-xl bg-surface border border-border text-muted hover:text-primary hover:bg-primary/5 transition-all cursor-pointer flex-shrink-0 mt-1"
                    title="Copy Residential Address"
                  >
                    {copiedKey === "residentialAddress" ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
                  </button>
                </div>
              )}

              {/* Business Hours */}
              <div className="p-5 rounded-2xl bg-white border border-border shadow-soft flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center flex-shrink-0 font-bold">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-muted block">Operating Hours</span>
                  <span className="text-xs sm:text-sm font-bold text-foreground">{contactInfo.businessHours}</span>
                </div>
              </div>

            </div>

            {/* Instant Messaging Card */}
            <div className="p-6 rounded-3xl bg-slate-950 text-white shadow-premium relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-30 pointer-events-none" />
              <div className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-wider mb-2">
                <Zap size={14} /> Direct Strategy Desk
              </div>
              <h4 className="text-lg font-heading font-black text-white mb-2">Need immediate consultation?</h4>
              <p className="text-xs text-slate-300 font-medium leading-relaxed mb-5">
                Chat directly with our SEO & marketing strategists on WhatsApp for instant scope & campaign insights.
              </p>
              <a
                href={contactInfo.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-glow"
              >
                <MessageCircle size={16} /> Open WhatsApp Desk
              </a>
            </div>

          </div>

          {/* Right Column (7 cols): Interactive Inquiry Studio */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 lg:p-12 rounded-[2.5rem] bg-white border border-border shadow-premium relative">
              
              {formSubmitted ? (
                /* Success State Card */
                <div className="py-12 text-center space-y-6 animate-fadeUp">
                  <div className="w-20 h-20 bg-primary/10 text-primary border border-primary/20 rounded-3xl flex items-center justify-center mx-auto shadow-glow">
                    <CheckCircle2 size={40} />
                  </div>

                  <h3 className="text-3xl font-heading font-black text-foreground">
                    Audit & Strategy Request Received!
                  </h3>

                  <p className="text-muted font-medium text-base max-w-md mx-auto leading-relaxed">
                    Thank you for contacting <strong className="text-foreground">{contactInfo.companyName}</strong>. Our lead growth strategist, <strong>{contactInfo.contactPerson}</strong>, will analyze your brand requirement and get back to you within 2 hours.
                  </p>

                  <div className="p-4 rounded-2xl bg-surface border border-border max-w-sm mx-auto text-xs text-muted font-medium">
                    A confirmation summary has been logged for <span className="text-foreground font-bold">{formData.email || contactInfo.email}</span>.
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ firstName: "", lastName: "", email: "", phone: "", websiteUrl: "", message: "" });
                    }}
                    className="px-8 py-3.5 bg-foreground text-white rounded-xl text-xs font-black uppercase tracking-wider hover:bg-primary transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Form View */
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Service Tabs */}
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted block mb-3">
                      1. Select Marketing & SEO Service
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {data.services.map((service) => {
                        const isSelected = selectedService === service.title;
                        return (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => setSelectedService(service.title)}
                            className={`p-3.5 rounded-xl border text-xs font-bold transition-all text-left flex flex-col justify-between h-22 cursor-pointer ${
                              isSelected
                                ? "bg-primary text-white border-primary shadow-soft"
                                : "bg-surface text-foreground border-border hover:border-primary/40 hover:bg-white"
                            }`}
                          >
                            <span className="line-clamp-2 leading-snug">{service.title}</span>
                            <span className={`text-[9px] uppercase tracking-wider ${isSelected ? "text-white/80" : "text-muted"}`}>
                              {isSelected ? "Selected" : "Select"}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector Pills */}
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted block mb-3">
                      2. Monthly Campaign Budget Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {budgetOptions.map((budget) => {
                        const isSelected = selectedBudget === budget;
                        return (
                          <button
                            key={budget}
                            type="button"
                            onClick={() => setSelectedBudget(budget)}
                            className={`py-3 px-4 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                              isSelected
                                ? "bg-foreground text-white border-foreground shadow-soft"
                                : "bg-surface text-foreground border-border hover:border-foreground/30 hover:bg-white"
                            }`}
                          >
                            {budget}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* User Information Input Grid */}
                  <div className="space-y-5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted block">
                      3. Brand & Contact Information
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold text-muted uppercase">First Name</span>
                        <input
                          type="text"
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Talina"
                          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold text-muted uppercase">Last Name</span>
                        <input
                          type="text"
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Khatun"
                          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold text-muted uppercase">Business Email</span>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="contact@yourbrand.com"
                          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold text-muted uppercase">Phone Number</span>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 2089002291"
                          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all"
                        />
                      </div>
                    </div>

                    {/* Website / Social Link Field */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-muted uppercase">Website URL or Social Profile (Optional)</span>
                      <input
                        type="text"
                        id="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={handleInputChange}
                        placeholder="https://yourbrand.com or @tiktok_handle"
                        className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-muted uppercase">Marketing Goals & Target Keywords</span>
                        <span className="text-[10px] text-muted font-mono">{formData.message.length} / 500</span>
                      </div>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        maxLength={500}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your organic search goals, target keywords, current traffic, campaign budget, or social media expansion plans..."
                        className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-xs sm:text-sm shadow-glow hover:bg-primary/90 hover:scale-[1.005] active:scale-[0.995] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        Analyzing Requirements...
                      </span>
                    ) : (
                      <>
                        Request Free SEO Audit & Proposal
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  {/* Security Guarantees */}
                  <div className="flex items-center justify-center gap-6 text-muted text-[10px] font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-primary" /> NDA Protection
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-primary" /> Free Domain Audit
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
