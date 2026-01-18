(() => {
    "use strict";

    /* --- 1. LÓGICA DEL MENÚ HAMBURGUESA --- */
    const hamburger = document.querySelector('.hamburger');
    const menuPpal = document.querySelector('.menuppal');
    const body = document.body;

    let isMenuOpen = false; 

    const toggleMenuHandler = (event) => {
        if (event) event.preventDefault();
        isMenuOpen = !isMenuOpen;

        hamburger.classList.toggle('is-active');
        menuPpal.classList.toggle('is_active');
        body.classList.toggle('is-active'); 
    };

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenuHandler, false);
    }


    /* --- 2. LÓGICA DEL CARRUSEL  --- */
    
    
    const initCarousel = () => {
        const track = document.getElementById('carouselTrack');
        const items = document.querySelectorAll('.carousel-item');
        const btnNext = document.getElementById('btnNext');
        const btnPrev = document.getElementById('btnPrev');

        if (!track || items.length === 0) return;

        let counter = 0;
        const totalItems = items.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${counter * 100}%)`;
        };

        if (btnNext) {
            btnNext.addEventListener('click', () => {
                counter = (counter + 1) % totalItems;
                updateCarousel();
            });
        }

        if (btnPrev) {
            btnPrev.addEventListener('click', () => {
                counter = (counter - 1 + totalItems) % totalItems;
                updateCarousel();
            });
        }

        // Auto-play seguro
        let autoPlay = setInterval(() => {
            if(btnNext) btnNext.click();
        }, 5000);

        const stopAutoPlay = () => clearInterval(autoPlay);
        
        if(btnNext) btnNext.addEventListener('mouseenter', stopAutoPlay);
        if(btnPrev) btnPrev.addEventListener('mouseenter', stopAutoPlay);
    };

    // Ejecutamos la inicialización
    document.addEventListener('DOMContentLoaded', initCarousel);

})();