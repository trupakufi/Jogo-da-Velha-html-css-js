let matriz = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
let WhoIsTime;
let player = true;

// getting Elements
const audio = document.querySelector("audio#beep");
const arena = document.querySelector("table#arena");
const buttons = document.querySelectorAll(
  "table#arena tr td button.arena-button"
);
const Who = document.querySelector("h3#Who");

function RenderArena() {
  if (!ThereIsSpace()) {
    AddGameOverBanner("Empate.!");
  } else {
    buttons.forEach((element, index) => {
      element.innerHTML = matriz[index];
    });
  }
}

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

function CleanArena() {
  for (let i = 0; i <= matriz.length - 1; i++) {
    matriz[i] = "-";
  }
  RenderArena();
}

function ThereIsSpace() {
  for (let i = 0; i <= matriz.length - 1; i++) {
    if (matriz[i] === "-") {
      return true;
    }
  }
}

window.addEventListener("load", () => {
  RenderArena();
});
