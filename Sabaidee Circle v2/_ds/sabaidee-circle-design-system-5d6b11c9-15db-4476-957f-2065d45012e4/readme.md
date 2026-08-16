# Sabaidee Circle — Design System

A community-rooted design system for **Sabaidee Circle**, a cultural space for Lao people across generations, based in Canada. The brand exists to cultivate connection, continuity, and pride in Lao culture through shared practice and gathering.

> **Essence:** Belonging (you don't have to prove your "Lao-ness") · Continuity (honouring tradition while letting it evolve) · Care (for culture, community, and one another).

This project IS the design system. An automated compiler indexes the tokens and bundles the components into `_ds_bundle.js`; consuming projects link `styles.css` and read components from `window.SabaideeCircleDesignSystem_5d6b11`.

## Sources provided
- **Brand & Communications Guidelines (draft)** — pasted prose covering essence, voice, accessibility, visual direction, iconography. Distilled into this readme.
- **`uploads/sabcirlce.md`** — a structured token spec ("Heritage Pulse") with a full Material-3-style colour palette, type scale, spacing, radius. This is the authoritative source for the token values.
- **`uploads/lo.png`** — the logo (copied to `assets/logo-circle.png`): a *wai / nop* gesture inside a circle, red on white on black, with a saffron arc.

No codebase or Figma was provided — there is no existing product UI to recreate, so the website UI kit is an original build expressing the brand, not a copy of a shipped site.

---

## CONTENT FUNDAMENTALS — how we write

**Tone: quick, casual, warm, welcoming.** Friendly and conversational, respectful of elders and traditions, inclusive of every level of cultural knowledge. Calm and grounded, never performative.

- **Person:** speak as **we** (the circle) to **you** (the reader). "Join us as we gather…", "Come practice with us."
- **Casing:** Sentence case everywhere except the small uppercase `label-caps` eyebrow. Headlines are sentence case, never Title Case.
- **Invite, don't instruct.** Replace institutional phrasing:
  - "Participants will engage in…" → **"Join us as we gather to…"**
  - "This program is designed to…" → **"This is a space to come together and…"**
  - "Register for the workshop" → **"Come practice with us"**
- **Favoured words:** community, circle, gathering, shared, rooted, intergenerational, belonging, care, **practice** (never "program").
- **Avoid:** corporate/institutional, overly spiritual or dogmatic, exclusive or "expert-only", trendy/performative language.
- **Accessibility of language:** plain words, short sentences, generous spacing. When using Lao or Pali terms (*sabaidee*, *wai*, *nop*, *sangha*), add a brief plain-language gloss.
- **Emoji:** used very sparingly. The brand prose uses ✨ for tone notes; a small 🍁 maple leaf is the sanctioned subtle Canadian accent. Don't decorate UI with emoji beyond this.
- **Vibe:** like a warm invitation from a friend who saved you a seat. Example: *"You don't have to prove your Lao-ness — this is a space to belong."*

---

## VISUAL FOUNDATIONS

**Overall style:** *Modern-Tactile* — clean, highly legible layouts softened by organic, textile-inspired warmth. Structured enough to feel trustworthy; never clinical or cold.

### Colour
- **Saffron / orange (`#FF8C00`, `--saffron-400`)** — the primary, energetic CTA colour. Deep saffron-brown (`#904D00`) for stronger text-on-light moments.
- **Indigo (`#4C56AF`)** — secondary; grounded, trustworthy. Outlines and secondary buttons.
- **Metallic gold (`#CAA62E`)** — accent only: 1px card top-edges, underlines, rings, fine detailing. Signifies heritage and quality.
- **Warm beige / parchment (`#FBFBE2` surface, `#F5F5DC` sunken)** — replaces pure white to reduce eye strain and feel welcoming. White (`#FFFFFF`) is reserved for raised cards.
- **Ink (`#1B1D0E`)** — near-black text for AA/AAA contrast; muted variant `#564334`.
- Vibe is **warm and earthy** throughout — no neon, no cool greys, no bluish-purple gradients. Imagery should read warm.

### Type
- **Epilogue** (700/800 display, 600 headings) — editorial, contemporary-craft character. Display/headlines only.
- **Inter** (400 body, 600 labels) — all functional text, chosen for legibility across generations. Clean sans-serif only; never cursive/script for body (elders may struggle). Script styling is for logos and decorative accents only.
- Generous line-heights (28px on 18px body) and a narrow measure (~62ch) for comfortable reading.

### Spacing & layout
- **8px vertical rhythm.** Tokens xs 4 · sm 8 · md 16 · lg 24 · xl 48 · 2xl 72.
- Fluid grid with a fixed **1200px max-width** for an intimate feel on large screens; 64px desktop / 16px mobile side margins.
- The "Circle" concept = content breathes in distinct, focused islands separated by large `xl`/`2xl` blocks.

### Shape & radius
- Softly rounded: **8px** default UI, **24px (`--radius-xl`)** hero & community cards, **full** for avatars, status dots, FABs.
- Circular forms recur deliberately — they echo the logo (cycles, community, continuity).

### Elevation & depth
- **Tonal layering + soft, warm shadows** rather than hard borders. Shadows are saffron/ink-tinted and low-opacity, never neutral grey.
- **Cards carry a 1px metallic-gold inset on the top edge** (`--edge-gold`) — the signature card detail — plus a soft shadow on white.
- Surface tiers: beige background → white card → raised beige. Subtle textile cross-hatch can sit as a "Layer 0" background texture (see hero).

### Backgrounds & texture
- Predominantly flat warm beige. Decorative **woven / cross-hatch textile patterns** appear faintly behind heroes (low-opacity repeating linear-gradients), never loud. Radial saffron halos frame the logo mark.
- No photographic full-bleeds shipped (none were provided) — gradient + texture fields stand in. Swap in real community photography when available (warm-toned, candid).

### Motion
- **Calm and grounded — no bounce.** Standard ease `cubic-bezier(0.2,0,0,1)`, ~200ms. Hover = gentle lift / colour shift; press = subtle `scale(0.97)`. Avoid infinite decorative loops.

### States
- **Hover:** primary button darkens (saffron-400 → 500); secondary fills with light indigo; cards lift 2px and deepen shadow; tertiary's gold underline thickens.
- **Press:** `scale(0.92–0.97)`.
- **Focus:** saffron ring / thickened saffron bottom-border on inputs.

### Borders & dividers
- Hairlines in clay (`#DDC1AE`). Standard rules can be replaced with a faint repeating woven pattern. Inputs use a **bottom-only** 2px saffron border that thickens and glows on focus — not a full box.

---

## ICONOGRAPHY

No brand icon font or SVG set was supplied. The website kit uses **inline Lucide-style stroke icons** (`ui_kits/website/icons.jsx`) — consistent 1.9px round-cap strokes that suit the calm, hand-touched feel. **This is a substitution** (see CAVEATS). If you adopt a CDN set, **[Lucide](https://lucide.dev)** is the recommended match (same weight/round joins); link it rather than hand-rolling new SVGs.

- **Emoji** is not used as iconography, with one sanctioned exception: a small 🍁 maple leaf as a subtle Canadian accent.
- **Decorative symbols** — lotus, hands/gestures, brushstrokes, abstracted temple shapes, woven motifs — should be used *gently and sparingly*. Less is more; Buddhist imagery must read respectful and calm, never decorative or trendy. Don't stack multiple symbols at once.
- The **logo** (`assets/logo-circle.png`) is the primary brand glyph; frame it in a circle, optionally with a gold ring and/or saffron halo.

---

## INDEX — what's in this project

**Foundations / entry**
- `styles.css` — global entry point (imports only). Link this.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `elevation.css` · `fonts.css` — CSS custom properties + webfont loading.
- `assets/logo-circle.png` — the logo mark.

**Components** (`window.SabaideeCircleDesignSystem_5d6b11`)
- `components/actions/` — **Button**, **IconButton**
- `components/forms/` — **Input**
- `components/content/` — **Card**, **Chip**, **Badge**, **Avatar**

**Design System tab cards**
- `guidelines/*.card.html` — Colors (3), Type (2), Spacing (2), Brand (2) specimen cards.
- One `*.card.html` per component directory (Components group).

**UI kit**
- `ui_kits/website/` — interactive community website (Home · Gatherings · Our Story · Join). Entry `index.html`. See its README.

**Meta**
- `SKILL.md` — Agent-Skill manifest for use in Claude Code.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — generated; do not edit.

---

## CAVEATS
- **Fonts load from Google Fonts**, not self-hosted woff2 (no font binaries were provided). Fine for prototypes; self-host for offline/production.
- **Icons are substituted** (Lucide-style), as no brand icon set exists.
- **No product UI, photography, or real event content** was provided — the website kit is an original brand expression with placeholder gatherings, not a recreation of a shipped site.
- Two conflicting palette readings existed in the source (prose vs. frontmatter); the **frontmatter Material palette was taken as canonical**, with prose informing semantic roles.
