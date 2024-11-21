window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading");
    const mainContent = document.getElementById("main-content");
    setTimeout(function () {
        loadingScreen.style.opacity = "0"; 
        loadingScreen.style.transition = "opacity 2s ease"; 
        setTimeout(function () {
            loadingScreen.style.display = "none";
            mainContent.style.display = "block"; 
            mainContent.classList.add("fade-in"); 
        }, 2000); 
    }, 5000); 
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transition = "opacity 2s ease"; 
        slide.style.opacity = i === index ? '1' : '0';
        slide.style.display = i === index ? 'flex' : 'none';
    });
}


showSlide(currentSlide);

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 5000); 

document.addEventListener("DOMContentLoaded", function () {
    const img = document.getElementById("blog-img");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    img.style.filter = "grayscale(0%)";
                } else {
                    img.style.filter = "grayscale(100%)";
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(img);
});

window.onscroll = function() {
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.visibility = "visible";
        scrollToTopButton.style.opacity = "1";
    } else {
        scrollToTopButton.style.visibility = "hidden";
        scrollToTopButton.style.opacity = "0";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener('scroll', function () {
    const main = document.querySelector('main');
    main.style.opacity = '1'; 
    main.style.transform = 'translateY(0)';
});

const menuIcon = document.getElementById('menu-icon');
const menuClose = document.getElementById('menu-close');
const menuOverlay = document.getElementById('menu-overlay');

menuIcon.addEventListener('click', () => {
    menuOverlay.classList.add('active'); 
    menuIcon.style.display = 'none'; 
    menuClose.style.display = 'block'; 
});

menuClose.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    menuIcon.style.display = 'flex';
    menuClose.style.display = 'none'; 
});

function isMobile() {
    return window.innerWidth <= 768; // Mobile breakpoint
}

function setupMobileSlideshow() {
    const slides = document.querySelectorAll(".slideshow-slide");
    let slideIndex = 0;

    function showSlides() {
        slides.forEach((slide) => slide.classList.remove("active")); // Hide all slides
        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1; // Loop back to the first slide
        slides[slideIndex - 1].classList.add("active"); // Show the current slide
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    if (isMobile()) {
        slides[0].classList.add("active"); // Initialize the first slide
        showSlides();
    }
}

window.addEventListener("load", setupMobileSlideshow);
window.addEventListener("resize", () => {
    if (!isMobile()) location.reload(); // Reload page if switching back to desktop
});
