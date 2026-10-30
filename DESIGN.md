# Pâtisserie Ambrosia: design system

Oct 29, 2026 · Phase 2 (brand theme). Source of truth for the website build. Tokens live in `src/styles/tokens.css`; fonts in `src/styles/fonts.css`.

## Personality

**Elegant work, friendly people.** The logo and the cakes bring the polish. Words, team photos and small interactions bring the warmth. A Greek family's celebration table, not a hushed luxury boutique. Never cold, smug or stiff.

- Wedding pages: calmer, more white space, burgundy and gold.
- Celebration pages (birthday, baby shower, graduation): brighter and fuller, `--blush` allowed, more photos per screen.
- Same brand, two moods.

## Logo

All logo files are traced from the originals in `ambrosia-deploy1/logos/` and checked against them (shape overlap 97.4–99.3%, the rest being anti-aliased edges; colours identical on flat areas, gold gradient within 2–3%).

| File | Use |
|---|---|
| `src/assets/brand/ambrosia-lockup.svg` | Wordmark + "PÂTISSERIE \| BOULANGERIE". Header on desktop, footer |
| `src/assets/brand/ambrosia-wordmark.svg` | Wordmark alone. Mobile header, small spaces |
| `src/assets/brand/ambrosia-wordmark-white.svg` | On burgundy or photos (white letters, gold wheat) |
| `src/assets/brand/ambrosia-seal.svg` | The round seal. Hero badge, favicon source, OG image, stamp on order confirmations |
| `src/assets/brand/ambrosia-seal-white.svg` | Seal on burgundy or photos |
| `src/assets/brand/ambrosia-wheat.svg` | The wheat sprig alone. Dividers, scroll progress, button icon, loading state |

Rules:
- Never retype "AMBROSIA" in a font as a stand-in for the logo. Never recolour, stretch, outline or add effects.
- Never let an AI tool (Pika included) generate, redraw or animate the logo. Animation is done in SVG/CSS on these paths: the seal's ring draws (`stroke-dasharray`), the wheat leaves grow in sequence, the "EST. 1995" pin slides in.
- Clear space: the height of the wordmark's "A" on every side. Minimum width: wordmark 120px, seal 56px.
- The seal's paths are grouped by class (`ring`, `wheat`, `pin`, `text`) so each part can animate separately.

## Colour

Measured from the logo files. The logo's burgundy is **#870900** (the older site drafts used #840600, which is close but not the logo).

| Token | Hex | Role | Contrast on cream |
|---|---|---|---|
| `--burgundy` | #870900 | Brand colour, headlines, primary buttons, seal bands | 9.6:1 |
| `--burgundy-deep` | #5E0402 | Hover, dark bands, footer | 13.3:1 (cream on it) |
| `--burgundy-ink` | #3D0705 | Body text | 16.1:1 |
| `--gold` | #E5C376 | Wheat, rules, accents. Text only on burgundy | 1.6:1 (decoration only) / 6.0:1 on burgundy |
| `--gold-text` | #7A5A12 | Gold-family text on cream | 6.0:1 |
| `--gold-foil` | gradient | The wheat sheen. One or two premium moments per page | n/a |
| `--logo-black` | #1A0E0C | The tagline's black, for small caps labels if needed | n/a |
| `--cream` | #FBF8F3 | Page | n/a |
| `--paper` / `--paper-deep` | #F6EFE5 / #EFE4D6 | Alternating sections, cards, placeholders | n/a |
| `--ink-mid` / `--ink-soft` | #5C4440 / #7A645C | Secondary text / captions | 8.4:1 / 5.2:1 |
| `--blush` | #F3E1DB | Celebration pages only | burgundy on it 8.0:1 |

Discipline: cream and burgundy carry about 90% of every page. Gold is the jewellery.
Media behind text always gets `--overlay-burgundy` or `--overlay-scrim`, so on-screen colour stays on brand whatever the photo or Pika loop contains.
The site is light-only by design (a bakery's cream counter); `color-scheme: light`.

## Type

| Role | Family | Why |
|---|---|---|
| Display (headlines, big numbers, pull quotes) | **Bodoni Moda** 400/500 + italic | Closest free match to the wordmark: high-contrast Didone, thick verticals, hairline diagonals, bracketed serifs. Compared against Cormorant Garamond, Bellefair, Italiana, Marcellus, Forum, Gilda Display and Cinzel; Bodoni Moda was clearly closest. |
| Text and UI | **Jost** 300/400/500 | Matches the logo's "PÂTISSERIE \| BOULANGERIE" line almost exactly (geometric, Futura-like). |
| Greek display | **GFS Didot** | Neither Bodoni Moda nor Jost has Greek. GFS Didot is the Greek Font Society's Didone, same style. Loaded via `unicode-range`, so it only downloads on Greek text. |
| Greek text | **Didact Gothic** | Futura-style geometric sans with Greek. |

- All self-hosted from `public/fonts/` (18 woff2 files, 185 KB total; a page loads only the subsets it uses). Preload `bodoni-moda-latin-400-normal.woff2` and `jost-latin-400-normal.woff2`.
- Labels: Jost 500, uppercase, `--tracking-label` (0.22em), echoing the logo tagline.
- Headlines: Bodoni Moda 400, one italic accent word at most per headline ("Gâteaux de *mariage* à Laval").
- Captions written "by hand" on photos: Bodoni Moda italic. No novelty scripts.
- **TODO (owner):** ask the logo designer which typefaces the logo uses. If they're licensable web fonts, swap them into `--font-display` / `--font-text`.

Scale (fluid between 375px and 1440px): hero 40→84px, h1 34→60px, h2 28→44px, h3 21→26px, lead 18→21px, body 17px, small 15px, caption 13px, label 12px. Body line-height 1.6, measure 65ch.

## Space, shape, depth

- 8px rhythm (`--s-1`…`--s-10`); sections breathe with `--section-y` (64→128px).
- Radius 2px everywhere (crisp, like the logo); pills only for filter chips. The seal's circle and dotted ring are the only round motifs.
- Two shadows: `--shadow-card` (resting) and `--shadow-lift` (hover, tilt).

## Motifs

1. **Wheat sprig.** Section dividers (centred, 24px, with gold hairlines either side); a vertical scroll-progress rail on long pages where leaves appear one by one; the icon inside primary buttons, which nods on hover (`--ease-spring`).
2. **The seal.** Hero badge that slowly rotates its dotted outer ring; spins a little faster on hover; draws itself on first load.
3. **Dotted circular rule.** Frame for the Google rating ("★ 4,5 · 1 700+ avis Google") and the count-up numbers.
4. **The rolling-pin banner.** Small gold label for years and stats ("Depuis 1995", "26 saveurs").

## Motion

- Delightful, not dramatic. `--ease-out` for reveals, `--ease-spring` for friendly micro-moments (wheat nod, card tilt, seal spin).
- Durations: 160 / 320 / 700ms. All zero under `prefers-reduced-motion`.
- Every section is readable at rest; animation only enhances.

## Photography

- 253 curated real photos in `src/assets/gallery/` (manifest: `src/assets/gallery-manifest.json`), 10 categories, EXIF and GPS stripped.
- 259 photos with licensed characters or brand logos are held back (list in `_photo-review/`); owner to decide.
- Grid crop 4:5, feature crop 3:4, hero 9:16 on mobile.
- Never AI-generated or AI-altered cakes. Colour grading and upscaling only, cake colours must stay true.

## Brand media (Pika) — waiting on credits

The Pika account is connected but has 0 credits. Queued jobs, in order:
1. Upscale ~10 hero photos under 1400px and the 5 usable vertical videos (720p → 1080p).
2. Colour grade the 40 hero picks to one warm, clean white balance (reference: the cream token). Before/after review; reject any shift in the cake's own colours.
3. Wheat-field loop (golden wheat ears swaying, warm late light, slow, seamless, no people, no text), 3 variations.
4. Flour-in-light loop (flour drifting through a warm beam, dark bakery, macro, slow), 3 variations.
5. Textures: burgundy linen, cream paper grain, brushed gold leaf, pale marble counter. Flat, tileable, no objects.
Until then the build uses the existing `media/hero` loops and solid token colours.
