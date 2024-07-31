const btnUp = document.getElementById("btn-up");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const btnDown = document.getElementById("btn-down");

const d = document;
let x = 0;
let y = 0;

export function moveBall(e) {
  const $ball = d.querySelector(".ball");
  const $stage = d.querySelector(".stage");
  const limitsBall = $ball.getBoundingClientRect();
  const limitsStage = $stage.getBoundingClientRect();

  const casoLeft = () => {
    if (limitsBall.left > limitsStage.left) {
      x--;
    }
  };

  const casoUp = () => {
    if (limitsBall.top > limitsStage.top) {
      y--;
    }
  };

  const casoRight = () => {
    if (limitsBall.right < limitsStage.right) {
      x++;
    }
  };

  const casoDown = () => {
    if (limitsBall.bottom < limitsStage.bottom) {
      y++;
    }
  };
  const cambiarBall = () => {
    $ball.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
  };
  if (e.type === "keydown") {
    switch (e.keyCode) {
      case 37:
        e.preventDefault();
        casoLeft();
        break;
      case 38:
        e.preventDefault();
        casoUp();
        break;
      case 39:
        e.preventDefault();
        casoRight();
        break;
      case 40:
        e.preventDefault();
        casoDown();
        break;
      default:
        break;
    }
    cambiarBall();
  }

  if (e.type === "click") {
    if (e.target.textContent === "SUBIR") {
      casoUp();
    }
    if (e.target.textContent === "IZQUIERDA") {
      casoLeft();
    }
    if (e.target.textContent === "DERECHA") {
      casoRight();
    }
    if (e.target.textContent === "ABAJO") {
      casoDown();
    }
    cambiarBall();
  }
}

export function shortcuts(e) {
  /* console.log(e);
  console.log(e.type); */

  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con el teclado");
  }

  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado una confirmacion con el teclado");
  }

  if (e.key === "p" && e.altKey) {
    prompt("Haz lanzado un aviso con el teclado");
  }
}

btnUp.addEventListener("click", (e) => {
  moveBall(e);
});

btnLeft.addEventListener("click", (e) => {
  moveBall(e);
});
btnRight.addEventListener("click", (e) => {
  moveBall(e);
});
btnDown.addEventListener("click", (e) => {
  moveBall(e);
});
