//kod för menyn
function opennav () 
{document.getElementById ("menu").style.width="100%";}

function closenav () 
{document.getElementById ("menu").style.width="0%";}

function toggleActive(elementId) {
    document.getElementById(elementId).classList.toggle("active");
}

// kod för search bar 
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Förhindrar att sidan laddas om

    var query = document.getElementById("searchInput").value;
    alert("Du har sökt efter: " + query);  // För demonstration, här kan du hantera sökningen
});

