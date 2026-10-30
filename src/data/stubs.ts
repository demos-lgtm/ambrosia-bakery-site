import type { Lang } from "./site";
export const STUBS: Record<string, Record<Lang, [string, string]>> = {
  home: { fr: ["Pâtisserie Ambrosia", "La page d'accueil arrive à la prochaine étape."], en: ["Pâtisserie Ambrosia", "The homepage arrives in the next phase."] },
  wedding: { fr: ["Gâteaux de mariage à Laval", "Consultation gratuite, au moins 4 semaines avant le mariage. Page à venir."], en: ["Wedding cakes in Laval", "Free consultation, at least 4 weeks before the wedding. Page coming soon."] },
  weddingForm: { fr: ["Consultation mariage", "Formulaire à venir."], en: ["Wedding consultation", "Form coming soon."] },
  catalogue: { fr: ["Gâteaux du catalogue", "Nos gâteaux déjà dessinés, à choisir en boutique. Page à venir."], en: ["Ready-made cakes", "Our pre-designed cakes, chosen in store. Page coming soon."] },
  sweet: { fr: ["Tables sucrées", "Page à venir."], en: ["Sweet tables", "Page coming soon."] },
  pastries: { fr: ["Pâtisseries grecques", "Baklava, galaktoboureko, bougatsa et plus. Page à venir."], en: ["Greek pastries", "Baklava, galaktoboureko, bougatsa and more. Page coming soon."] },
  gallery: { fr: ["Galerie", "Page à venir."], en: ["Gallery", "Page coming soon."] },
  reviews: { fr: ["Avis", "Plus de 1 700 avis Google. Page à venir."], en: ["Reviews", "Over 1,700 Google reviews. Page coming soon."] },
  story: { fr: ["Notre histoire", "Une famille de Laval depuis 1995. Page à venir."], en: ["Our story", "A Laval family since 1995. Page coming soon."] },
  visit: { fr: ["Heures et itinéraire", "4657, boulevard Samson, Laval."], en: ["Hours and directions", "4657 Samson Blvd, Laval."] },
  faq: { fr: ["Questions fréquentes", "Page à venir."], en: ["FAQ", "Page coming soon."] },
  privacy: { fr: ["Confidentialité", "Page à venir."], en: ["Privacy", "Page coming soon."] },
};
