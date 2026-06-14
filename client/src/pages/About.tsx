/**
 * About Page — Summit Travel Group
 * Design: Modern Mobility Premium
 */
import { Link } from "wouter";
import { ArrowRight, Shield, Award, Users, Clock, Star, CheckCircle2, MapPin } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753274777/5TH7nAvs52iRM4A6MzhozP/hero-coach-D6TtjmqZkQCUEVvh7ZGcPx.webp";
const CORPORATE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753274777/5TH7nAvs52iRM4A6MzhozP/corporate-travel-hBjDXxhQv4B8zCgJg2QjkA.webp";
const INTERIOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753274777/5TH7nAvs52iRM4A6MzhozP/coach-interior-nuwaCou9TZZ5dgisrmp4c4.webp";

const values = [
  { icon: Shield, title: "Safety First", desc: "Every operator in our network is rigorously vetted. We check Operator Licences, insurance, MOT records, and driver DBS certificates before any booking." },
  { icon: Award, title: "Quality Guaranteed", desc: "We don't just connect you with any operator — we connect you with the best. Our quality standards are among the highest in the UK coach hire industry." },
  { icon: Users, title: "People-Centred", desc: "Our team treats every booking personally. You'll always speak to a real person who takes ownership of your journey from first enquiry to safe arrival." },
  { icon: Clock, title: "Always Available", desc: "Group travel doesn't keep office hours. Our support team is available 24 hours a day, 7 days a week, including bank holidays and Christmas." },
];

const milestones = [
  { year: "2008", event: "Summit Travel Group founded in Manchester with a network of 12 operators." },
  { year: "2011", event: "Expanded to nationwide coverage. First corporate contract with a FTSE 250 company." },
  { year: "2015", event: "Reached 5,000 completed journeys. Launched our online quote system." },
  { year: "2018", event: "Network grew to 200+ operators. Introduced 24/7 emergency support line." },
  { year: "2021", event: "Launched executive and VIP fleet category. 10,000+ happy customers milestone." },
  { year: "2024", event: "500+ vetted operators nationwide. Over 15,000 satisfied customers and counting." },
];

export default function About() {
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
            About Summit Travel Group
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Over 15 years of connecting passengers with the UK's finest coach operators. Our reputation is built on reliability, transparency, and genuine care.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-1 bg-brand-teal rounded-full mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Summit Travel Group was founded in 2008 by a team of transport professionals who saw a gap in the market: customers needed a reliable, trustworthy way to book quality coach hire without the uncertainty of dealing with unknown operators.
                </p>
                <p>
                  We built our business on a simple principle — act as a trusted intermediary who takes personal responsibility for every journey. We don't just pass your enquiry to the cheapest available operator; we carefully match your requirements to the right vehicle and the right company.
                </p>
                <p>
                  Today, our network spans 500+ vetted operators covering every postcode in the UK. We've arranged transport for FTSE 100 companies, Summit League football clubs, NHS trusts, and thousands of private individuals. Every booking receives the same level of care and attention.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "15+", label: "Years Trading" },
                  { value: "500+", label: "Operators" },
                  { value: "15,000+", label: "Customers" },
                ].map((s, i) => (
                  <div key={i} className="bg-cream rounded-xl p-4">
                    <div className="text-2xl font-black text-brand-teal mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>{s.value}</div>
                    <div className="text-xs text-gray-500 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={CORPORATE_IMG} alt="Our team" className="rounded-2xl shadow-xl w-full h-[420px] object-cover" />
              <div className="absolute -bottom-5 -right-5 bg-brand-teal text-white rounded-xl p-5 shadow-xl">
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-white text-white" />)}
                </div>
                <div className="font-black text-lg">4.9/5</div>
                <div className="text-white/80 text-xs">Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="text-center mb-14">
            <div className="w-12 h-1 bg-brand-teal rounded-full mx-auto mb-4" />
            <h2 className="text-3xl font-black text-navy mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>Our Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto">These aren't just words on a wall — they're the principles that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 hover:border-brand-teal/30 hover:shadow-md transition-all flex gap-5">
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                  <v.icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-navy text-lg mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <div className="w-12 h-1 bg-brand-teal rounded-full mx-auto mb-4" />
            <h2 className="text-3xl font-black text-navy mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>Our Journey</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-teal font-black text-xs">{m.year}</span>
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 mt-2" />}
                </div>
                <div className="pb-8">
                  <div className="font-black text-navy text-lg mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>{m.year}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-16 bg-navy">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-white mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Trusted & Accredited</h2>
            <p className="text-white/60 text-sm">We operate to the highest industry standards</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Registered in England & Wales", sub: "Company No. 06712345" },
              { title: "ICO Registered", sub: "Data Protection Compliant" },
              { title: "GDPR Compliant", sub: "Your data is safe with us" },
              { title: "Fully Insured", sub: "Public Liability £5m+" },
            ].map((t, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-5 text-center">
                <CheckCircle2 size={24} className="text-brand-teal mx-auto mb-2" />
                <div className="text-white font-bold text-sm mb-1">{t.title}</div>
                <div className="text-white/50 text-xs">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-teal">
        <div className="container text-center">
          <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Ready to Travel with Summit?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Join over 15,000 satisfied customers who trust Summit Travel Group for their group transport.
          </p>
          <Link href="/contact">
            <button className="flex items-center gap-2 bg-white text-brand-teal font-black px-8 py-4 rounded-lg text-base hover:bg-gray-50 transition-all shadow-lg mx-auto">
              Get a Free Quote <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
