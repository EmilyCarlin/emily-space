document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.parentNode.classList.add("selected");
    }
  });
});
