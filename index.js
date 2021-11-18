// Header
const navbarBurger = document.getElementById("navbar-burger");
const navbarCross = document.getElementById("navbar-cross");
const navbarContentDropdown = document.querySelectorAll(
  ".navbar-content-dropdown"
);

const openMenu = () => {
  navbarBurger.classList.replace("mobile-display", "hide");
  navbarCross.classList.remove("hide");
  navbarContentDropdown[0].classList.remove("hide");
};

const closeMenu = () => {
  navbarBurger.classList.replace("hide", "mobile-display");
  navbarCross.classList.add("hide");
  navbarContentDropdown[0].classList.add("hide");
};

// Slider

let slideIndex;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const showSlide = (slideIndex) => {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  dots.forEach((dot) => {
    dot.style.backgroundColor = "#bbb";
  });
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].style.backgroundColor = "grey";
};

// Grid-list

const showMore = () => {
  const cards = document.querySelectorAll(".product-card");
  cards.forEach((card) => {
    card.classList.remove("hide");
    card.classList.remove("mobile-hide");
  });
  document.querySelectorAll(".show-more-btn")[0].style.display = "none";
};

// FAQ

const showElement = (faqAnswer, faqMinusIcon, faqPlusIcon) => {
  if (document.getElementById(faqAnswer.id).style.display === "none") {
    document.getElementById(faqAnswer.id).style.display = "block";
    document.getElementById(faqMinusIcon.id).style.display = "block";
    document.getElementById(faqPlusIcon.id).style.display = "none";
  } else {
    document.getElementById(faqAnswer.id).style.display = "none";
    document.getElementById(faqMinusIcon.id).style.display = "none";
    document.getElementById(faqPlusIcon.id).style.display = "block";
  }
};
