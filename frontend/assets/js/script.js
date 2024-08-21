/* recettes */

/* recettes */

/* pop up recette */

// Script pour gérer l'affichage du modal
const modal = document.getElementById("myModal");
const btns = document.querySelectorAll(".buttonrecipevoirplus");
const span = document.getElementsByClassName("close-popup")[0];

btns.forEach(btn => {
    btn.onclick = function () {
        modal.style.display = "flex";
    }
});

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* pop up recette */

/* navbar */

function toggleSidebar() {
    var sidebar = document.getElementById('popup_sidebar');
    sidebar.classList.toggle('active');
}

/* navbar */

/* FAQ */

/* FAQ */