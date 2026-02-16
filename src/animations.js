// Fade-in animations
const observerOptions = {
    root: null, // Watches entire viewport
    threshold: 0.1 // Trigger: element 10% visible
};
const observer = new IntersectionObserver((entries,observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserver(entry.target); // Stops watching after element appears
        }
    });
}, observerOptions);
const fadeItems = document.querySelectorAll('.fade-in');
if (fadeItems.length > 0) {
    fadeItems.forEach(item => {
        observer.observer(item);
    });
}