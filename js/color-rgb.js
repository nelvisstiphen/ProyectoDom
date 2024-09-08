const inputRojo = document.getElementById("red");
const inputVerde = document.getElementById("green");
const inputAzul = document.getElementById("blue");

let textoRojo = document.getElementById("texto-rojo");
let textoVerde = document.getElementById("texto-verde");
let textoAzul = document.getElementById("texto-azul");

const rgbTotal = document.getElementById("rgbTotal");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

export default function cambiosColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
  rgbTotal.innerText = colorRGB;
}

inputRojo.addEventListener("change", (e) => {
  rojo = e.target.value;
  textoRojo.innerText = rojo;
  cambiosColor(rojo, verde, azul);
});

inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.innerText = verde;
  cambiosColor(rojo, verde, azul);
});

inputAzul.addEventListener("change", (e) => {
  azul = e.target.value;
  textoAzul.innerText = azul;
  cambiosColor(rojo, verde, azul);
});
