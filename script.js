let porcentaje = 0; // Para el porcentaje de llenado del corazón
let interval;
let corazonLleno = false;

function abrirCarta() {
    // Reproducir música
    document.getElementById("music").play();

    // Mostrar lluvia de corazones
    crearLluviaCorazones();

    // Iniciar el llenado del corazón
    interval = setInterval(() => {
        if (porcentaje < 100) {
            porcentaje += 1;
            document.getElementById("porcentaje").textContent = `${porcentaje}%`;
        } else {
            clearInterval(interval);
            explotarCorazon();
        }
    }, 100);

}

// Función para crear lluvia de corazones
function crearLluviaCorazones() {
    const lluvia = document.getElementById("lluvia-corazones");
    setInterval(() => {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        lluvia.appendChild(heart);

        // Remover corazones una vez se caen
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 100);
}

// Función para explotar el corazón
function explotarCorazon() {
    // Mostrar el mensaje
    document.getElementById("mensaje").textContent = "¡¡¡TE QUIERO MUCHO!!!";
    
    // Mostrar los fuegos artificiales
    document.getElementById("fuegos").style.display = "block";

    // Crear la animación de explosión (opcional, puede ser personalizada)
    setTimeout(() => {
        document.getElementById("fuegos").style.display = "none";
    }, 5000);
}
