document.addEventListener("DOMContentLoaded", function() {
    const hours = new Date().getHours();
    let greeting;
    if (hours < 12) {
        greeting = "Good morning!";
    } else if (hours < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    document.querySelector(".intro p").innerText = greeting + " Hi, I'm [Your Name], a PhD student in Human-Computer Interaction.";
});



document.addEventListener('DOMContentLoaded', function() {
    console.log('Page Loaded');

    // Smooth Scrolling
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Responsive Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
});
