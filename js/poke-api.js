const d = document;
const $main = d.querySelector("main");
const $links = d.querySelector(".links");

let pokeAPI = "https://pokeapi.co/api/v2/pokemon/";
async function loadPokemons(url) {
  try {
    $main.innerHTML = `<img class="loader" src="../assets/rings.svg" alt="Cargando...">`;

    let res = await fetch(url);
    let json = await res.json();
    let $template = "";
    let $prevLink;
    let $nexLink;

    //console.log(json);

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    for (let i = 0; i < json.results.length; i++) {
      //console.log(json.results[i]);
      try {
        let res = await fetch(json.results[i].url);
        let pokemon = await res.json();

        //console.log(res, pokemon);

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        $template += `
        <figure>
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
          <figcaption>${pokemon.name}</figcaption>
        </figure>
        `;
      } catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $template += `
          <figure>
            <figcaption>Error ${err.status}: ${message}</figcaption>
          </figure>
        `;
      }
    }

    $main.innerHTML = $template;

    $prevLink = json.previous ? `<a href="${json.previous}">⏮️</a>` : "";
    $nexLink = json.next ? `<a href="${json.next}">⏭️</a>` : "";
    $links.innerHTML = $prevLink + " " + $nexLink;
  } catch (err) {
    console.log(err);
    let message = err.statusText || "Ocurrió un error";
    $main.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
  }
}

d.addEventListener("DOMContentLoaded", (e) => loadPokemons(pokeAPI));

d.addEventListener("click", (e) => {
  if (e.target.matches(".links a")) {
    e.preventDefault();
    loadPokemons(e.target.getAttribute("href"));
  }
});
