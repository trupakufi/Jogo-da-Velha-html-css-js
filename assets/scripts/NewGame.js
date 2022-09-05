const CloseButton = document.querySelector("button#Close");
const NewGameButton = document.querySelector(
  "header.main-header nav button#NewGameButton"
);
const NewGameBanner = document.querySelector("section#NewGame");
const NotNewButton = document.querySelector(
  "section#NewGame div#New div.buttonsNew button#notNew"
);
const YesNewButton = document.querySelector(
  "section#NewGame div#New div.buttonsNew button#yesNew"
);

function RemoveNewGameBanner() {
  NewGameBanner.style.visibility = "hidden";
  NewGameBanner.style.opacity = 0;
  NewGameBanner.style.top = "-50px";
}

function AddNewGameBanner() {
  NewGameBanner.style.visibility = "visible";
  NewGameBanner.style.opacity = 1;
  NewGameBanner.style.top = 0;
}

function InitNewGame() {
  RemoveNewGameBanner();
  CleanArena();
}

NewGameButton.addEventListener("click", () => AddNewGameBanner());
CloseButton.addEventListener("click", () => RemoveNewGameBanner());
NotNewButton.addEventListener("click", () => RemoveNewGameBanner());
YesNewButton.addEventListener("click", () => InitNewGame());
