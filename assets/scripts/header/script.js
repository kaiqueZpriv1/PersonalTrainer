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
subMain.textContent = "Conquiste a qualidade de vida que sempre sonhou !";

// APPEND CHILD
//textos
DivTextMain.appendChild(h1Main);
DivTextMain.appendChild(subMain);
containerMain.appendChild(DivTextMain);
// containerMain.appendChild(divLinksMain);
main.appendChild(containerMain);
body.appendChild(main);

// CONTEUDO
const conteudo = document.createElement("section");
const containerConteudo = document.createElement("section");
let vantagensH3 = document.createElement("h3");

// ATRIBUTOS CONTEUDO
conteudo.setAttribute("id", "conteudo");
containerConteudo.setAttribute("id", "container-conteudo");
vantagensH3.setAttribute("class", "Titulo-vtg");

// DECLARAÇÃO DE CONTEUDO
vantagensH3.textContent = "Vantagens de treinar comigo";

// APPEND CHILD
containerConteudo.appendChild(vantagensH3);
conteudo.appendChild(containerConteudo);
body.appendChild(conteudo);

// CREATE CONTEUDO 1
let vantagensBox = document.createElement("section");
let imgVantagem = document.createElement("img");
let tituloVantagem = document.createElement("h3");
let SubVantagem = document.createElement("p");
// VANTAGEM 2
let vantagensBox2 = document.createElement("section");
let imgVantagem2 = document.createElement("img");
let tituloVantagem2 = document.createElement("h3");
let SubVantagem2 = document.createElement("p");

// ATRIBUTOS1
vantagensBox.setAttribute("id", "vantagem1");
imgVantagem.setAttribute("id", "imgV1");
tituloVantagem.setAttribute("id", "tituloV1");
SubVantagem.setAttribute("id", "subtituloV1");

// ATRIBUTO 2
vantagensBox2.setAttribute("id", "vantagem2");
imgVantagem2.setAttribute("id", "imgV2");
tituloVantagem2.setAttribute("id", "tituloV2");
SubVantagem2.setAttribute("id", "subtituloV2");

// DECLARAÇÃO DE CONTEUDO
imgVantagem.src = "./assets/img/imgHeader/musculacaoVant.png";
imgVantagem.alt = "Aplicativo";
tituloVantagem.textContent = "Resultados visiveis";
SubVantagem.textContent =
  "Tenha resultados visiveis e satisfatorios em menos de 90 dias após o inicio !";

// DECLARAÇÃO 2
imgVantagem2.src = "./assets/img/imgHeader/musculacaoVant.png";
imgVantagem2.alt = "Aplicativo";

tituloVantagem2.textContent = "Prevenção de lesões";
SubVantagem2.textContent =
  "Treine com tranquilidade livre de lesões, respeitando os limites do seu corpo !";

vantagensBox.appendChild(imgVantagem);
vantagensBox.appendChild(tituloVantagem);
vantagensBox.appendChild(SubVantagem);
containerConteudo.appendChild(vantagensBox);
// PUSH 2
vantagensBox2.appendChild(imgVantagem2);
vantagensBox2.appendChild(tituloVantagem2);
vantagensBox2.appendChild(SubVantagem2);
containerConteudo.appendChild(vantagensBox2);
