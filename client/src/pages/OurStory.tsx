// AJ Burger style reminder: this page keeps the smokehouse editorial feel—quiet black space, amber rules, condensed headlines, and copy that reads like a confident counter story.
import { ArrowUpRight, Flame } from "lucide-react";
import { Link } from "wouter";
import { SitePage } from "@/components/SiteChrome";

export default function OurStory() {
  return (
    <SitePage>
      <section className="aj-page-hero" aria-labelledby="story-page-title">
        <div className="page-hero-brush" aria-hidden="true" />
        <p className="aj-section-kicker">The AJ way</p>
        <h1 id="story-page-title">Our story</h1>
        <p className="aj-page-hero-lede">Big flavour, built from the ground up.</p>
      </section>

      <section className="aj-story-page-grid">
        <div className="aj-story-page-index">
          <span>01</span>
          <div className="aj-story-page-flame" aria-hidden="true"><Flame size={22} /></div>
          <p>Made fresh.<br />Served loud.</p>
        </div>
        <div className="aj-story-page-copy">
          <p className="aj-story-page-lead">AJ Burger started with a simple idea: make the kind of burger you crave before you even see the menu.</p>
          <p>Every stack is smashed fresh, layered with bold toppings, and served without the fuss. The menu is built for the people who know exactly what they want — and the people who change their mind when the special sauce hits the air.</p>
          <p>We keep the process direct: good ingredients, a hot grill, a soft bun, and enough texture in every bite to make the napkins worth it.</p>
          <p className="aj-demo-note">Demo story copy — replace this with AJ Burger’s confirmed history, team details, and opening story before publishing.</p>
          <div className="aj-story-page-cta-row">
            <Link className="aj-text-link" href="/">See the menu <ArrowUpRight size={14} aria-hidden="true" /></Link>
            <span className="aj-story-page-divider" aria-hidden="true" />
            <span className="aj-story-page-caption">A little messy. Always worth it.</span>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
