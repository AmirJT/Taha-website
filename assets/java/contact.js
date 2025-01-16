document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    const img = document.createElement('img');
    lightbox.appendChild(img);

    const closeBtn = document.createElement('a');
    closeBtn.textContent = '×';
    closeBtn.href = '#';
    closeBtn.classList.add('lightbox-close');
    lightbox.appendChild(closeBtn);

    const prevBtn = document.createElement('button');
    prevBtn.textContent = '❮';
    prevBtn.classList.add('lightbox-prev');
    lightbox.appendChild(prevBtn);

    const nextBtn = document.createElement('button');
    nextBtn.textContent = '❯';
    nextBtn.classList.add('lightbox-next');
    lightbox.appendChild(nextBtn);

    let currentIndex = 0;

    const showImage = (index) => {
        if (index < 0) {
            currentIndex = galleryItems.length - 1;
        } else if (index >= galleryItems.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        img.src = galleryItems[currentIndex].src;
    };

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            showImage(index);
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        lightbox.style.display = 'none';
    });

    nextBtn.addEventListener('click', () => {
        showImage(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        showImage(currentIndex - 1);
    });

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
