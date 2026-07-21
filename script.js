/* ======================================
   EZORITECH
   SCRIPT.JS
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    iniciarIntro();
    iniciarTarjetas();
    iniciarBotonSubir();

});

/* ======================================
   PANTALLA DE BIENVENIDA
====================================== */

function iniciarIntro() {

    const intro = document.getElementById("intro");

    if (!intro) return;

    setTimeout(() => {

        intro.classList.add("ocultar");

        setTimeout(() => {

            intro.style.display = "none";

        }, 800);

    }, 2500);

}
