document.addEventListener("DOMContentLoaded", function () {
  var imageContainer = document.querySelector(".image-container");
  var images = imageContainer.querySelectorAll("img");
  var currentImage = 0;

  function switchImage() {
    // Hide the current image
    images[currentImage].style.display = "none";

    // Move to the next image
    currentImage = (currentImage + 1) % images.length;

    // Show the next image
    images[currentImage].style.display = "block";
  }

  // Initially show the first image
  images[currentImage].style.display = "block";

  // Set up an interval to switch the image every 5 seconds
  setInterval(switchImage, 5000);
});
