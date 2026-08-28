// AJ Burger style reminder: shared chrome keeps the black framed menu, AJ Amber navigation, supplied logo, and direct ordering action consistent across all dedicated pages.
import { ArrowUpRight, ChevronRight, Flame, Instagram, Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";

const navItems = [
  { label: "Burgers", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

const instagramUrl = "https://www.instagram.com/ajburgers_/";
const tiktokUrl = "https://www.tiktok.com/@ajburgers_";

function TikTokGlyph({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 4v10.2a4.1 4.1 0 1 1-3.3-4.02" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 4c.32 2.1 1.75 3.55 4 3.85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SiteHeader({ onOrder }: { onOrder: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <>
      <header className="aj-header">
        <Link className="aj-brand" href="/" aria-label="AJ Burger home" onClick={() => setMenuOpen(false)}>
          <img className="aj-brand-logo" src="/manus-storage/aj-burger-full-logo_249607db.png" alt="AJ Burger" />
        </Link>

        <nav className="aj-desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} className={location === item.href ? "is-active" : ""} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button className="aj-order-button aj-header-order" onClick={onOrder} type="button">
          <span>Order now</span>
          <ShoppingBag size={17} strokeWidth={2.1} aria-hidden="true" />
        </button>

        <button
          className="aj-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      {menuOpen && (
        <div className="aj-mobile-nav" role="dialog" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          ))}
          <button className="aj-order-button" onClick={onOrder} type="button">
            <span>Order now</span>
            <ShoppingBag size={17} aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}

export function SiteFooter({ onOrder }: { onOrder: () => void }) {
  return (
    <footer className="aj-footer" id="contact-footer">
      <div className="aj-footer-mark" aria-hidden="true"><Flame size={21} /></div>
      <p><span>Fresh ingredients.</span> <span>Bold flavours.</span> True satisfaction.</p>
      <div className="aj-footer-links">
        <Link href="/our-story">Our story</Link>
        <Link href="/quality">Quality first</Link>
        <Link href="/contact">Contact</Link>
        <button type="button" onClick={onOrder}>Order online <ArrowUpRight size={13} aria-hidden="true" /></button>
      </div>
      <div className="aj-social-links" aria-label="Social media">
        <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="AJ Burgers on Instagram"><Instagram size={15} /></a>
        <a href={tiktokUrl} target="_blank" rel="noreferrer" aria-label="AJ Burgers on TikTok"><TikTokGlyph size={15} /></a>
      </div>
    </footer>
  );
}

export function OrderModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="aj-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="aj-order-modal" role="dialog" aria-modal="true" aria-labelledby="order-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="aj-modal-close" type="button" aria-label="Close order options" onClick={onClose}><X size={19} /></button>
        <div className="aj-modal-flame" aria-hidden="true"><Flame size={20} /></div>
        <p className="aj-section-kicker">Choose your counter</p>
        <h2 id="order-title">Order AJ Burger</h2>
        <p className="aj-modal-copy">Pick your delivery partner and we’ll send you straight to the menu.</p>
        <div className="aj-provider-list">
          <a className="aj-provider-button" href="https://www.ubereats.com/au/store/aj-burgers/sHkTeYksRNeA1PGfFcbQrQ" target="_blank" rel="noreferrer">
            <span><strong>Uber Eats</strong><small>Delivery &amp; pickup</small></span>
            <ChevronRight size={18} aria-hidden="true" />
          </a>
          <a className="aj-provider-button" href="https://www.doordash.com/store/aj-burgers-liverpool-sefton-29595025/37105560/" target="_blank" rel="noreferrer">
            <span><strong>DoorDash</strong><small>Delivery &amp; pickup</small></span>
            <ChevronRight size={18} aria-hidden="true" />
          </a>
        </div>
        <button className="aj-modal-later" type="button" onClick={onClose}>Maybe later</button>
      </div>
    </div>
  );
}

export function SitePage({ children }: { children: ReactNode }) {
  const [orderOpen, setOrderOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOrderOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className="aj-app-shell">
      <div className="aj-frame">
        <SiteHeader onOrder={() => setOrderOpen(true)} />
        <div className="aj-page-content">{children}</div>
        <SiteFooter onOrder={() => setOrderOpen(true)} />
        <OrderModal open={orderOpen} onClose={() => setOrderOpen(false)} />
      </div>
    </main>
  );
}

export { instagramUrl, tiktokUrl, TikTokGlyph };
