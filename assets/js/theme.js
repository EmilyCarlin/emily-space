document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");

  // Function to update the toggle button text
  function updateToggleButtonText(theme) {
    themeToggle.innerText = theme === "dark" ? "Good Morning" : "Good Night";
  }

  // Initially update the button text based on the current theme
  const currentTheme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
  updateToggleButtonText(currentTheme);

  // Event listener for the theme toggle button
  themeToggle.addEventListener("click", () => {
    // Toggle the 'dark' class on the <html> element
    document.documentElement.classList.toggle("dark");
    let newTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";

    // Update the button text after the theme change
    updateToggleButtonText(newTheme);

    // Save the new theme preference to localStorage
    localStorage.setItem("theme", newTheme);
  });
});
