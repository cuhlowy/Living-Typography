
document.addEventListener("DOMContentLoaded", function() {
    createStars();
});

function createStars() {
    const starsContainer = document.querySelector(".stars-container");
    for (let i = 0; i < 50; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDelay = Math.random() * 2 + "s";
        starsContainer.appendChild(star);
    }
}

function animateSwirls() {
    const swirls = document.querySelector(".swirls");
    swirls.classList.toggle("swirl-active");
}

