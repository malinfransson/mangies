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



