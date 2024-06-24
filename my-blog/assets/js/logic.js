/*document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      darkModeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });
  }

  const themeToggleButton = document.querySelector('.theme-toggle button');
  const backLink = document.getElementById('backLink');
  
  if (themeToggleButton && backLink) {
    themeToggleButton.addEventListener('click', function() {
      backLink.classList.toggle('dark-mode');
    });
  }
});*/

document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Check if dark mode preference exists in localStorage
  const currentTheme = localStorage.getItem('theme') || 'light-mode';
  body.classList.add(currentTheme);
  updateButtonText();

  if (darkModeToggle) {
      darkModeToggle.addEventListener('click', () => {
          body.classList.toggle('light-mode');
          body.classList.toggle('dark-mode');

          // Update theme in localStorage
          const newTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
          localStorage.setItem('theme', newTheme);

          updateButtonText();
      });
  }

  const backButton = document.getElementById('backBtn'); // Use correct ID
  if (backButton) {
      backButton.addEventListener('click', () => {
          window.location.href = 'index.html';
      });
  }

  function updateButtonText() {
      darkModeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  }
});
