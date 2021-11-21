const GameOverBanner = document.querySelector("section#GameOver");
const NewGameButtonOver = document.querySelector(
  "section#GameOver div#Over div.options button#newgame"
);
const GoOutButton = document.querySelector(
  "section#GameOver div#Over div.options button#GoOut"
);

const vencedor = document.querySelector("p#vencedor");
function GameOver(text) {}

NewGameButtonOver.addEventListener("click", () => {
  RemoveGameOverBanner();
  InitNewGame();
});

function RemoveGameOverBanner() {
  GameOverBanner.style.visibility = "hidden";
  GameOverBanner.style.opacity = 0;
  GameOverBanner.style.top = "-50px";
}

function AddGameOverBanner(text) {
  GameOverBanner.style.visibility = "visible";
  GameOverBanner.style.opacity = 1;
  GameOverBanner.style.top = 0;

  vencedor.innerHTML = text;
}
