
const animalWords = document.querySelectorAll('.animal-word');
const player = document.getElementById('sound-player');

animalWords.forEach(word => {
  word.addEventListener('click', () => {
    player.src = word.getAttribute('data-sound');
    player.play();
  });
});

// Scroll-triggered fade-in
const fadeText = document.querySelector('.fade-in-text');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fadeText.classList.add('visible');
    }
  });
});
observer.observe(fadeText);

document.addEventListener('mousemove', (e) => {
    const leaf = document.createElement('img');
    leaf.src = 'nh34_ox4b_210722.jpg';
    leaf.className = 'leaf-burst';
  
    // Position
    leaf.style.left = `${e.clientX}px`;
    leaf.style.top = `${e.clientY}px`;
  
    // Random movement effect
    const rotate = Math.floor(Math.random() * 40 - 20); // -20 to +20 deg
    const scale = Math.random() * 0.4 + 0.6; // 0.6–1
    const offsetX = Math.floor(Math.random() * 100 - 50); // -50 to +50 px
    const offsetY = Math.floor(Math.random() * 100 - 50);
  
    leaf.style.setProperty('--rotate', `${rotate}deg`);
    leaf.style.setProperty('--scale', scale);
    leaf.style.setProperty('--offset-x', `${offsetX}px`);
    leaf.style.setProperty('--offset-y', `${offsetY}px`);
  
    document.body.appendChild(leaf);
  
    setTimeout(() => leaf.remove(), 1500);
  });
  
