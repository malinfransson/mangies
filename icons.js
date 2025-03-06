//hjärt-knapp, gillafunktion på plagg 

// hjärt-knapp, gillafunktion på plagg
function toggleLike(element) {
  // växla mellan gillat/inte gillat
  element.classList.toggle("liked");

  // hämta produktens namn från .product-name
  const productName = element.closest('.card').querySelector('.product-name').textContent;

  // uppdatera listan i menyn
  updateLikesInMenu(productName, element.classList.contains("liked"));
}

function updateLikesInMenu(productName, isLiked) {
  const heartMenu = document.getElementById("liked-items");
  let likedItem = document.getElementById("liked-" + productName);

  // skapa/ta bort listobjekt för gillade produkter
  if (isLiked) {
      if (!likedItem) {
          likedItem = document.createElement("li");
          likedItem.id = "liked-" + productName;
          likedItem.innerText = productName;
          heartMenu.appendChild(likedItem);  // lägg till produktnamnet i listan
      }
  } else {
      if (likedItem) {
          heartMenu.removeChild(likedItem);  // ta bort om produkten inte längre är gillad
      }
  }
}

// om du vill lagra gillade produkter så att de finns kvar vid sidan laddas om:
function saveLikedItems() {
  const likedItems = [];
  const heartMenu = document.getElementById("liked-items");

  // hämta alla listobjekt som har ett id som börjar med "liked-"
  const items = heartMenu.querySelectorAll('li');
  items.forEach(item => {
      likedItems.push(item.innerText); // lägg till produktnamn i arrayen
  });

  // spara till localStorage
  localStorage.setItem("likedItems", JSON.stringify(likedItems));
}

// ladda de gillade produkterna från localStorage när sidan laddas
window.onload = function() {
  const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];

  likedItems.forEach(productName => {
      updateLikesInMenu(productName, true);  // återställ gillade produkter
  });
};



//kod för varukorg