const modalBackground = document.getElementById('modalBackground');
const pc = document.getElementById('pc');
pc.addEventListener('click', () => {
    modalBackground.style.display = 'flex';
});

document.addEventListener('DOMContentLoaded', () => {
    modalBackground.addEventListener('click', (event) => {
        if (event.target === modalBackground) {
            modalBackground.style.display = 'none';
        }
    });

    const toggleButton = document.getElementById('toggleButton');
    const closeSearch = document.getElementById('closeSearch');
    const menus = document.getElementById('menus');
    const search = document.getElementById('search');
    menus.style.display = 'flex';
    search.style.display = 'none';
    toggleButton.addEventListener('click', () => {
        menus.style.display = 'none';
        search.style.display = 'block';
    });
    closeSearch.addEventListener('click', () => {
        menus.style.display = 'flex';
        search.style.display = 'none';
    });

});


