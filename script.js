
// STEP 1: Get HTML Elements

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const submitButton = document.getElementById("submitButton");
const successMessage = document.getElementById("successMessage");


// STEP 2: Store Validation Results

let nameValid = false;
let emailValid = false;
let passwordValid = false;


// STEP 3: Validate Name

function validateName() {

    if (name.value.trim() === "") {

        nameError.textContent = "Name is required";

        nameValid = false;

    } else {

        nameError.textContent = "";

        nameValid = true;

    }

    checkForm();

}


// STEP 4: Validate Email

function validateEmail() {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        emailError.textContent = "Email is required";

        emailValid = false;

    } else if (!emailPattern.test(email.value.trim())) {

        emailError.textContent = "Enter a valid email address";

        emailValid = false;

    } else {

        emailError.textContent = "";

        emailValid = true;

    }

    checkForm();

}


// STEP 5: Validate Password

function validatePassword() {

    if (password.value === "") {

        passwordError.textContent = "Password is required";

        passwordValid = false;

    } else if (password.value.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters";

        passwordValid = false;

    } else {

        passwordError.textContent = "";

        passwordValid = true;

    }

    checkForm();

}


// STEP 6: Enable or Disable Register Button

function checkForm() {

    if (nameValid && emailValid && passwordValid) {

        submitButton.disabled = false;

    } else {

        submitButton.disabled = true;

    }

}


// STEP 7: Real-Time Name Validation

name.addEventListener("input", function() {

    validateName();

    successMessage.textContent = "";

});


// STEP 8: Real-Time Email Validation

email.addEventListener("input", function() {

    validateEmail();

    successMessage.textContent = "";

});


// STEP 9: Real-Time Password Validation

password.addEventListener("input", function() {

    validatePassword();

    successMessage.textContent = "";

});


// STEP 10: Handle Form Submission

document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    // Check all fields again

    validateName();
    validateEmail();
    validatePassword();

    // Display success message

    if (nameValid && emailValid && passwordValid) {

        successMessage.textContent =
            "Registration successful!";

        // Clear all input fields

        name.value = "";
        email.value = "";
        password.value = "";

        // Reset validation results

        nameValid = false;
        emailValid = false;
        passwordValid = false;

        // Disable button again

        checkForm();

    }

});

