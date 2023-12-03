const goTopBtn = document.querySelector(".go_top_btn");

window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      goTopBtn.style.display = "block";
    } else {
      goTopBtn.style.display = "none";
    }
}

goTopBtn.addEventListener('click', backToTop);

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}
