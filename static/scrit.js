// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark mode toggle
const darkModeBtn = document.getElementById('darkModeBtn');

if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

// Contact form validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            e.preventDefault();
            alert('Please fill all fields');
        } else {
            alert('Message submitted successfully!');
        }
    });
}

// Typing effect
const text = "Welcome to My Portfolio Website";
let index = 0;

function typeEffect() {
    const typing = document.getElementById('typing');

    if (typing && index < text.length) {
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = typeEffect;