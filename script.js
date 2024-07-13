document.getElementById('searchInput').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const contentItems = document.getElementsByClassName('content-item');

    Array.from(contentItems).forEach(function(item) {
        const keywords = item.getAttribute('data-keywords').toLowerCase();
        if (keywords.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

