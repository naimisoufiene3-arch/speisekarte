// products.js
export const restaurant = {
  name: "Mein Restaurant", // Nom du restaurant
  logo: "Logo.PNG"         // Logo par défaut
};

export const products = [
  // ---------------------
  // Kategorie Frühstück
  // ---------------------
  {
    name: "Gemischtes Frühstück",
    file: "breakfast_food_dish.glb",
    category: "fruehstueck",
    description: "Vollständiges Frühstück, um den Tag gut zu beginnen."
  },

  // ---------------------
  // Kategorie Pizza
  // ---------------------
  {
    name: "Brokkoli-Pizza",
    file: "broccoli_pizza.glb",
    category: "pizza",
    description: "Leckere Pizza mit Brokkoli und geschmolzenem Käse."
  },
  {
    name: "Pepperoni-Pizza",
    file: "Pepperoni pizza.glb",
    category: "pizza",
    description: "Leicht scharfe Pepperoni-Pizza."
  },
  {
    name: "Pizza-Tablett",
    file: "pizza__tray.glb",
    category: "pizza",
    description: "Auswahl an Pizzastücken auf einem Tablett."
  },

  // ---------------------
  // Kategorie Burger
  // ---------------------
  {
    name: "Burger und Pommes",
    file: "burger_and_chips.glb",
    category: "burger",
    description: "Klassischer Burger, serviert mit knusprigen Pommes."
  },
  {
    name: "Hamburger",
    file: "hamburger.glb",
    category: "burger",
    description: "Herzhafter Hamburger mit Steak, Käse und Salat."
  },

  // ---------------------
  // Kategorie Getränke
  // ---------------------
  {
    name: "Coca-Cola-Dose",
    file: "coca_cola_can.glb",
    category: "getraenke",
    description: "Erfrischendes Getränk, gut gekühlt serviert."
  },
  {
    name: "Bier-/Limonadenflasche",
    file: "glass_beersoda_bottle.glb",
    category: "getraenke",
    description: "Flasche mit kohlensäurehaltigem Getränk oder Bier nach Wunsch."
  },

  // ---------------------
  // Klassisches Bildprodukt
  // ---------------------
  {
    name: "Chef-Salat",
    file: "chef_salade.jpg",
    category: "salat",
    description: "Salat, vom Küchenchef mit frischen Zutaten zubereitet."
  }
];
