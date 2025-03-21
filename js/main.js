const text = document.getElementById("text");

// Growing Effect on Click
text.addEventListener("click", () => {
    text.classList.toggle("grow");
});

// Wind Effect (Mouse Move)
document.addEventListener("mousemove", (event) => {
    let x = event.clientX / window.innerWidth - 0.5;
    text.style.transform = `rotate(${x * 10}deg)`;
});

// Rain Effect (Fade Letters on Click)
text.addEventListener("dblclick", () => {
    text.style.opacity = "0.5";
    setTimeout(() => text.style.opacity = "1", 2000);
});

// Generate Fireflies
function createFireflies(count) {
    for (let i = 0; i < count; i++) {
        let firefly = document.createElement("div");
        firefly.classList.add("firefly");
        firefly.style.left = Math.random() * window.innerWidth + "px";
        firefly.style.top = Math.random() * window.innerHeight + "px";
        firefly.style.animationDuration = (Math.random() * 2 + 1) + "s";
        document.body.appendChild(firefly);
    }
}

createFireflies(20);
