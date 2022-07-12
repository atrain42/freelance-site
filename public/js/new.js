const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".slide");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
