// Funktion för att kopiera card-mallen till en container
function copyCardTemplate() {
  var templateElement = document.getElementById("content-template-card");
  var targetContainer = document.getElementById("card-container");

  var newElement = document.createElement("div");
  newElement.setAttribute("class", templateElement.getAttribute("class"));
  newElement.innerHTML = templateElement.innerHTML;

  targetContainer.appendChild(newElement);
}

// Funktion för att kopiera image-container-mallen till en container
function copyImageContainerTemplate() {
  var templateElement = document.getElementById("content-template-image");
  var targetContainer = document.querySelector(".scroll-container"); // Korrekt container

  var newElement = document.createElement("div");
  newElement.setAttribute("class", templateElement.getAttribute("class"));
  newElement.innerHTML = templateElement.innerHTML;

  targetContainer.appendChild(newElement);
}

// Funktion för att ta bort senaste Card
function removeLastCard() {
  var targetContainer = document.getElementById("card-container");
  var lastElement = targetContainer.lastElementChild;

  if (lastElement !== null) {
    targetContainer.removeChild(lastElement);
  }
}

// Funktion för att ta bort senaste Image-container
function removeLastImageContainer() {
  var targetContainer = document.querySelector(".scroll-container"); // Korrekt container
  var lastElement = targetContainer.lastElementChild;

  if (lastElement !== null) {
    targetContainer.removeChild(lastElement);
  }
}

// Funktion för att visa/dölja knappar
function toggleButtons() {
  var buttons = document.getElementById("buttons2");
  var toggleButton = document.getElementById("toggleBtn2");

  if (buttons.style.display === "none" || buttons.style.display === "") {
    buttons.style.display = "flex";
    toggleButton.innerHTML = "🐵";  // Ikon när knapparna visas
  } else {
    buttons.style.display = "none";
    toggleButton.innerHTML = "🙈";  // Ikon när knapparna döljs
  }
}

