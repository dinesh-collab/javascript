const images = ["url('image1.jpg')", "url('image2.jpg')", "url('image3.jpg')"];
let currentIndex = 0;
function changeBackgroundImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.body.style.backgroundImage = images[currentIndex];
}
