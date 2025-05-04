export const RESTAURANT_NAME = "La Taverne de Duchenot";
export const RESTAURANT_ADDRESS = "3 Pl. Pierre Bohomme, 62500 Saint-Omer, France";
export const RESTAURANT_PHONE = "+33 3 21 12 61 62";
export const RESTAURANT_HOURS = {
  open: `Du mardi au vendredi: 12h-14h30 | 19h-22h30
  \nDu dimanche au lundi: 12h-14h30`,
  closed: "Fermé le mardi"
};

export const COLORS = {
  primary: "#A8221B",    // Rouge foncé
  secondary: "#FDEEE3",  // Beige clair
  tertiary: "#3A302A",   // Brun foncé (pour le bois)
  amber: "#D9A566",      // Ambrée (couleur bière)
  dark: "#222222",       // Noir
  cream: "#F5F0E1"       // Crème
};

export const NAV_LINKS = [
  { name: "Accueil", href: "#" },
  { name: "Notre Histoire", href: "#about" },
  { name: "Carte & Boissons", href: "#menu" },
  { name: "Notre Équipe", href: "#team" },
  { name: "Contact", href: "#contact" }
];

export const MENU_CATEGORIES = ["Entrées", "Plats", "Desserts", "Bières"];

export const MENU_ITEMS = [
  {
    id: 1,
    name: "Planche de Charcuteries",
    description: "Assortiment de charcuteries locales, cornichons et pain de campagne",
    price: "16€",
    category: "Entrées",
    image: "/images/food/entrees/charcuterie.png"
  },
  {
    id: 2,
    name: "Tartarre de saumon",
    description: "Description",
    price: "12€",
    category: "Entrées",
    image: "/images/food/entrees/charcuterie.png"
  },
  {
    id: 3,
    name: "NOM",
    description: "Description",
    price: "10€",
    category: "Entrées",
    image: "/images/food/entrees/charcuterie.png"
  },
  {
    id: 4,
    name: "Potchevelch",
    description: "Description",
    price: "22€",
    category: "Plats",
    image: "/images/food/plats/potchevelch.png"
  },
  {
    id: 5,
    name: "Welsh",
    description: "Welsh au Maroilles, frites maison",
    price: "26€",
    category: "Plats",
    image: "/images/food/plats/potchevelch.png"
  },
  {
    id: 6,
    name: "Entrecote de Bœuf",
    description: "Entrecôte de bœuf, sauce au poivre, frites maison",
    price: "20€",
    category: "Plats",
    image: "/images/food/plats/potchevelch.png"
  },
  {
    id: 7,
    name: "Tarte Tatin",
    description: "Tarte aux pommes caramélisées, crème fraîche",
    price: "8€",
    category: "Desserts",
    image: "/images/food/desserts/dessert.png"
  },
  {
    id: 8,
    name: "Crème Brûlée",
    description: "Crème vanillée caramélisée au sucre roux",
    price: "7€",
    category: "Desserts",
    image: "/images/food/desserts/dessert.png"
  },
  {
    id: 9,
    name: "Profiteroles",
    description: "Choux garnis de glace vanille, sauce chocolat maison",
    price: "9€",
    category: "Desserts",
    image: "/images/food/desserts/dessert.png"
  },
  {
    id: 10,
    name: "Anostéké",
    description: "Bière légère et rafraîchissante aux notes florales, 5.2° (33cl)",
    price: "6€",
    category: "Bières",
    image: "/images/food/boissons/biere.jpg"
  },
  {
    id: 11,
    name: "Pils",
    description: "Bière ambrée aux arômes de caramel et fruits secs, 6.5° (33cl)",
    price: "7€",
    category: "Bières",
    image: "/images/food/boissons/biere.jpg"
  }
];

export const KITCHEN_TEAM = [
    {
      id: 1,
      name: "Christophe",
      role: "Chef de Cuisine",
      bio: "à un très beau jogging piments",
      image: "/images/team/cuisine/team.png"
    },
    {
      id: 2,
      name: "Mathéo",
      role: "Commis de Cuisine",
      bio: "Raconte des conneries h24",
      image: "/images/team/cuisine/team.png"
    },
    {
      id: 3,
      name: "Tanguy",
      role: "Plongeur",
      bio: "Adore faire des cocktail mais obligé de laver la vaisselle",
      image: "/images/team/cuisine/team.png"
    }
  ];

export const SERVICE_TEAM = [
    {
      id: 4,
      name: "Stéphane Valquenart",
      role: "Propriétaire",
      bio: "Raconte des conneries au clients",
      image: "/images/team/serveur/serveur.png"
    },
    {
      id: 5,
      name: "Sandrine",
      role: "Propriétaire",
      bio: "Socialiste patrone ?? Fait des bon gateaux",
      image: "/images/team/serveur/enfant2.png"
    },
    {
      id: 6,
      name: "Lucas",
      role: "Responsable de salle",
      bio: "Description",
      image: "/images/team/serveur/serveur.png"
    },
    {
      id: 7,
      name: "Arthur",
      role: "Serveur",
      bio: "Description",
      image: "/images/team/serveur/serveur.png"
    }
  ];