// Toggle mobile menu
const menuIcon = document.querySelector('.ri-menu-line');
const nav = document.querySelector('.nav-part-1 ul');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Search functionality
const searchIcon = document.querySelector('.ri-search-line');
searchIcon.addEventListener('click', () => {
    const searchQuery = prompt('Enter your search query:');
    if (searchQuery) {
        alert(`You searched for: ${searchQuery}`);
    }
});

// Add to cart functionality
const cartIcon = document.querySelector('.ri-shopping-cart-2-line');
cartIcon.addEventListener('click', () => {
    alert('Your cart is currently empty.');
});

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button hover effect
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});