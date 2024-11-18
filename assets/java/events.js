const events = document.querySelectorAll('.event');

window.addEventListener('scroll', () => {
    events.forEach((event, index) => {
        const rect = event.getBoundingClientRect();
        if (rect.top < window.innerHeight - 200) {
            event.style.opacity = '1';
            event.style.zIndex = index + 1;
        } else {
            event.style.opacity = '0';
        }
    });
});
