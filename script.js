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
