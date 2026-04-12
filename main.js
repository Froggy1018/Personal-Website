// Get the buttons that open the modals
var btns = document.querySelectorAll(".details-btn");

// Get all close spans
var spans = document.querySelectorAll(".close");

// Get all modals
var modals = document.querySelectorAll(".modal");

// When the user clicks the button, open the corresponding modal
btns.forEach(function(btn) {
    btn.onclick = function() {
        var modalId = btn.getAttribute('data-modal');
        var modal = document.getElementById(modalId);
        modal.style.display = "block";
    }
});

// When the user clicks on <span> (x), close the modal
spans.forEach(function(span) {
    span.onclick = function() {
        var modal = span.closest('.modal');
        modal.style.display = "none";
    }
});

// When the user clicks anywhere outside of the modal, close it
modals.forEach(function(modal) {
    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});