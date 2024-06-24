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

  const backButton = document.getElementById('backBtn'); 
  if (backButton) {
      backButton.addEventListener('click', () => {
          window.location.href = 'index.html';
      });
  }
  function updateButtonText() {
      darkModeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  }
});
