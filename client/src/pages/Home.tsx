// AJ Burger style reminder: use the reference-matched Smokehouse Editorial Commerce system—black grill surfaces, AJ Amber heat, condensed display type, tactile borders, and product-first catalog hierarchy.
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, ChevronDown, Flame, Menu, Search, ShoppingBag, X } from "lucide-react";
import { toast } from "sonner";

type Burger = {
  id: string;
  name: string;
  price: number;
  badge: string;
  desc: string;
  image: string;
};

const burgers: Burger[] = [
  {
    id: "aj-cheese-burger",
    name: "AJ Cheese Burger",
    price: 14,
    badge: "Classic",
    desc: "Smashed beef patty, grilled onions, American cheese, pickles, ketchup and mustard sauce on a soft milk bun.",
    image: "/manus-storage/aj-cheese-burger-clean_d817c468.png",
  },
  {
    id: "aj-chicken-burger",
    name: "AJ Chicken Burger",
    price: 16,
    badge: "Chicken",
    desc: "Chicken patty, shredded mixed cheese, lettuce, chilli and mayo on a soft milk bun.",
    image: "/manus-storage/aj-chicken-burger-clean_e0478151.png",
  },
  {
    id: "aj-special",
    name: "AJ Special",
    price: 16,
    badge: "Signature",
    desc: "Smashed beef patty, American cheese, caramelised onions, pickles, lettuce, tomato and AJ’s special sauce on a soft milk bun.",
    image: "/manus-storage/aj-special-burger-clean_7f5d41bf.png",
  },
  {
    id: "aj-whop-whop",
    name: "AJ Whop Whop",
    price: 16,
    badge: "Double Cheese",
    desc: "Smashed beef patty, double American cheese, raw onions, lettuce, tomato, ketchup and mayo on a soft milk bun.",
    image: "/manus-storage/aj-whop-whop-burger-clean_cb763348.png",
  },
  {
    id: "aj-wagyu",
    name: "AJ Wagyu",
    price: 18,
    badge: "Premium",
    desc: "Wagyu patty, American cheese, grilled onions, tomato, lettuce, beetroot and AJ’s special sauce on a soft milk bun.",
    image: "/manus-storage/aj-wagyu-burger-clean_7de2dcd1.png",
  },
  {
    id: "aj-tower",
    name: "AJ Tower",
    price: 18,
    badge: "Double",
    desc: "Two smashed beef patties, lettuce, tomato, American cheese, pickles and AJ’s special sauce on a soft milk bun.",
    image: "/manus-storage/aj-tower-burger-clean_46fe9b77.png",
  },
  {
    id: "the-abd",
    name: "The A.B.D",
    price: 18,
    badge: "Spicy",
    desc: "Smashed beef patty, American cheese, jalapeños, onion, lettuce, tomato, BBQ sauce and mayo on a soft milk bun.",
    image: "/manus-storage/aj-abd-burger-clean_ef76aef1.png",
  },
  {
    id: "aj-bunless",
    name: "AJ Bunless",
    price: 18,
    badge: "Low Carb",
    desc: "Choice of two smashed beef or chicken patties, American cheese, lettuce, tomato, pickles, sunny-side-up egg and AJ’s special sauce.",
    image: "/manus-storage/aj-bunless-burger-clean_89888b63.png",
  },
];

const navItems = [
  { label: "Burgers", href: "#burgers" },
  { label: "Our Story", href: "#story" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const visibleBurgers = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const filtered = burgers.filter((burger) =>
      `${burger.name} ${burger.badge} ${burger.desc}`.toLowerCase().includes(normalized),
    );

    if (sort === "price-low") return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === "price-high") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [query, sort]);

  const handleOrder = () => {
    toast("Order counter is warming up — choose your stack first.");
  };

  const handleCardClick = (burger: Burger) => {
    toast(`${burger.name} selected — coming in hot.`);
  };

  return (
    <main className="aj-app-shell">
      <div className="aj-frame">
        <header className="aj-header">
          <a className="aj-brand" href="#top" aria-label="AJ Burger home">
            <span className="aj-wordmark" aria-hidden="true">
              <span className="aj-wordmark-top">AJ</span>
              <span className="aj-wordmark-name">Burger</span>
              <span className="aj-wordmark-accent" />
            </span>
            <img className="aj-brand-mark" src="/manus-storage/aj-burger-mark_4d4637cc.png" alt="" />
          </a>

          <nav className="aj-desktop-nav" aria-label="Primary navigation">
            {navItems.map((item, index) => (
              <a key={item.href} className={index === 0 ? "is-active" : ""} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <button className="aj-order-button aj-header-order" onClick={handleOrder} type="button">
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
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
            <button className="aj-order-button" onClick={handleOrder} type="button">
              <span>Order now</span>
              <ShoppingBag size={17} aria-hidden="true" />
            </button>
          </div>
        )}

        <section className="aj-hero" id="top" aria-labelledby="hero-title">
          <div className="paint-streak paint-streak-left" aria-hidden="true" />
          <div className="paint-streak paint-streak-right" aria-hidden="true" />
          <div className="hero-noise" aria-hidden="true" />
          <div className="aj-hero-content">
            <p className="aj-eyebrow">
              Made <span>fresh.</span> Smashed to <span>perfection.</span>
            </p>
            <h1 id="hero-title">Burgers</h1>
            <div className="hero-underline" aria-hidden="true" />
          </div>
        </section>

        <section className="aj-menu-section" id="burgers" aria-labelledby="menu-title">
          <div className="aj-controls" aria-label="Menu controls">
            <label className="aj-search">
              <Search size={16} aria-hidden="true" />
              <span className="sr-only">Search burgers</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search burgers..."
                type="search"
              />
            </label>
            <label className="aj-sort">
              <span>Sort by:</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort burgers">
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
              </select>
              <ChevronDown size={14} aria-hidden="true" />
            </label>
          </div>

          <div className="aj-mobile-meta">
            <span id="menu-title">Our menu</span>
            <span>{visibleBurgers.length} stacks</span>
          </div>

          {visibleBurgers.length ? (
            <div className="aj-burger-grid">
              {visibleBurgers.map((burger, index) => (
                <button
                  className="aj-card"
                  key={burger.id}
                  style={{ "--card-delay": `${index * 45}ms` } as React.CSSProperties}
                  onClick={() => handleCardClick(burger)}
                  type="button"
                >
                  <div className="aj-card-image-wrap">
                    <img className="aj-card-image" src={burger.image} alt={`${burger.name} burger`} />
                    <span className="aj-badge">{burger.badge}</span>
                  </div>
                  <div className="aj-card-body">
                    <div className="aj-title-row">
                      <h2>{burger.name}</h2>
                      <span className="aj-price">${burger.price}</span>
                    </div>
                    <p>{burger.desc}</p>
                    <span className="aj-card-link">
                      View details <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="aj-empty-state">
              <Flame size={22} aria-hidden="true" />
              <p>No stacks match that search.</p>
              <button type="button" onClick={() => setQuery("")}>Clear search</button>
            </div>
          )}
        </section>

        <footer className="aj-footer" id="contact">
          <div className="aj-footer-mark" aria-hidden="true"><Flame size={21} /></div>
          <p><span>Fresh ingredients.</span> <span>Bold flavours.</span> True satisfaction.</p>
          <div className="aj-footer-links">
            <a href="#story" id="story">Our story</a>
            <a href="#quality" id="quality">Quality first</a>
            <button type="button" onClick={handleOrder}>Order online <ArrowUpRight size={13} aria-hidden="true" /></button>
          </div>
        </footer>
      </div>
    </main>
  );
}
