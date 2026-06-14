/**
 * Fleet Page — Summit Travel Group
 * Design: Modern Mobility Premium
 */
import { Link } from "wouter";
import { ArrowRight, Phone, Users, Wifi, Zap, Wind, Coffee, CheckCircle2 } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753274777/5TH7nAvs52iRM4A6MzhozP/hero-coach-D6TtjmqZkQCUEVvh7ZGcPx.webp";
const INTERIOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753274777/5TH7nAvs52iRM4A6MzhozP/coach-interior-nuwaCou9TZZ5dgisrmp4c4.webp";
const MINIBUS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753274777/5TH7nAvs52iRM4A6MzhozP/fleet-minibus-3Sw9fXcQXx7niLa9Gtv4CG.webp";
const CORPORATE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753274777/5TH7nAvs52iRM4A6MzhozP/corporate-travel-hBjDXxhQv4B8zCgJg2QjkA.webp";

const vehicles = [
  {
    name: "Standard Minibus",
    seats: "8–16 Seats",
    img: MINIBUS_IMG,
    tag: "Most Popular",
    tagColor: "bg-brand-teal",
    price: "From £3/mile",
    desc: "Ideal for small groups, airport runs, and city transfers. Modern, comfortable, and easy to park.",
    amenities: [
      { icon: Wind, label: "Air Conditioning" },
      { icon: Zap, label: "USB Charging" },
      { icon: Users, label: "Reclining Seats" },
    ],
    features: ["Luggage space", "Seatbelts fitted", "DBS-checked driver", "Fully insured", "GPS tracked", "Climate control"],
  },
  {
    name: "Executive Minibus",
    seats: "16–24 Seats",
    img: CORPORATE_IMG,
    tag: "Business Class",
    tagColor: "bg-navy",
    price: "From £4/mile",
    desc: "Premium interior with leather seating, ideal for corporate travel and special occasions.",
    amenities: [
      { icon: Wifi, label: "Free Wi-Fi" },
      { icon: Zap, label: "USB & 240v" },
      { icon: Coffee, label: "Refreshment Area" },
    ],
    features: ["Leather seating", "Privacy glass", "Onboard Wi-Fi", "Fold-down tables", "Mood lighting", "Premium sound"],
  },
  {
    name: "Midi Coach",
    seats: "25–35 Seats",
    img: HERO_IMG,
    tag: "Great Value",
    tagColor: "bg-green-600",
    price: "From £5/mile",
    desc: "The sweet spot for medium-sized groups. Full coach comfort without the full-size price.",
    amenities: [
      { icon: Wifi, label: "Onboard Wi-Fi" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: Zap, label: "USB Charging" },
    ],
    features: ["Overhead storage", "Reclining seats", "Toilet available", "PA system", "Panoramic windows", "Luggage hold"],
  },
  {
    name: "Standard Coach",
    seats: "49 Seats",
    img: INTERIOR_IMG,
    tag: "Best Seller",
    tagColor: "bg-brand-teal",
    price: "From £6/mile",
    desc: "The UK's most popular coach size. Perfect for school trips, sporting events, and group travel.",
    amenities: [
      { icon: Wifi, label: "Free Wi-Fi" },
      { icon: Zap, label: "USB Charging" },
      { icon: Wind, label: "Full Climate" },
    ],
    features: ["Large luggage hold", "Onboard toilet", "Reclining seats", "Tinted windows", "DVD/entertainment", "Seatbelts"],
  },
  {
    name: "Executive Coach",
    seats: "49–57 Seats",
    img: HERO_IMG,
    tag: "Premium",
    tagColor: "bg-navy",
    price: "From £7/mile",
    desc: "First-class comfort for discerning travellers. Leather seats, Wi-Fi, and a professional chauffeur.",
    amenities: [
      { icon: Wifi, label: "High-Speed Wi-Fi" },
      { icon: Coffee, label: "Refreshment Bar" },
      { icon: Zap, label: "240v Sockets" },
    ],
    features: ["Leather reclining seats", "Onboard toilet & kitchen", "Individual screens", "Mood lighting", "Luggage hold", "Chauffeur service"],
  },
  {
    name: "VIP Luxury Coach",
    seats: "Up to 70 Seats",
    img: INTERIOR_IMG,
    tag: "VIP",
    tagColor: "bg-yellow-600",
    price: "From £9/mile",
    desc: "The pinnacle of coach travel. Bespoke interiors, full hospitality, and an unforgettable journey.",
    amenities: [
      { icon: Wifi, label: "Satellite Wi-Fi" },
      { icon: Coffee, label: "Full Bar Service" },
      { icon: Zap, label: "All Power" },
    ],
    features: ["Bespoke interior", "Full bar & catering", "Conference setup", "Starlight ceiling", "Premium audio/visual", "Dedicated host"],
  },
];

export default function Fleet() {
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
            Our Fleet
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            From 8-seat minibuses to 70-seat luxury coaches — we source the perfect vehicle from our network of 500+ vetted operators.
          </p>
        </div>
      </section>

      {/* Fleet grid */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {vehicles.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img src={v.img} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`${v.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>{v.tag}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 rounded-lg px-3 py-1.5">
                    <span className="text-brand-teal font-black text-sm">{v.price}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-black text-navy text-xl" style={{ fontFamily: 'Raleway, sans-serif' }}>{v.name}</h3>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Users size={14} />
                      {v.seats}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{v.desc}</p>

                  {/* Amenity icons */}
                  <div className="flex gap-3 mb-4">
                    {v.amenities.map((a, j) => (
                      <div key={j} className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2.5 py-1.5 text-xs text-gray-600">
                        <a.icon size={12} className="text-brand-teal" />
                        {a.label}
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-1.5 mb-5 flex-1">
                    {v.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-1.5 text-xs text-gray-600">
                        <CheckCircle2 size={11} className="text-brand-teal flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <button className="w-full flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white font-bold text-sm py-3 rounded-lg transition-all">
                      Get a Quote <ArrowRight size={14} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities bar */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-navy" style={{ fontFamily: 'Raleway, sans-serif' }}>Standard Across Our Fleet</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
            {[
              { icon: Wifi, label: "Wi-Fi" },
              { icon: Zap, label: "USB Charging" },
              { icon: Wind, label: "Air Con" },
              { icon: Users, label: "Reclining Seats" },
              { icon: CheckCircle2, label: "DBS Drivers" },
              { icon: CheckCircle2, label: "Fully Insured" },
              { icon: CheckCircle2, label: "GPS Tracked" },
              { icon: CheckCircle2, label: "24/7 Support" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center">
                  <item.icon size={20} className="text-white" />
                </div>
                <span className="text-xs font-semibold text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container text-center">
          <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Not Sure Which Vehicle You Need?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Our transport specialists will recommend the perfect vehicle for your group size, journey, and budget.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center gap-2 bg-brand-teal hover:bg-teal-600 text-white font-bold px-7 py-3.5 rounded-lg transition-all">
                Get Expert Advice <ArrowRight size={16} />
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
