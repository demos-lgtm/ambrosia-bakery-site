// Single source for business facts (from Knowledge Base v2, Jul 13 2026) and routes.
export const SITE = {
  url: "https://patisserieambrosia.com",
  name: "Pâtisserie Ambrosia",
  altName: "Ambrosia Bakery",
  street: "4657, boul. Samson",
  streetEn: "4657 Samson Blvd.",
  city: "Laval",
  region: "QC",
  regionLong: "Québec",
  postal: "H7W 2H2",
  phone: "450 686-2950",
  phoneIntl: "+14506862950",
  email: "info@patisserieambrosia.com",
  instagram: "https://www.instagram.com/ambrosiabakeryinc/",
  instagramHandle: "@ambrosiabakeryinc",
  maps: "https://www.google.com/maps?cid=763768971757780094",
  reviewsUrl: "https://www.google.com/maps?cid=763768971757780094",
  rating: "4,5",
  ratingEn: "4.5",
  reviewCount: 1714,
  founded: 1995,
  ghlWidgetId: "6a4424206112ba37bb92aa0a",
  hours: {
    fr: [["Lundi à samedi", "8 h – 20 h"], ["Dimanche", "8 h – 19 h"]],
    en: [["Monday to Saturday", "8 a.m. – 8 p.m."], ["Sunday", "8 a.m. – 7 p.m."]],
  },
};

export type Lang = "fr" | "en";

// Route pairs. Pages not built yet still get their final URL so links never change.
export const ROUTES: Record<string, { fr: string; en: string }> = {
  home: { fr: "/", en: "/en/" },
  wedding: { fr: "/gateaux-de-mariage-laval/", en: "/en/wedding-cakes-laval/" },
  weddingForm: { fr: "/consultation-mariage/", en: "/en/wedding-consultation/" },
  custom: { fr: "/gateaux-personnalises-laval/", en: "/en/custom-cakes-laval/" },
  birthday: { fr: "/gateaux-anniversaire-laval/", en: "/en/birthday-cakes-laval/" },
  themed: { fr: "/gateaux-thematiques-laval/", en: "/en/themed-cakes-laval/" },
  baptism: { fr: "/gateaux-bapteme-communion-laval/", en: "/en/baptism-communion-cakes-laval/" },
  babyshower: { fr: "/gateaux-baby-shower-laval/", en: "/en/baby-shower-cakes-laval/" },
  graduation: { fr: "/gateaux-finissants-laval/", en: "/en/graduation-cakes-laval/" },
  engagement: { fr: "/gateaux-fiancailles-anniversaire-mariage-laval/", en: "/en/engagement-anniversary-cakes-laval/" },
  catalogue: { fr: "/gateaux-catalogue/", en: "/en/ready-made-cakes/" },
  sweet: { fr: "/table-sucree-mariage/", en: "/en/sweet-tables/" },
  cheesecake: { fr: "/gateau-au-fromage-laval/", en: "/en/cheesecake-laval/" },
  delivery: { fr: "/livraison-laval-montreal/", en: "/en/cake-delivery-laval-montreal/" },
  menu: { fr: "/menu/", en: "/en/menu/" },
  pastries: { fr: "/patisseries-grecques/", en: "/en/greek-pastries/" },
  gallery: { fr: "/galerie/", en: "/en/gallery/" },
  reviews: { fr: "/avis/", en: "/en/reviews/" },
  story: { fr: "/notre-histoire/", en: "/en/our-story/" },
  visit: { fr: "/visite/", en: "/en/visit/" },
  faq: { fr: "/faq/", en: "/en/faq/" },
  privacy: { fr: "/confidentialite/", en: "/en/privacy/" },
};

export const FLAVOURS = [
  "Amigdalou", "Birthday Cake", "Biscoff", "Black Forest", "Carrot Cake", "Double Chocolate", "Fruit Cake",
  "Half & Half with Chocolate Chips", "Lemon Blueberry", "Lemon Poppy Raspberry", "Moka / Praline", "Nougatina", "Oreo",
  "Pistachio", "Praline Double Chocolate with Nuts", "Red Velvet", "Serano", "Serano Special", "Serano Special No Nuts",
  "Serano Special with Custard", "Serano Special with Chocolate & Vanilla Custard", "Sokolatina", "Strawberry Shortcake",
  "Tiramisu", "Vanilla", "Vanilla with Mixed Berries",
];

export const T = {
  fr: {
    nav: [["wedding", "Mariage"], ["custom", "Célébrations"], ["pastries", "Pâtisseries"], ["gallery", "Galerie"], ["reviews", "Avis"], ["visit", "Visite"]],
    order: "Gâteau de célébration", orderLong: "Commander mon gâteau", wed: "Gâteau de mariage", wedLong: "Réserver ma consultation mariage", call: "Appeler", directions: "Itinéraire", menu: "Menu", close: "Fermer",
    home: "Accueil", skip: "Aller au contenu",
    reviewsLine: (n: string) => `${n} avis Google`,
    chatTitle: "Commande de gâteau", chatSub: "Assistant Ambrosia · environ 2 minutes",
    chatHello: "Bonjour! Qu'est-ce qu'on fête?",
    chatFallback: "Le clavardage n'a pas pu s'ouvrir ici. Appelez-nous au 450 686-2950, on prend votre commande au téléphone.",
    chatPrep: "Ayez votre idée en tête : une photo d'ici, de Pinterest ou d'Instagram, ou simplement un thème. Délai minimum : 7 jours.",
    likeThis: "M'en inspirer pour mon gâteau", ref: "Réf.", mention: "Mentionnez cette référence à notre assistant",
    prev: "Photo précédente", next: "Photo suivante", all: "Tous", photos: "photos", seeAll: "Voir toute la galerie",
    footerCakes: "Gâteaux", footerVisit: "Nous trouver", footerFollow: "Suivez-nous", rights: "Tous droits réservés.",
    privacy: "Confidentialité", langName: "Français",
  },
  en: {
    nav: [["wedding", "Weddings"], ["custom", "Celebrations"], ["pastries", "Pastries"], ["gallery", "Gallery"], ["reviews", "Reviews"], ["visit", "Visit"]],
    order: "Celebration cake", orderLong: "Order my cake", wed: "Wedding cake", wedLong: "Book my wedding consultation", call: "Call", directions: "Directions", menu: "Menu", close: "Close",
    home: "Home", skip: "Skip to content",
    reviewsLine: (n: string) => `${n} Google reviews`,
    chatTitle: "Cake order", chatSub: "Ambrosia assistant · about 2 minutes",
    chatHello: "Hi! What are we celebrating?",
    chatFallback: "The chat couldn't open here. Call us at 450 686-2950 and we'll take your order by phone.",
    chatPrep: "Have your idea in mind: a photo from here, Pinterest or Instagram, or just a theme. Minimum notice: 7 days.",
    likeThis: "Use this as inspiration", ref: "Ref.", mention: "Mention this reference to our assistant",
    prev: "Previous photo", next: "Next photo", all: "All", photos: "photos", seeAll: "See the full gallery",
    footerCakes: "Cakes", footerVisit: "Find us", footerFollow: "Follow us", rights: "All rights reserved.",
    privacy: "Privacy", langName: "English",
  },
};

// Hero photos chosen for each section (owner-facing: change here).
export const COVERS = { wedding: "mariage/036", custom: "anniversaire-adulte/034" } as const;

// Every page in the site, for menus, footer and the sitemap check. Label per language.
export const PAGES: Record<string, { fr: string; en: string }> = {
  home: { fr: "Accueil", en: "Home" },
  wedding: { fr: "Gâteaux de mariage", en: "Wedding cakes" },
  weddingForm: { fr: "Consultation mariage", en: "Wedding consultation" },
  sweet: { fr: "Tables sucrées", en: "Sweet tables" },
  custom: { fr: "Gâteaux de célébration", en: "Celebration cakes" },
  birthday: { fr: "Anniversaire", en: "Birthday" },
  themed: { fr: "Gâteaux thématiques", en: "Themed cakes" },
  baptism: { fr: "Baptême et communion", en: "Baptism & communion" },
  babyshower: { fr: "Baby shower", en: "Baby shower" },
  graduation: { fr: "Finissants", en: "Graduation" },
  engagement: { fr: "Fiançailles", en: "Engagement" },
  catalogue: { fr: "Catalogue en boutique", en: "In-store catalogue" },
  pastries: { fr: "Pâtisseries grecques", en: "Greek pastries" },
  cheesecake: { fr: "Gâteau au fromage", en: "Cheesecake" },
  menu: { fr: "Menu", en: "Menu" },
  gallery: { fr: "Galerie", en: "Gallery" },
  reviews: { fr: "Avis", en: "Reviews" },
  story: { fr: "Notre histoire", en: "Our story" },
  delivery: { fr: "Livraison", en: "Delivery" },
  visit: { fr: "Heures et itinéraire", en: "Hours & directions" },
  faq: { fr: "Questions fréquentes", en: "FAQ" },
  privacy: { fr: "Confidentialité", en: "Privacy" },
};
export const LOCAL = {
  corner: { fr: "Coin boul. Samson et 100e Avenue, Chomedey", en: "Corner of Samson Blvd. and 100th Avenue, Chomedey" },
  parking: { fr: "Dans Place 100, stationnement gratuit sur place", en: "In Place 100, free parking on site" },
  delivery: { fr: "Livraison à Laval, à Montréal et dans les environs; les frais dépendent de la distance.", en: "Delivery across Laval, Montréal and nearby; fees depend on distance." },
  pay: { fr: "Comptant ou débit en boutique.", en: "Cash or debit in store." },
  langs: { fr: "On vous répond en français, en anglais et en grec.", en: "We answer in French, English and Greek." },
};
