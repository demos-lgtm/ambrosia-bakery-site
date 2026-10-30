// Short excerpts of public Google reviews, in their original language.
// TODO owner: approve each excerpt before launch (see README "Reviews").
export type Review = { q: string; name: string; what: { fr: string; en: string }; tags: string[]; lang: "en" | "fr" };
export const REVIEWS: Review[] = [
  { q: "Nermin, starting with your counselling to choose the cake, you did a superb job on our cake. Seamless delivery, a pleasant surprise at reveal time.", name: "Andrei M.", what: { fr: "Gâteau à trois étages, vraies roses", en: "Three-tier cake, real roses" }, tags: ["custom", "wedding", "birthday"], lang: "en" },
  { q: "Catered for our daughter's wedding. Everything arrived as described, delivered on time and set up as promised.", name: "D. B.", what: { fr: "Table sucrée de mariage", en: "Wedding sweet table" }, tags: ["wedding", "sweet", "delivery"], lang: "en" },
  { q: "We've been customers of Ambrosia for over 10 years. We got cakes for our wedding anniversary party and we are still shocked at how delicious they were!", name: "Alexandra T.", what: { fr: "Fête d'anniversaire de mariage", en: "Anniversary party cakes" }, tags: ["custom", "engagement", "service"], lang: "en" },
  { q: "Hands down the best cheesecake I've ever tasted! The staff is so warm and welcoming.", name: "Nesrine S.", what: { fr: "Gâteau au fromage", en: "Cheesecake" }, tags: ["cheesecake", "service", "pastries"], lang: "en" },
  { q: "Ever since a trip to Greece I've been trying all the Montreal Greek bakeries. Everything looked amazing!", name: "Jay T.", what: { fr: "Croissants, pain de seigle", en: "Croissants, rye bread" }, tags: ["pastries"], lang: "en" },
  { q: "Our family's favourite place for Greek pastries and savoury bites.", name: "Avis Google", what: { fr: "Pâtisseries grecques", en: "Greek pastries" }, tags: ["pastries", "service"], lang: "en" },
  { q: "Quality, price and service unbeatable!", name: "Avis Google", what: { fr: "Service", en: "Service" }, tags: ["service", "custom", "catalogue"], lang: "en" },
  { q: "Wonderful variety of cakes, cookies, desserts, pastries, baked goods and bread.", name: "Avis Google", what: { fr: "Comptoir", en: "Counter" }, tags: ["pastries", "catalogue", "service"], lang: "en" },
];
export const REVIEW_FILTERS = {
  fr: [["wedding", "Mariage"], ["custom", "Gâteaux sur mesure"], ["pastries", "Pâtisseries grecques"], ["cheesecake", "Gâteau au fromage"], ["service", "Service"]],
  en: [["wedding", "Weddings"], ["custom", "Custom cakes"], ["pastries", "Greek pastries"], ["cheesecake", "Cheesecake"], ["service", "Service"]],
} as const;
export const reviewsFor = (tag: string, n = 3) => {
  const hit = REVIEWS.filter((r) => r.tags.includes(tag));
  const rest = REVIEWS.filter((r) => !r.tags.includes(tag));
  return [...hit, ...rest].slice(0, n);
};
