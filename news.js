// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Article hover effect
const articles = document.querySelectorAll('.news-article');
articles.forEach(article => {
    article.addEventListener('mouseover', () => {
        article.style.transform = 'scale(1.05)';
    });
    article.addEventListener('mouseout', () => {
        article.style.transform = 'scale(1)';
    });
});