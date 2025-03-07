// ===========================
// Gillafunktion för plagg
// ===========================

// Växla mellan gillat/ogillat och uppdatera listan
function toggleLike(element) {
  element.classList.toggle("liked");

  // Hämta produktens namn
  const productName = element.closest('.card').querySelector('.product-name').textContent;

  // Uppdatera listan i menyn
  updateLikesInMenu(productName, element.classList.contains("liked"));

  // Spara ändringar till localStorage
  saveLikedItems();
}

// Uppdatera listan över gillade produkter i popup-menyn
function updateLikesInMenu(productName, isLiked) {
  const heartMenu = document.getElementById("liked-items");
  let likedItem = document.getElementById("liked-" + productName);

  if (isLiked) {
      if (!likedItem) {
          likedItem = document.createElement("li");
          likedItem.id = "liked-" + productName;
          likedItem.innerText = productName;
          heartMenu.appendChild(likedItem);
      }
  } else {
      if (likedItem) {
          heartMenu.removeChild(likedItem);
      }
  }
}

// Spara gillade produkter i localStorage
function saveLikedItems() {
  const likedItems = [];
  const heartMenu = document.getElementById("liked-items");

  heartMenu.querySelectorAll('li').forEach(item => {
      likedItems.push(item.innerText);
  });

  localStorage.setItem("likedItems", JSON.stringify(likedItems));
}

// Ladda gillade produkter vid sidans start
function loadLikedItems() {
  const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
  
  likedItems.forEach(productName => {
      updateLikesInMenu(productName, true);
  });
}

// ===========================
// Popup-funktionalitet
// ===========================

// Växla popup-fönstrets synlighet
function togglePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}

// Stäng popup om användaren klickar utanför den
function closePopupOnOutsideClick(event) {
  const popup = document.getElementById("popup");
  if (event.target === popup) {
      popup.style.display = "none";
  }
}

function togglePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = (popup.style.display === "block") ? "none" : "block";
}

// ===========================
// Initiering vid sidladdning
// ===========================

window.onload = function() {
  loadLikedItems(); // Ladda gillade produkter från localStorage
  window.onclick = closePopupOnOutsideClick; // Lägg till eventlistener för popup
};


// ===========================
// varukorg
// ===========================

// Lägger till produkt i varukorgen
function addToCart(element) {
  const productCard = element.closest('.card');
  const productName = productCard.querySelector('.product-name').textContent;
  const productPrice = productCard.querySelector('.price').textContent;

  // Skapa objekt för produkten
  const product = { name: productName, price: productPrice };

  // Hämta varukorgen från localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  // Lägg till produkten i varukorgen
  cart.push(product);

  // Spara uppdaterad varukorg
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${productName} har lagts till i varukorgen!`);
}

// kalla på denna funktion när sidan laddas för att visa varukorgens innehåll
window.onload = updateCartPopup;