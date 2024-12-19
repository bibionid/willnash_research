// JavaScript to cycle through images
const images = [
  'assets/images/will-nash-web.jpeg',
  'assets/images/PXL_20241117_132734824.MP~3.jpg',
  'assets/images/P9294726.JPG',
  'assets/images/P7203467.JPG'
];

let currentImageIndex = 0;
const imageElement = document.getElementById('rotating-image');

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle through the images
  imageElement.src = images[currentImageIndex]; // Update the image source
}

// Change image every 30 seconds
setInterval(changeImage, 30000);
