// AJ Burger style reminder: product data is the shared source of truth for the tactile catalog cards and focused detail pages; photo arrays are intentionally extendable for future uploads.
export type Burger = {
  id: string;
  name: string;
  price: number;
  badge: string;
  desc: string;
  ingredients: string[];
  image: string;
  gallery: string[];
};

const asset = (name: string) => `/manus-storage/${name}`;

export const burgers: Burger[] = [
  {
    id: "aj-cheese-burger",
    name: "AJ Cheese Burger",
    price: 14,
    badge: "Classic",
    desc: "Smashed beef patty, grilled onions, American cheese, pickles, ketchup and mustard sauce on a soft milk bun.",
    ingredients: ["Smashed beef patty", "Grilled onions", "American cheese", "Pickles", "Ketchup", "Mustard sauce", "Soft milk bun"],
    image: asset("aj-cheese-burger-clean_d817c468.png"),
    gallery: [asset("aj-cheese-burger-clean_d817c468.png")],
  },
  {
    id: "aj-chicken-burger",
    name: "AJ Chicken Burger",
    price: 16,
    badge: "Chicken",
    desc: "Chicken patty, shredded mixed cheese, lettuce, chilli and mayo on a soft milk bun.",
    ingredients: ["Chicken patty", "Mixed cheese", "Lettuce", "Chilli", "Mayo", "Soft milk bun"],
    image: asset("aj-chicken-burger-clean_e0478151.png"),
    gallery: [asset("aj-chicken-burger-clean_e0478151.png")],
  },
  {
    id: "aj-special",
    name: "AJ Special",
    price: 16,
    badge: "Signature",
    desc: "Smashed beef patty, American cheese, caramelised onions, pickles, lettuce, tomato and AJ’s special sauce on a soft milk bun.",
    ingredients: ["Smashed beef patty", "American cheese", "Caramelised onions", "Pickles", "Lettuce", "Tomato", "AJ’s special sauce", "Soft milk bun"],
    image: asset("aj-special-burger-clean_7f5d41bf.png"),
    gallery: [asset("aj-special-burger-clean_7f5d41bf.png")],
  },
  {
    id: "aj-whop-whop",
    name: "AJ Whop Whop",
    price: 16,
    badge: "Double Cheese",
    desc: "Smashed beef patty, double American cheese, raw onions, lettuce, tomato, ketchup and mayo on a soft milk bun.",
    ingredients: ["Smashed beef patty", "Double American cheese", "Raw onions", "Lettuce", "Tomato", "Ketchup", "Mayo", "Soft milk bun"],
    image: asset("aj-whop-whop-burger-clean_cb763348.png"),
    gallery: [asset("aj-whop-whop-burger-clean_cb763348.png")],
  },
  {
    id: "aj-wagyu",
    name: "AJ Wagyu",
    price: 18,
    badge: "Premium",
    desc: "Wagyu patty, American cheese, grilled onions, tomato, lettuce, beetroot and AJ’s special sauce on a soft milk bun.",
    ingredients: ["Wagyu patty", "American cheese", "Grilled onions", "Tomato", "Lettuce", "Beetroot", "AJ’s special sauce", "Soft milk bun"],
    image: asset("aj-wagyu-burger-clean_7de2dcd1.png"),
    gallery: [asset("aj-wagyu-burger-clean_7de2dcd1.png")],
  },
  {
    id: "aj-tower",
    name: "AJ Tower",
    price: 18,
    badge: "Double",
    desc: "Two smashed beef patties, lettuce, tomato, American cheese, pickles and AJ’s special sauce on a soft milk bun.",
    ingredients: ["2 smashed beef patties", "Lettuce", "Tomato", "American cheese", "Pickles", "AJ’s special sauce", "Soft milk bun"],
    image: asset("aj-tower-burger-clean_46fe9b77.png"),
    gallery: [asset("aj-tower-burger-clean_46fe9b77.png")],
  },
  {
    id: "the-abd",
    name: "The A.B.D",
    price: 18,
    badge: "Spicy",
    desc: "Smashed beef patty, American cheese, jalapeños, onion, lettuce, tomato, BBQ sauce and mayo on a soft milk bun.",
    ingredients: ["Smashed beef patty", "American cheese", "Jalapeños", "Onion", "Lettuce", "Tomato", "BBQ sauce", "Mayo", "Soft milk bun"],
    image: asset("aj-abd-burger-clean_ef76aef1.png"),
    gallery: [asset("aj-abd-burger-clean_ef76aef1.png")],
  },
  {
    id: "aj-bunless",
    name: "AJ Bunless",
    price: 18,
    badge: "Low Carb",
    desc: "Choice of two smashed beef or chicken patties, American cheese, lettuce, tomato, pickles, sunny-side-up egg and AJ’s special sauce.",
    ingredients: ["Choice of beef or chicken", "American cheese", "Lettuce", "Tomato", "Pickles", "Sunny-side-up egg", "AJ’s special sauce"],
    image: asset("aj-bunless-burger-clean_89888b63.png"),
    gallery: [asset("aj-bunless-burger-clean_89888b63.png")],
  },
];

export const findBurger = (id: string | null | undefined) => burgers.find((burger) => burger.id === id) ?? burgers[0];
