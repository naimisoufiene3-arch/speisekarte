import { products, restaurant } from './products.js';

const categoryLabels = {
  fruehstueck: "Frühstück",
  pizza: "Pizza",
  burger: "Burger",
  getraenke: "Getränke",
  salat: "Salat"
};

// Références DOM
const menuToggleBtn = document.getElementById("menu-toggle");
const categoryMenu = document.getElementById("category-menu");
const productList = document.getElementById("product-list");
const restaurantLogo = document.getElementById("restaurant-logo");
const restaurantName = document.getElementById("restaurant-name");

let currentCategory = "all";

// =======================
// Initialisation restaurant
// =======================
restaurantLogo.src = restaurant.logo || "logo.PNG";
restaurantName.textContent = restaurant.name || "Mein Restaurant";

// =======================
// Génération boutons catégories
// =======================
function renderCategoryButtons() {
  categoryMenu.innerHTML = "";
  const allBtn = document.createElement("button");
  allBtn.setAttribute("data-category", "all");
  allBtn.textContent = "Alle";
  categoryMenu.appendChild(allBtn);

  Object.keys(categoryLabels).forEach(catKey => {
    const btn = document.createElement("button");
    btn.setAttribute("data-category", catKey);
    btn.textContent = categoryLabels[catKey];
    categoryMenu.appendChild(btn);
  });
}

// =======================
// Filtrer produits
// =======================
function getFilteredProducts() {
  if (currentCategory === "all") return products;
  return products.filter(p => p.category === currentCategory);
}

// =======================
// Afficher produits
// =======================
function renderProducts() {
  const filtered = getFilteredProducts();
  productList.innerHTML = "";

  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "Keine Produkte in dieser Kategorie.";
    empty.style.padding = "10px";
    productList.appendChild(empty);
    return;
  }

  filtered.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card";

    const info = document.createElement("div");
    info.className = "product-info";

    const name = document.createElement("h3");
    name.className = "product-name";
    name.textContent = prod.name;

    const desc = document.createElement("p");
    desc.className = "product-desc";
    desc.textContent = prod.description;

    info.appendChild(name);
    info.appendChild(desc);

    const media = document.createElement("div");
    media.className = "product-media";

    const ext = prod.file.split('.').pop().toLowerCase();
    if (["glb"].includes(ext)) {
      const mv = document.createElement("model-viewer");
      mv.setAttribute("src", prod.file);
      mv.setAttribute("alt", prod.name);
      mv.setAttribute("camera-controls", "");
      mv.setAttribute("auto-rotate", "");
      mv.setAttribute("ar", "");
      mv.setAttribute("ar-modes", "webxr scene-viewer quick-look");
      mv.setAttribute("shadow-intensity", "1");
      mv.setAttribute("ar-scale", "fixed");
      media.appendChild(mv);
    } else {
      const img = document.createElement("img");
      img.src = prod.file;
      img.alt = prod.name;
      img.style.width = "100%";
      img.style.height = "140px";
      img.style.objectFit = "cover";
      media.appendChild(img);
    }

    card.appendChild(media);
    card.appendChild(info);
    productList.appendChild(card);
  });
}

// =======================
// Événements
// =======================
menuToggleBtn.addEventListener("click", () => {
  categoryMenu.style.display = categoryMenu.style.display === "block" ? "none" : "block";
});

categoryMenu.addEventListener("click", (e) => {
  if (e.target.matches("button[data-category]")) {
    currentCategory = e.target.getAttribute("data-category");
    categoryMenu.style.display = "none";
    renderProducts();
  }
});

document.addEventListener("click", (e) => {
  if (!categoryMenu.contains(e.target) && !menuToggleBtn.contains(e.target)) {
    categoryMenu.style.display = "none";
  }
});

// =======================
// Initialisation
// =======================
renderCategoryButtons();
renderProducts();
