// AJ Burger style reminder: quality content should feel like a confident ingredient ledger—dark panel surfaces, amber numbering, restrained borders, and no unverifiable claims beyond the demo labels.
import { ArrowUpRight, Check, Flame, ShieldCheck, Truck } from "lucide-react";
import { Link } from "wouter";
import { SitePage } from "@/components/SiteChrome";

const qualityNotes = [
  {
    number: "01",
    label: "Space reserved",
    icon: ShieldCheck,
    title: "Halal certified",
    body: "Official halal certificate artwork can be added here when ready.",
    footer: "Add certificate later",
    placeholder: true,
  },
  {
    number: "02",
    label: "Sourcing note",
    icon: Truck,
    title: "Where our meat comes from",
    body: "We choose beef and chicken through trusted Australian suppliers selected for freshness and consistency.",
    footer: "Demo copy — confirm supplier details before publishing.",
  },
  {
    number: "03",
    label: "Every service",
    icon: Flame,
    title: "Made fresh",
    body: "From the smash to the final wrap, each order is prepared to hit the pass hot and satisfying.",
    footer: "No shortcuts on the grill.",
  },
];

export default function Quality() {
  return (
    <SitePage>
      <section className="aj-page-hero aj-quality-page-hero" aria-labelledby="quality-page-title">
        <div className="page-hero-brush" aria-hidden="true" />
        <p className="aj-section-kicker">No shortcuts</p>
        <h1 id="quality-page-title">Quality first</h1>
        <p className="aj-page-hero-lede">Good burgers begin with ingredients you can stand behind.</p>
      </section>

      <section className="aj-quality-page-grid" aria-label="AJ Burger quality commitments">
        {qualityNotes.map((note) => {
          const Icon = note.icon;
          return (
            <article className={`aj-quality-page-card${note.placeholder ? " is-placeholder" : ""}`} key={note.number}>
              <div className="aj-quality-card-top"><span>{note.number}</span><span className="aj-slot-status">{note.label}</span></div>
              <div className="aj-quality-page-icon"><Icon size={21} aria-hidden="true" /></div>
              <h2>{note.title}</h2>
              <p>{note.body}</p>
              <span className={note.placeholder ? "aj-upload-hint" : "aj-quality-page-footer"}>
                {note.placeholder ? <><span>{note.footer}</span><ArrowUpRight size={14} aria-hidden="true" /></> : <><Check size={13} aria-hidden="true" />{note.footer}</>}
              </span>
            </article>
          );
        })}
      </section>

      <section className="aj-quality-note">
        <div>
          <p className="aj-section-kicker">From the pass</p>
          <h2>Fresh in. Fast out.</h2>
        </div>
        <p>We’re keeping this page ready for the details that make AJ Burger yours: the official certificate, the confirmed supplier story, and the standards you want every customer to see.</p>
        <Link className="aj-text-link" href="/contact">Ask us a question <ArrowUpRight size={14} aria-hidden="true" /></Link>
      </section>
    </SitePage>
  );
}
