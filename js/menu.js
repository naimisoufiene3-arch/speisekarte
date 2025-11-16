import { products } from './products.js';

const menuToggleBtn = document.getElementById("menu-toggle");
const categoryMenu = document.getElementById("category-menu");
const currentCategoryLabel = document.getElementById("restaurant-name");
const productList = document.getElementById("product-list");

// Définir les labels des catégories correctement en allemand
const categoryLabels = {
  fruehstueck: "Frühstück",
  pizza: "Pizza",
  burger: "Burger",
  getraenke: "Getränke",
  salat: "Salat"
};

// Générer dynamiquement les catégories à partir du tableau products
const categoryKeys = ["all", ...Object.keys(categoryLabels)];
categoryKeys.forEach(key => {
  const btn = document.createElement("button");
  btn.dataset.category = key;
  btn.textContent = key === "all" ? "Alle" : categoryLabels[key];
  categoryMenu.appendChild(btn);
});

let currentCategory = "all";

// =======================
// Fonctions
// =======================

function toggleCategoryMenu() {
  const isVisible = categoryMenu.style.display === "block";
  categoryMenu.style.display = isVisible ? "none" : "block";
}

function setCategory(catKey) {
  currentCategory = catKey;
  currentCategoryLabel.textContent = catKey === "all" ? "Mein Restaurant" : categoryLabels[catKey];
  categoryMenu.style.display = "none";
  renderProducts();
}

function getFilteredProducts() {
  if (currentCategory === "all") return products;
  return products.filter(p => p.category === currentCategory);
}

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

menuToggleBtn.addEventListener("click", toggleCategoryMenu);

categoryMenu.addEventListener("click", e => {
  if (e.target.matches("button[data-category]")) {
    setCategory(e.target.dataset.category);
  }
});

document.addEventListener("click", e => {
  if (!categoryMenu.contains(e.target) && !menuToggleBtn.contains(e.target)) {
    categoryMenu.style.display = "none";
  }
});

// Initialisation
renderProducts();
