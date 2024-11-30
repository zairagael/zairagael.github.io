let slideIndex = 0;
let slides = document.querySelectorAll('.principo .slide');
let totalSlides = slides.length;
let autoSlideInterval;

function createDots() {
    const dotsContainer = document.querySelector('.principo .dots-container');
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === slideIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
            slideIndex = index;
            showSlides(slideIndex);
            restartAutoSlide();
        });
        dotsContainer.appendChild(dot);
    });
}

function updateDots() {
    const dots = document.querySelectorAll('.principo .dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });
}

function showSlides(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    }

    const slider = document.querySelector('.principo .slide-container');
    slider.style.transform = `translateX(${-slideIndex * 100}%)`;
    updateDots();
}

// Iniciar la presentación automática
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 3000);
}

function restartAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

createDots();
showSlides(slideIndex);
startAutoSlide();

document.querySelector('.principo').addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

document.querySelector('.principo').addEventListener('mouseout', () => {
    startAutoSlide();
});

document.addEventListener("DOMContentLoaded", function() {
    const contenedor3 = document.querySelector('.contenedor3');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.5 
    });

    observer.observe(contenedor3); 
});
