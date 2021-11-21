var matriz = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
const arena = document.querySelector("table#arena");
const buttons = document.querySelectorAll(
  "table#arena tr td button.arena-button"
);
var WhoIsTime;
const Who = document.querySelector("h3#Who");
var player = true;

buttons.forEach((element, index) => {
  element.addEventListener("click", () => {
    WhoIsTime = player ? "X" : "O";
    matriz[index] = WhoIsTime;
    player = !player;
    WhoIsTime = player ? "X" : "O";
    Who.innerHTML = ` É a vez do Jogador ${WhoIsTime}`;
    RenderArena();
    WhoWin();
    console.log(matriz);
  });
});

function RenderArena() {
  buttons.forEach((element, index) => {
    element.innerHTML = matriz[index];
  });
}

function CleanArena() {
  matriz.map((item) => {
    item = "-";
  });
  RenderArena();
}

window.addEventListener("load", () => {
  RenderArena();
});
