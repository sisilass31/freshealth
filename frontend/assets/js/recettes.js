import recettes from '../js/objects-recettes.js';

// Rendre filterArticles accessible globalement
window.filterArticles = function (categorie) {
    const articles = document.querySelectorAll(".cardrecipe article");
    articles.forEach((article) => {
        if (categorie === 'toutes' || article.getAttribute("data-categorie") === categorie) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });

    const buttons = document.querySelectorAll(".filter-container button");
    buttons.forEach((button) => {
        if (button.textContent.toLowerCase() === categorie || (categorie === 'toutes' && button.textContent.toLowerCase() === 'toutes')) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const cardrecipe = document.querySelector('.cardrecipe');
    const modal = document.getElementById('myModal');
    const modalContent = modal.querySelector('.popUpComplet');

    recettes.forEach((article, index) => {
        const html = `
            <article data-categorie="${article.categorie}">
                <img class="imgrecipe" src="${article.image}" alt="${article.titre}">
                <div class="blockcard">
                    <h3 class="titlerecipe">${article.titre}</h3>
                    <p>${article.description}</p>
                    <div class="cardlovevoirplus">
                        <i id="love-${index}" class='bx bxs-heart'></i>
                        <button class="buttonrecipevoirplus" data-index="${index}">Voir plus</button>
                    </div>
                </div>
            </article>
        `;
        cardrecipe.insertAdjacentHTML('beforeend', html);
    });

    document.querySelectorAll('.buttonrecipevoirplus').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.currentTarget.getAttribute('data-index');
            const recette = recettes[index];

            modalContent.querySelector('.titrePopUp h2').textContent = recette.titre;
            modalContent.querySelector('.video-container video source').src = recette.video;
            modalContent.querySelector('.video-container video').load();  // Recharge la vidéo
            modalContent.querySelector('.titrerecettePopUp p').textContent = recette.description;
            modalContent.querySelector('.titrePopUp h6').textContent = `Mots clés : ${recette.motsCles}`;

            const ingredientsContainer = modalContent.querySelector('.ingredients-popup');
            ingredientsContainer.innerHTML = ''; // Vider les anciens ingrédients
            recette.ingredients.forEach(ingredient => {
                ingredientsContainer.insertAdjacentHTML('beforeend', `
                    <div class="cardPopUp">
                        <img src="${ingredient.image}" alt="${ingredient.nom}">
                        <p>${ingredient.nom}</p>
                        <button class="ajouter-course-PopUp">Ajouter aux courses</button>
                    </div>
                `);
            });

            const etapesContainer = modalContent.querySelector('.step-containerPopUp');
            etapesContainer.innerHTML = ''; // Vider les anciennes étapes
            recette.etapes.forEach((etape, i) => {
                etapesContainer.insertAdjacentHTML('beforeend', `
                    <div class="etapes-popup">
                        <div class="step-number-PopUp">${i + 1}</div>
                        <div class="step-description-PopUp">${etape}</div>
                    </div>
                `);
            });

            modal.style.display = "flex";
        });
    });

    const closePopup = document.getElementsByClassName("close-popup")[0];
    closePopup.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Initialiser les articles avec la catégorie par défaut "toutes"
    filterArticles('toutes');
});