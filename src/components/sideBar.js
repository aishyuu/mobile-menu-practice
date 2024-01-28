import closeIcon from "../icons/x.svg"

export default function sideBar() {
    const body = document.querySelector("body");
    const menuBackdrop = document.createElement("div");
    menuBackdrop.classList.add("menu-backdrop");
    body.appendChild(menuBackdrop);

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-div");

    const menuClose = document.createElement("button");
    menuClose.classList.add("menu-close")
    
    const menuCloseIcon = document.createElement("img");
    menuCloseIcon.src = closeIcon
    menuClose.appendChild(menuCloseIcon);
    menuDiv.appendChild(menuClose)

    menuClose.addEventListener("click", () => {
        menuBackdrop.remove()
    })

    menuBackdrop.appendChild(menuDiv)
}