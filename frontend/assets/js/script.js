/* recettes */

/* recettes */

/* pop up recette */

// on récupère le modal
const modal = document.getElementById("myModal");
// on récupère les boutons voir plus
const btns = document.querySelectorAll(".buttonrecipevoirplus");
// on récupère le logo close pop up
const closePopup = document.getElementsByClassName("close-popup")[0];

// pour chaque boutons, on ajoute un événement 'onclick'
btns.forEach(btn => {
    btn.onclick = function () {
        // quand on click, ça afficher la modal en modifiant son style
        modal.style.display = "flex";
    }
});

// quand on click sur l'icon croix, 'closePopup', ca ferme la modal
closePopup.onclick = function () {
    // en mettant la modal en display none
    modal.style.display = "none";
}

// quand on click n'importe où en dehors de la modal, ca ferme la modal
window.onclick = function (event) {
    // vérifie si l'utilisateur a cliqué sur l'arrière-plan de la modal.
    if (event.target == modal) {
        // en mettant la modal en display none
        modal.style.display = "none";
    }
}

/* pop up recette */

/* navbar */

function toggleSidebar() {
    // on récupère le popup_sidebar
    var sidebar = document.getElementById('popup_sidebar');
    // ajoute ou enlève la classe 'active' sur l'élément sidebar
    sidebar.classList.toggle('active');
}

/* navbar */

/* FAQ */

/* FAQ */