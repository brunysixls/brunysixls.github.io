const searchInput = document.getElementById('search-input');
const boxthings = document.querySelectorAll('.boxthing');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    boxthings.forEach(boxthing => {
        const keywords = boxthing.dataset.keywords.toLowerCase();
        if (keywords.includes(query)) {
            boxthing.style.display = 'block';
        } else {
            boxthing.style.display = 'none';
        }
    });
});
