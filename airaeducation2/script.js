
document.addEventListener('DOMContentLoaded', () => {
    const togglerMenuEl = document.querySelector('.toggler-menu');
    const linkEl = document.querySelector('.link');
    
    togglerMenuEl.addEventListener('click', () => {
        linkEl.classList.toggle('dropdown_menu');
    });
    
});