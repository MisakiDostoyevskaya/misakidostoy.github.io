
const carruseles = document.querySelectorAll(".carousel");

carruseles.forEach((carrusel) => {
    const slides = carrusel.querySelectorAll(".carousel-slide");
    const anterior = carrusel.querySelector(".carousel-prev");
    const siguiente = carrusel.querySelector(".carousel-next");
    const contador = carrusel.querySelector(".carousel-counter");

    let indiceActual = 0;

    function mostrarImagen(indice) {
        slides[indiceActual].classList.remove("active");

        indiceActual = (indice + slides.length) % slides.length;

        slides[indiceActual].classList.add("active");

        contador.textContent =
            `${indiceActual + 1} / ${slides.length}`;
    }

    anterior.addEventListener("click", () => {
        mostrarImagen(indiceActual - 1);
    });

    siguiente.addEventListener("click", () => {
        mostrarImagen(indiceActual + 1);
    });
});
