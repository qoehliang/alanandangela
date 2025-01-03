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
    
        // Update circle indicators (added below)
        updateCircleIndicators(); 
      }

let intervalId = setInterval(changeBackgroundImage, 5000); // Store the interval ID

  // --- Circle indicator logic ---

  // Create circle indicators
  const indicatorContainer = document.createElement('div');
  indicatorContainer.classList.add('indicator-container'); 
  for (let i = 0; i < images.length; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    indicator.addEventListener('click', function() {
      clearInterval(intervalId); // Stop slideshow when clicked
      currentImage = i; 
      changeBackgroundImage();
    });
    indicatorContainer.appendChild(indicator);
  }
  heroElement.appendChild(indicatorContainer); // Add to hero

  function updateCircleIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
      if (index === currentImage) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  updateCircleIndicators(); // Initial update

});