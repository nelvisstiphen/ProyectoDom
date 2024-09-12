const d = document;

export default function slider() {
  const $nextBtn = d.querySelector(".slider-btns .next");
  const $prevBtn = d.querySelector(".slider-btns .prev");
  const $slides = d.querySelectorAll(".slider-slide");

  let i = 0;

  function agregar(index) {
    $slides[index].classList.add("active");
  }

  function quitar(index) {
    $slides[index].classList.remove("active");
  }

  setInterval(() => {
    quitar(i);
    i++;

    if (i >= $slides.length) {
      i = 0;
      $slides[0];
    }

    agregar(i);
  }, 5000);

  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault();
      quitar(i);
      i--;

      if (i < 0) {
        i = $slides.length - 1;
      }
      agregar(i);
    }
    if (e.target === $nextBtn) {
      e.preventDefault();
      quitar(i);
      i++;

      if (i >= $slides.length) {
        i = 0;
      }

      agregar(i);
    }
  });
}
