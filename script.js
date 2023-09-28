
const noticias = document.querySelectorAll(".imagen-item");
let noticiaActual = 0;

const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

btnAnterior.addEventListener("click", () => {
    //ocultamos la noticia actual
    noticias[noticiaActual].style.display = "none";
    //calculamos la nueva posicion
    noticiaActual = (noticiaActual - 1 + noticias.length) % noticias.length;
    //mostramos la nueva imagen
    noticias[noticiaActual].style.display = "block";
});

btnSiguiente.addEventListener("click", () => {
    noticias[noticiaActual].style.display = "none";
    noticiaActual = (noticiaActual + 1) % noticias.length;
    noticias[noticiaActual].style.display = "block";
});