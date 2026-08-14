import { useState, useEffect } from "react";
import SEO from "../components/seo";
import { useSearchParams, Link } from "react-router-dom";
import { data } from "../data/data";
import contactInfo from "../data/contactInfo";
import {
  CreditCard,
  Lock,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  User,
  Mail,
  Building,
  MapPin,
  Sparkles,
  HelpCircle,
  TrendingUp,
  Check
} from "lucide-react";

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get("plan") || "starter";

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card"); // 'card' or 'paypal'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Retrieve current plan details
  const getPlanDetails = () => {
    switch (planParam.toLowerCase()) {
      case "business":
        return data.pricing.tiers[1];
      case "enterprise":
        return data.pricing.tiers[2];
      case "starter":
      default:
        return data.pricing.tiers[0];
    }
  };

  const selectedPlan = getPlanDetails();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate payment API transaction delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-xl px-4 w-full relative z-10">
          <div className="bg-white border border-border/80 rounded-[2.5rem] p-10 md:p-12 shadow-premium text-center">
            <div className="w-20 h-20 bg-primary/8 border border-primary/15 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8 animate-bounce">
              <CheckCircle2 size={40} />
            </div>

            <h2 className="text-3xl font-heading font-black text-foreground mb-4">
              Thank You for Your Order!
            </h2>
            <p className="text-base text-muted font-semibold mb-8 leading-relaxed">
              Your setup request for the <strong className="text-foreground">{selectedPlan.name}</strong> package has been processed successfully. A confirmation email and introductory project planner have been sent to <strong className="text-foreground">{formData.email || contactInfo.email}</strong>.
            </p>

            <div className="bg-surface border border-border rounded-2xl p-6 text-left mb-10 space-y-3">
              <div className="flex justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                <span>Selected Plan</span>
                <span className="text-foreground font-black">{selectedPlan.name}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                <span>Amount Paid</span>
                <span className="text-primary font-black">
                  {selectedPlan.price === "Custom" ? "Custom Project Estimate" : `$${selectedPlan.price}`}
                </span>
              </div>
              <div className="h-px bg-border/60 my-2" />
              <div className="flex justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                <span>Account Email</span>
                <span className="text-foreground font-black truncate max-w-[200px]">{formData.email || contactInfo.email}</span>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                to="/"
                className="block w-full py-4 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-xs hover:scale-[1.01] hover:bg-primary/95 transition-all duration-300 shadow-glow"
              >
                Go to Homepage
              </Link>
              <Link
                to="/contact-us"
                className="block text-xs font-black uppercase tracking-widest text-muted hover:text-primary transition-colors duration-300"
              >
                Need Help? Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background relative overflow-hidden">
      <SEO title="Checkout" path="/checkout" />
      {/* Decorative Ornaments */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_65%)] opacity-[0.05] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_65%)] opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} /> Back to Pricing
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side: Checkout Form */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white border border-border/80 rounded-[2.5rem] p-8 md:p-10 shadow-soft">
              <h1 className="text-3xl font-heading font-black tracking-tight text-foreground mb-8">
                Checkout Details
              </h1>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Billing Address Section */}
                <div className="space-y-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2 pb-2 border-b border-border/50">
                    <User size={14} className="text-primary" />
                    Billing Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-border/80 rounded-xl px-5 py-3 text-sm text-foreground font-semibold placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-border/80 rounded-xl px-5 py-3 text-sm text-foreground font-semibold placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-border/80 rounded-xl px-5 py-3 text-sm text-foreground font-semibold placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="companyName" className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Company Name</label>
                      <input
                        type="text"
                        id="companyName"
                        placeholder="Acme Corporation (Optional)"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-border/80 rounded-xl px-5 py-3 text-sm text-foreground font-semibold placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="address" className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Street Address</label>
                    <input
                      type="text"
                      id="address"
                      required
                      placeholder="123 Main Street, Apt 4B"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-border/80 rounded-xl px-5 py-3 text-sm text-foreground font-semibold placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all duration-300"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="city" className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">City</label>
                      <input
                        type="text"
                        id="city"
                        required
                        placeholder="Gainesville"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-border/80 rounded-xl px-5 py-3 text-sm text-foreground font-semibold placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="state" className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">State / Province</label>
                      <input
                        type="text"
                        id="state"
                        required
                        placeholder="Florida"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-border/80 rounded-xl px-5 py-3 text-sm text-foreground font-semibold placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="zip" className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">ZIP / Postal Code</label>
                      <input
                        type="text"
                        id="zip"
                        required
                        placeholder="32641"
                        value={formData.zip}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-border/80 rounded-xl px-5 py-3 text-sm text-foreground font-semibold placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Section */}
                <div className="space-y-6 pt-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center justify-between pb-2 border-b border-border/50">
                    <span className="flex items-center gap-2">
                      <CreditCard size={14} className="text-primary" />
                      Payment Method
                    </span>
                    <span className="flex items-center gap-1.5 text-[9px] font-black text-primary bg-primary/8 border border-primary/15 px-2.5 py-0.5 rounded-full">
                      <Lock size={8} /> Secure Transaction
                    </span>
                  </h3>

                  {/* Payment selection pills */}
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2.5 border transition-all cursor-pointer ${
                        paymentMethod === "card"
                          ? "bg-primary/5 border-primary text-primary font-black shadow-sm"
                          : "bg-slate-50 border-border/80 text-foreground/70 hover:bg-slate-100"
                      }`}
                    >
                      <CreditCard size={16} /> Credit Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("paypal")}
                      className={`py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2.5 border transition-all cursor-pointer ${
                        paymentMethod === "paypal"
                          ? "bg-primary/5 border-primary text-primary font-black shadow-sm"
                          : "bg-slate-50 border-border/80 text-foreground/70 hover:bg-slate-100"
                      }`}
                    >
                      <img src="/paypal.svg" alt="PayPal" className="h-4 w-auto opacity-95" />
                    </button>
                  </div>

                  {paymentMethod === "card" ? (
                    <div className="space-y-6 animate-reveal">
                      <div className="space-y-2">
                        <label htmlFor="cardName" className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Cardholder Name</label>
                        <input
                          type="text"
                          id="cardName"
                          required={paymentMethod === "card"}
                          placeholder="John Doe"
                          value={formData.cardName}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-border/80 rounded-xl px-5 py-3 text-sm text-foreground font-semibold placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all duration-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="cardNumber" className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Card Number</label>
                        <div className="relative">
                          <input
                            type="text"
                            id="cardNumber"
                            required={paymentMethod === "card"}
                            placeholder="4111 2222 3333 4444"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-border/80 rounded-xl pl-5 pr-12 py-3 text-sm text-foreground font-semibold placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all duration-300"
                          />
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
                            <img src="/visa.svg" alt="Visa" className="h-3 w-auto opacity-70" />
                            <img src="/mastercard.svg" alt="Mastercard" className="h-3 w-auto opacity-70" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="expiry" className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Expiration Date</label>
                          <input
                            type="text"
                            id="expiry"
                            required={paymentMethod === "card"}
                            placeholder="MM / YY"
                            value={formData.expiry}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-border/80 rounded-xl px-5 py-3 text-sm text-foreground font-semibold placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all duration-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="cvc" className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">CVC / Security Code</label>
                          <input
                            type="text"
                            id="cvc"
                            required={paymentMethod === "card"}
                            placeholder="123"
                            value={formData.cvc}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-border/80 rounded-xl px-5 py-3 text-sm text-foreground font-semibold placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 rounded-2xl bg-slate-50 border border-border/60 text-center animate-reveal">
                      <img src="/paypal.svg" alt="PayPal" className="h-8 w-auto mx-auto mb-4 opacity-95" />
                      <p className="text-sm font-semibold text-muted max-w-sm mx-auto leading-relaxed mb-1">
                        You will be redirected to PayPal's checkout gate to complete your project transaction securely.
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-border/60">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4.5 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-sm shadow-glow hover:scale-[1.01] hover:bg-primary/95 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                        Processing Secure Order...
                      </span>
                    ) : (
                      <>
                        Pay & Launch Project
                        <ShieldCheck size={16} />
                      </>
                    )}
                  </button>
                  <div className="flex items-center justify-center gap-6 text-slate-400 mt-4">
                    <div className="flex items-center gap-1.5">
                      <Lock size={12} className="text-primary" />
                      <span className="text-[9px] font-black uppercase tracking-widest">256-bit SSL Encryption</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-slate-200" />
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck size={12} className="text-primary" />
                      <span className="text-[9px] font-black uppercase tracking-widest">PCI DSS Compliant</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-border/80 rounded-[2.5rem] p-8 shadow-soft">
              <h3 className="text-lg font-heading font-black mb-6">
                Order Summary
              </h3>

              <div className="space-y-6">
                {/* Plan Metadata */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-1">
                    Selected Package
                  </span>
                  <h4 className="text-xl font-heading font-black text-foreground">
                    {selectedPlan.name}
                  </h4>
                  <p className="text-xs text-muted font-semibold mt-1">
                    {selectedPlan.description}
                  </p>
                </div>

                <div className="h-px bg-border/60" />

                {/* Features List */}
                <ul className="space-y-3">
                  {selectedPlan.features.slice(0, 5).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <div className="w-4.5 h-4.5 rounded-full bg-primary/5 text-primary flex items-center justify-center flex-shrink-0 border border-primary/10">
                        <Check size={8} strokeWidth={4} />
                      </div>
                      <span className="text-xs font-semibold text-foreground/80">{feature}</span>
                    </li>
                  ))}
                  {selectedPlan.features.length > 5 && (
                    <li className="text-[10px] font-bold text-muted pl-7">
                      + {selectedPlan.features.length - 5} more features included
                    </li>
                  )}
                </ul>

                <div className="h-px bg-border/60" />

                {/* Pricing Table */}
                <div className="space-y-3.5">
                  <div className="flex justify-between text-xs font-bold text-slate-500">
                    <span>Subtotal</span>
                    <span className="text-foreground">
                      {selectedPlan.price === "Custom" ? "Custom Setup" : `$${selectedPlan.price}.00`}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-slate-500">
                    <span>Vat / Tax</span>
                    <span className="text-primary">Included</span>
                  </div>
                  <div className="h-px bg-border/60 my-2" />
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-black text-foreground">Total Cost</span>
                    <span className="text-2xl font-heading font-black text-primary">
                      {selectedPlan.price === "Custom" ? "Custom Request" : `$${selectedPlan.price}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Satisfaction Guarantee card */}
            <div className="p-6 rounded-[2rem] bg-slate-950 text-white relative overflow-hidden border border-white/5 group">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Sparkles size={56} fill="white" />
              </div>
              <h4 className="text-sm font-heading font-black mb-1 flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-primary" />
                100% Secure Checkout
              </h4>
              <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                Your credentials and payment data are encrypted end-to-end. We offer a transparent, milestone-driven layout contract on custom request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
