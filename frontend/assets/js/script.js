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