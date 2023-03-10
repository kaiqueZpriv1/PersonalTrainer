header.style.background = "#535353";
header.style.height = "75px";
header.style.display = "flex";

textoHeader.style.color = "#FAFAFA";
textoHeader.style.fontSize = "3vw";
textoHeader.style.fontFamily = "Source code pro";
textoHeader.style.position = "relative";
textoHeader.style.top = "20px";
textoHeader.style.left = "25px";

subHeader.style.color = "#FAFAFA";
subHeader.style.fontFamily = "Roboto slab";
subHeader.style.marginLeft = "10px";
subHeader.style.marginTop = "15px";
subHeader.style.fontSize = "2vw";

menu.style.width = "45px";
menu.style.position = "relative";
menu.style.top = "0px";
menu.style.left = "255px";

menu.addEventListener("click", RevealMenu);
function RevealMenu() {
  document.getElementById("revealMenu").style.width = "100%";
}
openReveal.style.margin = "10px";
openReveal.addEventListener("click", openMenu);
function openMenu() {
  document.getElementById("revealMenu").style.width = "0";
}

divMenuLinks.style.textAlign = "center";
// divMenuLinks.style.color = "#ff0001"
divMenuLinks.style.display = "flex";
divMenuLinks.style.flexDirection = "column";
divMenuLinks.style.fontFamily = "Roboto slab";
divMenuLinks.style.fontSize = "7vw";
divMenuLinks.style.gap = "20px";
divMenuLinks.style.margin = " 100px auto";

linkMenu1.style.textDecoration = "none";
linkMenu2.style.textDecoration = "none";
linkMenu3.style.textDecoration = "none";
linkMenu4.style.textDecoration = "none";

linkMenu1.style.color = "#ff0010";
linkMenu2.style.color = "#ff0010";
linkMenu3.style.color = "#ff0010";
linkMenu4.style.color = "#ff0010";

iconMusculacao.style.position = "absolute";
iconMusculacao.style.width = "45px";
iconMusculacao.style.top = "10px";
iconMusculacao.style.left = "180px";

// main
main.style.height = "70vw";
DivTextMain.style.margin = "150px";
DivTextMain.style.textAlign = "center";

h1Main.style.fontSize = "7vw";
h1Main.style.fontFamily = "Roboto slab";
h1Main.style.fontWeight = "900";
h1Main.style.color = "#FAFAFA";
h1Main.style.textShadow = "0 0 5px #fff";
h1Main.style.position = "absolute";

subMain.style.fontSize = "5vw";
subMain.style.position = "absolute";
subMain.style.right = "10px";
subMain.style.top = "280px";
subMain.style.color = "#FDFDFD";
subMain.style.textShadow = "0 0 20px #000";
subMain.style.fontFamily = "Roboto";
subMain.style.fontWeight = "900";

// Vantagem

//  style 1 e 2

// Vantagem
Vantagem.style.background = "#1c1c1c";
Vantagem.style.height = "225vw";
Vantagem.style.marginTop = "100px";

vantagensH3.style.color = "#FAFAFA";
vantagensH3.style.fontSize = "6.5vw";
vantagensH3.style.position = "absolute";
vantagensH3.style.top = "730px";
vantagensH3.style.left = "30px";
vantagensH3.style.fontFamily = "Roboto slab";

// Vantagem box vantagens

vantagensBox.style.position = "absolute";
vantagensBox.style.top = "850px";
vantagensBox.style.textAlign = "center";

imgVantagem.style.width = "120px";

tituloVantagem.style.color = "#fafafa";
tituloVantagem.style.fontFamily = "Poppins";
tituloVantagem.style.fontSize = "5.5vw";

SubVantagem.style.color = "#fafafa";
SubVantagem.style.fontSize = "4vw";
SubVantagem.style.fontFamily = "Roboto ";
SubVantagem.style.margin = "0 35px";

// Vantagem 2
vantagensBox2.style.position = "absolute";
vantagensBox2.style.top = "1150px";
vantagensBox2.style.textAlign = "center";

imgVantagem2.style.width = "120px";

tituloVantagem2.style.color = "#fafafa";
tituloVantagem2.style.fontFamily = "Poppins";
tituloVantagem2.style.fontSize = "5.5vw";

SubVantagem2.style.color = "#fafafa";
SubVantagem2.style.fontSize = "4vw";
SubVantagem2.style.fontFamily = "Roboto ";
SubVantagem2.style.margin = "0 35px";

// Vantagem 3
vantagensBox3.style.position = "absolute";
vantagensBox3.style.top = "1450px";
vantagensBox3.style.textAlign = "center";

imgVantagem3.style.width = "120px";

tituloVantagem3.style.color = "#fafafa";
tituloVantagem3.style.fontFamily = "Poppins";
tituloVantagem3.style.fontSize = "5.5vw";

SubVantagem3.style.color = "#fafafa";
SubVantagem3.style.fontSize = "4vw";
SubVantagem3.style.fontFamily = "Roboto ";
SubVantagem3.style.margin = "0 35px";

// RESULTADOS ================
resultados.style.height = "100vw";
resultados.style.background = "#757575";

h3Resultados.style.color = "#FAFAFA";
h3Resultados.style.textAlign = "center";
h3Resultados.style.fontSize = "6.5vw";
h3Resultados.style.fontFamily = "Roboto slab";
h3Resultados.style.padding = "20px 0";
