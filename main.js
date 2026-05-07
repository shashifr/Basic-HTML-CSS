// Welcome message
console.log("Website Loaded Successfully!");


// Button functionality
const button = document.querySelector("button");

button.addEventListener("click", function () {
    alert("Thanks for visiting my website!");
});


// Smooth scrolling for navbar links
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");

        if (targetId !== "#") {

            const targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Card hover effect using JS
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

});