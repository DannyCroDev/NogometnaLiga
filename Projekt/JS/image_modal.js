// Get the modal
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modalImg');

// Get all images
const images = document.querySelectorAll('.slide img');

// Loop through each image and attach a click event
images.forEach((img) => {
  img.addEventListener('click', function() {
    modal.style.display = 'block'; // Display the modal
    modalImg.src = this.src; // Set the clicked image source in the modal
  });
});

// Close the modal when the close button is clicked
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', function() {
  modal.style.display = 'none'; // Hide the modal
});

// Close the modal when clicking outside of it
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none'; // Hide the modal if clicked outside the image
  }
});
