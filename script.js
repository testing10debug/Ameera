function blowKiss() {
  const kissElement = document.getElementById('kissAnimation');
  
  // Set the emoji to 😘
  kissElement.innerHTML = '😘';
  
  // Randomize the position of the emoji
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  
  kissElement.style.left = `${randomX}px`;
  kissElement.style.top = `${randomY}px`;
  
  // Make the emoji visible and start animation
  kissElement.style.visibility = 'visible';
  kissElement.style.animation = 'blowKiss 1.5s ease forwards, floatKiss 2s ease-in-out infinite';
  
  // Play sound effect when the button is clicked
  const sound = new Audio('https://www.soundjay.com/button/beep-07.wav');
  sound.play();
  
  // Hide the emoji after animation ends
  setTimeout(() => {
    kissElement.innerHTML = '';
    kissElement.style.visibility = 'hidden';  // Hide the emoji again
    kissElement.style.animation = '';
  }, 1500); // Animation duration
}
