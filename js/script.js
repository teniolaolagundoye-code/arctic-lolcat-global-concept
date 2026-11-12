document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Footer Year
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Responsive Mobile Navigation Toggle
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    }

    // 3. Contact Form JavaScript Validation
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const fullName = document.getElementById("fullName").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const subjectError = document.getElementById("subjectError");
            const messageError = document.getElementById("messageError");
            const feedback = document.getElementById("formFeedback");

            // Reset errors
            nameError.textContent = "";
            emailError.textContent = "";
            subjectError.textContent = "";
            messageError.textContent = "";
            feedback.className = "form-feedback";
            feedback.textContent = "";

            let isValid = true;

            if (fullName.length < 3) {
                nameError.textContent = "Please enter your full name (at least 3 characters).";
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                emailError.textContent = "Please enter a valid email address.";
                isValid = false;
            }

            if (subject.length < 3) {
                subjectError.textContent = "Please enter a clear subject.";
                isValid = false;
            }

            if (message.length < 10) {
                messageError.textContent = "Please enter a message of at least 10 characters.";
                isValid = false;
            }

            if (isValid) {
                feedback.classList.add("success");
                feedback.textContent = `Thank you, ${fullName}! Your inquiry regarding "${subject}" has been successfully validated. (Demo Form: No backend server is connected to dispatch emails.)`;
                contactForm.reset();
            } else {
                feedback.classList.add("error");
                feedback.textContent = "Please fix the highlighted errors above before submitting.";
            }
        });
    }
});