// Copy for the custom-cake hub and the occasion pages. Facts come only from Knowledge Base v2.
// Quotes are excerpts of public Google reviews (owner approval pending).
import type { Lang } from "./site";

type Faq = { q: string; a: string };
type Copy = {
  title: string; meta: string; eyebrow: string; h1: string; h1em?: string; intro: string;
  story: string[]; ideas: { t: string; d: string }[]; filters: { tag: string; label: string }[];
  faq: Faq[]; crumb: string; cardTitle: string; cardLine: string;
};
export type Occasion = {
  key: "birthday" | "themed" | "baptism" | "babyshower" | "graduation" | "engagement";
  folders: string[];         // gallery folders feeding this page
  include?: string[];        // extra photo keys moved in from another folder
  exclude?: string[];        // photo keys moved out
  cover: string;             // photo key for the hero
  featured?: string[];       // shown first in the portfolio, in this order (best first); the rest follow by number
  quote?: { q: string; n: string; o: string };
  related: Occasion["key"][];
  fr: Copy; en: Copy;
};

const leadFr = "Commandez au moins 7 jours avant la fête. Plus tôt? Appelez-nous au 450 686-2950.";
const leadEn = "Order at least 7 days before the party. Sooner? Call us at 450 686-2950.";
const allergyFr: Faq = { q: "Faites-vous des gâteaux sans gluten ou sans noix?", a: "Nous ne faisons pas de gâteaux sans gluten ni sans produits laitiers, et notre cuisine est partagée : nous ne pouvons pas garantir un gâteau sans noix. En cas d'allergie grave, appelez-nous au 450 686-2950 pour en parler avec l'équipe." };
const allergyEn: Faq = { q: "Do you make gluten-free or nut-free cakes?", a: "We don't make gluten-free or dairy-free cakes, and our kitchen is shared, so we can't guarantee a nut-free cake. For a severe allergy, call us at 450 686-2950 to talk it through with the team." };
const servFr: Faq = { q: "Combien de portions me faut-il?", a: "Comptez une portion par invité. Le minimum est de 15 portions, par tranches de 5 (15, 20, 25…). Un gâteau à 2 ou 3 étages demande au moins 30 portions, et les étages ne coûtent rien de plus." };
const servEn: Faq = { q: "How many servings do I need?", a: "Plan one serving per guest. The minimum is 15 servings, in steps of 5 (15, 20, 25…). A 2- or 3-tier cake needs at least 30 servings, and tiers cost nothing extra." };
const payFr: Faq = { q: "Comment se passent le paiement et la livraison?", a: "Après votre demande, l'équipe vous appelle dans un délai de 1 à 2 jours ouvrables pour confirmer les détails et le prix. Le dépôt est réglé après cet appel, et le solde en boutique, comptant ou débit. Ramassage au 4657, boul. Samson, ou livraison à Laval, Montréal et environs; les frais dépendent de la distance." };
const payEn: Faq = { q: "How do payment and delivery work?", a: "After your request, the team calls you within 1–2 business days to confirm the details and price. The deposit is arranged after that call, and the balance is paid in store, cash or debit. Pick up at 4657 Samson Blvd., or get delivery across Laval, Montréal and nearby; fees depend on distance." };

export const HUB = {
  fr: {
    title: "Gâteaux personnalisés à Laval | Pâtisserie Ambrosia",
    meta: "Gâteaux sur mesure à Laval : anniversaires, thématiques, baptêmes, baby showers, finissants, fiançailles. 26 saveurs. Commandez 7 jours d'avance.",
    eyebrow: "Gâteaux de célébration sur mesure · Laval",
    h1: "Gâteaux personnalisés à Laval pour", h1em: "toutes vos fêtes",
    intro: "Dites-nous ce que vous célébrez, montrez-nous une photo qui vous inspire, et on le fait. Depuis trois décennies, nos gâteaux sur mesure sont sur les tables des familles de Laval, de Chomedey à Montréal.",
    stepsTitle: "Commander en trois étapes", steps: [
      ["Racontez-nous", "Notre assistant en ligne vous pose quelques questions : l'occasion, la date, les portions, la finition et la saveur. Ajoutez jusqu'à 5 photos d'inspiration."],
      ["On vous appelle", "Dans un délai de 1 à 2 jours ouvrables, l'équipe confirme le design, les décorations et le prix final avec vous."],
      ["Ramassage ou livraison", "Votre gâteau vous attend au 4657, boul. Samson, ou on le livre à Laval, Montréal et environs."],
    ],
    finishTitle: "Quatre finitions", finishes: [
      ["Fondant", "Pâte à sucre lisse : arêtes nettes, couleurs franches."],
      ["Crème au beurre", "Lisse ou texturée, à la poche ou à la spatule. Les mêmes possibilités que le fondant, à prix plus doux."],
      ["Semi-nu", "Une fine couche de crème qui laisse voir les étages. Minimaliste et champêtre."],
      ["Nu", "Sans glaçage extérieur, étages et garniture bien visibles."],
    ],
    flavourTitle: "26 saveurs maison", flavourNote: "Certaines saveurs peuvent varier en prix; le prix final est confirmé lors de l'appel de suivi.",
    occTitle: "Des idées pour chaque occasion",
    catalogue: "Pressé ou petit budget? Nos gâteaux du catalogue sont déjà dessinés : passez les choisir en boutique.",
    faq: [
      { q: "Combien de temps d'avance dois-je commander?", a: "Au moins 7 jours pour un gâteau sur mesure, et 4 semaines pour un gâteau de mariage. Pour un délai plus court, appelez-nous au 450 686-2950 : on regarde ce qui est possible." },
      servFr, payFr, allergyFr,
      { q: "Puis-je fournir mes propres décorations?", a: "Les décorations sont fournies par Ambrosia. Si vous tenez à un élément précis, mentionnez-le dans votre demande et l'équipe en discutera avec vous lors de l'appel." },
    ],
  },
  en: {
    title: "Custom Cakes in Laval | Pâtisserie Ambrosia",
    meta: "Custom cakes in Laval: birthdays, themed cakes, baptisms, baby showers, graduations, engagements. 26 flavours, since 1995. Order 7 days ahead.",
    eyebrow: "Custom celebration cakes · Laval",
    h1: "Custom cakes in Laval for", h1em: "every celebration",
    intro: "Tell us what you're celebrating, show us a photo you love, and we'll make it. For three decades our custom cakes have been on Laval family tables, from Chomedey to Montréal.",
    stepsTitle: "Order in three steps", steps: [
      ["Tell us", "Our online assistant asks a few questions: the occasion, date, servings, finish and flavour. Add up to 5 inspiration photos."],
      ["We call you", "Within 1–2 business days the team confirms the design, decorations and final price with you."],
      ["Pick up or delivery", "Your cake waits for you at 4657 Samson Blvd., or we deliver across Laval, Montréal and nearby."],
    ],
    finishTitle: "Four finishes", finishes: [
      ["Fondant", "Smooth rolled sugar paste: crisp edges, bold colours."],
      ["Buttercream", "Smooth or textured, piped or palette-knifed. The same design possibilities as fondant, at a lower price."],
      ["Semi-naked", "A thin coat of frosting with the layers peeking through. Minimal and rustic."],
      ["Naked", "No outer frosting, layers and filling fully on show."],
    ],
    flavourTitle: "26 house flavours", flavourNote: "Some flavours may vary in price; the final price is confirmed on your follow-up call.",
    occTitle: "Ideas for every occasion",
    catalogue: "In a hurry or on a budget? Our catalogue cakes are already designed: come choose one in store.",
    faq: [
      { q: "How far ahead should I order?", a: "At least 7 days for a custom cake, and 4 weeks for a wedding cake. For less notice, call us at 450 686-2950 and we'll see what's possible." },
      servEn, payEn, allergyEn,
      { q: "Can I bring my own decorations?", a: "Decorations are supplied by Ambrosia. If something specific matters to you, mention it in your request and the team will discuss it with you on the call." },
    ],
  },
};

export const OCCASIONS: Occasion[] = [
  {
    key: "birthday", folders: ["anniversaire-adulte", "anniversaire-enfant"], exclude: ["anniversaire-adulte/005"], cover: "anniversaire-adulte/028",
    featured: ["anniversaire-adulte/022", "anniversaire-adulte/021", "anniversaire-adulte/011", "anniversaire-adulte/034", "anniversaire-adulte/041", "anniversaire-adulte/019", "anniversaire-enfant/006", "anniversaire-adulte/023", "anniversaire-adulte/044", "anniversaire-adulte/039", "anniversaire-adulte/035", "anniversaire-enfant/018", "anniversaire-adulte/029", "anniversaire-adulte/017", "anniversaire-adulte/008", "anniversaire-adulte/024", "anniversaire-enfant/008", "anniversaire-adulte/012", "anniversaire-adulte/036", "anniversaire-adulte/018", "anniversaire-enfant/016", "anniversaire-enfant/017", "anniversaire-adulte/040", "anniversaire-adulte/004", "anniversaire-enfant/007", "anniversaire-adulte/026", "anniversaire-adulte/027", "anniversaire-adulte/013"],
    quote: { q: "Nermin, starting with your counselling to choose the cake, you did a superb job. Care to details, quality of the work decorating, working with real roses.", n: "Andrei M.", o: "Avis Google" },
    related: ["themed", "baptism", "babyshower"],
    fr: {
      title: "Gâteaux d'anniversaire à Laval | Pâtisserie Ambrosia",
      meta: "Gâteaux d'anniversaire sur mesure à Laval, enfants et adultes : 1er anniversaire, 18, 30, 40 ou 90 ans. 26 saveurs. Commandez 7 jours d'avance.",
      eyebrow: "Gâteaux d'anniversaire · Laval", h1: "Gâteaux d'anniversaire à Laval,", h1em: "de 1 à 90 ans",
      intro: "Une première dent, un « Dirty Thirty », les 88 ans de grand-maman : on a fait tous les chiffres. Voici des gâteaux d'anniversaire sortis de notre cuisine du boulevard Samson.",
      story: [
        "Pour les petits, on aime les animaux en sucre, les licornes, les dinosaures et les gâteaux « first tooth ». Pour les grands, les gâteaux vintage à la poche, les cœurs « Forty & Fabulous », les fleurs fraîches et les fruits de saison.",
        "Envoyez-nous une photo qui vous plaît, choisissez la finition et la saveur, et l'équipe ajuste les détails avec vous au téléphone. Un message sur le gâteau? Jusqu'à 120 caractères, accents compris.",
      ],
      ideas: [
        { t: "Les gâteaux vintage", d: "Cœurs, rubans et bordures à la poche, la tendance « Dirty Thirty » et « This is 40 »." },
        { t: "Les chiffres qui comptent", d: "18, 40, 70, 88 ans : le chiffre en vedette, en or, en fruits ou en fleurs." },
        { t: "Pour maman et grand-maman", d: "Roses fraîches, macarons et « Happy Birthday Mom » en lettres dorées." },
      ],
      filters: [{ tag: "adult", label: "Adultes" }, { tag: "kids", label: "Enfants" }, { tag: "first", label: "Premier anniversaire" }, { tag: "floral", label: "Fleurs" }, { tag: "vintage", label: "Vintage" }, { tag: "fruit", label: "Fruits frais" }],
      faq: [
        { q: "Combien de temps d'avance dois-je commander un gâteau d'anniversaire?", a: leadFr + " Pour un modèle déjà dessiné, passez voir notre catalogue en boutique." },
        servFr,
        { q: "Pouvez-vous écrire un message sur le gâteau?", a: "Oui, jusqu'à 120 caractères. Les accents et le français sont parfaits; on ne reproduit pas les émojis, alors on les écrit en mots. On vous relit le texte pour éviter toute faute." },
        allergyFr, payFr,
      ],
      crumb: "Gâteaux d'anniversaire", cardTitle: "Anniversaire", cardLine: "Enfants et adultes, de 1 à 90 ans",
    },
    en: {
      title: "Birthday Cakes in Laval | Pâtisserie Ambrosia",
      meta: "Custom birthday cakes in Laval: first birthdays, 18th, 30th, 40th and 90th, for kids and adults. Real Ambrosia cakes, 26 flavours. Order 7 days ahead.",
      eyebrow: "Birthday cakes · Laval", h1: "Birthday cakes in Laval,", h1em: "from 1 to 90",
      intro: "A first tooth, a \"Dirty Thirty\", Grandma's 88th: we've baked every number. These are birthday cakes straight from our kitchen on Samson Boulevard.",
      story: [
        "For little ones we love sugar animals, unicorns, dinosaurs and \"first tooth\" cakes. For grown-ups, piped vintage cakes, \"Forty & Fabulous\" hearts, fresh flowers and seasonal fruit.",
        "Send us a photo you love, choose the finish and flavour, and the team fine-tunes the details with you by phone. A message on the cake? Up to 120 characters, accents included.",
      ],
      ideas: [
        { t: "Vintage cakes", d: "Hearts, ribbons and piped borders: the \"Dirty Thirty\" and \"This is 40\" look." },
        { t: "The numbers that matter", d: "18, 40, 70, 88: the number takes centre stage in gold, fruit or flowers." },
        { t: "For Mom and Grandma", d: "Fresh roses, macarons and \"Happy Birthday Mom\" in gold lettering." },
      ],
      filters: [{ tag: "adult", label: "Adults" }, { tag: "kids", label: "Kids" }, { tag: "first", label: "First birthday" }, { tag: "floral", label: "Flowers" }, { tag: "vintage", label: "Vintage" }, { tag: "fruit", label: "Fresh fruit" }],
      faq: [
        { q: "How far ahead should I order a birthday cake?", a: leadEn + " For a ready-designed cake, come see our catalogue in store." },
        servEn,
        { q: "Can you write a message on the cake?", a: "Yes, up to 120 characters. Accents and French are fine; we don't reproduce emoji, so we write them out in words. We read the text back to you to avoid typos." },
        allergyEn, payEn,
      ],
      crumb: "Birthday cakes", cardTitle: "Birthday", cardLine: "Kids and adults, from 1 to 90",
    },
  },
  {
    key: "themed", folders: ["thematiques"], cover: "thematiques/112",
    related: ["birthday", "babyshower", "graduation"],
    fr: {
      title: "Gâteaux thématiques à Laval | Pâtisserie Ambrosia",
      meta: "Gâteaux thématiques à Laval : personnages, jeux vidéo, équipes sportives, mode et luxe. Plus de 200 gâteaux réalisés. Commandez 7 jours d'avance.",
      eyebrow: "Personnages · jeux · sports · mode", h1: "Gâteaux thématiques à Laval,", h1em: "leur héros préféré",
      intro: "La Reine des neiges, Pat' Patrouille, Pokémon, Mario, les Canadiens, un sac Chanel ou une montre Rolex : dites-nous ce qu'ils aiment, on le met sur le gâteau.",
      story: [
        "Les figurines sculptées en sucre, les personnages peints à la main, les logos découpés au millimètre : chaque gâteau thématique est fait sur place, dans notre cuisine du boulevard Samson.",
        "Ce n'est pas que pour les enfants. Un baril de whisky pour les 50 ans, une boîte à cigares pour les 60 ans, l'équipe de soccer de Pappou ou un sac de designer pour les 30 ans : les grands aussi ont leur thème.",
      ],
      ideas: [
        { t: "Personnages", d: "Disney, Pixar, superhéros, dessins animés : en figurines de sucre ou peints à la main." },
        { t: "Jeux et sports", d: "Fortnite, Minecraft, Pokémon, Canadiens, Panathinaïkos : leur passion en gâteau." },
        { t: "Mode et luxe", d: "Sacs, parfums, montres et espadrilles reproduits en pâte à sucre." },
      ],
      filters: [
        { tag: "characters", label: "Personnages" }, { tag: "games", label: "Jeux et jouets" },
        { tag: "sports", label: "Sports" }, { tag: "fashion", label: "Mode et luxe" }, { tag: "grownup", label: "Pour les grands" },
      ],
      faq: [
        { q: "Pouvez-vous faire le personnage préféré de mon enfant?", a: "Oui. Envoyez une photo d'inspiration à notre assistant en ligne et l'équipe vous rappelle pour confirmer les détails : figurine en sucre, image peinte ou décor imprimé." },
        { q: "Combien de temps d'avance commander un gâteau thématique?", a: leadFr + " Les figurines sculptées demandent du temps : plus tôt, c'est mieux." },
        servFr, payFr, allergyFr,
      ],
      crumb: "Gâteaux thématiques", cardTitle: "Thématiques", cardLine: "Personnages, jeux, sports, mode",
    },
    en: {
      title: "Themed Cakes in Laval | Pâtisserie Ambrosia",
      meta: "Themed cakes in Laval: characters, video games, sports teams, fashion and luxury. Over 200 cakes made in our kitchen. Order 7 days ahead.",
      eyebrow: "Characters · games · sports · fashion", h1: "Themed cakes in Laval,", h1em: "starring their favourite",
      intro: "Frozen, PAW Patrol, Pokémon, Mario, the Habs, a Chanel bag or a Rolex: tell us what they love and we'll put it on the cake.",
      story: [
        "Sugar-sculpted figurines, hand-painted characters, logos cut to the millimetre: every themed cake is made on site, in our kitchen on Samson Boulevard.",
        "It isn't just for kids. A whisky barrel for a 50th, a cigar box for a 60th, Pappou's soccer club or a designer bag for a 30th: grown-ups get their theme too.",
      ],
      ideas: [
        { t: "Characters", d: "Disney, Pixar, superheroes, cartoons: as sugar figurines or hand-painted." },
        { t: "Games and sports", d: "Fortnite, Minecraft, Pokémon, the Habs, Panathinaikos: their passion as a cake." },
        { t: "Fashion and luxury", d: "Handbags, perfume, watches and sneakers, recreated in fondant." },
      ],
      filters: [
        { tag: "characters", label: "Characters" }, { tag: "games", label: "Games and toys" },
        { tag: "sports", label: "Sports" }, { tag: "fashion", label: "Fashion and luxury" }, { tag: "grownup", label: "For grown-ups" },
      ],
      faq: [
        { q: "Can you make my child's favourite character?", a: "Yes. Send an inspiration photo to our online assistant and the team will call you to confirm the details: sugar figurine, painted image or printed decoration." },
        { q: "How far ahead should I order a themed cake?", a: leadEn + " Sculpted figurines take time, so earlier is better." },
        servEn, payEn, allergyEn,
      ],
      crumb: "Themed cakes", cardTitle: "Themed", cardLine: "Characters, games, sports, fashion",
    },
  },
  {
    key: "baptism", folders: ["bapteme"], cover: "bapteme/018",
    featured: ["bapteme/019", "bapteme/010", "bapteme/015", "bapteme/029", "bapteme/016", "bapteme/012", "bapteme/025", "bapteme/026", "bapteme/011", "bapteme/023", "bapteme/017", "bapteme/022", "bapteme/014", "bapteme/005", "bapteme/002", "bapteme/003", "bapteme/028", "bapteme/004", "bapteme/027", "bapteme/007"],
    related: ["babyshower", "birthday", "engagement"],
    fr: {
      title: "Gâteaux de baptême et communion à Laval | Ambrosia",
      meta: "Gâteaux de baptême, communion et confirmation à Laval : croix dorée, prénom, étages, fleurs. Pâtisserie familiale depuis 1995. Commandez 7 jours d'avance.",
      eyebrow: "Baptême · communion · confirmation", h1: "Gâteaux de baptême et de communion", h1em: "à Laval",
      intro: "Une croix dorée, son prénom en lettres fines, des roses ou des volants bleus. Les grandes journées à l'église se terminent souvent autour d'un gâteau Ambrosia.",
      story: [
        "Pâtisserie grecque familiale à Chomedey, on connaît bien les baptêmes : les réceptions nombreuses, les gâteaux à étages pour la salle, les biscuits en forme de croix pour les invités. On fait aussi des gâteaux de première communion, comme le livre ouvert au calice et aux raisins, et de confirmation.",
        "Pour une grande réception, un gâteau à 2 ou 3 étages demande au moins 30 portions, et les étages ne coûtent rien de plus. On livre à votre salle à Laval et à Montréal. On parle grec au comptoir : appelez-nous pour toute question.",
      ],
      ideas: [
        { t: "La croix dorée", d: "Sur un gâteau blanc, crème ou bleu, avec le prénom de l'enfant." },
        { t: "Pour la salle", d: "Deux ou trois étages, des fleurs, de la feuille d'or, pour une grande réception." },
        { t: "Pour les invités", d: "Des biscuits décorés en forme de croix, emballés un à un." },
      ],
      filters: [{ tag: "baptism", label: "Baptême" }, { tag: "communion", label: "Première communion" }, { tag: "confirmation", label: "Confirmation" }],
      faq: [
        { q: "Combien de temps d'avance commander un gâteau de baptême?", a: leadFr },
        servFr,
        { q: "Pouvez-vous faire des biscuits ou des desserts pour les invités?", a: "Oui. Mentionnez-le à notre assistant en ligne, et l'équipe composera la sélection avec vous lors de l'appel de suivi." },
        payFr, allergyFr,
      ],
      crumb: "Baptême et communion", cardTitle: "Baptême et communion", cardLine: "Une croix dorée, son prénom",
    },
    en: {
      title: "Baptism & Communion Cakes in Laval | Ambrosia",
      meta: "Baptism, First Communion and confirmation cakes in Laval: gold cross, name, tiers and flowers. Family Greek bakery since 1995. Order 7 days ahead.",
      eyebrow: "Baptism · communion · confirmation", h1: "Baptism and communion cakes", h1em: "in Laval",
      intro: "A gold cross, a name in fine lettering, roses or blue ruffles. Big days at church often end around an Ambrosia cake.",
      story: [
        "As a family Greek bakery in Chomedey, we know baptisms: big receptions, tiered cakes for the hall, cross-shaped cookies for the guests. We also make First Communion cakes, like the open book with chalice and grapes, and confirmation cakes.",
        "For a big reception, a 2- or 3-tier cake needs at least 30 servings, and tiers cost nothing extra. We deliver to your hall in Laval and Montréal. We speak Greek at the counter, so call us with any question.",
      ],
      ideas: [
        { t: "The gold cross", d: "On a white, cream or blue cake, with the child's name." },
        { t: "For the hall", d: "Two or three tiers, flowers and gold leaf for a big reception." },
        { t: "For the guests", d: "Decorated cross-shaped cookies, individually wrapped." },
      ],
      filters: [{ tag: "baptism", label: "Baptism" }, { tag: "communion", label: "First Communion" }, { tag: "confirmation", label: "Confirmation" }],
      faq: [
        { q: "How far ahead should I order a baptism cake?", a: leadEn },
        servEn,
        { q: "Can you make cookies or desserts for the guests?", a: "Yes. Mention it to our online assistant, and the team will put the selection together with you on the follow-up call." },
        payEn, allergyEn,
      ],
      crumb: "Baptism & communion", cardTitle: "Baptism & communion", cardLine: "A gold cross, their name",
    },
  },
  {
    key: "babyshower", folders: ["baby-shower"], include: ["fiancailles-anniversaire/002"], cover: "baby-shower/016",
    related: ["baptism", "birthday", "engagement"],
    fr: {
      title: "Gâteaux de baby shower à Laval | Pâtisserie Ambrosia",
      meta: "Gâteaux de baby shower et de dévoilement à Laval : oursons, « Oh baby », « Boy or Girl », biscuits décorés. Commandez 7 jours d'avance.",
      eyebrow: "Baby shower · dévoilement", h1: "Gâteaux de baby shower à Laval,", h1em: "fille ou garçon?",
      intro: "Des oursons en sucre, des nuages, des chaussons bleus et roses, et la grande question écrite en lettres pastel. Voici nos gâteaux de baby shower et de dévoilement.",
      story: [
        "Pour un baby shower, on aime les couleurs douces : sauge, rose poudré, bleu ciel et crème, avec des oursons, des cubes, des montgolfières ou des fleurs fraîches. Pour un dévoilement, le gâteau « Boy or Girl » garde le suspense jusqu'au bout.",
        "Ajoutez des biscuits décorés « baby » pour les invités. Dites-nous la date et le nombre d'invités, envoyez une photo d'inspiration, et l'équipe s'occupe du reste.",
      ],
      ideas: [
        { t: "Oursons et nuages", d: "Personnages en sucre faits à la main, cubes et montgolfières." },
        { t: "Le dévoilement", d: "« Boy or Girl », « Pink or Blue, we love you » : le suspense en gâteau." },
        { t: "Les biscuits", d: "Biscuits décorés menthe et or pour les sacs-cadeaux." },
      ],
      filters: [{ tag: "shower", label: "Baby shower" }, { tag: "reveal", label: "Fille ou garçon" }, { tag: "cookies", label: "Biscuits" }],
      faq: [
        { q: "Combien de temps d'avance commander un gâteau de baby shower?", a: leadFr },
        servFr,
        { q: "Pouvez-vous ajouter une table de desserts?", a: "Oui, demandez-le à notre assistant : l'équipe vous proposera une sélection de mini desserts lors de l'appel de suivi." },
        payFr, allergyFr,
      ],
      crumb: "Baby shower", cardTitle: "Baby shower", cardLine: "Oursons, nuages et dévoilements",
    },
    en: {
      title: "Baby Shower Cakes in Laval | Pâtisserie Ambrosia",
      meta: "Baby shower and gender reveal cakes in Laval: teddy bears, \"Oh baby\", \"Boy or Girl\", decorated cookies. Real Ambrosia cakes. Order 7 days ahead.",
      eyebrow: "Baby shower · gender reveal", h1: "Baby shower cakes in Laval,", h1em: "boy or girl?",
      intro: "Sugar teddy bears, clouds, blue and pink booties, and the big question in pastel letters. These are our baby shower and gender reveal cakes.",
      story: [
        "For a baby shower we love soft colours: sage, dusty pink, sky blue and cream, with teddy bears, blocks, hot-air balloons or fresh flowers. For a reveal, the \"Boy or Girl\" cake keeps everyone guessing.",
        "Add decorated \"baby\" cookies for the guests. Tell us the date and the guest count, send an inspiration photo, and the team takes care of the rest.",
      ],
      ideas: [
        { t: "Teddies and clouds", d: "Handmade sugar figures, blocks and hot-air balloons." },
        { t: "The reveal", d: "\"Boy or Girl\", \"Pink or Blue, we love you\": suspense, in cake form." },
        { t: "The cookies", d: "Mint and gold decorated cookies for the favour bags." },
      ],
      filters: [{ tag: "shower", label: "Baby shower" }, { tag: "reveal", label: "Gender reveal" }, { tag: "cookies", label: "Cookies" }],
      faq: [
        { q: "How far ahead should I order a baby shower cake?", a: leadEn },
        servEn,
        { q: "Can you add a dessert table?", a: "Yes, ask our assistant: the team will suggest a selection of mini desserts on the follow-up call." },
        payEn, allergyEn,
      ],
      crumb: "Baby shower", cardTitle: "Baby shower", cardLine: "Teddies, clouds and reveals",
    },
  },
  {
    key: "graduation", folders: ["finissants"], cover: "finissants/007",
    related: ["birthday", "engagement", "baptism"],
    fr: {
      title: "Gâteaux de finissants à Laval | Pâtisserie Ambrosia",
      meta: "Gâteaux de finissants à Laval : mortier, diplôme, année de la promo, gâteaux rectangulaires pour la fête. Commandez 7 jours d'avance.",
      eyebrow: "Finissants · graduation", h1: "Gâteaux de finissants à Laval :", h1em: "bravo!",
      intro: "Un mortier en sucre, un diplôme roulé, l'année de la promo en lettres d'or. Que ce soit le secondaire, le cégep ou l'université, on fête le diplôme avec vous.",
      story: [
        "On personnalise le gâteau avec le prénom, l'année et le domaine d'études : la balance de la justice et le maillet pour le droit, un livre violet pour la psychologie, un paysage de montagnes pour un grand voyageur.",
        "Pour une grande fête de classe, un gâteau rectangulaire « Class of 2025 » nourrit tout le monde. Pour la famille, un gâteau rond noir et blanc avec des touches dorées.",
      ],
      ideas: [
        { t: "Le mortier et le diplôme", d: "Faits à la main en sucre, avec le gland doré." },
        { t: "Le domaine d'études", d: "Droit, psychologie et plus : on le raconte en décor." },
        { t: "Pour toute la classe", d: "Le gâteau rectangulaire pour les grandes fêtes." },
      ],
      filters: [],
      faq: [
        { q: "Combien de temps d'avance commander un gâteau de finissants?", a: leadFr + " En juin, la saison des bals et des graduations, commandez le plus tôt possible." },
        servFr,
        { q: "Pouvez-vous écrire le nom et l'année?", a: "Oui, jusqu'à 120 caractères sur le gâteau, accents compris. On vous relit le texte pour éviter toute faute." },
        payFr, allergyFr,
      ],
      crumb: "Finissants", cardTitle: "Finissants", cardLine: "Mortier, diplôme et promo",
    },
    en: {
      title: "Graduation Cakes in Laval | Pâtisserie Ambrosia",
      meta: "Graduation cakes in Laval: mortarboards, diplomas, class year, law and psychology book cakes, sheet cakes for the party. Order 7 days ahead.",
      eyebrow: "Graduation", h1: "Graduation cakes in Laval:", h1em: "congrats!",
      intro: "A sugar mortarboard, a rolled diploma, the class year in gold. High school, CEGEP or university, we celebrate the diploma with you.",
      story: [
        "We personalise the cake with the name, the year and the field of study: scales and a gavel for law, a purple book for psychology, a mountain landscape for a born traveller.",
        "For a big class party, a \"Class of 2025\" sheet cake feeds everyone. For the family, a round black-and-white cake with gold touches.",
      ],
      ideas: [
        { t: "Mortarboard and diploma", d: "Handmade in sugar, with the gold tassel." },
        { t: "The field of study", d: "Law, psychology and more: told in decoration." },
        { t: "For the whole class", d: "The sheet cake for big parties." },
      ],
      filters: [],
      faq: [
        { q: "How far ahead should I order a graduation cake?", a: leadEn + " In June, prom and graduation season, order as early as you can." },
        servEn,
        { q: "Can you write the name and the year?", a: "Yes, up to 120 characters on the cake, accents included. We read the text back to you to avoid typos." },
        payEn, allergyEn,
      ],
      crumb: "Graduation", cardTitle: "Graduation", cardLine: "Mortarboards, diplomas, class year",
    },
  },
  {
    key: "engagement", folders: ["fiancailles-anniversaire"], exclude: ["fiancailles-anniversaire/002"], cover: "fiancailles-anniversaire/005",
    quote: { q: "We decided to get cakes from Ambrosia for our wedding anniversary party and we are still shocked at how delicious they were!", n: "Alexandra T.", o: "Avis Google" },
    related: ["birthday", "baptism", "babyshower"],
    fr: {
      title: "Gâteaux de fiançailles et d'anniversaire de mariage | Laval",
      meta: "Gâteaux de fiançailles, shower de mariée et anniversaire de mariage à Laval : initiales, roses, 25 et 30 ans. Commandez 7 jours d'avance.",
      eyebrow: "Fiançailles · shower de mariée · anniversaire de mariage", h1: "Gâteaux de fiançailles et d'anniversaire de mariage", h1em: "à Laval",
      intro: "« Just Engaged », une robe de mariée en sucre, 25 ans d'amour en fraises fraîches. Avant et après le grand jour, il y a toujours une bonne raison de faire un gâteau.",
      story: [
        "Pour des fiançailles, les initiales du couple en or, des roses fraîches et une finition semi-nue. Pour un shower de mariée, la robe en sucre ou le gâteau « Bride to be ». Pour un anniversaire de mariage, un cœur vintage « Happy Anniversary Mom & Dad ».",
        "Pour le gâteau du mariage lui-même, on préfère une vraie conversation : réservez une consultation gratuite avec le propriétaire, au moins 4 semaines avant la date.",
      ],
      ideas: [
        { t: "Just Engaged", d: "Fleurs peintes, initiales dorées et roses fraîches." },
        { t: "Le shower de mariée", d: "La robe en sucre, le « Bride to be » et les roses fuchsia." },
        { t: "Les noces d'argent et plus", d: "25, 30 ans : un cœur vintage ou un gâteau aux fraises." },
      ],
      filters: [{ tag: "engagement", label: "Fiançailles" }, { tag: "bridal", label: "Shower de mariée" }, { tag: "anniversary", label: "Anniversaire de mariage" }],
      faq: [
        { q: "Combien de temps d'avance commander?", a: leadFr + " Pour le gâteau de mariage, comptez au moins 4 semaines et réservez une consultation gratuite." },
        servFr,
        { q: "Faites-vous aussi les gâteaux de mariage?", a: "Oui. Les gâteaux de mariage se conçoivent lors d'une consultation gratuite de 30 à 60 minutes avec le propriétaire, à la pâtisserie ou par téléphone, pour 10 invités et plus." },
        payFr, allergyFr,
      ],
      crumb: "Fiançailles et anniversaire de mariage", cardTitle: "Fiançailles et anniversaire de mariage", cardLine: "Just Engaged, Bride to be, 25 ans",
    },
    en: {
      title: "Engagement & Anniversary Cakes in Laval | Ambrosia",
      meta: "Engagement, bridal shower and wedding anniversary cakes in Laval: \"Just Engaged\", initials, roses, 25th and 30th anniversaries. Order 7 days ahead.",
      eyebrow: "Engagement · bridal shower · anniversary", h1: "Engagement and anniversary cakes", h1em: "in Laval",
      intro: "\"Just Engaged\", a wedding dress in sugar, 25 years of love in fresh strawberries. Before and after the big day, there's always a good reason for cake.",
      story: [
        "For an engagement: the couple's initials in gold, fresh roses and a semi-naked finish. For a bridal shower: the sugar dress or a \"Bride to be\" cake. For a wedding anniversary: a vintage \"Happy Anniversary Mom & Dad\" heart.",
        "For the wedding cake itself we'd rather have a real conversation: book a free consultation with the owner at least 4 weeks before the date.",
      ],
      ideas: [
        { t: "Just Engaged", d: "Painted flowers, gold initials and fresh roses." },
        { t: "The bridal shower", d: "The sugar dress, \"Bride to be\" and fuchsia roses." },
        { t: "Silver anniversaries and beyond", d: "25, 30 years: a vintage heart or a strawberry cake." },
      ],
      filters: [{ tag: "engagement", label: "Engagement" }, { tag: "bridal", label: "Bridal shower" }, { tag: "anniversary", label: "Wedding anniversary" }],
      faq: [
        { q: "How far ahead should I order?", a: leadEn + " For the wedding cake, allow at least 4 weeks and book a free consultation." },
        servEn,
        { q: "Do you also make wedding cakes?", a: "Yes. Wedding cakes are designed in a free 30–60 minute consultation with the owner, at the bakery or by phone, for 10 guests or more." },
        payEn, allergyEn,
      ],
      crumb: "Engagement & anniversary", cardTitle: "Engagement & anniversary", cardLine: "Just Engaged, Bride to be, 25 years",
    },
  },
];

export const occ = (k: string) => OCCASIONS.find((o) => o.key === k)!;
export type { Copy, Faq };
export const L = (o: Occasion, l: Lang) => o[l];
