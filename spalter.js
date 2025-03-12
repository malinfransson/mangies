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
});

rightButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 400,  // Scrollar till höger
        behavior: 'smooth'  // Gör det mjukt
    });

});


function updateColumns() {
    const container = document.querySelector('.card_container');

    if (window.innerWidth >= 924) {
        container.classList.remove('one-column', 'two-columns', 'three-columns');
        container.classList.add('four-columns'); // 4 kolumner på stora skärmar
    } else if (window.innerWidth >= 768) {
        container.classList.remove('one-column', 'two-columns', 'four-columns');
        container.classList.add('three-columns'); // 3 kolumner på tablets
    } else if (window.innerWidth >= 480) {
        container.classList.remove('one-column', 'three-columns', 'four-columns');
        container.classList.add('two-columns'); // 2 kolumner på små tablets
    } else {
        container.classList.remove('two-columns', 'three-columns', 'four-columns');
        container.classList.add('one-column'); // 1 kolumn på mobil
    }
}

// Kör funktionen vid sidans start och när fönstret ändrar storlek
window.addEventListener('load', updateColumns);
window.addEventListener('resize', updateColumns);

