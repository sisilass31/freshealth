/* recettes */

/* recettes */

/* darkmode */

// Récupère les éléments
const checkbox = document.getElementById('switch');

// Vérifie l'état du mode sombre dans le stockage local et applique le thème
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        checkbox.checked = true;
    }
});

// Bascule le mode sombre lorsque l'utilisateur clique sur l'interrupteur
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    }
});

/* darkmode */