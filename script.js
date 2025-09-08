const theme_span = document.getElementById('theme-toggle');
const clear_storage = document.getElementById('clear-localstorage');
const root = document.documentElement;

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.toggle("dark-theme");
    theme_span.title = "Switch to Light Mode";
    theme_span.textContent = "light_mode";
}

theme_span.addEventListener('click', () => {
    if (document.body.className !== "dark-theme") {
        document.body.classList.toggle("dark-theme");
        setTimeout(() => {
            theme_span.title = "Switch to Light Mode";
            theme_span.textContent = "light_mode";
        }, 498);
    }
    else {
        document.body.removeAttribute("class");
        setTimeout(() => {
            theme_span.textContent = "dark_mode";
            theme_span.title = "Switch to Dark Mode";
        }, 498);
        localStorage.setItem('theme', 'light-theme');
    }
})