/**
 * Contact Page — Summit Travel Group
 * Design: Modern Mobility Premium
 */
import { useState } from "react";
import { Phone, Mail, Clock, MapPin, CheckCircle2, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753274777/5TH7nAvs52iRM4A6MzhozP/hero-coach-D6TtjmqZkQCUEVvh7ZGcPx.webp";

const faqs = [
  { q: "How quickly will I receive a quote?", a: "During business hours (8am–8pm Mon–Fri, 9am–6pm Sat–Sun), we aim to respond the same business day. For complex multi-vehicle requirements, we may need up to 24 hours to source the best options." },
  { q: "Is there a booking fee?", a: "No. Our service is completely free to use. We earn a commission from the operator, which means you get access to our expertise and network at no extra cost." },
  { q: "How far in advance do I need to book?", a: "We can often accommodate last-minute bookings within 24–48 hours. For peak dates (summer, Christmas, major events), we recommend booking at least 4–6 weeks in advance." },
  { q: "Are your operators fully insured and licensed?", a: "Yes. Every operator in our network holds a current PSV Operator Licence, public liability insurance, and all drivers hold the appropriate PCV licence. We verify these annually." },
  { q: "Can I get a quote for a European trip?", a: "Absolutely. We arrange coach hire across the UK and into Europe. Continental trips require additional planning — please give us at least 2 weeks' notice." },
  { q: "What happens if the coach breaks down?", a: "All our operators carry breakdown cover and we have contingency plans in place. In the rare event of a breakdown, we'll arrange a replacement vehicle as quickly as possible." },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  from: string;
  to: string;
  date: string;
  returnDate: string;
  passengers: string;
  vehicleType: string;
  occasion: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", from: "", to: "",
    date: "", returnDate: "", passengers: "8-16",
    vehicleType: "standard", occasion: "corporate", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 container text-center">
          <div className="w-12 h-1 bg-brand-teal rounded-full mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Get a Free Quote
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Fill in the form below and we'll get back to you the same business day with a competitive, no-obligation quote.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact sidebar */}
            <div className="space-y-6">
              <div className="bg-navy rounded-2xl p-7 text-white">
                <h3 className="font-black text-xl mb-5" style={{ fontFamily: 'Raleway, sans-serif' }}>Contact Us Directly</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-teal rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-base">07425866205</div>
                      <div className="text-white/60 text-xs">Free from UK mobiles & landlines</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-teal rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">enquiries@premiercoach.co.uk</div>
                      <div className="text-white/60 text-xs">We reply within 2 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-teal rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Opening Hours</div>
                      <div className="text-white/60 text-xs leading-relaxed">
                        Mon–Fri: 8am–8pm<br />
                        Sat–Sun: 9am–6pm<br />
                        <span className="text-green-400">Emergency line: 24/7</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-teal rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Head Office</div>
                      <div className="text-white/60 text-xs">
                        Summit Travel Group Ltd<br />
                        Manchester, M1 1AA
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why choose us quick list */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-black text-navy text-base mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>Why Book With Us?</h3>
                <ul className="space-y-2.5">
                  {[
                    "No booking fees — ever",
                    "Response same business day",
                    "500+ vetted operators",
                    "Price match guarantee",
                    "24/7 emergency support",
                    "Free cancellation available",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-brand-teal flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-green-600" />
                  </div>
                  <h2 className="text-2xl font-black text-navy mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Quote Request Received!
                  </h2>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    Thank you for your enquiry. One of our transport specialists will contact you the same business day with a competitive, no-obligation quote.
                  </p>
                  <div className="bg-cream rounded-xl p-5 text-left max-w-sm mx-auto">
                    <div className="text-sm font-bold text-navy mb-2">What happens next?</div>
                    <ol className="space-y-2 text-sm text-gray-500">
                      <li className="flex gap-2"><span className="text-brand-teal font-bold">1.</span> We search our network for the best available vehicle</li>
                      <li className="flex gap-2"><span className="text-brand-teal font-bold">2.</span> We call or email you with a tailored quote</li>
                      <li className="flex gap-2"><span className="text-brand-teal font-bold">3.</span> You confirm and we handle all the logistics</li>
                    </ol>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-brand-teal font-bold text-sm hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-black text-navy mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Your Journey Details
                  </h2>

                  {/* Personal details */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-brand-teal uppercase tracking-widest mb-3">Your Details</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs font-bold text-navy uppercase tracking-wide block mb-1.5">Full Name *</label>
                        <input type="text" required value={form.name} onChange={(e) => update("name", e.target.value)}
                          placeholder="John Smith"
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-orange-100 transition-all" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-navy uppercase tracking-wide block mb-1.5">Email Address *</label>
                        <input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)}
                          placeholder="john@company.com"
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-orange-100 transition-all" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-navy uppercase tracking-wide block mb-1.5">Phone Number *</label>
                        <input type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)}
                          placeholder="07700 900000"
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-orange-100 transition-all" />
                      </div>
                    </div>
                  </div>

                  {/* Journey details */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-brand-teal uppercase tracking-widest mb-3">Journey Details</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-navy uppercase tracking-wide block mb-1.5">Pickup Location *</label>
                        <input type="text" required value={form.from} onChange={(e) => update("from", e.target.value)}
                          placeholder="City, town, or postcode"
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-orange-100 transition-all" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-navy uppercase tracking-wide block mb-1.5">Destination *</label>
                        <input type="text" required value={form.to} onChange={(e) => update("to", e.target.value)}
                          placeholder="City, town, or postcode"
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-orange-100 transition-all" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-navy uppercase tracking-wide block mb-1.5">Outbound Date *</label>
                        <input type="date" required value={form.date} onChange={(e) => update("date", e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-orange-100 transition-all" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-navy uppercase tracking-wide block mb-1.5">Return Date (if applicable)</label>
                        <input type="date" value={form.returnDate} onChange={(e) => update("returnDate", e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-orange-100 transition-all" />
                      </div>
                    </div>
                  </div>

                  {/* Vehicle preferences */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-brand-teal uppercase tracking-widest mb-3">Vehicle Preferences</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs font-bold text-navy uppercase tracking-wide block mb-1.5">Number of Passengers *</label>
                        <select required value={form.passengers} onChange={(e) => update("passengers", e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-orange-100 transition-all bg-white">
                          {["8–16", "17–24", "25–35", "36–49", "50–57", "58–70"].map((v) => (
                            <option key={v} value={v}>{v} passengers</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-navy uppercase tracking-wide block mb-1.5">Vehicle Grade</label>
                        <select value={form.vehicleType} onChange={(e) => update("vehicleType", e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-orange-100 transition-all bg-white">
                          <option value="standard">Standard</option>
                          <option value="executive">Executive</option>
                          <option value="vip">VIP / Luxury</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-navy uppercase tracking-wide block mb-1.5">Occasion</label>
                        <select value={form.occasion} onChange={(e) => update("occasion", e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-orange-100 transition-all bg-white">
                          <option value="corporate">Corporate / Business</option>
                          <option value="airport">Airport Transfer</option>
                          <option value="school">School / Education</option>
                          <option value="wedding">Wedding</option>
                          <option value="sport">Sporting Event</option>
                          <option value="leisure">Day Trip / Leisure</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional info */}
                  <div className="mb-6">
                    <label className="text-xs font-bold text-navy uppercase tracking-wide block mb-1.5">Additional Information</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      rows={4}
                      placeholder="Any special requirements, multiple pickup points, wheelchair access needs, or other details that will help us find the right vehicle..."
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-orange-100 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-brand-teal hover:bg-teal-600 text-white font-black py-4 rounded-xl transition-all duration-200 text-base shadow-md hover:shadow-lg"
                  >
                    Send My Quote Request
                    <ArrowRight size={18} />
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-3">
                    No obligation · No booking fees · We respond same business day
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-brand-teal rounded-full mx-auto mb-4" />
            <h2 className="text-3xl font-black text-navy mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-bold text-navy text-sm pr-4" style={{ fontFamily: 'Raleway, sans-serif' }}>{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp size={18} className="text-brand-teal flex-shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    <div className="pt-4">{faq.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
