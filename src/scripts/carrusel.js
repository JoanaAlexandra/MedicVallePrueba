let imagenes = [
    {
        "url": "/medic_entrada2.jpeg",
        "nombre": "MÁS DE 25 AÑOS",
        "descripcion": "COMPROMETIDOS CON EL PACIENTE"
    },
    {
        "url": "/reinauguracion.jpg",
        "nombre": "GRAN REINAUGURACIÓN",
        "descripcion": "SÁBADO 26 DE OCTUBRE"
    },
    {
        "url": "/sorteo.png",
        "nombre": "SE PARTE",
        "descripcion": "DE UN GRAN SORTEO"
    },
    {
        "url": "/habiquir.png",
        "nombre": "HABITACIÓNES Y QUIRÓFANOS",
        "descripcion": "RENOVADOS"
    },
    {
        "url": "/ConsultasGratis.png",
        "nombre": "CONSULTAS GRATUITAS",
        "descripcion": "DE 8:00 A.M. A 12:00 P.M."
    },
    {
        "url": "/descuentos.png",
        "nombre": "DESCUENTOS",
        "descripcion": "SIGNOS VITALES GRATIS"
    },
];

// Seleccionamos los elementos del DOM después de asegurarnos de que la página se haya cargado completamente
document.addEventListener("DOMContentLoaded", () => {
    let atras = document.getElementById('atras');
    let adelante = document.getElementById('adelante');
    let imagen = document.getElementById('img');
    let puntos = document.getElementById('puntos');
    let texto = document.getElementById('texto');
    let actual = 0;

    // Función para actualizar la imagen y texto del carrusel
    function actualizarCarrusel() {
        imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="imagen ${actual + 1}" loading="lazy">`;
        texto.innerHTML = `
            <h3>${imagenes[actual].nombre}</h3>
            <p>${imagenes[actual].descripcion}</p>
        `;
        actualizarPuntos();
    }

    // Función para actualizar los puntos indicadores del carrusel
    function actualizarPuntos() {
        puntos.innerHTML = "";
        for (let i = 0; i < imagenes.length; i++) {
            puntos.innerHTML += `<p class="${i === actual ? 'bold' : ''}">.</p>`;
        }
    }

    // Evento para botón "atras"
    atras.addEventListener('click', () => {
        actual = (actual - 1 + imagenes.length) % imagenes.length;
        actualizarCarrusel();
    });

    // Evento para botón "adelante"
    adelante.addEventListener('click', () => {
        actual = (actual + 1) % imagenes.length;
        actualizarCarrusel();
    });

    // Inicializar el carrusel
    actualizarCarrusel();
});