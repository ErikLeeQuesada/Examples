const images = [
    'Office1.jpg', // First image
    'Office2.jpg', // Second image
    'Office3.jpg',
    'Office4.jpg',
    'Office5.jpg',
    'Office6.jpg', // Third image
];

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('.hero');

    setInterval(() => {
        setTimeout(() => {
            // Change background image after fade-out completes
            currentImageIndex = (currentImageIndex + 1) % images.length;
            hero.style.backgroundImage = `url('${images[currentImageIndex]}')`;
            hero.classList.remove('hidden'); // Trigger fade-in
        }, 3000); // Delay for fade-out duration
    }, 7000); // Image Transition every 7 seconds 
});

