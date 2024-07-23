$(document).ready(function() {
    // Function to open modal
    $('.button.small').click(function() {
        var modalId = $(this).data('modal');
        $('#' + modalId).css('display', 'block');
    });

    // Function to close modal
    $('.close').click(function() {
        $(this).closest('.modal').css('display', 'none');
    });

    // Click outside the modal content to close it
    $(window).click(function(event) {
        if ($(event.target).hasClass('modal')) {
            $('.modal').css('display', 'none');
        }
    });
});
