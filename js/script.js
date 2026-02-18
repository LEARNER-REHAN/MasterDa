// Initialize animation
AOS.init();

// Select elements
const button = document.getElementById("connectBtn");
const message = document.getElementById("message");

// Button Click Effect
button.addEventListener("click", () => {

    message.innerHTML = "PH No . -> +91 93312 14414";
    
    // Smooth fade effect
    message.style.opacity = "0";
    setTimeout(() => {
        message.style.opacity = "1";
        message.style.transition = "opacity 0.5s ease";
    }, 100);

});