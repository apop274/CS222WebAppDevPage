document.addEventListener("DOMContentLoaded", () => {
    // Function to validate form fields
    const validateForm = (formId) => {
        const form = document.getElementById(formId);
        const messageDiv = document.getElementById("message");

        form.addEventListener("submit", (event) => {
            const inputs = form.querySelectorAll("input[required]");
            let valid = true;

            inputs.forEach((input) => {
                if (input.value.trim() === "") {
                    valid = false;
                    input.style.borderColor = "red";
                } else {
                    input.style.borderColor = "#ddd";
                }
            });

            if (!valid) {
                event.preventDefault();
                messageDiv.textContent = "Please fill out all fields!";
                messageDiv.classList.remove("hidden");
                messageDiv.classList.add("error");
            }
        });
    };

    // Real-time input highlighting
    const setupInputHighlighting = () => {
        const inputs = document.querySelectorAll("input");
        inputs.forEach((input) => {
            input.addEventListener("focus", () => (input.style.borderColor = "#007bff"));
            input.addEventListener("blur", () => (input.style.borderColor = "#ddd"));
        });
    };

    // Initialize the functionality
    if (document.getElementById("signup-form")) {
        validateForm("signup-form");
    }

    if (document.getElementById("login-form")) {
        validateForm("login-form");
    }

    setupInputHighlighting();
});
