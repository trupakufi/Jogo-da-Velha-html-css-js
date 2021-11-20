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

function WhoWin() {
  // if (matriz[1] != null && matriz[3] != null && matriz[5] && matriz[7] != null)
  //   if (
  //     (matriz[0] === matriz[1] && matriz[1] === matriz[2]) ||
  //     (matriz[3] === matriz[4] && matriz[4] === matriz[5]) ||
  //     (matriz[6] === matriz[7] && matriz[7] === matriz[8]) ||
  //     (matriz[0] === matriz[3] && matriz[3] === matriz[6]) ||
  //     (matriz[1] === matriz[4] && matriz[4] === matriz[7]) ||
  //     (matriz[2] === matriz[5] && matriz[5] === matriz[8]) ||
  //     (matriz[0] === matriz[4] && matriz[4] === matriz[7]) ||
  //     (matriz[2] === matriz[4] && matriz[4] === matriz[6])
  //   ) {
  //     console.log(`Jogo Encerrado, o vencedor é o Player ${WhoIsTime}`);
  //   }

  if (matriz[0] === "X" && matriz[1] === "X" && matriz[2] === "X") {
    alert("Jogador X Venceu na linha 1");
  } else if (
    matriz[0] === "O" &&
    matriz[1] === "O" &&
    matriz[1] === matriz[2]
  ) {
    alert("Jogador O Venceu na linha 1");
  } else if (
    matriz[3] === "X" &&
    matriz[4] === "X" &&
    matriz[4] === matriz[5]
  ) {
    alert("Jogador X Venceu na linha 2");
  } else if (
    matriz[3] === "O" &&
    matriz[4] === "O" &&
    matriz[4] === matriz[5]
  ) {
    alert("Jogador O Vencer na linha 2");
  } else if (
    matriz[6] === "X" &&
    matriz[7] === "X" &&
    matriz[7] === matriz[8]
  ) {
    alert("Jogador X Venceu na linha 3");
  } else if (
    matriz[6] === "O" &&
    matriz[7] === "O" &&
    matriz[7] === matriz[8]
  ) {
    alert("Jogador O Venceu na linha 3");
  } else if (
    matriz[0] === "X" &&
    matriz[3] === "X" &&
    matriz[3] === matriz[6]
  ) {
    alert("Jogador X Venceu na Coluna 1");
  } else if (
    matriz[0] === "O" &&
    matriz[3] === "O" &&
    matriz[3] === matriz[6]
  ) {
    alert("Jogador O Venceu na Coluna 1");
  } else if (
    matriz[1] === "X" &&
    matriz[4] === "X" &&
    matriz[4] === matriz[7]
  ) {
    alert("Jogador X Venceu na Coluna 2");
  } else if (
    matriz[1] === "O" &&
    matriz[4] === "O" &&
    matriz[4] === matriz[7]
  ) {
    alert("Jogador O Venceu na Coluna 2");
  } else if (
    matriz[2] === "X" &&
    matriz[5] === "X" &&
    matriz[5] === matriz[8]
  ) {
    alert("Jogador X Venceu na Coluna 3");
  } else if (
    matriz[2] === "O" &&
    matriz[5] === "O" &&
    matriz[5] === matriz[8]
  ) {
    alert("Jogador O Venceu na Coluna 3");
  } else if (
    matriz[0] === "X" &&
    matriz[4] === "X" &&
    matriz[4] === matriz[8]
  ) {
    alert("Jogador X Venceu na Diagonal Secundária");
  } else if (
    matriz[0] === "O" &&
    matriz[4] === "O" &&
    matriz[4] === matriz[8]
  ) {
    alert("Jogador O Venceu na Diagonal Secundária");
  } else if (
    matriz[2] === "X" &&
    matriz[4] === "X" &&
    matriz[4] === matriz[6]
  ) {
    alert("Jogador X Venceu na Diagonal Principal");
  } else if (
    matriz[2] === "O" &&
    matriz[4] === "O" &&
    matriz[4] === matriz[6]
  ) {
    alert("Jogador O Venceu na Diagonal Principal");
  }
}

window.addEventListener("load", () => {
  RenderArena();
});
