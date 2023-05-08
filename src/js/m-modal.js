(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-mob]'),
    closeModalBtn: document.querySelector('[data-modal-close-mob]'),
    modal: document.querySelector('[data-modal-mob]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
