(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-menu-buy]'),
        closeModalBtn: document.querySelector('[data-close-hero]'),
        modal: document.querySelector('[data-modal-hero]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();