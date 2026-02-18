// Initialize AOS
AOS.init();

// Typing Animation
const typingElement = document.querySelector(".typing");
const words = [
    "Master Da",
    "Bur chetta ✨",
    "Tel chatai"
];

let wordIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < words[wordIndex].length) {
        typingElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent =
            words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 40);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 200);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);
});

// Particles Configuration
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        move: { speed: 2 },
        line_linked: { enable: true },
        color: { value: "#00f7ff" }
    }
});