let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Garantir que o índice esteja dentro dos limites
    if (index < 0) {
        currentIndex = totalSlides - 1; // Vai para o último slide
    } else if (index >= totalSlides) {
        currentIndex = 0; // Vai para o primeiro slide
    } else {
        currentIndex = index;
    }

    // Atualizar a posição do carrossel
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;  // Desliza para a imagem correta
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Inicializa o carrossel com o primeiro slide
showSlide(currentIndex);
