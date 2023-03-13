const body = document.createElement("body");
const header = document.createElement("section");
let textDivHeader = document.createElement("div");
let textoHeader = document.createElement("h3");
let subHeader = document.createElement("p");
let spanHeader = document.createElement("span");
let iconMusculacao = document.createElement("img");

let menu = document.createElement("img");
const menuReveal = document.createElement("div")
let openReveal = document.createElement("img")
const divMenuLinks = document.createElement("div")

let linkMenu1 = document.createElement("a")
let linkMenu2 = document.createElement("a")
let linkMenu3 = document.createElement("a")
let linkMenu4 = document.createElement("a")

header.setAttribute("id", "Header");
textDivHeader.setAttribute("id", "textHeader")
textoHeader.textContent = "Personal ";
subHeader.textContent = "Especialista em entregar resultados";
spanHeader.textContent = "Trainer";
iconMusculacao.src = "./assets/img/imgHeader/musculacao.png";






menu.src = "./assets/img/imgHeader/menu-red.svg";
menu.setAttribute("id", "menu-mobile")
menuReveal.setAttribute("id", "revealMenu")
openReveal.setAttribute("id", "imgOpenMenu")
openReveal.src = "./assets/img/imgHeader/openMenu.svg"

divMenuLinks.setAttribute("id", "mobileLinks")

linkMenu1.textContent = "Vantagens";
linkMenu2.textContent = "Resultados";
linkMenu3.textContent = "Formação";
linkMenu4.textContent = "Contate-me";

linkMenu1.src = "#vantagens"
linkMenu2.src = "#resultados"
linkMenu3.src = "#formacao"
linkMenu4.src = "#contatos"





// header.appendChild(logo);
header.appendChild(menuReveal)
header.appendChild(textDivHeader);
menuReveal.appendChild(openReveal)
menuReveal.appendChild(divMenuLinks)
menuReveal.appendChild(openReveal)
menuReveal.appendChild(divMenuLinks)
divMenuLinks.appendChild(linkMenu1)
divMenuLinks.appendChild(linkMenu2)
divMenuLinks.appendChild(linkMenu3)
divMenuLinks.appendChild(linkMenu4)




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


// ATRIBUTOS1
vantagensBox.setAttribute("id", "vantagem1");
imgVantagem.setAttribute("id", "imgV1");
tituloVantagem.setAttribute("id", "tituloV1");
SubVantagem.setAttribute("id", "subtituloV1");



// DECLARAÇÃO DE CONTEUDO
imgVantagem.src = "./assets/img/imgHeader/musculacaoVant.png";
imgVantagem.alt = "Aplicativo";
tituloVantagem.textContent = "Resultados visiveis";
SubVantagem.textContent =
  "Tenha resultados visiveis e satisfatorios em menos de 90 dias após o inicio !";


vantagensBox.appendChild(imgVantagem);
vantagensBox.appendChild(tituloVantagem);
vantagensBox.appendChild(SubVantagem);
containerConteudo.appendChild(vantagensBox);



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
containerConteudo.appendChild(vantagensBox2);
