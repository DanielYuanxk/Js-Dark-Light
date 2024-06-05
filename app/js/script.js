document.addEventListener("DOMContentLoaded", function () {
  let darkModeLabel = document.querySelector('label[for="dark"]');
  let darkModeInput = document.querySelector("#dark");
  let lightModeInput = document.querySelector("#light");

  if (darkModeLabel) {
    darkModeLabel.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default behavior

      // Toggle between dark and light mode
      if (darkModeInput.checked) {
        lightModeInput.checked = true; // Switch to light mode
      } else {
        darkModeInput.checked = true; // Switch to dark mode
      }
    });
  }
});
