(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-products-3]'),
      closeModalBtn: document.querySelector('[data-modal-close-products-3]'),
      modal: document.querySelector('[data-modal-products-3]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    
      
    function toggleModal() {
      refs.modal.classList.toggle('products-modal__hidden');
    }
  })();

  