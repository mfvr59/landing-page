// Function to open the modal
function openModal(event) {
  var modalId = event.target.getAttribute('data-id');
  var modal = document.querySelector(`dialog[data-modal][data-id="${modalId}"]`);
  if (modal) {
      modal.showModal();
  }
}

// Function to close the modal
function closeModal(event) {
  var modalId = event.target.getAttribute('data-id');
  var modal = document.querySelector(`dialog[data-modal][data-id="${modalId}"]`);
  if (modal) {
      modal.close();
  }
}

// Add event listeners to the buttons
document.querySelectorAll('[data-open-modal]').forEach(button => {
  button.addEventListener('click', openModal);
});

document.querySelectorAll('[data-close-modal]').forEach(button => {
  button.addEventListener('click', closeModal);
});
