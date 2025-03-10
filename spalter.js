function changeColumns(cols) {
    let container = document.querySelector(".card_container");
    
    // Ta bort alla tidigare klasser
    container.classList.remove("one-column", "three-columns", "four-columns");

    // Lägg till rätt klass baserat på valda kolumner
    if (cols === 1) {
        container.classList.add("one-column");
    } else if (cols === 3) {
        container.classList.add("three-columns");
    } else if (cols === 4) {
        container.classList.add("four-columns");
    }
} 


// Hämta elementen
const leftButton = document.querySelector('.scroll-btn.left');
const rightButton = document.querySelector('.scroll-btn.right');
const imageContainer = document.querySelector('.image-container');
const scrollContainer = document.querySelector('.scroll-container');

// Få bredden på en bild och container
const imageWidth = imageContainer.firstElementChild.clientWidth + 10; // Bredd på en bild inklusive margin
const containerWidth = scrollContainer.clientWidth; // Bredd på scrollcontainern

// Lägg till eventlyssnare för pilarna
leftButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -400,  // Scrollar till vänster
        behavior: 'smooth'  // Gör det mjukt
    });

    // Kontrollera om vi är vid första bilden och ska loopa
    if (scrollContainer.scrollLeft <= 0) {
        const firstImage = imageContainer.firstElementChild;
        imageContainer.appendChild(firstImage); // Flytta den första bilden till slutet
        scrollContainer.scrollLeft = 0;  // Återställ scrollposition
    }
});

rightButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 400,  // Scrollar till höger
        behavior: 'smooth'  // Gör det mjukt
    });

});

