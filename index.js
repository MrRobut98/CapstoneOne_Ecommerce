const toggleButton = document.getElementById('dark-mode-toggle');
const navbar = document.getElementById('navbar');

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('dark-mode');
});