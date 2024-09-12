const inputRojo = document.getElementById("red");
const inputVerde = document.getElementById("green");
const inputAzul = document.getElementById("blue");

let textoRojo = document.getElementById("texto-rojo");
let textoVerde = document.getElementById("texto-verde");
let textoAzul = document.getElementById("texto-azul");

const rgbTotal = document.getElementById("rgbTotal");
const textoRgb = document.getElementById("text-rgb");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

export default function cambiosColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  /* document.body.style.backgroundColor = colorRGB;*/
  textoRgb.textContent = colorRGB;
  textoRgb.style.color = colorRGB;
  rgbTotal.style.backgroundColor = colorRGB;
}

inputRojo.addEventListener("change", (e) => {
  rojo = e.target.value;
  textoRojo.textContent = rojo;
  cambiosColor(rojo, verde, azul);
});

inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.textContent = verde;
  cambiosColor(rojo, verde, azul);
});

inputAzul.addEventListener("change", (e) => {
  azul = e.target.value;
  textoAzul.textContent = azul;
  cambiosColor(rojo, verde, azul);
});
