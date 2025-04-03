window.addEventListener('click', () => {
    const bgAudio = document.getElementById('bg-audio');
    if (bgAudio) {
      bgAudio.muted = false;
      bgAudio.play();
    }
  }, { once: true });
  




document.addEventListener('mousemove', () => {
    const img = document.createElement('img');
    img.src = 'img/nh34_ox4b_210722.jpg';
    img.className = 'leaf-slide';
  
    // Randomly choose left or right
    const fromLeft = Math.random() > 0.5;
    img.style.left = fromLeft ? '-200px' : '100vw';
    img.style.top = `${Math.random() * window.innerHeight}px`;
  
    img.style.setProperty('--direction', fromLeft ? '1' : '-1');
  
    document.body.appendChild(img);
  
    setTimeout(() => {
      img.remove();
    }, 2000);
  });
  
  const wildText = document.getElementById('wild');

document.addEventListener('mousemove', (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // distance from center
  const offsetX = (e.clientX - centerX) / centerX; // -1 to 1
  const offsetY = (e.clientY - centerY) / centerY;

  // max rotation
  const maxTilt = 10;

  const rotateX = offsetY * maxTilt * -1; // reverse for intuitive feel
  const rotateY = offsetX * maxTilt;

  wildText.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
