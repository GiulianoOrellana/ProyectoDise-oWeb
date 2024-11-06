const carouselImages = document.querySelector('.carousel-images');
const items = document.querySelectorAll('.carousel-item');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let index = 0;

function showNext() {
    index = (index + 1) % items.length;
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
}

function showPrev() {
    index = (index - 1 + items.length) % items.length;
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener('click', showNext);
prev.addEventListener('click', showPrev);
