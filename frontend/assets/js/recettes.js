// on importe le tableau `recettes` depuis le fichier objects-recettes.js
import recettes from '../js/objects-recettes.js';

// fonction pour mélanger un tableau de manière aléatoire (Fisher-Yates Shuffle)
function melangerRecettes(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// rend la fonction filterArticles accessible globalement via l'objet window
// cela permet d'appeler filterArticles de n'importe où dans le code
window.filterArticles = function (categorie) {
    // sélectionne tous les éléments <article> de la section avec la classe "cardrecipe"
    // chaque <article> représente une recette
    const articles = document.querySelectorAll(".cardrecipe article");

    // parcourt chaque article pour filtrer en fonction de la catégorie sélectionnée
    articles.forEach((article) => {
        // on récupère (getAttribute) le data-categorie c'est à dire la catégorie de la recette
        // on affiche l'article si la catégorie sélectionnée correspond à la catégorie de l'article
        // ou si la catégorie sélectionnée est "toutes", ce qui signifie afficher tous les articles
        if (categorie === 'toutes' || article.getAttribute("data-categorie") === categorie) {
            article.style.display = "block";
        } else {
            // sinon, masque l'article en le cachant de l'affichage
            article.style.display = "none";
        }
    });

    // sélectionne tous les éléments <button> de la div "filter-container"
    // permet de cibler tous les boutons filtres
    const buttons = document.querySelectorAll(".filter-container button");

    // parcourt chaque bouton sélectionné pour mettre à jour son état en fonction de la catégorie choisie
    buttons.forEach((button) => {
        // convertit le texte du bouton en minuscules(.toLowerCase()) et le compare à la catégorie choisie
        // si le texte correspond à la catégorie (ou ||) si "toutes" est sélectionné, ajoute la classe "active" au bouton
        if (button.textContent.toLowerCase() === categorie || (categorie === 'toutes' && button.textContent.toLowerCase() === 'toutes')) {
            button.classList.add("active");
        } else {
            // sinon, retire la classe "active" du bouton
            button.classList.remove("active");
        }
    });
}

// attend que le DOM soit complètement chargé avant d'exécuter le reste du script
document.addEventListener('DOMContentLoaded', () => {
    // mélange les recettes
    const recettesMelangees = melangerRecettes([...recettes]);

    // on récupère la div qui contient nos recettes
    const cardrecipe = document.querySelector('.cardrecipe');

    // on récupère le modal et son contenu
    const modal = document.getElementById('myModal');
    const modalContent = modal.querySelector('.popUpComplet');

    // pour chaque recette dans le tableau `recettesMelangees`, on construit le HTML des article cards recettes
    recettesMelangees.forEach((article, index) => {
        const html = `
            <article data-categorie="${article.categorie}">
                <img class="imgrecipe" src="${article.image}" alt="${article.titre}">
                <div class="blockcard">
                    <h3 class="titlerecipe">${article.titre}</h3>
                    <p>${article.description}</p>
                    <div class="cardlovevoirplus">
                        <button class="buttonrecipevoirplus" data-index="${index}">Voir plus</button>
                    </div>
                </div>
            </article>
        `;
        // on ajoute l'article recette à la fin de l'élément cardrecipe (on l'insère dans la div cardrecipe, à la fin)
        cardrecipe.insertAdjacentHTML('beforeend', html);
    });

    // sélectionne tous les boutons avec la class "buttonrecipevoirplus"
    // chaque bouton est associé à une recette et permet d'afficher plus d'informations dans un modal
    document.querySelectorAll('.buttonrecipevoirplus').forEach(button => {
        // pour chaque bouton, ajoute un écouteur d'événement qui se déclenche lors d'un clic
        button.addEventListener('click', (event) => {
            // récupère la valeur de l'attribut "data-index" du bouton cliqué
            // cet index correspond à la position de la recette dans le tableau `recettesMelangees`
            const index = event.currentTarget.getAttribute('data-index');

            // on récupère l'objet recette correspondant à cet index dans le tableau `recettesMelangees`
            const recette = recettesMelangees[index];

            // met le titre du modal avec le titre de la recette sélectionnée
            modalContent.querySelector('.titrePopUp h2').textContent = recette.titre;

            // on met la source de la vidéo dans le modal avec l'URL de la vidéo de la recette
            modalContent.querySelector('.video-container video source').src = recette.video;

            // on recharge la vidéo pour s'assurer qu'elle est à jour et prête à être lue
            modalContent.querySelector('.video-container video').load();

            // on met la description de la recette dans le modal
            modalContent.querySelector('.titrerecettePopUp p').textContent = recette.description;

            // on met les mots-clés de la recette dans le modal
            modalContent.querySelector('.titrePopUp h6').textContent = `Mots clés : ${recette.motsCles}`;

            // sélectionne le conteneur d'ingrédients dans le modal et le vide de tout contenu précédent
            const ingredientsContainer = modalContent.querySelector('.ingredients-popup');
            ingredientsContainer.innerHTML = '';

            // parcourt chaque ingrédient de la recette et l'ajoute au conteneur dans le modal
            recette.ingredients.forEach(ingredient => {
                ingredientsContainer.insertAdjacentHTML('beforeend', `
                <div class="cardPopUp">
                    <img src="${ingredient.image}" alt="${ingredient.nom}">
                    <p>${ingredient.nom}</p>
                    <button class="ajouter-course-PopUp">Ajouter aux courses</button>
                </div>
            `);
            });

            // sélectionne le conteneur des étapes dans le modal et le vide de tout contenu précédent
            const etapesContainer = modalContent.querySelector('.step-containerPopUp');
            etapesContainer.innerHTML = '';

            // on parcourt chaque étape de la recette et l'ajoute au conteneur dans le modal
            recette.etapes.forEach((etape, i) => {
                etapesContainer.insertAdjacentHTML('beforeend', `
                <div class="etapes-popup">
                    <div class="step-number-PopUp">${i + 1}</div>
                    <div class="step-description-PopUp">${etape}</div>
                </div>
            `);
            });

            // on affiche le modal en le rendant visible à l'écran
            modal.style.display = "flex";
        });
    });

    // on ajoute un événement pour fermer le modal lorsqu'on clique sur le bouton close-popup
    const closePopup = document.getElementsByClassName("close-popup")[0];
    closePopup.onclick = function () {
        modal.style.display = "none";
    };

    // on ajoute un événement pour fermer le modal lorsqu'on clique en dehors de la popup
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // on initialise les articles en affichant tous les articles par défaut
    filterArticles('toutes');
});
