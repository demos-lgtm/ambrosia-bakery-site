import type { ImageMetadata } from "astro";
import data from "../data/photos-occasions.json";
import type { Occasion } from "../data/occasions";

const files = import.meta.glob<{ default: ImageMetadata }>("../assets/gallery/*/*.jpg", { eager: true });
type Meta = { fr: string; en: string; tags: string[]; move?: string };
const META = data as unknown as Record<string, Meta>;

export type Photo = { key: string; ref: string; img: ImageMetadata; fr: string; en: string; tags: string[] };

function keyOf(path: string) {
  const m = path.match(/gallery\/([^/]+)\/.*-(\d{3})\.jpg$/);
  return m ? `${m[1]}/${m[2]}` : "";
}
const CODE: Record<string, string> = {
  "anniversaire-adulte": "AA", "anniversaire-enfant": "AE", bapteme: "BC", "baby-shower": "BS",
  "fiancailles-anniversaire": "FA", finissants: "FI", thematiques: "TH", mariage: "MA", "table-sucree": "TS",
  "patisseries-grecques": "PG", "fruits-fromage": "FF",
};
export const ALL: Photo[] = Object.entries(files)
  .map(([p, mod]) => {
    const key = keyOf(p);
    const m = META[key];
    if (!m) return null;
    const [folder, num] = key.split("/");
    return { key, ref: `${CODE[folder] ?? "X"}-${num}`, img: mod.default, fr: m.fr, en: m.en, tags: m.tags };
  })
  .filter(Boolean)
  // The artifact preview has a 511-file limit, so preview builds show the first 140 themed cakes only.
  .filter((p) => process.env.PREVIEW !== "1" || !(p as Photo).key.startsWith("thematiques/") || +(p as Photo).key.slice(-3) <= 140) as Photo[];

const byKey = new Map(ALL.map((p) => [p.key, p]));
export const photo = (k: string) => byKey.get(k)!;

export function photosFor(o: Occasion): Photo[] {
  const list = ALL.filter((p) => o.folders.includes(p.key.split("/")[0]) && !(o.exclude ?? []).includes(p.key));
  const moved = new Set(Object.entries(META).filter(([, m]) => m.move).map(([k]) => k));
  const out = list.filter((p) => !moved.has(p.key) || META[p.key].move === "kids");
  for (const k of o.include ?? []) if (byKey.has(k)) out.push(byKey.get(k)!);
  // cover first, then the hand-picked "featured" order (best first), then the rest by number
  const rank = (k: string) => (k === o.cover ? -1 : (o.featured ?? []).includes(k) ? (o.featured ?? []).indexOf(k) : 1e4);
  return out.sort((a, b) => rank(a.key) - rank(b.key) || a.key.localeCompare(b.key));
}
