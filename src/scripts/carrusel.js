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
        "descripcion": "EN VARIAS ÁREAS"
    },
];

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
actualizarCarrusel();

atras.addEventListener('click', function(){
    actual -=1;

    if (actual == -1){
        actual = imagenes.length - 1
    }
    actualizarCarrusel();
    });

adelante.addEventListener('click', function(){
    actual +=1;
    
    if (actual == imagenes.length){
        actual = 0;
    }
    actualizarCarrusel();
    });

function actualizarCarrusel(){
    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`;
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `;
    posicionCarrusel();
} 

function posicionCarrusel() {
    puntos.innerHTML = "";
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>';
        }
        else{
            puntos.innerHTML += '<p>.<p>';
        }
    } 
}