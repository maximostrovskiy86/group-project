(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-mobile]'),
        closeModalBtn: document.querySelector('[data-close-mobile]'),
        modal: document.querySelector('[data-modal-mobile-menu]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();