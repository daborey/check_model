// logo_style.js

// Function to apply style and spin animation to all images with a given class
function applyLogoStyleClass(className, speed = 2) {
    const logos = document.querySelectorAll(`.${className}`);
    logos.forEach(logo => {
        // Apply static styles automatically
        logo.style.height = '1em';
        logo.style.verticalAlign = 'middle';
        logo.style.borderRadius = '50%';
        logo.style.display = 'inline-block';

        // Continuous spin using JS
        let angle = 0;
        setInterval(() => {
            angle += speed;
            logo.style.transform = `rotate(${angle}deg)`;
        }, 16); // ~60fps
    });
}

// Automatically apply to all elements with class 'logoFX'
applyLogoStyleClass('logoFX');