(() => {

    const menuBtn = document.querySelector('[data-menu-button]');
    const mobileMenu = document.querySelector('[data-menu]');


    menuBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;
        menuBtn.classList.toggle('is-open');
        menuBtn.setAttribute("aria-expanded", !expanded);

        mobileMenu.classList.toggle('is-open');
    }
})();

