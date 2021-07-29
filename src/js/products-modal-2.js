(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-products-2]'),
      closeModalBtn: document.querySelector('[data-modal-close-products-2]'),
      modal: document.querySelector('[data-modal-products-2]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    
      
    function toggleModal() {
      refs.modal.classList.toggle('products-modal__hidden');
    }
  })();

  