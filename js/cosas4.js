document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los elementos con la clase .desvanecer
    const elementosDesvanecer = document.querySelectorAll('.desvanecer');

    // Agrega la clase active a cada elemento para activar el efecto
    elementosDesvanecer.forEach(elemento => {
        setTimeout(() => {
            elemento.classList.add('active');
        }, 200); // Puedes ajustar el tiempo de retraso si lo deseas
    });
});