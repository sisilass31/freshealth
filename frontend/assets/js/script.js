/* recettes */

/* recettes */

/* navbar */

function toggleSidebar() {
    var sidebar = document.getElementById('popup_sidebar');
    sidebar.classList.toggle('active');
}

/* navbar */

/* FAQ */

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const arrow = question.querySelector('.arrow');

        // Toggle the answer's visibility
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            arrow.classList.remove('rotated');
        } else {
            answer.style.display = 'block';
            arrow.classList.add('rotated');
        }
    });
});

/* FAQ */