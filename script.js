/* ======================================
   EZORITECH
   SCRIPT.JS
====================================== */

document.addEventListener("DOMContentLoaded",()=>{

    iniciarIntro();

    iniciarAnimaciones();

    iniciarBotonSubir();

});

/* ======================================
   INTRO
====================================== */

function iniciarIntro(){

    const intro=document.getElementById("intro");

    if(!intro) return;

    setTimeout(()=>{

        intro.style.opacity="0";

        intro.style.transition="opacity .8s ease";

        setTimeout(()=>{

            intro.style.display="none";

        },800);

    },2500);

}

/* ======================================
   ANIMACIONES
====================================== */

function iniciarAnimaciones(){

    const tarjetas=document.querySelectorAll(".tarjeta-servicio");

    tarjetas.forEach((tarjeta,indice)=>{

        tarjeta.style.animationDelay=`${indice*0.15}s`;

    });

}

/* ======================================
   BOTÓN SUBIR
====================================== */

function iniciarBotonSubir(){

    const boton=document.getElementById("btnSubir");

    if(!boton) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            boton.classList.add("mostrar");

        }else{

            boton.classList.remove("mostrar");

        }

    });

}

/* ======================================
   VOLVER ARRIBA
====================================== */

function subirAlInicio(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/* ======================================
   EFECTOS AL DESPLAZARSE
====================================== */

window.addEventListener("scroll",()=>{

    const elementos=document.querySelectorAll(".tarjeta-servicio");

    elementos.forEach((elemento)=>{

        const posicion=elemento.getBoundingClientRect().top;

        const visible=window.innerHeight-100;

        if(posicion<visible){

            elemento.classList.add("visible");

        }

    });

});

/* ======================================
   BOTONES
====================================== */

const botones=document.querySelectorAll("a");

botones.forEach((boton)=>{

    boton.addEventListener("click",()=>{

        boton.style.transform="scale(.96)";

        setTimeout(()=>{

            boton.style.transform="";

        },120);

    });

});

/* ======================================
   PREPARADO PARA FUTURAS FUNCIONES
====================================== */

function iniciarWhatsApp(){

    // Próximamente:
    // botón flotante
    // mensaje automático
    // apertura en nueva pestaña

}

function iniciarMapa(){

    // Próximamente:
    // Google Maps
    // animaciones
    // marcador personalizado

}

/* ======================================
   EFECTO SUAVE EN EL HERO
====================================== */

window.addEventListener("load",()=>{

    const hero=document.querySelector(".hero-contenido");

    if(hero){

        hero.style.opacity="1";

        hero.style.transform="translateY(0)";

    }

});

/* ======================================
   OBSERVADOR DE ELEMENTOS
====================================== */

const observador=new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("visible");

        }

    });

},{
    threshold:.20
});

document.querySelectorAll(".tarjeta-servicio").forEach((tarjeta)=>{

    observador.observe(tarjeta);

});

/* ======================================
   MENSAJES DE CONSOLA
====================================== */

console.log("================================");

console.log("EzoriTech");

console.log("Tecnología que vuelve a la vida");

console.log("Sitio cargado correctamente");

console.log("================================");

/* ======================================
   UTILIDADES
====================================== */

function mostrarElemento(elemento){

    if(elemento){

        elemento.classList.add("visible");

    }

}

function ocultarElemento(elemento){

    if(elemento){

        elemento.classList.remove("visible");

    }

}

/* ======================================
   INICIALIZACIÓN GENERAL
====================================== */

window.addEventListener("resize",()=>{

    // Reservado para futuros ajustes
    // responsive dinámico

});

window.addEventListener("orientationchange",()=>{

    // Preparado para móviles
    // y tablets

});

/* ======================================
   FIN DEL ARCHIVO
====================================== */

console.log("Versión 1.0 - EzoriTech");

console.log("Todos los módulos cargados.");

/* ======================================
   EFECTOS DE ENTRADA
====================================== */

function animarEntrada(){

    const elementos=document.querySelectorAll(

        ".hero-contenido, .hero-imagen, .tarjeta-servicio"

    );

    elementos.forEach((elemento)=>{

        elemento.classList.add("animado");

    });

}

window.addEventListener("load",animarEntrada);

/* ======================================
   NAVEGACIÓN SUAVE
====================================== */

document.querySelectorAll('a[href^="#"]').forEach((enlace)=>{

    enlace.addEventListener("click",(e)=>{

        const destino=document.querySelector(

            enlace.getAttribute("href")

        );

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

/* ======================================
   PREPARADO PARA EXPANSIONES
====================================== */

const EzoriTech={

    version:"1.0",

    autor:"Proyecto EzoriTech",

    iniciar(){

        console.log(

            "EzoriTech iniciado correctamente."

        );

    }

};

EzoriTech.iniciar();

/* ======================================
   DETECTOR DE SECCIÓN ACTIVA
====================================== */

function detectarSeccionActiva(){

    const secciones=document.querySelectorAll("section");

    let actual="";

    secciones.forEach((seccion)=>{

        const superior=seccion.offsetTop-150;

        if(window.scrollY>=superior){

            actual=seccion.getAttribute("id");

        }

    });

    return actual;

}

/* ======================================
   CONTROL DE RENDIMIENTO
====================================== */

let ultimaPosicion=0;

window.addEventListener("scroll",()=>{

    ultimaPosicion=window.scrollY;

});

/* ======================================
   SISTEMA DE EVENTOS
====================================== */

function registrarEvento(nombre){

    console.log(

        `Evento registrado: ${nombre}`

    );

}

/* ======================================
   UTILIDADES DE CLASES
====================================== */

function agregarClase(elemento,clase){

    if(elemento){

        elemento.classList.add(clase);

    }

}

function quitarClase(elemento,clase){

    if(elemento){

        elemento.classList.remove(clase);

    }

}

/* ======================================
   DETECCIÓN DEL DISPOSITIVO
====================================== */

function esMovil(){

    return window.innerWidth<=768;

}

function esEscritorio(){

    return window.innerWidth>768;

}

/* ======================================
   CARGA COMPLETA
====================================== */

window.addEventListener("load",()=>{

    console.log("Todos los recursos fueron cargados.");

});

/* ======================================
   RESERVADO PARA FUNCIONES FUTURAS
====================================== */

/*

Aquí se agregarán posteriormente:

- Animación premium del búho.
- Apertura de pantalla.
- WhatsApp inteligente.
- Modo oscuro automático.
- Efectos avanzados.
- Estadísticas.
- Optimización SEO dinámica.

*/

/* ======================================
   CONTROL DE VISIBILIDAD
====================================== */

function mostrar(id){

    const elemento=document.getElementById(id);

    if(elemento){

        elemento.style.display="block";

    }

}

function ocultar(id){

    const elemento=document.getElementById(id);

    if(elemento){

        elemento.style.display="none";

    }

}

/* ======================================
   EFECTOS DE BOTONES
====================================== */

document.querySelectorAll(".btn-principal,.btn-secundario")

.forEach((boton)=>{

    boton.addEventListener("mouseenter",()=>{

        boton.style.transition="all .3s ease";

    });

});

/* ======================================
   INFORMACIÓN DEL SITIO
====================================== */

const sitio={

    nombre:"EzoriTech",

    slogan:"Tecnología que vuelve a la vida",

    version:"1.0"

};

console.log(sitio);

/* ======================================
   CONTROL DE ENLACES EXTERNOS
====================================== */

function abrirNuevaPestana(url){

    window.open(

        url,

        "_blank",

        "noopener,noreferrer"

    );

}

/* ======================================
   COMPROBACIÓN DE ELEMENTOS
====================================== */

function existe(selector){

    return document.querySelector(selector)!==null;

}

console.log(

    "Hero:",

    existe("#hero")

);

console.log(

    "Servicios:",

    existe("#servicios")

);

/* ======================================
   CONFIGURACIÓN GENERAL
====================================== */

const configuracion={

    animaciones:true,

    duracion:800,

    version:"1.0",

    responsive:true

};

/* ======================================
   FIN DEL SCRIPT
====================================== */

console.log(

    "Script preparado para futuras mejoras."

);

/* ======================================
   UTILIDADES DE DESPLAZAMIENTO
====================================== */

function irASeccion(id){

    const seccion=document.getElementById(id);

    if(seccion){

        seccion.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

    }

}

/* ======================================
   CONTROL DE CARGA
====================================== */

function paginaLista(){

    document.body.classList.add("pagina-lista");

}

window.addEventListener(

    "load",

    paginaLista

);

/* ======================================
   PREPARACIÓN PARA FUTURAS VERSIONES
====================================== */

const versionActual={

    nombre:"EzoriTech",

    lanzamiento:"1.0",

    estado:"En desarrollo"

};

console.table(versionActual);

/* ======================================
   MENSAJE FINAL
====================================== */

console.log(

    "Gracias por visitar EzoriTech."

);

console.log(

    "Tecnología que vuelve a la vida."

);

/* ======================================
   ESTADO DEL SITIO
====================================== */

function obtenerEstado(){

    return{

        nombre:"EzoriTech",

        estado:"Activo",

        version:"1.0"

    };

}

console.log(obtenerEstado());

/* ======================================
   INICIALIZACIÓN DE MÓDULOS
====================================== */

function iniciarModulos(){

    console.log("Intro ✓");

    console.log("Hero ✓");

    console.log("Servicios ✓");

    console.log("Animaciones ✓");

    console.log("Responsive ✓");

}

iniciarModulos();

/* ======================================
   VALIDACIÓN BÁSICA
====================================== */

function validarProyecto(){

    console.log("Proyecto cargado.");

    console.log("Esperando revisión final.");

}

validarProyecto();

/* ======================================
   CIERRE DEL SCRIPT
====================================== */

console.log("================================");

console.log("EzoriTech Web");

console.log("Versión 1.0");

console.log("Proyecto listo para revisión.");

console.log("================================");

/* ===========================
   APARICIÓN DE TARJETAS
=========================== */

const tarjetas = document.querySelectorAll(".tarjeta-servicio");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("activa");

        }

    });

}, {

    threshold: 0.25

});

tarjetas.forEach((tarjeta) => {

    observador.observe(tarjeta);

});
