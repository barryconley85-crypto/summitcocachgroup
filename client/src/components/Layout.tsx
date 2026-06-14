/**
 * Layout — Summit Travel Group
 * Design: Modern Professional
 * Teal (#1e3a5f) + Bright Teal (#2ea8d8) + White
 * Raleway ExtraBold display, Nunito Sans body
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top info bar */}
      <div className="bg-navy-dark text-white text-sm py-2 hidden md:block">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 opacity-80">
              <MapPin size={13} />
              Nationwide UK Coverage
            </span>
            <span className="flex items-center gap-1.5 opacity-80">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
              Available 24/7
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-semibold text-brand-teal">
            <Phone size={13} />
            07425866205
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg border-b border-gray-100"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-teal-700 group-hover:to-teal-900 transition-all">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    {/* Mountain peak */}
                    <polygon points="12,2 20,14 4,14" fill="white" />
                    {/* Coach silhouette */}
                    <rect x="6" y="12" width="12" height="8" rx="1" fill="oklch(0.55 0.15 200)" opacity="0.9" />
                    <circle cx="8" cy="20" r="1.5" fill="white" />
                    <circle cx="16" cy="20" r="1.5" fill="white" />
                  </svg>
                </div>
                <div>
                  <div className="font-black text-navy text-lg leading-none tracking-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    SUMMIT
                  </div>
                  <div className="text-xs font-semibold text-brand-teal tracking-widest uppercase leading-none">
                    Travel Group
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 relative group ${
                      location === link.href
                        ? "text-brand-teal"
                        : "text-navy hover:text-brand-teal"
                    }`}
                    style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-brand-teal rounded-full transition-all duration-200 ${
                        location === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </span>
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:07425866205"
                className="hidden lg:flex items-center gap-2 text-sm font-bold text-navy hover:text-brand-teal transition-colors"
              >
                <Phone size={15} />
                07425866205
              </a>
              <Link href="/contact">
                <button className="hidden md:flex items-center gap-2 bg-brand-teal hover:bg-teal-600 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md active:scale-95">
                  Get a Quote
                </button>
              </Link>
              <button
                className="md:hidden p-2 rounded-lg text-navy hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                      location === link.href
                        ? "bg-navy text-white"
                        : "text-navy hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100 mt-2">
                <a
                  href="tel:07425866205"
                  className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-brand-teal"
                >
                  <Phone size={15} />
                  07425866205
                </a>
                <Link href="/contact">
                  <button className="w-full mt-2 bg-brand-teal text-white font-bold text-sm px-5 py-3 rounded-lg">
                    Get a Free Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-navy text-white">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    {/* Mountain peak */}
                    <polygon points="12,2 20,14 4,14" fill="white" />
                    {/* Coach silhouette */}
                    <rect x="6" y="12" width="12" height="8" rx="1" fill="oklch(0.55 0.15 200)" opacity="0.9" />
                    <circle cx="8" cy="20" r="1.5" fill="white" />
                    <circle cx="16" cy="20" r="1.5" fill="white" />
                  </svg>
                </div>
                <div>
                  <div className="font-black text-white text-lg leading-none" style={{ fontFamily: 'Raleway, sans-serif' }}>SUMMIT</div>
                  <div className="text-xs font-semibold text-brand-teal tracking-widest uppercase leading-none">Travel Group</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Connecting passengers with trusted coach operators across the UK since 2008. Your journey, our priority.
              </p>
              <div className="flex gap-3">
                {["f", "in", "tw"].map((s) => (
                  <a key={s} href="#" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-brand-teal flex items-center justify-center text-xs font-bold transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'Raleway, sans-serif' }}>Services</h4>
              <ul className="space-y-2.5">
                {["Corporate Travel", "Airport Transfers", "School & Education", "Wedding Transport", "Sporting Events", "Day Trips & Tours", "Stag & Hen Parties"].map((s) => (
                  <li key={s}>
                    <Link href="/services">
                      <span className="text-white/60 hover:text-brand-teal text-sm transition-colors">{s}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fleet */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'Raleway, sans-serif' }}>Our Fleet</h4>
              <ul className="space-y-2.5">
                {["8–16 Seat Minibus", "17–24 Seat Midi Coach", "29–35 Seat Coach", "49 Seat Standard Coach", "57–70 Seat Executive", "VIP Luxury Coach"].map((f) => (
                  <li key={f}>
                    <Link href="/fleet">
                      <span className="text-white/60 hover:text-brand-teal text-sm transition-colors">{f}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'Raleway, sans-serif' }}>Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-white/60">
                  <Phone size={14} className="mt-0.5 text-brand-teal flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">07425866205</div>
                    <div className="text-xs">Free from UK mobiles & landlines</div>
                  </div>
                </li>
                <li className="text-sm text-white/60">
                  <span className="text-white font-semibold block">enquiries@summittravel.co.uk</span>
                  We reply within 2 hours
                </li>
                <li className="text-sm text-white/60">
                  <span className="text-white font-semibold block">Opening Hours</span>
                  Mon–Fri: 8am–8pm<br />
                  Sat–Sun: 9am–6pm<br />
                  <span className="text-green-400 text-xs">Emergency line 24/7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/10">
          <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <p>© {new Date().getFullYear()} Summit Travel Group Ltd. Registered in England & Wales. Company No. 06712345.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/70 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white/70 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
