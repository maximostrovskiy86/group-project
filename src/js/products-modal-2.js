(() => {
    const refs = {
      openModalBtn: document.querySelector('[products-data-modal-open-2]'),
      closeModalBtn: document.querySelector('[products-data-modal-close-2]'),
      modal: document.querySelector('[products-data-modal-2]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    
      
    function toggleModal() {
      refs.modal.classList.toggle('products-modal__hidden');
    }
  })();

  