let images = [
    '../img/hero-min.jpg', 
    '../img/hero-min2.jpg', 
    '../img/hero-min3.jpg',
    '../img/hero-min4.jpg'
  ];
  let currentImage = 0;
  const heroElement = document.querySelector('.hero');
  
  function changeBackgroundImage() {
    heroElement.style.backgroundImage = `url(${images[currentImage]})`;
    currentImage = (currentImage + 1) % images.length; // Loop through images
  }
  
  setInterval(changeBackgroundImage, 5000); // Change every 5000 milliseconds (5 seconds)