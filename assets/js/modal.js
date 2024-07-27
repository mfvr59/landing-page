const openButtons = document.querySelectorAll("[data-open-modal]");

openButtons.forEach(button => {
  const id = button.getAttribute("data-id");
  const modal = document.querySelector(`[data-modal][data-id="${id}"]`);
  const closeButton = document.querySelector(`[data-close-modal][data-id="${id}"]`);

  button.addEventListener('click', () => {
    modal.showModal();
  });


  closeButton.addEventListener('click', () => {
    modal.close();
  });
});