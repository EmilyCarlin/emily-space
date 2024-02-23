document.addEventListener("DOMContentLoaded", function () {
  // Ensure the currentPath ends with a slash if it doesn't already
  const currentPath = window.location.pathname.endsWith("/")
    ? window.location.pathname
    : window.location.pathname + "/";

  document.querySelectorAll(".nav a").forEach((link) => {
    // Ensure the link's href attribute ends with a slash for consistent comparison
    let linkPath = link.getAttribute("href");
    linkPath = linkPath.endsWith("/") ? linkPath : linkPath + "/";

    // Compare the normalized paths and add 'selected' class if they match
    if (linkPath === currentPath) {
      link.parentNode.classList.add("selected");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.parentNode.classList.add("selected");
    }
  });
});
