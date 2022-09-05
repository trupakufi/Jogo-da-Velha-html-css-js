const GameOverBanner = document.querySelector("section#GameOver");
const GoOutButton = document.querySelector(
  "section#GameOver div#Over div.options button#GoOut"
);
const NewGameButtonOver = document.querySelector(
  "section#GameOver div#Over div.options button#newgame"
);
const vencedor = document.querySelector("p#vencedor");

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

NewGameButtonOver.addEventListener("click", () => {
  RemoveGameOverBanner();
  InitNewGame();
});

GoOutButton.addEventListener("click", () => {
  RemoveGameOverBanner();
});
