// AJ Burger style reminder: contact should feel direct and welcoming—strong condensed headings, warm amber action links, dark cards, and social proof through clear icon-led destinations.
import { ArrowUpRight, Instagram, Mail } from "lucide-react";
import { Link } from "wouter";
import { SitePage, TikTokGlyph, instagramUrl, tiktokUrl } from "@/components/SiteChrome";

export default function Contact() {
  return (
    <SitePage>
      <section className="aj-page-hero aj-contact-page-hero" aria-labelledby="contact-page-title">
        <div className="page-hero-brush" aria-hidden="true" />
        <p className="aj-section-kicker">Come say hi</p>
        <h1 id="contact-page-title">Contact</h1>
        <p className="aj-page-hero-lede">Questions, feedback, catering? Send it our way.</p>
      </section>

      <section className="aj-contact-page-grid">
        <div className="aj-contact-email-card">
          <div className="aj-contact-icon"><Mail size={21} aria-hidden="true" /></div>
          <p className="aj-section-kicker">Email the team</p>
          <h2>Let’s talk burgers.</h2>
          <p>For questions, feedback, catering enquiries, or anything AJ Burger, send us an email and we’ll get back to you.</p>
          <a className="aj-contact-email-link" href="mailto:ajburgers21@gmail.com?subject=AJ%20Burgers%20enquiry">
            ajburgers21@gmail.com <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="aj-social-panel">
          <p className="aj-section-kicker">Follow the heat</p>
          <h2>AJ after hours.</h2>
          <div className="aj-social-card-list">
            <a className="aj-social-card" href={instagramUrl} target="_blank" rel="noreferrer">
              <span className="aj-social-card-icon"><Instagram size={19} aria-hidden="true" /></span>
              <span><strong>Instagram</strong><small>@ajburgers_</small></span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="aj-social-card" href={tiktokUrl} target="_blank" rel="noreferrer">
              <span className="aj-social-card-icon"><TikTokGlyph size={19} /></span>
              <span><strong>TikTok</strong><small>@ajburgers_</small></span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="aj-contact-bottom">
        <div className="aj-contact-bottom-mark" aria-hidden="true"><span>AJ</span><span>BURGER</span></div>
        <div>
          <p className="aj-section-kicker">Need the menu?</p>
          <h2>Pick your stack.</h2>
        </div>
        <Link className="aj-order-button" href="/">View burgers <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </section>
    </SitePage>
  );
}
