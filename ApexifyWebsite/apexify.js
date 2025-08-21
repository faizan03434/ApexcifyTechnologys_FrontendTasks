// Header scroll effect with logo switching - Corrected version
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".main-header");
  const logo = document.getElementById("header-logo");

  // Set your logo paths here - MAKE SURE THESE ARE CORRECT
  const originalLogoSrc = "apexcify logo.webp"; // White logo (non-scrolled state)
  const scrolledLogoSrc =
    "https://apexifytechnologies.com/wp-content/uploads/2023/05/Group-71.png"; // Blue logo (scrolled state)

  // Preload both logos
  const preloadImages = [originalLogoSrc, scrolledLogoSrc].forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  // Set initial logo state
  logo.src = originalLogoSrc;
  logo.style.transition = "opacity 0.3s ease";

  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      logo.src = scrolledLogoSrc;
      logo.onerror = function () {
        this.style.display = "none";
      };
    } else {
      header.classList.remove("scrolled");
      logo.src = originalLogoSrc;
      logo.onerror = function () {
        this.style.display = "none";
      };
    }
  }

  // Set initial state
  handleScroll();

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".indicator");
  let currentSlide = 0;

  // Auto rotate slides every 5 seconds
  const slideInterval = setInterval(nextSlide, 5000);

  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    // Remove active class from all indicators
    indicators.forEach((indicator) => {
      indicator.classList.remove("active");
    });

    // Show selected slide
    slides[index].classList.add("active");
    indicators[index].classList.add("active");
    currentSlide = index;

    // Reset timer when manually changing slides
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Add click event to indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      showSlide(index);
    });
  });
});
// Replace the existing progress circle initialization code with this:
document.addEventListener("DOMContentLoaded", function () {
  // Initialize progress circles animation
  const circles = document.querySelectorAll(".de-progress-circle");
  circles.forEach((circle) => {
    const percent = circle.getAttribute("data-percent");
    const fill = circle.querySelector(".de-progress-circle-fill");
    const circumference = 2 * Math.PI * 45; // 45 is the radius (r="45")
    const offset = circumference - (percent / 100) * circumference;
    fill.style.strokeDashoffset = offset;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Clone the partner boxes for infinite loop
  const carousel = document.querySelector(".partners-carousel");
  const boxes = document.querySelectorAll(".partner-box");

  boxes.forEach((box) => {
    const clone = box.cloneNode(true);
    carousel.appendChild(clone);
  });
});
