const toggleMenu = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})