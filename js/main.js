
const text = document.getElementById("text");

text.addEventListener("click", () => {
    text.classList.toggle("grow");

    if (text.classList.contains("grow")) {
        growVines();
    } else {
        removeVines();
    }
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

function growVines() {
    // Remove existing vines
    document.querySelectorAll(".vine").forEach(vine => vine.remove());

    for (let i = 0; i < 2; i++) {
        let vine = document.createElement("div");
        vine.classList.add("vine", i === 0 ? "left" : "right");
        text.appendChild(vine);

        // Generate random leaves along the vine
        for (let j = 0; j < 3; j++) {
            let leaf = document.createElement("div");
            leaf.classList.add("leaf");
            leaf.style.top = `${Math.random() * 80 + 20}px`; // Random leaf position
            leaf.style.left = "0px";
            leaf.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
            vine.appendChild(leaf);
        }

        // Delay to allow transition effect
        setTimeout(() => {
            vine.style.height = "150px"; // Animate growth
        }, 10);
    }
}

function removeVines() {
    document.querySelectorAll(".vine").forEach(vine => vine.remove());
}
