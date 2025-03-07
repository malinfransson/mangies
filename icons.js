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

// ===========================
// Varukorg
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

  // Uppdatera popupen direkt
  updateCartPopup();

  alert(`${productName} har lagts till i varukorgen!`);
}

// Funktion för att visa eller dölja varukorgens popup
function toggleCartPopup() {
  const cartPopup = document.getElementById("shopping-cart-popup");

  // Växla synlighet genom att ändra display
  if (cartPopup.style.display === "none" || cartPopup.style.display === "") {
      cartPopup.style.display = "block";
  } else {
      cartPopup.style.display = "none";
  }
}

// Funktion för att uppdatera varukorgens popup
function updateCartPopup() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartList = document.getElementById("cart-products-list");

    // Töm nuvarande innehåll
    cartList.innerHTML = "";

    // Lägg till varje produkt i listan
    cart.forEach(product => {
        const li = document.createElement("li");
        li.textContent = `${product.name} - ${product.price}`;
        cartList.appendChild(li);
    });
}

// Funktion för att tömma varukorgen
function clearCart() {
    localStorage.removeItem("cart"); // Tar bort varukorgen från localStorage
    updateCartPopup(); // Uppdatera popupen så att den blir tom
}

// Uppdatera varukorgen vid sidladdning
window.onload = updateCartPopup;
