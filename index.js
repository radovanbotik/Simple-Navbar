window.addEventListener("DOMContentLoaded", () => {
  const navbarToggle = document.querySelector("#navbar-toggle");
  const navbarLinks = document.querySelector("#navbar-links");

  const linksBottom = navbarLinks.getBoundingClientRect().bottom;
  const linksTop = navbarLinks.getBoundingClientRect().top;
  const linksHeight = Math.floor(linksBottom - linksTop);

  const revealNavigation = () => {
    navbarLinks.classList.toggle("links__reveal");
  };

  navbarToggle.addEventListener("click", revealNavigation);
});
