export default function template() {
  const $cards = document.getElementById("cards");
  const $template = document.getElementById("template-card").content;
  const $fragment = document.createDocumentFragment();
  const cardContent = [
    /* {
      title: "vengadores 1",
      img: "./assets/vengadores1.webp",
    }, */
    {
      title: "vengadores 2",
      img: "./assets/vengadores2.webp",
    },
    {
      title: "vengadores 3",
      img: "./assets/vengadores3.avif",
    },
    {
      title: "vengadores 4",
      img: "./assets/vengadores4.webp",
    },
  ];
  console.log($cards);
  cardContent.forEach((el) => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    let $clone = document.importNode($template, true);

    $fragment.appendChild($clone);
  });
  $cards.appendChild($fragment);
}
