const animElements = document.querySelectorAll('.contenedoressalas1, .contenedoressalas2');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    rootMargin: '0px', 
    threshold: 0.25 
});


animElements.forEach(element => {
    observer.observe(element);
});
