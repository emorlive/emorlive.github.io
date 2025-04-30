// Search functionality
document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    document.querySelectorAll('.link-card').forEach(card => {
        const title = card.querySelector('.link-title').textContent.toLowerCase();
        const url = card.querySelector('.link-url').textContent.toLowerCase();
        card.style.display = (title.includes(query) || url.includes(query)) ? '' : 'none'; // '' sets the display to default
    });
});

// Collapse/expand category
function toggleCategory(header) {
    const category = header.parentElement;
    category.classList.toggle('open');
    const arrow = header.querySelector('span');
    arrow.textContent = category.classList.contains('open') ? '▼' : '►';
}

// Check and apply saved dark mode state
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
}

// Dark mode toggle
function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark'); // toggle adds/removes the class
    localStorage.setItem("darkMode", isDark);
}