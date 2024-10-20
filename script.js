const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');
const imageContainer = document.querySelector('.image-container ul');

let scrollAmount = 0;

scrollLeftButton.addEventListener('click', () => {
    scrollAmount -= 3; 
    if (scrollAmount < 0) scrollAmount = 0; 
    imageContainer.style.transform = `translateX(-${scrollAmount * (100 / 3)}%)`;
});

scrollRightButton.addEventListener('click', () => {
    scrollAmount += 3; 
    const totalImages = imageContainer.children.length;
    if (scrollAmount > totalImages - 3) scrollAmount = totalImages - 3; 
    imageContainer.style.transform = `translateX(-${scrollAmount * (100 / 3)}%)`;
});

let currentSlideIndex = 0;
const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
let autoSlideInterval;

const backgroundImages = [
    'url("pink tee bck.png")',
    'url("black hoodie bck.png")',
    'url("yellow tee bck.png")',
    
];

const merchandiseSection = document.querySelector('.merchandise');

function moveSlide(direction) {
    currentSlideIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;
    updateSlidePosition();
}

function updateSlidePosition() {
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    updateBackgroundImage(); 
}

function updateBackgroundImage() {
    merchandiseSection.style.backgroundImage = backgroundImages[currentSlideIndex];
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        moveSlide(1); 
    }, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval); 
}

window.addEventListener('load', startAutoSlide);

track.addEventListener('mouseenter', stopAutoSlide);
track.addEventListener('mouseleave', startAutoSlide);
