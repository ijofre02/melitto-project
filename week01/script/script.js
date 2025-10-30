// Fecha del casamiento
const weddingDate = new Date("December 7, 2025 17:30:00").getTime();

const timer = document.getElementById("timer");

// Actualiza cada segundo
const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Calcular días, horas, minutos, segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el resultado
    timer.innerHTML = `${days} días ${hours}h ${minutes}m ${seconds}s`;

    // Si la cuenta llega a 0
    if (distance < 0) {
        clearInterval(countdown);
        timer.innerHTML = "¡Hoy es el gran día!";
    }
}, 1000);
