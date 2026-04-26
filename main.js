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

function showModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

var contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(contactForm);
        var action = contactForm.action;

        fetch(action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json"
            }
        })
        .then(function(response) {
            if (response.ok) {
                contactForm.reset();
                showModal("form-success-modal");
            } else {
                return response.json().then(function(data) {
                    throw new Error(data.error || "Submission failed");
                });
            }
        })
        .catch(function() {
            alert("Unable to send message. Please try again later.");
        });
    });
}

var successOkButton = document.getElementById("success-ok-button");
if (successOkButton) {
    successOkButton.addEventListener("click", function() {
        var modal = document.getElementById("form-success-modal");
        if (modal) {
            modal.style.display = "none";
        }
    });
}