const body = document.createElement("body");
const header = document.createElement("section");
const textDivHeader = document.createElement("div")
const textoHeader = document.createElement("h3");
const subHeader = document.createElement("p")
const spanHeader = document.createElement("span");
const menu = document.createElement("img");
const iconMusculacao = document.createElement("img")

header.setAttribute("id", "Header");
textoHeader.textContent = "Personal ";
subHeader.textContent = "Especialista em entregar resultados"
spanHeader.textContent = "Trainer";
menu.src = "./assets/img/imgHeader/menu-red.svg"
iconMusculacao.src = "./assets/img/imgHeader/musculacao.png"

// header.appendChild(logo);
header.appendChild(textDivHeader)
textDivHeader.appendChild(textoHeader)
textDivHeader.appendChild(subHeader)
textoHeader.appendChild(spanHeader);
header.appendChild(iconMusculacao)
header.appendChild(menu);
body.appendChild(header);
document.documentElement.appendChild(body);



