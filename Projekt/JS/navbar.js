const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


const closeNavOnResize = () => {
    const windowWidth = window.innerWidth;
    const breakpoint = 790;

    if(windowWidth > breakpoint && navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      mobileNav.classList.remove("hamburger-active");

    }
};

window.addEventListener("resize", closeNavOnResize);