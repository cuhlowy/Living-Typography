// Enable background jungle audio on first user click
window.addEventListener('click', () => {
    const bgAudio = document.getElementById('bg-audio');
    if (bgAudio) {
      bgAudio.muted = false;
      bgAudio.volume = 0.5; // Optional: adjust to taste
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
  
  // Leaves blow in from sides
  document.addEventListener('click', () => {
    const leaf = document.createElement('img');
    leaf.src = 'img/leaf.png';
    leaf.className = 'slide-from-right';
  
    // Random vertical position
    leaf.style.top = `${Math.random() * window.innerHeight}px`;
  
    document.body.appendChild(leaf);
  
    setTimeout(() => {
      leaf.remove();
    }, 2000);
  });
  