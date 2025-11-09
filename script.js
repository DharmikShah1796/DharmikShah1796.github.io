// Wait for the DOM to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function() {

    // === 1. TYPING EFFECT ===
    
    // Array of words to be typed
    const words = [
        "Computer Engineering Student",
        "IT Specialist",
        "Cloud & Systems Admin",
        "Problem Solver"
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedTextSpan = document.querySelector(".typed-text");

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Remove character
            typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            // When word is fully deleted
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        } else {
            // Add character
            typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            // When word is fully typed
            if (charIndex === currentWord.length) {
                isDeleting = true;
                // Pause at end of word
                setTimeout(type, 1500); 
                return;
            }
        }
        
        // Speed of typing
        const typeSpeed = isDeleting ? 50 : 150;
        setTimeout(type, typeSpeed);
    }

    // Start the typing effect
    if (typedTextSpan) {
        type();
    }


    // === 2. FADE-IN ON SCROLL EFFECT ===

    // Get all elements to be "hidden"
    const hiddenElements = document.querySelectorAll(".scroll-hidden");

    // Set up the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // When the element is in view, add the "visible" class
                entry.target.classList.add("scroll-visible");
            } 
            // Optional: To make it fade in every time
            // else {
            //     entry.target.classList.remove("scroll-visible");
            // }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the item is visible
    });

    // Tell the observer to watch each of our hidden elements
    hiddenElements.forEach((el) => observer.observe(el));

});
