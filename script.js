function openModal() {
    document.getElementById('modalBackground').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modalBackground').style.display = 'none';
}



document.addEventListener('DOMContentLoaded', () => {
    const modalBackground = document.getElementById('modalBackground');
    modalBackground.addEventListener('click', (event) => {
        if (event.target === modalBackground) {
            closeModal();
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


