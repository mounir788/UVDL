const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu-container");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Home slider
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const circle = document.querySelector(".circle");
let currentSlide = 0;

// Function to move the circle to the active dot
function moveCircleToDot(slideIndex) {
  // Move the circle to the new active dot vertically (translateY)
  circle.style.transform = `translateY(${slideIndex * 50 - 5}px)`;
}

// Function to go to the specified slide
function goToSlide(slideIndex) {
  // Remove 'active' class from the current slide and dot
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");

  // Update the current slide index
  currentSlide = slideIndex;

  // Add 'active' class to the new slide and dot
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");

  // Move the circle to the new active dot
  moveCircleToDot(currentSlide);
}

// Pagination dots click event
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index);
  });
});

const video = document.getElementById("video");
const playButton = document.getElementById("play-button");

// Play the video and show controls when play button is clicked
playButton?.addEventListener("click", function () {
  video?.play();
  video?.setAttribute("controls", "controls");
  playButton.style.display = "none";
});

// Hide controls and show play button when video is paused
video?.addEventListener("pause", function () {
  video?.removeAttribute("controls");
  playButton.style.display = "block";
});

// Hide controls and show play button when video ends
video?.addEventListener("ended", function () {
  video?.removeAttribute("controls");
  playButton.style.display = "block";
});

// Get all founders
const founders = document.querySelectorAll(".founder");

founders.forEach((founder) => {
  const infoBox = founder.querySelector(".info-box");

  // Toggle info box on click
  founder.addEventListener("click", function () {
    // Check if the info box is currently displayed or not
    const isExpanded = infoBox.style.width === "100%";

    // Collapse all info boxes first
    founders.forEach((otherFounder) => {
      const otherInfoBox = otherFounder.querySelector(".info-box");
      otherInfoBox.style.width = "0"; // Collapse width
      otherInfoBox.style.display = "none"; // Hide info box
      otherInfoBox.querySelector(".information").style.opacity = "0"; // Hide text
    });

    // If the clicked box is not expanded, expand it
    if (!isExpanded) {
      infoBox.style.display = "block"; // Show the info box
      setTimeout(() => {
        infoBox.style.width = "100%"; // Expand width
        infoBox.querySelector(".information").style.opacity = "1"; // Show text
      }, 10); // Delay to allow animation
    }
  });
});
