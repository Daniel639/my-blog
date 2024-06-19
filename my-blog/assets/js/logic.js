const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.querySelector('body');

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  darkModeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});
/*
document.querySelector('.theme-toggle button').addEventListener('click', function() {
  document.getElementById('backLink').classList.toggle('dark-mode');
});*/
