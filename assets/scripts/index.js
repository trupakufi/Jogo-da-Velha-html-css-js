var matriz = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
const arena = document.querySelector("table#arena");
const buttons = document.querySelectorAll(
  "table#arena tr td button.arena-button"
);
var WhoIsTime;
const Who = document.querySelector("h3#Who");
var player = true;
const audio = document.querySelector("audio#beep");

buttons.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (matriz[index] !== "-") {
      audio.play();
    } else {
      WhoIsTime = player ? "X" : "O";
      matriz[index] = WhoIsTime;
      player = !player;
      WhoIsTime = player ? "X" : "O";
      Who.innerHTML = ` É a vez do Jogador ${WhoIsTime}`;
      RenderArena();
      WhoWin();
    }
  });
});

function RenderArena() {
  if (!ThereIsSpace()) {
    AddGameOverBanner("Empate.!");
  } else {
    buttons.forEach((element, index) => {
      element.innerHTML = matriz[index];
    });
  }
}

function CleanArena() {
  for (let i = 0; i <= matriz.length - 1; i++) {
    matriz[i] = "-";
  }
  RenderArena();
}

window.addEventListener("load", () => {
  RenderArena();
});

function ThereIsSpace() {
  for (let i = 0; i <= matriz.length - 1; i++) {
    if (matriz[i] === "-") {
      return true;
    }
  }
}
