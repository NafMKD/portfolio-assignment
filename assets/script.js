// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove the sticky class when you leave the scroll position.
function scrollHandler() {
  const navbar = document.getElementById("navbar");
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
