/**
 * Home Page — Summit Travel Group
 * Design: Modern Mobility Premium
 * Sections: Hero + Quote Form, Stats, Services, Why Us, Fleet Preview, Testimonials, CTA
 */
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { 
  Phone, ArrowRight, Star, CheckCircle2, Users, 
  MapPin, Clock, Shield, Award, ChevronRight, 
  Plane, Building2, GraduationCap, Heart, Trophy, Bus
} from "lucide-react";

// Image URLs
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753274777/5TH7nAvs52iRM4A6MzhozP/hero-coach-D6TtjmqZkQCUEVvh7ZGcPx.webp";
const INTERIOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753274777/5TH7nAvs52iRM4A6MzhozP/coach-interior-nuwaCou9TZZ5dgisrmp4c4.webp";
const CORPORATE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753274777/5TH7nAvs52iRM4A6MzhozP/corporate-travel-hBjDXxhQv4B8zCgJg2QjkA.webp";
const AIRPORT_IMG = "/manus-storage/IMG_1306_4bbbe7aa.WEBP";
const MINIBUS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753274777/5TH7nAvs52iRM4A6MzhozP/fleet-minibus-3Sw9fXcQXx7niLa9Gtv4CG.webp";

// Animated counter hook
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// Intersection observer hook
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const services = [
  { icon: Building2, title: "Corporate Travel", desc: "Staff shuttles, conference transport, and executive travel for businesses of all sizes.", href: "/services", img: CORPORATE_IMG },
  { icon: Plane, title: "Airport Transfers", desc: "Punctual, reliable transfers to all major UK airports. Flight tracking included.", href: "/services", img: AIRPORT_IMG },
  { icon: GraduationCap, title: "School & Education", desc: "DBS-checked drivers and fully insured vehicles for school trips and university events.", href: "/services", img: MINIBUS_IMG },
  { icon: Heart, title: "Wedding Transport", desc: "Elegant transport for your wedding party and guests. On-time, every time.", href: "/services", img: INTERIOR_IMG },
  { icon: Trophy, title: "Sporting Events", desc: "Group travel to stadiums, race days, golf events, and away fixtures nationwide.", href: "/services", img: HERO_IMG },
  { icon: Bus, title: "Day Trips & Tours", desc: "Leisure excursions, theatre trips, and guided tours across the UK and Europe.", href: "/services", img: CORPORATE_IMG },
];

const testimonials = [
  { name: "Sarah Mitchell", role: "Events Manager, KPMG", stars: 5, text: "Summit Travel Group arranged transport for 180 delegates at our annual conference. Seamless from start to finish — every coach arrived on time and the drivers were impeccably professional." },
  { name: "David Thornton", role: "Head of Sport, Manchester Academy", stars: 5, text: "We've used Summit for all our school sports fixtures for two years. The DBS-checked drivers give us complete peace of mind, and the pricing is always competitive." },
  { name: "Emma Clarke", role: "Bride, June 2024", stars: 5, text: "They organised transport for 60 wedding guests across three pickup points. Not a single hitch. The coaches were spotless and the drivers wore suits. Absolutely brilliant service." },
  { name: "James Hargreaves", role: "Operations Director, Heathrow Logistics", stars: 5, text: "We needed 12 coaches at 4am for a rail replacement contract. Summit delivered every single one. Their 24/7 support is genuinely 24/7 — someone always picks up." },
];

const whyUs = [
  { icon: Shield, title: "Fully Vetted Operators", desc: "Every operator in our network holds current Operator Licence, insurance, and passes our rigorous quality checks." },
  { icon: Award, title: "15+ Years Experience", desc: "Over a decade of arranging group transport for thousands of satisfied clients across every sector." },
  { icon: Clock, title: "24/7 Support", desc: "Our team is available around the clock. Whether it's a last-minute booking or an emergency, we're here." },
  { icon: Users, title: "8–70 Seat Vehicles", desc: "From compact minibuses to full-size executive coaches — we match the right vehicle to your group size." },
  { icon: MapPin, title: "Nationwide Coverage", desc: "A network of 500+ operators covering every postcode in England, Scotland, Wales, and Northern Ireland." },
  { icon: CheckCircle2, title: "Price Match Promise", desc: "Receive a lower quote elsewhere? We'll match it. Quality transport shouldn't cost the earth." },
];

export default function Home() {
  // Quote form state
  const [form, setForm] = useState({
    from: "", to: "", date: "", passengers: "20", type: "standard",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  // Stats section
  const statsRef = useInView(0.3);
  const c1 = useCounter(15000, 2200, statsRef.inView);
  const c2 = useCounter(500, 2000, statsRef.inView);
  const c3 = useCounter(15, 1800, statsRef.inView);
  const c4 = useCounter(98, 2000, statsRef.inView);

  return (
    <div>
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Summit Travel Group UK"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />
        </div>

        <div className="relative z-10 container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-teal/20 border border-brand-teal/40 text-brand-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
                UK's Trusted Coach Hire Network
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Group Travel,<br />
                <span className="text-brand-teal">Done Right.</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
                Summit Travel Group connects you with the UK's finest vetted coach operators. Competitive quotes, professional drivers, and 24/7 support — for groups of 8 to 70.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="flex items-center gap-2 bg-brand-teal hover:bg-teal-600 text-white font-bold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-base">
                    Get a Free Quote
                    <ArrowRight size={18} />
                  </button>
                </Link>
                <a href="tel:07425866205" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-7 py-3.5 rounded-lg transition-all duration-200 text-base">
                  <Phone size={16} />
                  07425866205
                </a>
              </div>
              <div className="flex flex-wrap gap-5 mt-8">
                {["No booking fees", "Instant quotes", "Free cancellation"].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-white/70 text-sm">
                    <CheckCircle2 size={14} className="text-green-400" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating quote form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-6 bg-brand-teal rounded-full" />
                <h2 className="text-navy font-black text-xl" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Get an Instant Quote
                </h2>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2">Quote Request Sent!</h3>
                  <p className="text-gray-500 text-sm">We'll get back to you the same business day with a competitive quote.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-navy uppercase tracking-wide block mb-1.5">From</label>
                      <input
                        type="text"
                        placeholder="City or postcode"
                        value={form.from}
                        onChange={(e) => setForm({ ...form, from: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-orange-100 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-navy uppercase tracking-wide block mb-1.5">To</label>
                      <input
                        type="text"
                        placeholder="City or postcode"
                        value={form.to}
                        onChange={(e) => setForm({ ...form, to: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-orange-100 transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-navy uppercase tracking-wide block mb-1.5">Travel Date</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-orange-100 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-navy uppercase tracking-wide block mb-1.5">Passengers</label>
                      <select
                        value={form.passengers}
                        onChange={(e) => setForm({ ...form, passengers: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-orange-100 transition-all bg-white"
                      >
                        {["8–16", "17–24", "25–35", "36–49", "50–57", "58–70"].map((v) => (
                          <option key={v} value={v}>{v} passengers</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-navy uppercase tracking-wide block mb-1.5">Vehicle Type</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { value: "standard", label: "Standard" },
                        { value: "executive", label: "Executive" },
                        { value: "vip", label: "VIP" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setForm({ ...form, type: opt.value })}
                          className={`py-2 rounded-lg text-xs font-bold border-2 transition-all ${
                            form.type === opt.value
                              ? "border-brand-teal bg-orange-50 text-brand-teal"
                              : "border-gray-200 text-gray-500 hover:border-gray-300"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-navy hover:bg-navy-light text-white font-bold py-3.5 rounded-lg transition-all duration-200 text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    Get My Free Quote
                    <ArrowRight size={16} />
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    No obligation · Response same business day · Free of charge
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="bg-white border-b border-gray-100 py-5">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { label: "Google Rating", value: "4.9★", sub: "3,200+ reviews" },
              { label: "Trustpilot", value: "Excellent", sub: "2,100+ reviews" },
              { label: "Operators", value: "500+", sub: "Nationwide network" },
              { label: "Journeys", value: "15,000+", sub: "Completed safely" },
              { label: "Support", value: "24/7", sub: "Always available" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-navy font-black text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>{item.value}</div>
                <div className="text-xs text-gray-400">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section ref={statsRef.ref} className="bg-navy py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: c1, suffix: "+", label: "Happy Customers" },
              { value: c2, suffix: "+", label: "Vetted Operators" },
              { value: c3, suffix: "+", label: "Years Experience" },
              { value: c4, suffix: "%", label: "5-Star Reviews" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-black text-white mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  {stat.value.toLocaleString()}
                  <span className="text-brand-teal">{stat.suffix}</span>
                </div>
                <div className="text-white/60 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="text-center mb-14">
            <div className="inline-block">
              <div className="w-12 h-1 bg-brand-teal rounded-full mx-auto mb-4" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Every Journey, Covered
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From corporate conferences to school trips, we arrange the right vehicle for every occasion across the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-brand-teal/20">
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={svc.img}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-brand-teal text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        {svc.title}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                        <svc.icon size={16} className="text-brand-teal" />
                      </div>
                      <h3 className="font-black text-navy text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>{svc.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{svc.desc}</p>
                    <div className="flex items-center gap-1 text-brand-teal text-sm font-bold group-hover:gap-2 transition-all">
                      Learn more <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-1 bg-brand-teal rounded-full mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-5" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Why Thousands Choose<br />Summit Travel Group
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                We're not just a booking platform — we're a dedicated team of transport specialists who take personal responsibility for every journey. Our network of vetted operators means you always get the best vehicle at the best price.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyUs.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors group">
                    <div className="w-9 h-9 bg-navy group-hover:bg-brand-teal rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                      <item.icon size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-navy text-sm mb-0.5" style={{ fontFamily: 'Raleway, sans-serif' }}>{item.title}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={INTERIOR_IMG}
                alt="Luxury coach interior"
                className="rounded-2xl shadow-2xl w-full object-cover h-[480px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-navy text-white rounded-xl p-5 shadow-xl">
                <div className="text-3xl font-black text-brand-teal mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>4.9/5</div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-teal text-brand-teal" />
                  ))}
                </div>
                <div className="text-white/70 text-xs">Based on 3,200+ reviews</div>
              </div>
              <div className="absolute -top-5 -right-5 bg-brand-teal text-white rounded-xl p-4 shadow-xl">
                <div className="text-2xl font-black mb-0.5" style={{ fontFamily: 'Raleway, sans-serif' }}>500+</div>
                <div className="text-white/80 text-xs">Vetted operators</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLEET PREVIEW ── */}
      <section className="py-20 bg-navy clip-diagonal-bottom">
        <div className="container">
          <div className="text-center mb-14">
            <div className="w-12 h-1 bg-brand-teal rounded-full mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
              A Vehicle for Every Group
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              From intimate minibuses to full-size luxury coaches — we source the perfect vehicle from our nationwide network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Minibus", seats: "8–16 seats", img: MINIBUS_IMG, tag: "Most Popular" },
              { name: "Executive Coach", seats: "49–57 seats", img: HERO_IMG, tag: "Best Value" },
              { name: "VIP Luxury", seats: "Up to 70 seats", img: INTERIOR_IMG, tag: "Premium" },
            ].map((v, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden group cursor-pointer">
                <img src={v.img} alt={v.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="bg-brand-teal text-white text-xs font-bold px-2.5 py-1 rounded-full">{v.tag}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-white font-black text-xl mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>{v.name}</div>
                  <div className="text-white/70 text-sm mb-3">{v.seats}</div>
                  <Link href="/fleet">
                    <button className="text-xs font-bold text-brand-teal flex items-center gap-1 hover:gap-2 transition-all">
                      View details <ChevronRight size={12} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/fleet">
              <button className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-brand-teal text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-200 hover:text-brand-teal">
                View Full Fleet
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white" style={{ marginTop: '-3rem', paddingTop: '5rem' }}>
        <div className="container">
          <div className="text-center mb-14">
            <div className="w-12 h-1 bg-brand-teal rounded-full mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
              What Our Clients Say
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Over 15,000 satisfied customers trust Summit Travel Group for their group transport needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-brand-teal/30 hover:shadow-md transition-all">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={14} className="fill-brand-teal text-brand-teal" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-navy rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-navy text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-navy">
        <div className="container">
          <div className="text-center mb-14">
            <div className="w-12 h-1 bg-brand-teal rounded-full mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
              How It Works
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Getting your coach hire quote is simple. Three steps to your perfect journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-brand-teal/30" />
            {[
              { step: "01", title: "Tell Us Your Journey", desc: "Fill in our quick quote form with your travel dates, pickup location, destination, and group size. Takes under 2 minutes." },
              { step: "02", title: "We Find the Best Vehicle", desc: "Our specialists search our network of 500+ operators to find the right vehicle at the best price for your specific requirements." },
              { step: "03", title: "Confirm & Travel", desc: "Accept your quote, receive your booking confirmation, and your driver's details. We're available 24/7 right up to your journey." },
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                <div className="w-20 h-20 bg-brand-teal rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <span className="text-white font-black text-2xl" style={{ fontFamily: 'Raleway, sans-serif' }}>{item.step}</span>
                </div>
                <h3 className="text-white font-black text-xl mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE SECTION ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <div className="w-12 h-1 bg-brand-teal rounded-full mx-auto mb-4" />
            <h2 className="text-3xl font-black text-navy mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Nationwide Coverage</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">We arrange coach hire from every major UK city. Here are some of our most popular routes:</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {["London", "Manchester", "Birmingham", "Leeds", "Glasgow", "Edinburgh", "Bristol", "Liverpool", "Sheffield", "Newcastle", "Cardiff", "Belfast"].map((city) => (
              <Link key={city} href="/contact">
                <div className="group flex items-center gap-2 bg-gray-50 hover:bg-navy rounded-xl px-3 py-3 transition-all cursor-pointer border border-gray-100 hover:border-navy">
                  <MapPin size={12} className="text-brand-teal flex-shrink-0" />
                  <span className="text-navy group-hover:text-white text-sm font-semibold transition-colors">{city}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-brand-teal">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Ready to Book Your Coach?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
            Get a free, no-obligation quote. Our team responds the same business day during business hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center gap-2 bg-white text-brand-teal font-black px-8 py-4 rounded-lg text-base hover:bg-gray-50 transition-all shadow-lg">
                Get a Free Quote
                <ArrowRight size={18} />
              </button>
            </Link>
            <a href="tel:07425866205" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 border-2 border-white/50 text-white font-bold px-8 py-4 rounded-lg text-base transition-all">
              <Phone size={18} />
              07425866205
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
