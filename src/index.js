import "./style.css";
import "./reset.css";
import githubIcon from "./icons/github.svg";
import profileIcon from "./icons/smile.svg";
import helpIcon from "./icons/help-circle.svg";

import menuIcon from "./icons/menu.svg";
import sideBar from "./components/sideBar";

function component() {
  const data = [
    {
      "title": "Github",
      "icon": githubIcon
    },
    {
      "title": "Profile",
      "icon": profileIcon
    },
    {
      "title": "Help",
      "icon": helpIcon
    }
  ];

  const body = document.querySelector("body");
  const element = document.createElement("div");
  element.classList.add("welcome");
  const text = document.createElement("h1");
  text.classList.add("main-text");
  text.innerText = "Thank you for using Marrow!";

  const subtext = document.createElement("a");
  subtext.href = "https://github.com/aishyuu/marrow";
  subtext.target = "_blank";
  subtext.innerText = "Getting Started";
  subtext.classList.add("sub-text");

  const sideMenuButton = document.createElement("button");
  sideMenuButton.classList.add("side-menu-button");
  const sideMenuIcon = document.createElement("img");
  sideMenuIcon.src = menuIcon;
  sideMenuButton.appendChild(sideMenuIcon);

  sideMenuButton.addEventListener("click", () => {
    sideBar(data)
  });

  body.appendChild(sideMenuButton);
  element.appendChild(text);
  element.appendChild(subtext);
  body.appendChild(element);
}

component();
