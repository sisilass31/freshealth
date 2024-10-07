/* navbar */

// on déclare la fonction
function toggleSidebar() {
    // on récupère le popup_sidebar
    var sidebar = document.getElementById('popup_sidebar');
    // ajoute ou enlève la classe 'active' sur l'élément sidebar
    sidebar.classList.toggle('active');
}

/* navbar */

/* carousel */

const carouselContainer = document.querySelector('.carousel-container');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

let scrollPosition = 0;

arrowLeft.addEventListener('click', () => {
    scrollPosition -= 300;
    carouselContainer.scroll({
        left: scrollPosition,
        behavior: 'smooth'
    });
});

arrowRight.addEventListener('click', () => {
    scrollPosition += 300;
    carouselContainer.scroll({
        left: scrollPosition,
        behavior: 'smooth'
    });
});

// Désactiver les boutons lorsque l'utilisateur utilise le scroll manuel
let isUserScrolling = false;

carouselContainer.addEventListener('scroll', () => {
    isUserScrolling = true;
});

arrowLeft.addEventListener('click', () => {
    isUserScrolling = false;
});

arrowRight.addEventListener('click', () => {
    isUserScrolling = false;
});

/* carousel */

/* faq */

// Sélectionne toutes les flèches
const faqItems = document.querySelectorAll('.faq-item');

// Ajoute un écouteur d'événement à chaque flèche
faqItems.forEach(item => {
  const arrow = item.querySelector('.voir-plus-faq');

  arrow.addEventListener('click', () => {
    // Active/désactive la classe "active" sur l'élément FAQ
    item.classList.toggle('active');
  });
});


/* faq */