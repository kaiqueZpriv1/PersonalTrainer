const body = document.createElement("body");
const header = document.createElement("section");
const logo = document.createElement("img");
const textoHeader = document.createElement("h3");
const spanHeader = document.createElement("span");
const menu = document.createElement("img");

header.setAttribute("id", "Header");
logo.src = "";
logo.alt = "logo";
textoHeader.textContent = "Personal ";
spanHeader.textContent = "Trainer";

header.appendChild(logo);
header.appendChild(textoHeader);
textoHeader.appendChild(spanHeader);
header.appendChild(menu);
body.appendChild(header);
document.documentElement.appendChild(body);
