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
    document.querySelector(".intro p").innerText = greeting + " Hi, I'm Shannon, a PhD student in Human-Computer Interaction at Queensland University of Technology.";
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page Loaded');

    // Responsive Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
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
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page Loaded');

    // Responsive Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
});


    //popup for cv
function openCVPopup() {
    document.getElementById("cvModal").style.display = "flex";
}

function closeCVPopup() {
    document.getElementById("cvModal").style.display = "none";
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function(event) {
    var modal = document.getElementById("cvModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

