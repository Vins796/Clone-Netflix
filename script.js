let scroll = document.querySelectorAll(".scroll");

document.addEventListener('scroll', function () {
    scroll.forEach(carousel => {
        carousel.classList.add('carousel-visible');        
    });
})