document.addEventListener("DOMContentLoaded", () => {
    const html = document.querySelector('html');
    const toggle = document.getElementById("dark_mode_input");

    toggle.addEventListener("click", () => {
        html.classList.toggle('dark-mode');
    });
  });