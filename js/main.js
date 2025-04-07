

// Enable background jungle audio on first user click
window.addEventListener('click', () => {
    const bgAudio = document.getElementById('bg-audio');
    if (bgAudio) {
      bgAudio.muted = false;
      bgAudio.volume = 0.3; // Optional: adjust to taste
      bgAudio.play();
    }
  }, { once: true });
  
  // Animal word sound effects
  const animalWords = document.querySelectorAll('.animal-word');
  const player = document.getElementById('sound-player');
  
  animalWords.forEach(word => {
    word.addEventListener('click', () => {
      const soundURL = word.getAttribute('data-sound');
      if (soundURL) {
        player.src = soundURL;
        player.play();
      }
    });
  });
  
  // Scroll-triggered fade-in for "The Jungle Sleeps"
  const fadeText = document.querySelector('.fade-in-text');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fadeText.classList.add('visible');
      }
    });
  });
  observer.observe(fadeText);
  
  // "WILD" text blows with the wind (follows mouse)
  const wildText = document.getElementById('wild');
  document.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  
    const offsetX = (e.clientX - centerX) / centerX;
    const offsetY = (e.clientY - centerY) / centerY;
  
    const maxTilt = 10;
    const rotateX = offsetY * maxTilt * -1;
    const rotateY = offsetX * maxTilt;
  
    wildText.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  

  
  let nextY = 0; // Tracks where the next leaf should go

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('animal-word')) return;

  const leaf = document.createElement('img');
  leaf.src = 'img/leaf.png';
  leaf.classList.add('slide-in-leaf');

  // Set vertical position with more spacing
  leaf.style.top = `${nextY}px`;
  nextY += 500;

  // Reset if we run out of space
  if (nextY > window.innerHeight - 100) {
    nextY = 0;
  }

  // Random side
  const fromLeft = Math.random() < 0.5;
  if (fromLeft) {
    leaf.classList.add('left');
  } else {
    leaf.classList.add('right');
  }

  document.body.appendChild(leaf);
});
