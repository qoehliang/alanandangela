document.addEventListener('DOMContentLoaded', function() {
    let images = [
      '../img/hero-min.jpg',
      '../img/hero-min2.jpg',
      '../img/hero-min3.jpg',
      '../img/hero-min4.jpg'
    ];
  
    let currentImage = 0;
    const heroElement = document.querySelector('.hero');
  
    // Preload images
    function preloadImages() {
      for (let i = 0; i < images.length; i++) {
        let img = new Image();
        img.src = images[i];
      }
    }
  
    preloadImages(); // Call the function to preload
  
    function changeBackgroundImage() {
      heroElement.style.backgroundImage = `url(${images[currentImage]})`;
      currentImage = (currentImage + 1) % images.length;
    }

let intervalId = setInterval(changeBackgroundImage, 5000); // Store the interval ID

// Add buttons or controls for manual toggling
const prevButton = document.createElement('button');
prevButton.textContent = 'Previous';
const nextButton = document.createElement('button');
nextButton.textContent = 'Next';

// Append buttons to the hero element or another suitable container
heroElement.appendChild(prevButton);
heroElement.appendChild(nextButton);

prevButton.addEventListener('click', function() {
  clearInterval(intervalId); // Stop automatic slideshow
  currentImage = (currentImage - 1 + images.length) % images.length; // Decrement with wrap-around
  changeBackgroundImage();
});

nextButton.addEventListener('click', function() {
  clearInterval(intervalId); // Stop automatic slideshow
  changeBackgroundImage();
});
});