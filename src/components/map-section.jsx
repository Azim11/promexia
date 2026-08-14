import { useState } from "react";
import { ExternalLink, MapPin, Copy, Check, Navigation } from "lucide-react";
import contactInfo from "../data/contactInfo";

export default function MapSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(contactInfo.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="map" className="w-full relative overflow-hidden bg-surface border-y border-border">
      {/* Top Banner Bar */}
      <div className="bg-slate-900 text-white py-4 px-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold font-heading uppercase tracking-wider text-slate-200">
            Registered Headquarters: {contactInfo.addressDetails.city}, {contactInfo.addressDetails.state}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleCopyAddress}
            className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
            {copied ? "Copied" : "Copy Address"}
          </button>
          <a
            href={`https://www.google.com/maps?q=${encodeURIComponent(contactInfo.address)}`}
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 bg-primary hover:bg-primary/90 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
          >
            <Navigation size={13} />
            Get Directions
          </a>
        </div>
      </div>

      {/* Embedded Map Canvas */}
      <div className="w-full h-[450px] relative">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          title="Office Location"
          src={contactInfo.location}
          className="relative z-0 opacity-90 contrast-[1.05]"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/80 via-transparent to-background/20" />

        {/* Floating Headquarters Glass Card */}
        <div className="absolute bottom-8 left-4 right-4 sm:left-8 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-border shadow-premium z-20 hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 text-primary border border-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 font-bold shadow-soft">
              <MapPin size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Headquarters</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
              <h4 className="font-heading font-black text-foreground text-lg mb-2">{contactInfo.companyName}</h4>
              <p className="text-muted text-xs sm:text-sm font-medium leading-relaxed mb-4">
                {contactInfo.addressDetails.addressLine1}, {contactInfo.addressDetails.city},<br />
                {contactInfo.addressDetails.state} {contactInfo.addressDetails.postalCode}, {contactInfo.addressDetails.country}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={`https://www.google.com/maps?q=${encodeURIComponent(contactInfo.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary font-black text-xs uppercase tracking-wider hover:text-primary/80 transition-colors"
                >
                  View on Google Maps <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
