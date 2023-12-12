// Get the modal
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modalImg');

// Get all images
const images = document.querySelectorAll('.slide img');

images.forEach((img) => {
  img.addEventListener('click', function() {
    modal.style.display = 'block'; 
    modalImg.src = this.src; 
  });
});

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', function() {
  modal.style.display = 'none'; 
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none'; 
  }
});
