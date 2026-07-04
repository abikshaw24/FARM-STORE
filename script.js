const form = document.getElementById("contactForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let isValid = true;

    clearErrors();

    // Name Validation
    if (name.value.trim() === "") {
        showError(name, "Name is required");
        isValid = false;
    }
    else if (!/^[A-Za-z ]+$/.test(name.value.trim())) {
        showError(name, "Only alphabets are allowed");
        isValid = false;
    }

    // Email Validation
    if (email.value.trim() === "") {
        showError(email, "Email is required");
        isValid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        showError(email, "Enter a valid email");
        isValid = false;
    }

    // Phone Validation
    if (phone.value.trim() === "") {
        showError(phone, "Phone number is required");
        isValid = false;
    }
    else if (!/^[0-9]{10}$/.test(phone.value.trim())) {
        showError(phone, "Phone number must be 10 digits");
        isValid = false;
    }

    // Address Validation
    if (address.value.trim() === "") {
        showError(address, "Address is required");
        isValid = false;
    }

    // Message Validation
    if (message.value.trim() === "") {
        showError(message, "Message is required");
        isValid = false;
    }

    // If everything is valid
    if (isValid) {

        alert("✅ Form Submitted Successfully!");

        form.reset();

        document.querySelectorAll("input, textarea").forEach(field => {
            field.classList.remove("success");
        });
    }

});

function showError(input, message) {

    input.classList.add("failure");

    input.nextElementSibling.innerText = message;
}

function clearErrors() {

    document.querySelectorAll(".error").forEach(error => {
        error.innerText = "";
    });

    document.querySelectorAll("input, textarea").forEach(field => {
        field.classList.remove("failure");
        field.classList.add("success");
    });

}

// tab
const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");

tabs.forEach((tab,index)=>{

    tab.addEventListener("click",()=>{

        document.querySelector(".active").classList.remove("active");
        tab.classList.add("active");

        // Move indicator
        indicator.style.left = `${index * 125}px`;
    });

});