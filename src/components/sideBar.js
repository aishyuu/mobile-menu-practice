import closeIcon from "../icons/x.svg";

export default function sideBar(data) {
  const body = document.querySelector("body");
  const menuBackdrop = document.createElement("div");
  menuBackdrop.classList.add("menu-backdrop");
  body.appendChild(menuBackdrop);

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-div");

  const menuClose = document.createElement("button");
  menuClose.classList.add("menu-close");

  const menuCloseIcon = document.createElement("img");
  menuCloseIcon.src = closeIcon;
  menuClose.appendChild(menuCloseIcon);
  menuDiv.appendChild(menuClose);

  menuClose.addEventListener("click", () => {
    menuBackdrop.remove();
  });

  for (let index = 0; index < data.length; index += 1) {
    const element = data[index];
    const menuPiece = document.createElement("div");
    menuPiece.classList.add("menu-piece-div");

    const menuPieceTitle = document.createElement("p");
    menuPieceTitle.classList.add("menu-piece-title");
    menuPieceTitle.textContent = element.title;
    menuPiece.appendChild(menuPieceTitle);

    const menuPieceIcon = document.createElement("img");
    menuPieceIcon.classList.add("menu-piece-icon");
    menuPieceIcon.src = element.icon;
    menuPiece.appendChild(menuPieceIcon);

    menuDiv.appendChild(menuPiece)
  }

  menuBackdrop.appendChild(menuDiv);
}
