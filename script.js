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









// ==============================
// IMAGE SLIDER
// ==============================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let slider;

// Show Slide
function showSlide(index){

    // Remove Active Class
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    // Add Active Class
    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}

// Next Slide
function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

// Auto Slide
function startSlider(){

    slider = setInterval(nextSlide,3000);

}

startSlider();


// Click Dots
dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        clearInterval(slider);

        showSlide(index);

        startSlider();

    });

});


// ==============================
// FAQ ACCORDION
// ==============================

const items = document.querySelectorAll(".item");

items.forEach(item=>{

    const question = item.querySelector(".question");

    question.addEventListener("click",()=>{

        items.forEach(i=>{

            if(i!==item){

                i.classList.remove("active");

                i.querySelector("i").classList.remove("fa-chevron-down");
                i.querySelector("i").classList.add("fa-chevron-right");

            }

        });

        item.classList.toggle("active");

        const icon = item.querySelector("i");

        if(item.classList.contains("active")){

            icon.classList.remove("fa-chevron-right");
            icon.classList.add("fa-chevron-down");

        }else{

            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-right");

        }

    });

});






let index = 0;

function moveSlide(direction){

    const track = document.querySelector(".blog-track");

    const cards = document.querySelectorAll(".blog-card");

    const cardWidth = cards[0].offsetWidth + 20;

    const visibleCards = 4;

    const maxIndex = cards.length - visibleCards;

    index += direction;

    if(index < 0){
        index = 0;
    }

    if(index > maxIndex){
        index = maxIndex;
    }

    track.style.transform = `translateX(-${index * cardWidth}px)`;
}