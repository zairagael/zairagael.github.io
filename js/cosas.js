document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.dinos .slide');
    const totalSlides = slides.length;
    let autoSlideInterval;

    function showSlides(index) {
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        }

        const slider = document.querySelector('.dinos');
        slider.style.transform = `translateX(${-slideIndex * 100}%)`;
    }

    document.querySelector('.prev').addEventListener('click', () => {
        slideIndex--;
        showSlides(slideIndex);
        restartAutoSlide();
    });

    document.querySelector('.next').addEventListener('click', () => {
        slideIndex++;
        showSlides(slideIndex);
        restartAutoSlide();
    });

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

    showSlides(slideIndex);
    startAutoSlide();

    const prensaElements = document.querySelectorAll('.prensa'); 

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); 
                observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.1 
    });

    prensaElements.forEach(prensa => {
        observer.observe(prensa);
    });

    console.log('Prensa observada:', prensaElements);
});
