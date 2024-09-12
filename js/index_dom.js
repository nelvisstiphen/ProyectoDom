import scrollTopBotton from "./boton_scroll.js";
import slider from "./carrusel.js";
import cambiosColor from "./color-rgb.js";
import webCam from "./deteccion_webcam.js";
//import eyeball from "./eye-move.js";
import searchFilters from "./filtro_busqueda.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import speechReader from "./narrador.js";
import responsiveTester from "./prueba_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import scrollSpy from "./scroll_espia.js";
import draw from "./sorteo.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";
import contactFormValidations from "./validaciones_formulario.js";
import smartVideo from "./video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  scrollTopBotton(".scroll-top-btn");
  responsiveTester("responsive-tester");
  webCam("webcam");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
  cambiosColor();
  //eyeball();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e);
});

darkTheme(".dark-theme-btn", "dark-mode");
speechReader();
