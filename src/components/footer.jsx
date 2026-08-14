import { data } from "../data/data";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, User } from "lucide-react";
import contactInfo from "../data/contactInfo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10 overflow-hidden relative">
      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(circle,rgba(225,29,72,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[radial-gradient(circle,rgba(217,119,6,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">

        {/* Brand statement row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-14 pb-12 border-b border-border">
          <div className="max-w-lg">
            <Link to="/" className="inline-block mb-5">
              <img src="/logo.png" alt={contactInfo.companyName} className="h-12 md:h-14 w-auto object-contain" />
            </Link>
            <p className="text-muted text-sm leading-relaxed font-medium">
              {data.company.description}
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-muted mr-1">Follow us</span>
              {contactInfo.social?.telegram && (
                <a
                  href={contactInfo.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/25 hover:bg-secondary/40 transition-all shadow-soft"
                  aria-label="Telegram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
                  </svg>
                </a>
              )}
              {contactInfo.social?.whatsapp && (
                <a
                  href={contactInfo.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/25 hover:bg-secondary/40 transition-all shadow-soft"
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.707 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              )}
            </div>

            {/* Payment icons */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck size={13} className="text-primary" />
                <span className="text-xs font-black uppercase tracking-widest text-muted">Secure Payments</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {["visa", "mastercard", "amex", "discover", "paypal"].map((brand) => (
                  <div key={brand} className="p-2 rounded-xl bg-white border border-border hover:border-primary/20 transition-colors shadow-soft">
                    <img src={`/${brand}.svg`} alt={brand} className="h-5 w-auto opacity-75" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-heading font-bold text-foreground mb-5">Navigation</h4>
            <ul className="space-y-3.5">
              {data.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted hover:text-primary transition-colors flex items-center gap-2 group font-medium"
                  >
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-primary" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-heading font-bold text-foreground mb-5">Legal</h4>
            <ul className="space-y-3.5">
              {data.footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted hover:text-primary transition-colors flex items-center gap-2 group font-medium"
                  >
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2">
            <h4 className="text-sm font-heading font-bold text-foreground mb-5">Contact</h4>
            <ul className="space-y-5">
              {/* Contact person */}
              <li className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center flex-shrink-0 text-primary shadow-soft">
                  <User size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-muted uppercase font-black tracking-wider mb-0.5">Contact Person</p>
                  <p className="text-sm text-foreground font-semibold">{contactInfo.contactPerson}</p>
                </div>
              </li>

              {/* Main Email */}
              <li className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center flex-shrink-0 text-primary shadow-soft">
                  <Mail size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-muted uppercase font-black tracking-wider mb-0.5">Contact Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-sm text-foreground font-semibold hover:text-primary transition-colors break-all">
                    {contactInfo.email}
                  </a>
                </div>
              </li>

              {/* Support Email */}
              <li className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center flex-shrink-0 text-primary shadow-soft">
                  <Mail size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-muted uppercase font-black tracking-wider mb-0.5">Support Email</p>
                  <a href={`mailto:${contactInfo.supportEmail}`} className="text-sm text-foreground font-semibold hover:text-primary transition-colors break-all">
                    {contactInfo.supportEmail}
                  </a>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center flex-shrink-0 text-primary shadow-soft">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-muted uppercase font-black tracking-wider mb-0.5">Call Us</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-sm text-foreground font-semibold hover:text-primary transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center flex-shrink-0 text-primary shadow-soft">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-muted uppercase font-black tracking-wider mb-0.5">Visit Us</p>
                  <p className="text-sm text-foreground font-medium leading-snug">{contactInfo.address}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm font-medium">
            © {currentYear} {contactInfo.companyName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2 text-xs text-muted font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Systems Operational
            </span>
            <div className="h-4 w-px bg-border" />
            <p className="text-xs text-muted font-medium italic">Designed for excellence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
