/*const light = document.getElementById("light");
const dark = document.getElementById("dark");

light.addEventListener("click", () => {
  document.querySelector("body").className = "light";
});

dark.addEventListener("click", () => {
  document.querySelector("body").className = "dark";
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to set theme based on the radio button state
  const setTheme = (isDark) => {
    document.body.classList.toggle("dark", isDark);
    document.body.classList.toggle("light", !isDark);
    dark.checked = isDark;
    light.checked = !isDark;
  };

  // Check for system preference
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  setTheme(prefersDarkScheme);

  // Add event listeners for radio button changes
  dark.addEventListener("change", () => setTheme(true));
  light.addEventListener("change", () => setTheme(false));
});
*/

document.addEventListener("DOMContentLoaded", function () {
  const light = document.getElementById("light");
  const dark = document.getElementById("dark");

  // Function to set theme based on the radio button state
  const setTheme = (isDark) => {
    document.body.classList.toggle("dark", isDark);
    document.body.classList.toggle("light", !isDark);
    dark.checked = isDark;
    light.checked = !isDark;
    // Save the preference to localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme === "dark");
  } else {
    // Default to system preference if no saved theme
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDarkScheme);
  }

  // Add event listeners for radio button changes
  dark.addEventListener("change", () => setTheme(true));
  light.addEventListener("change", () => setTheme(false));
});
