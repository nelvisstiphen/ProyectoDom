import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm(
    "assets/ringtones-the-avengers.mp3",
    "#activar-alarma",
    "#desactivar-alarma"
  );
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e);
});
