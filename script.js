let scroll = document.querySelectorAll(".scroll");

function scrollCarousel() {
    scroll.forEach(carousel => {
        carousel.classList.add("carousel-visible")
    });

}
scrollCarousel()