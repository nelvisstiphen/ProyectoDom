import scrollTopBotton from "./boton_scroll.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm(
    "assets/ringtones-the-avengers.mp3",
    "#activar-alarma",
    "#desactivar-alarma"
  );
  scrollTopBotton(".scroll-top-btn");
  darkTheme(".dark-theme-btn", "dark-mode");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e);
});
