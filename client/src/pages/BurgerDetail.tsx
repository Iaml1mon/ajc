// AJ Burger style reminder: detail pages mirror the supplied burger.html reference—large product gallery on the left, bold item information on the right, amber badge/price, and a clear back-to-burgers route.
import { ArrowLeft, ArrowUpRight, Camera, Check, Flame, Star } from "lucide-react";
import { useState } from "react";
import { Link, useRoute } from "wouter";
import { toast } from "sonner";
import { SitePage } from "@/components/SiteChrome";
import { findBurger } from "@/data/burgers";

export default function BurgerDetail() {
  const [, params] = useRoute("/burger/:id");
  const burger = findBurger(params?.id);
  const [activePhoto, setActivePhoto] = useState(0);

  const gallery = [0, 1, 2, 3].map((index) => burger.gallery[index] ?? null);
  const activeImage = gallery[activePhoto] ?? burger.image;

  return (
    <SitePage>
      <div className="aj-detail-page">
        <Link className="aj-detail-back" href="/"><ArrowLeft size={15} aria-hidden="true" /> Back to burgers</Link>
        <div className="aj-detail-grid">
          <section className="aj-product-gallery" aria-label={`${burger.name} photos`}>
            <div className="aj-detail-photo">
              <img src={activeImage} alt={`${burger.name} burger`} />
              <span className="aj-photo-label">AJ / {burger.badge}</span>
            </div>
            <div className="aj-detail-thumbs">
              {gallery.map((photo, index) => (
                <button
                  className={`aj-detail-thumb${activePhoto === index ? " is-active" : ""}${!photo ? " is-empty" : ""}`}
                  key={index}
                  type="button"
                  aria-label={photo ? `${burger.name} photo ${index + 1}` : `Add photo ${index + 1}`}
                  onClick={() => photo ? setActivePhoto(index) : toast("Photo slot ready for your next upload.")}
                >
                  {photo ? <img src={photo} alt="" /> : <><Camera size={15} aria-hidden="true" /><span>Add photo</span></>}
                </button>
              ))}
            </div>
          </section>

          <article className="aj-detail-copy">
            <div className="aj-detail-badge"><Star size={12} fill="currentColor" aria-hidden="true" /> {burger.badge}</div>
            <h1>{burger.name}</h1>
            <div className="aj-detail-price">${burger.price}</div>
            <p className="aj-detail-desc">{burger.desc}</p>
            <div className="aj-ingredients">
              <h2>What&apos;s inside</h2>
              <div className="aj-ingredient-list">
                {burger.ingredients.map((ingredient) => <span key={ingredient}><Check size={12} aria-hidden="true" />{ingredient}</span>)}
              </div>
            </div>
            <Link className="aj-detail-cta" href="/"><ArrowLeft size={15} aria-hidden="true" /> Back to burgers</Link>
            <div className="aj-detail-note"><Flame size={15} aria-hidden="true" /> Smashed fresh. Served hot.</div>
          </article>
        </div>
      </div>
    </SitePage>
  );
}
