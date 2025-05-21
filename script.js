if ('IntersectionObserver' in window) {
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && window.matchMedia("(max-width: 600px)").matches) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
} else {
    console.warn("intersection observer not supported");
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = 1;
        card.style.transform = translateY(0);
    });
}