// Enable background jungle audio on first user click
window.addEventListener('click', () => {
    const bgAudio = document.getElementById('bg-audio');
    if (bgAudio) {
      bgAudio.muted = false;
      bgAudio.volume = 0.3;
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
  
        // Lower volume if it's the tiger roar
        if (soundURL.includes('tiger-roar')) {
          player.volume = 0.4;
  
          // 🐅 Trigger tiger paw swing from left
          const paw = document.getElementById('tiger-paw');
          paw.style.opacity = '0';
          paw.style.left = '-300px';
          paw.style.animation = 'none';
          void paw.offsetWidth; // Reset animation
          paw.style.animation = 'swipeLeft 2s ease';
  
          // 🐾 Add claw mark
          const claw = document.createElement('img');
          claw.src = 'img/claw-mark.png'; // Make sure this image exists!
          claw.className = 'claw-mark';
          document.body.appendChild(claw);
  
          setTimeout(() => {
            claw.remove();
          }, 2000);
  
          paw.addEventListener('animationend', () => {
            paw.style.animation = '';
          }, { once: true });
        } else {
          player.volume = 1.0;
        }
  
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
  
    const maxTilt = 20;
    const rotateX = offsetY * maxTilt * -1;
    const rotateY = offsetX * maxTilt;
  
    wildText.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  
  // Jungle leaves slide in from sides and stack
  let nextY = 0;
  
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('animal-word')) return;
  
    const leaf = document.createElement('img');
    leaf.src = 'img/leaf.png';
    leaf.classList.add('slide-in-leaf');
  
    leaf.style.top = `${nextY}px`;
    nextY += 500;
  
    if (nextY > window.innerHeight - 100) {
      nextY = 0;
    }
  
    const fromLeft = Math.random() < 0.5;
    if (fromLeft) {
      leaf.classList.add('left');
    } else {
      leaf.classList.add('right');
    }
  
    document.body.appendChild(leaf);
  });
  