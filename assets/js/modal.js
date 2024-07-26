(function($) {
    $(document).ready(function() {
        const learnMoreButtons = document.querySelectorAll('.button.small');
        const modals = document.querySelectorAll('.modal');
        const closeButtons = document.querySelectorAll('.close');

        learnMoreButtons.forEach(button => {
            button.addEventListener('click', function() {
                const modalId = this.getAttribute('data-modal');
                console.log('Opening modal:', modalId);  // Debugging line
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.style.display = 'block';
                } else {
                    console.error('Modal not found:', modalId);
                }
            });
        });

        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                modals.forEach(modal => {
                    modal.style.display = 'none';
                });
            });
        });

        window.addEventListener('click', function(event) {
            if (event.target.classList.contains('modal')) {
                modals.forEach(modal => {
                    modal.style.display = 'none';
                });
            }
        });
    });
})(jQuery);
