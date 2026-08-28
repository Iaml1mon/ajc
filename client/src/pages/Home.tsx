// AJ Burger style reminder: the homepage is the menu—product-first, black grill surfaces, AJ Amber labels, four-column desktop rhythm, and a strict two-column mobile grid.
import { useMemo, useState, type CSSProperties } from "react";
import { ArrowUpRight, ChevronDown, Search } from "lucide-react";
import { toast } from "sonner";
import { SitePage } from "@/components/SiteChrome";

type Burger = {
  id: string;
  name: string;
  price: number;
  badge: string;
  desc: string;
  image: string;
};

const burgers: Burger[] = [
  { id: "aj-cheese-burger", name: "AJ Cheese Burger", price: 14, badge: "Classic", desc: "Smashed beef patty, grilled onions, American cheese, pickles, ketchup and mustard sauce on a soft milk bun.", image: "/manus-storage/aj-cheese-burger-clean_d817c468.png" },
  { id: "aj-chicken-burger", name: "AJ Chicken Burger", price: 16, badge: "Chicken", desc: "Chicken patty, shredded mixed cheese, lettuce, chilli and mayo on a soft milk bun.", image: "/manus-storage/aj-chicken-burger-clean_e0478151.png" },
  { id: "aj-special", name: "AJ Special", price: 16, badge: "Signature", desc: "Smashed beef patty, American cheese, caramelised onions, pickles, lettuce, tomato and AJ’s special sauce on a soft milk bun.", image: "/manus-storage/aj-special-burger-clean_7f5d41bf.png" },
  { id: "aj-whop-whop", name: "AJ Whop Whop", price: 16, badge: "Double Cheese", desc: "Smashed beef patty, double American cheese, raw onions, lettuce, tomato, ketchup and mayo on a soft milk bun.", image: "/manus-storage/aj-whop-whop-burger-clean_cb763348.png" },
  { id: "aj-wagyu", name: "AJ Wagyu", price: 18, badge: "Premium", desc: "Wagyu patty, American cheese, grilled onions, tomato, lettuce, beetroot and AJ’s special sauce on a soft milk bun.", image: "/manus-storage/aj-wagyu-burger-clean_7de2dcd1.png" },
  { id: "aj-tower", name: "AJ Tower", price: 18, badge: "Double", desc: "Two smashed beef patties, lettuce, tomato, American cheese, pickles and AJ’s special sauce on a soft milk bun.", image: "/manus-storage/aj-tower-burger-clean_46fe9b77.png" },
  { id: "the-abd", name: "The A.B.D", price: 18, badge: "Spicy", desc: "Smashed beef patty, American cheese, jalapeños, onion, lettuce, tomato, BBQ sauce and mayo on a soft milk bun.", image: "/manus-storage/aj-abd-burger-clean_ef76aef1.png" },
  { id: "aj-bunless", name: "AJ Bunless", price: 18, badge: "Low Carb", desc: "Choice of two smashed beef or chicken patties, American cheese, lettuce, tomato, pickles, sunny-side-up egg and AJ’s special sauce.", image: "/manus-storage/aj-bunless-burger-clean_89888b63.png" },
];

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
              <button className="aj-card" key={burger.id} style={{ "--card-delay": `${index * 45}ms` } as CSSProperties} onClick={() => toast(`${burger.name} selected — coming in hot.`)} type="button">
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
            <button type="button" onClick={() => setQuery("")}>Clear search</button>
          </div>
        )}
      </section>
    </SitePage>
  );
}
