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
          
            const paw = document.getElementById('tiger-paw');
            paw.style.opacity = '0';
            paw.style.left = '-300px';
            paw.style.animation = 'none';
            void paw.offsetWidth;
            paw.style.animation = 'swipeLeft 2s ease';
          
            paw.addEventListener('animationend', () => {
              paw.style.animation = '';
            }, { once: true });
          
          } else if (soundURL.includes('bird_chirp') || soundURL.includes('chirp')) {
            player.volume = 1.0;
          
            const bird = document.getElementById('jungle-bird');
            bird.style.opacity = '0';
            bird.style.right = '-300px';
            bird.style.animation = 'none';
            void bird.offsetWidth;
            bird.style.animation = 'birdFlyLeft 2s ease';
          
            bird.addEventListener('animationend', () => {
              bird.style.animation = '';
            }, { once: true });

        } else if (soundURL.includes('snake') || soundURL.includes('hiss')) {
            player.volume = 1.0;
          
            const snake = document.getElementById('jungle-snake');
            snake.style.opacity = '0';
            snake.style.left = '-300px';
            snake.style.animation = 'none';
            void snake.offsetWidth;
            snake.style.animation = 'snakeSlideLeft 2s ease';
          
            snake.addEventListener('animationend', () => {
              snake.style.animation = '';
            }, { once: true });
          
          
          
          } else {
            player.volume = 1.0;
          }
          
  
        player.play();
      }
    });
  });
  
  
  
  
  // Jungle leaves slide in from sides and stack
  let nextY = 0;
const leafSpacing = 180; // vertical distance between leaves

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('animal-word')) return;

  const leaf = document.createElement('img');
  leaf.src = 'img/leaf.png';
  leaf.classList.add('slide-in-leaf');

  // Set top position
  leaf.style.top = `${nextY}px`;
  nextY += leafSpacing;

  // Reset to top if we reach bottom
  if (nextY > window.innerHeight - leafSpacing) {
    nextY = 0;
  }

  // Random side
  const fromLeft = Math.random() < 0.5;
  leaf.classList.add(fromLeft ? 'left' : 'right');

  document.body.appendChild(leaf);
});


  gsap.to("#wild", {
    keyframes: [
      { rotate: -2, skewX: 5, duration: 1 },
      { rotate: 2, skewX: -4, duration: 1 },
      { rotate: 0, skewX: 1, duration: 1 }
    ],
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  
  