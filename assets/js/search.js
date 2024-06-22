document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.getElementById('loadingScreen');
  loadingScreen.style.display = 'none';

  const searchInput = document.getElementById('search-input');
  const imageGrid = document.getElementById('imageGrid').querySelectorAll('a');

  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    imageGrid.forEach(function(item) {
      const altText = item.getAttribute('data-alt').toLowerCase();
      const nameText = item.getAttribute('data-name').toLowerCase();

      if (altText.includes(searchTerm) || nameText.includes(searchTerm)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
