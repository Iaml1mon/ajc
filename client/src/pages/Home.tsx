// AJ Burger style reminder: the homepage is the menu—product-first, black grill surfaces, AJ Amber labels, four-column desktop rhythm, and a strict two-column mobile grid.
import { useMemo, useState, type CSSProperties } from "react";
import { ArrowUpRight, ChevronDown, Search } from "lucide-react";
import { toast } from "sonner";
import { SitePage } from "@/components/SiteChrome";
import { burgers } from "@/data/burgers";

export default function Home() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");

  const visibleBurgers = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const filtered = burgers.filter((burger) => `${burger.name} ${burger.badge} ${burger.desc}`.toLowerCase().includes(normalized));
    if (sort === "price-low") return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === "price-high") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [query, sort]);

  return (
    <SitePage>
      <section className="aj-hero" aria-labelledby="hero-title">
        <div className="paint-streak paint-streak-left" aria-hidden="true" />
        <div className="paint-streak paint-streak-right" aria-hidden="true" />
        <div className="hero-noise" aria-hidden="true" />
        <div className="aj-hero-content">
          <p className="aj-eyebrow">Made <span>fresh.</span> Smashed to <span>perfection.</span></p>
          <h1 id="hero-title">Burgers</h1>
          <div className="hero-underline" aria-hidden="true" />
        </div>
      </section>

      <section className="aj-menu-section" id="burgers" aria-labelledby="menu-title">
        <div className="aj-controls" aria-label="Menu controls">
          <label className="aj-search">
            <Search size={16} aria-hidden="true" />
            <span className="sr-only">Search burgers</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search burgers..." type="search" />
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
              <button className="aj-card" key={burger.id} style={{ "--card-delay": `${index * 45}ms` } as CSSProperties} onClick={() => { window.location.href = `/burger/${burger.id}`; }} type="button">
                <div className="aj-card-image-wrap">
                  <img className="aj-card-image" src={burger.image} alt={`${burger.name} burger`} />
                  <span className="aj-badge">{burger.badge}</span>
                </div>
                <div className="aj-card-body">
                  <div className="aj-title-row"><h2>{burger.name}</h2><span className="aj-price">${burger.price}</span></div>
                  <p>{burger.desc}</p>
                  <span className="aj-card-link">View details <ArrowUpRight size={14} aria-hidden="true" /></span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="aj-empty-state">
            <p>No stacks match that search.</p>
            <button type="button" onClick={() => { setQuery(""); toast("Menu reset."); }}>Clear search</button>
          </div>
        )}
      </section>
    </SitePage>
  );
}
