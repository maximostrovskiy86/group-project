(() => {
    const refs = {
      openModalBtn: document.querySelector('[products-data-modal-open]'),
      closeModalBtn: document.querySelector('[products-data-modal-close]'),
      modal: document.querySelector('[products-data-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);


    function toggleModal() {
      refs.modal.classList.toggle('products-modal__hidden');
    }
  })();

