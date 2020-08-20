const navTrigger = document.querySelector(".header__nav-trigger");
const navInner = navTrigger.firstChild;
const navList = document.querySelector(".header__nav-list");
const navLinks = document.querySelectorAll(".header__nav-link");

const openMenu = () => {
  if (navList.classList.contains("active")) {
    navList.classList.remove("active");
    navInner.src = "./images/icon-hamburger.svg";
  } else {
    navList.classList.add("active");
    navInner.src = "./images/icon-close.svg";
  }
};

navTrigger.addEventListener("click", openMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", openMenu);
});
