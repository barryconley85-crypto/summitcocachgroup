/**
 * Services Page — Summit Travel Group
 * Design: Modern Mobility Premium
 */
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Phone, Building2, Plane, GraduationCap, Heart, Trophy, Bus, Music, ShoppingBag, Landmark } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753274777/5TH7nAvs52iRM4A6MzhozP/hero-coach-D6TtjmqZkQCUEVvh7ZGcPx.webp";
const CORPORATE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753274777/5TH7nAvs52iRM4A6MzhozP/corporate-travel-hBjDXxhQv4B8zCgJg2QjkA.webp";
const AIRPORT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753274777/5TH7nAvs52iRM4A6MzhozP/airport-transfer-cnSnErufvuyh9nzseJXBzR.webp";
const MINIBUS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753274777/5TH7nAvs52iRM4A6MzhozP/fleet-minibus-3Sw9fXcQXx7niLa9Gtv4CG.webp";
const INTERIOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753274777/5TH7nAvs52iRM4A6MzhozP/coach-interior-nuwaCou9TZZ5dgisrmp4c4.webp";

const services = [
  {
    icon: Building2,
    title: "Corporate Travel",
    img: CORPORATE_IMG,
    desc: "Reliable, professional transport solutions for businesses of all sizes. From daily staff shuttles to large-scale conference logistics.",
    features: ["Staff shuttle services", "Conference & event transport", "Multiple vehicle coordination", "Account management", "Rail & air replacement", "Flexible billing"],
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    img: AIRPORT_IMG,
    desc: "Punctual, stress-free transfers to and from all major UK airports. We track your flight so you're never left waiting.",
    features: ["All major UK airports", "Flight tracking included", "Meet & greet service", "Luggage assistance", "Early morning departures", "Late night arrivals"],
  },
  {
    icon: GraduationCap,
    title: "School & Education",
    img: MINIBUS_IMG,
    desc: "Safe, reliable transport for schools, colleges, and universities. All drivers are DBS-checked and experienced with young passengers.",
    features: ["DBS-checked drivers", "Risk assessments available", "School trip specialists", "University sports transport", "Field trips & excursions", "Regular contract routes"],
  },
  {
    icon: Heart,
    title: "Wedding Transport",
    img: INTERIOR_IMG,
    desc: "Make your special day seamless with elegant, punctual transport for your wedding party and guests.",
    features: ["Decorated vehicles available", "Multiple pickup points", "Chauffeur-style service", "Flexible timings", "Guest shuttles", "Honeymoon transfers"],
  },
  {
    icon: Trophy,
    title: "Sporting Events",
    img: HERO_IMG,
    desc: "Group travel to stadiums, race days, golf tournaments, and away fixtures. We handle the logistics so you can focus on the game.",
    features: ["Football & rugby fixtures", "Horse racing days", "Golf tournaments", "Away supporter travel", "Multi-vehicle bookings", "Return journey included"],
  },
  {
    icon: Bus,
    title: "Day Trips & Tours",
    img: CORPORATE_IMG,
    desc: "Leisure excursions, guided tours, theatre trips, and shopping days across the UK and into Europe.",
    features: ["UK & European tours", "Theatre & concert trips", "Shopping excursions", "Guided tour packages", "Flexible itineraries", "Group discounts available"],
  },
  {
    icon: Music,
    title: "Concerts & Festivals",
    img: AIRPORT_IMG,
    desc: "Safe, organised transport to music festivals and concerts. We manage the crowds so you can enjoy the show.",
    features: ["Festival park & ride", "Late night returns", "Multiple pickup points", "Large group specialists", "Glastonbury, Reading & more", "Pre-bookable return"],
  },
  {
    icon: ShoppingBag,
    title: "Stag & Hen Parties",
    img: MINIBUS_IMG,
    desc: "Start the celebrations early with a party-ready minibus or coach. We'll get your group there and back safely.",
    features: ["Party atmosphere welcome", "City centre pickups", "Late night returns", "Flexible itineraries", "Driver stays with group", "Competitive pricing"],
  },
  {
    icon: Landmark,
    title: "Religious & Community",
    img: INTERIOR_IMG,
    desc: "Respectful, reliable transport for religious gatherings, community events, and pilgrimages across the UK.",
    features: ["Pilgrimage routes", "Community events", "Religious gatherings", "Accessible vehicles", "Flexible scheduling", "Group discounts"],
  },
];

export default function Services() {
  return (
    <div>
      {/* Page hero */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 container text-center">
          <div className="w-12 h-1 bg-brand-teal rounded-full mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Our Services
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Whatever the occasion, wherever you're going — Summit Travel Group has the right vehicle and the right team to get you there.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((svc, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="h-52 overflow-hidden relative">
                  <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-teal rounded-xl flex items-center justify-center">
                      <svc.icon size={20} className="text-white" />
                    </div>
                    <h2 className="text-white font-black text-xl" style={{ fontFamily: 'Raleway, sans-serif' }}>{svc.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {svc.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-1.5 text-xs text-gray-600">
                        <CheckCircle2 size={12} className="text-brand-teal flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <button className="flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-all">
                      Get a Quote <ArrowRight size={14} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container text-center">
          <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Don't See Your Requirement?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            We handle all types of group transport. Call us or send an enquiry and we'll find the right solution.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center gap-2 bg-brand-teal hover:bg-teal-600 text-white font-bold px-7 py-3.5 rounded-lg transition-all">
                Send an Enquiry <ArrowRight size={16} />
              </button>
            </Link>
            <a href="tel:07425866205" className="flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-7 py-3.5 rounded-lg transition-all">
              <Phone size={16} /> 07425866205
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
