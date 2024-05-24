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
