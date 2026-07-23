/* ======================================
   EZORITECH
   SCRIPT.JS
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    iniciarIntro();
    iniciarBotonSubir();
    iniciarTarjetas();

});

/* ======================================
   INTRO
====================================== */

function iniciarIntro() {

    const intro = document.getElementById("intro");

    if (!intro) return;

    setTimeout(() => {

        intro.classList.add("ocultar");

        setTimeout(() => {

            intro.style.display = "none";

        }, 800);

    }, 1600);

}
/* ======================================
   BOTÓN SUBIR
====================================== */

function iniciarBotonSubir() {

    const boton = document.getElementById("btnSubir");

    if (!boton) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            boton.classList.add("mostrar");

        } else {

            boton.classList.remove("mostrar");

        }

    });

}

/* ======================================
   VOLVER ARRIBA
====================================== */

function subirAlInicio() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}/* ======================================
   TARJETAS AL HACER SCROLL
====================================== */

function iniciarTarjetas() {

    const tarjetas = document.querySelectorAll(".tarjeta-servicio");

    if (!tarjetas.length) return;

    const observador = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

               entrada.target.classList.add("activa");

                observador.unobserve(entrada.target);

            }

        });

    }, {

        threshold: 0

    });

    tarjetas.forEach((tarjeta) => {

        observador.observe(tarjeta);

    });

}

