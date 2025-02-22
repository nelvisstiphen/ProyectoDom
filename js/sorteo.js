const d = document;
const $getGanador = d.querySelector(".get-winner");

export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector);
    const random = Math.floor(Math.random() * $players.length);
    const winner = $players[random];

    //console.log($players, random, winner);
    return `El ganador es: ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      //alert(result);
      $getGanador.textContent = result;
      //console.log(result);
    }
  });
}

/* const getWinnerComment = (selector) => {
  const $players = document.querySelectorAll(selector);
  const random = Math.floor(Math.random() * $players.length);
  const winner = $players[random];

  return `El ganador es: ${winner.textContent}`;
};

getWinnerComment("ytd-comment-thread-renderer #author-text span");
 */
