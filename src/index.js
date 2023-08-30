import "./style.css";
import { renderHome } from "./homepage";
import { renderAbout } from "./about";
import { renderMenu } from "./menu";
let content = document.getElementById("content");

// nav bar
let nav = document.createElement("nav");
let home = document.createElement("h2");
home.innerText = "Home";
nav.append(home);
let menu = document.createElement("h2");
menu.innerText = "Menu";
nav.append(menu);
let about = document.createElement("h2");
about.innerText = "About";
nav.append(about);
document.body.append(nav);
// home page
renderHome();
home.addEventListener("click", renderHome);
menu.addEventListener("click", renderMenu);
about.addEventListener("click", renderAbout);
