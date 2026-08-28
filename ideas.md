# AJ Burger — Reference-Matched Design Direction

## Ground-truth reference

This project reproduces the supplied AJ Burger menu mockup as the visual source of truth. Fidelity to the reference overrides exploratory design variations. The experience is a dark, premium burger catalog with a framed desktop composition, a compact two-column mobile menu, a bright orange order action, brushed/orange paint accents, editorial burger photography, and a black-to-charcoal material palette.

## Selected design philosophy: Smokehouse Editorial Commerce

### Design Movement

Contemporary fast-casual editorial branding with the tactile visual language of a late-night burger counter: condensed sports-display typography, ink-black surfaces, sharp amber highlights, and product photography presented like collectible menu plates.

### Core Principles

1. **Black field, hot accent:** Near-black surfaces create appetite and focus while one ownable amber-orange color carries navigation, prices, buttons, and energetic brush marks.
2. **Product-first hierarchy:** Burgers are the visual heroes. Text is compact, purposeful, and arranged to support quick scanning rather than compete with food photography.
3. **Framed composition:** Desktop uses a large rounded rectangular menu frame with a separate phone-preview rhythm implied through responsive behavior; mobile becomes a tight, efficient two-column grid.
4. **Tactile contrast:** Thin cool-gray borders, grain/noise, warm highlights, and subtle shadows keep the interface dimensional without introducing gradients that feel synthetic.

### Color Philosophy

The palette behaves like a blackened grill surface under warm counter light. `#090A0A` and `#101112` establish depth, `#E9E9E6` is reserved for readable type, and **AJ Amber `#F59D00`** is the brand signal: heat, speed, appetite, and the flash of a paper takeout bag. Orange is intentionally scarce enough to guide the eye through the catalog.

### Layout Paradigm

A framed catalog rather than a generic centered landing page. The header is a slim control rail; a compressed hero title band creates the branded entry point; search and sort form an instrument panel; the menu uses an asymmetrical-feeling product matrix with generous image zones and compact copy blocks. On small screens, the same catalog collapses into a strict two-column grid with larger tap targets and shorter descriptions.

### Signature Elements

- A hand-painted orange brush stroke behind or beneath the `BURGERS` title and a few cropped orange edge marks around the hero band.
- Thin graphite borders around product plates with a soft inner glow and black photo stage.
- A tiny flame mark above the footer line, echoing the `FRESH INGREDIENTS. BOLD FLAVOURS. TRUE SATISFACTION.` lockup.

### Interaction Philosophy

Interactions should feel like a physical menu being handled: search filters immediately, sort changes are explicit, cards lift by a few pixels with a warmer border, and order actions respond with a short press scale. Mobile navigation opens as a compact dark drawer rather than a full-screen takeover. No motion should obscure prices or food details.

### Animation

Use 150–220ms ease-out transitions. Product cards enter with a short staggered opacity/translate reveal on initial load; hover changes only transform, border color, and shadow. The mobile drawer slides from the top-right with opacity and translate only. Respect `prefers-reduced-motion` by disabling entrance stagger and keeping state changes instant.

### Typography System

Use `Barlow Condensed` for display and menu labels, with heavy uppercase headlines and tight tracking. Use `DM Sans` for descriptions, controls, and utility text so the catalog remains legible at compact sizes. Hierarchy: eyebrow 10–11px uppercase with wide tracking; hero title 72–104px desktop / 40–48px mobile; card title 16–18px; price 16–18px bold; description 12–13px with 1.45 line-height.

### Brand Essence

AJ Burger is a bold, no-nonsense smashed-burger menu for hungry people who want a fast, flavorful decision without the fuss. Personality: **gritty, generous, electric**.

### Brand Voice

Headlines are short and declarative. CTAs are direct and energetic. Microcopy sounds like a chef behind the counter, never like generic startup copy.

Example lines:

- `MADE FRESH. SMASHED TO PERFECTION.`
- `Pick your stack. We’ll bring the heat.`

### Wordmark & Logo

Use the supplied AJ Burger lockup from the project archive when available. The mark should read as a compact white script-like badge with `AJ` above `Burger`, paired with a small amber-green accent underline/leaf shape. It must remain a visual mark rather than plain text in a default font.

### Signature Brand Color

**AJ Amber — `#F59D00`**. This is the ownable heat signal used for active navigation, prices, order buttons, icon strokes, title brush accents, and selected text fragments.

## Implementation reminders

- Keep the page single-route and functional: search, sorting, nav anchors, menu drawer, and order button should all work as expected.
- Desktop target: approximately 1000–1100px framed catalog with four columns and two rows of burger cards.
- Mobile target: two equal-width burger columns, compact image stage, title/price row, and no long paragraphs inside cards.
- Keep the supplied reference image as the visual benchmark. Do not introduce purple, blue, glassmorphism, generic gradients, or rounded card systems unrelated to the reference.
