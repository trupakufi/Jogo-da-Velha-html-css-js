function WhoWin() {
  if (matriz[0] === "X" && matriz[1] === "X" && matriz[2] === "X") {
    AddGameOverBanner("Jogador X Venceu na linha 1");
  } else if (
    matriz[0] === "O" &&
    matriz[1] === "O" &&
    matriz[1] === matriz[2]
  ) {
    AddGameOverBanner("Jogador O Venceu na linha 1");
  } else if (
    matriz[3] === "X" &&
    matriz[4] === "X" &&
    matriz[4] === matriz[5]
  ) {
    AddGameOverBanner("Jogador X Venceu na linha 2");
  } else if (
    matriz[3] === "O" &&
    matriz[4] === "O" &&
    matriz[4] === matriz[5]
  ) {
    AddGameOverBanner("Jogador O Vencer na linha 2");
  } else if (
    matriz[6] === "X" &&
    matriz[7] === "X" &&
    matriz[7] === matriz[8]
  ) {
    AddGameOverBanner("Jogador X Venceu na linha 3");
  } else if (
    matriz[6] === "O" &&
    matriz[7] === "O" &&
    matriz[7] === matriz[8]
  ) {
    AddGameOverBanner("Jogador O Venceu na linha 3");
  } else if (
    matriz[0] === "X" &&
    matriz[3] === "X" &&
    matriz[3] === matriz[6]
  ) {
    AddGameOverBanner("Jogador X Venceu na Coluna 1");
  } else if (
    matriz[0] === "O" &&
    matriz[3] === "O" &&
    matriz[3] === matriz[6]
  ) {
    AddGameOverBanner("Jogador O Venceu na Coluna 1");
  } else if (
    matriz[1] === "X" &&
    matriz[4] === "X" &&
    matriz[4] === matriz[7]
  ) {
    AddGameOverBanner("Jogador X Venceu na Coluna 2");
  } else if (
    matriz[1] === "O" &&
    matriz[4] === "O" &&
    matriz[4] === matriz[7]
  ) {
    AddGameOverBanner("Jogador O Venceu na Coluna 2");
  } else if (
    matriz[2] === "X" &&
    matriz[5] === "X" &&
    matriz[5] === matriz[8]
  ) {
    AddGameOverBanner("Jogador X Venceu na Coluna 3");
  } else if (
    matriz[2] === "O" &&
    matriz[5] === "O" &&
    matriz[5] === matriz[8]
  ) {
    AddGameOverBanner("Jogador O Venceu na Coluna 3");
  } else if (
    matriz[0] === "X" &&
    matriz[4] === "X" &&
    matriz[4] === matriz[8]
  ) {
    AddGameOverBanner("Jogador X Venceu na Diagonal Principal");
  } else if (
    matriz[0] === "O" &&
    matriz[4] === "O" &&
    matriz[4] === matriz[8]
  ) {
    AddGameOverBanner("Jogador O Venceu na Diagonal Princiapal");
  } else if (
    matriz[2] === "X" &&
    matriz[4] === "X" &&
    matriz[4] === matriz[6]
  ) {
    AddGameOverBanner("Jogador X Venceu na Diagonal Secundária");
  } else if (
    matriz[2] === "O" &&
    matriz[4] === "O" &&
    matriz[4] === matriz[6]
  ) {
    AddGameOverBanner("Jogador O Venceu na Diagonal Secundária");
  }
}
