const body = document.createElement("body");
const header = document.createElement("section");
let textDivHeader = document.createElement("div");
let textoHeader = document.createElement("h3");
let subHeader = document.createElement("p");
let spanHeader = document.createElement("span");
let menu = document.createElement("img");
let iconMusculacao = document.createElement("img");

header.setAttribute("id", "Header");
textoHeader.textContent = "Personal ";
subHeader.textContent = "Especialista em entregar resultados";
spanHeader.textContent = "Trainer";
menu.src = "./assets/img/imgHeader/menu-red.svg";
iconMusculacao.src = "./assets/img/imgHeader/musculacao.png";

// header.appendChild(logo);
header.appendChild(textDivHeader);
textDivHeader.appendChild(textoHeader);
textDivHeader.appendChild(subHeader);
textoHeader.appendChild(spanHeader);
header.appendChild(iconMusculacao);
header.appendChild(menu);
body.appendChild(header);
document.documentElement.appendChild(body);

// CREATE MAIN
const main = document.createElement("section");
const containerMain = document.createElement("section");
const DivTextMain = document.createElement("div");
let h1Main = document.createElement("h1");
let subMain = document.createElement("p");
// ATRIBUTOS
main.setAttribute("id", "main");
containerMain.setAttribute("id", "conteiner-main");
h1Main.setAttribute("class", "h1Main");

// DECLARACAO DE CONTEUDO
h1Main.textContent = "Juan Bueno";
subMain.textContent = "Conquiste a qualidade de vida que sempre sonhou";

// APPEND CHILD
//textos
DivTextMain.appendChild(h1Main);
DivTextMain.appendChild(subMain);
containerMain.appendChild(DivTextMain);
// containerMain.appendChild(divLinksMain);
main.appendChild(containerMain);
body.appendChild(main);

// conteudo
const conteudo = document.createElement("section");
