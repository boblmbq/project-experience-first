(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-mob]'),
    closeModalBtn: document.querySelector('[data-modal-close-mob]'),
    closeModalLink: document.querySelector('.close-link'),
    closeModalLi: document.querySelector('.close-link-sale'),
    closeModalLin: document.querySelector('.close-link-cat'),
    modal: document.querySelector('[data-modal-mob]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalLi.addEventListener('click', toggleModal);
  refs.closeModalLin.addEventListener('click', toggleModal);
  refs.closeModalLink.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
