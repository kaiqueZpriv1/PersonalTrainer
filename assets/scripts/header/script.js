const body = document.createElement("body");
const header = document.createElement("section");
let textDivHeader = document.createElement("div");
let textoHeader = document.createElement("h3");
let subHeader = document.createElement("p");
let spanHeader = document.createElement("span");
let iconMusculacao = document.createElement("img");

let menu = document.createElement("img");
const menuReveal = document.createElement("div");
let openReveal = document.createElement("img");
const divMenuLinks = document.createElement("div");

let linkMenu1 = document.createElement("a");
let linkMenu2 = document.createElement("a");
let linkMenu3 = document.createElement("a");
let linkMenu4 = document.createElement("a");

header.setAttribute("id", "Header");
textDivHeader.setAttribute("id", "textHeader");
textoHeader.textContent = "Personal ";
subHeader.textContent = "Especialista em entregar resultados";
spanHeader.textContent = "Trainer";
iconMusculacao.src = "./assets/img/imgHeader/musculacao.png";

menu.src = "./assets/img/imgHeader/menu-red.svg";
menu.setAttribute("id", "menu-mobile");
menuReveal.setAttribute("id", "revealMenu");
openReveal.setAttribute("id", "imgOpenMenu");
openReveal.src = "./assets/img/imgHeader/openMenu.svg";

divMenuLinks.setAttribute("id", "mobileLinks");

linkMenu1.textContent = "Vantagens";
linkMenu2.textContent = "Resultados";
linkMenu3.textContent = "Formação";
linkMenu4.textContent = "Contate-me";

linkMenu1.href = "#vantagem";
linkMenu2.href = "#resultados";
linkMenu3.href = "#formacao";
linkMenu4.href = "#contatos";

// header.appendChild(logo);
header.appendChild(menuReveal);
header.appendChild(textDivHeader);
menuReveal.appendChild(openReveal);
menuReveal.appendChild(divMenuLinks);
menuReveal.appendChild(openReveal);
menuReveal.appendChild(divMenuLinks);
divMenuLinks.appendChild(linkMenu1);
divMenuLinks.appendChild(linkMenu2);
divMenuLinks.appendChild(linkMenu3);
divMenuLinks.appendChild(linkMenu4);

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

// DECLARACAO DE Vantagem
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

// Vantagem
const Vantagem = document.createElement("section");
const containerVantagem = document.createElement("section");
let vantagensH3 = document.createElement("h3");

// ATRIBUTOS Vantagem
Vantagem.setAttribute("id", "Vantagem");
containerVantagem.setAttribute("id", "container-Vantagem");
vantagensH3.setAttribute("class", "Titulo-vtg");

// DECLARAÇÃO DE Vantagem
vantagensH3.textContent = "Vantagens de treinar comigo";

// APPEND CHILD
containerVantagem.appendChild(vantagensH3);
Vantagem.appendChild(containerVantagem);
body.appendChild(Vantagem);

// CREATE Vantagem 1
let vantagensBox = document.createElement("section");
let imgVantagem = document.createElement("img");
let tituloVantagem = document.createElement("h3");
let SubVantagem = document.createElement("p");

// ATRIBUTOS1
vantagensBox.setAttribute("id", "vantagem1");
imgVantagem.setAttribute("id", "imgV1");
tituloVantagem.setAttribute("id", "tituloV1");
SubVantagem.setAttribute("id", "subtituloV1");

// DECLARAÇÃO DE Vantagem
imgVantagem.src = "./assets/img/imgHeader/musculacaoVant.png";
imgVantagem.alt = "Aplicativo";
tituloVantagem.textContent = "Resultados visiveis";
SubVantagem.textContent =
  "Tenha resultados visiveis e satisfatorios em menos de 90 dias após o inicio !";

vantagensBox.appendChild(imgVantagem);
vantagensBox.appendChild(tituloVantagem);
vantagensBox.appendChild(SubVantagem);
containerVantagem.appendChild(vantagensBox);

// VANTAGEM 2
let vantagensBox2 = document.createElement("section");
let imgVantagem2 = document.createElement("img");
let tituloVantagem2 = document.createElement("h3");
let SubVantagem2 = document.createElement("p");

// ATRIBUTO 2
vantagensBox2.setAttribute("id", "vantagem2");
imgVantagem2.setAttribute("id", "imgV2");
tituloVantagem2.setAttribute("id", "tituloV2");
SubVantagem2.setAttribute("id", "subtituloV2");

// DECLARAÇÃO 2
imgVantagem2.src = "./assets/img/imgHeader/icon-prevencao.png";
imgVantagem2.alt = "Aplicativo";

tituloVantagem2.textContent = "Prevenção de lesões";
SubVantagem2.textContent =
  "Treine com tranquilidade livre de lesões, respeitando os limites do seu corpo !";

// PUSH 2
vantagensBox2.appendChild(imgVantagem2);
vantagensBox2.appendChild(tituloVantagem2);
vantagensBox2.appendChild(SubVantagem2);
containerVantagem.appendChild(vantagensBox2);

// VANTAGEM 2
let vantagensBox3 = document.createElement("section");
let imgVantagem3 = document.createElement("img");
let tituloVantagem3 = document.createElement("h3");
let SubVantagem3 = document.createElement("p");

// ATRIBUTO 2
vantagensBox3.setAttribute("id", "vantagem2");
imgVantagem3.setAttribute("id", "imgV2");
tituloVantagem3.setAttribute("id", "tituloV2");
SubVantagem3.setAttribute("id", "subtituloV2");

// DECLARAÇÃO 2
imgVantagem3.src = "./assets/img/imgHeader/icon-prevencao.png";
imgVantagem3.alt = "Aplicativo";

tituloVantagem3.textContent = "Foco e motivação";
SubVantagem3.textContent =
  "Mantenha-se motivado 100% do tempo ! Não perca tempo com exercicios que nao te levaram a lugar nenhum. Alcance seus objetivos o mais rapido possivel !";

// PUSH 2
vantagensBox3.appendChild(imgVantagem3);
vantagensBox3.appendChild(tituloVantagem3);
vantagensBox3.appendChild(SubVantagem3);
containerVantagem.appendChild(vantagensBox3);

const resultados = document.createElement("section");
const containerResultados = document.createElement("section");

resultados.setAttribute("id", "resultados");
containerResultados.setAttribute("id", "containerResultados");

let h3Resultados = document.createElement("h3");
h3Resultados.textContent = "Resultados";

let resultadoBox1 = document.createElement("div");
let resultadoBox2 = document.createElement("div");
// push de img e textos box 1

// push de img e textos box 2

// push box dos resultados
containerResultados.appendChild(resultadoBox1);
containerResultados.appendChild(resultadoBox2);
// push section de resultados
containerResultados.appendChild(h3Resultados);
resultados.appendChild(containerResultados);
body.appendChild(resultados);
