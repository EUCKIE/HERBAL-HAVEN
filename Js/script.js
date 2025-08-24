"use strict";

// Sticky navigation
const header = document.querySelector(".header");
const hero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (entries) => {
    if (!entries[0].isIntersecting) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  },
  { root: null, threshold: 0 }
);

observer.observe(hero);

// Animation for value items when they come into view
const valueItems = document.querySelectorAll(".value-item");

const valueObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

// Set initial state for animation
valueItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  valueObserver.observe(item);
});

const productItems = document.querySelectorAll(".product");

const productObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

productItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  productObserver.observe(item);
});

// Animation for roles items
const roleItems = document.querySelectorAll(
  ".role-1, .role-2, .role-3, .mission, .vision"
);

const roleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

// Set initial state for animation
roleItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  roleObserver.observe(item);
});

// MODAL 
