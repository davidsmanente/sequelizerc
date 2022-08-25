console.log("Estou dentro do main.js");

// let num = 2;

// if (num > 3) {
//   console.log("Maior que 3");
// } else {
//   console.log("menor ou igual a 3");
// }

// console.log(window.document);
// Abre popup com mensagem
// window.alert("Hello");
// alert("Hello");
// Pega documento HTML
// window.document;
// console.log(document);

// Pela elemento com o id referente
// const titulo = document.getElementById("titulo-principal");
// console.log(titulo);
// Imprime texto que está dentro do elemento
// console.log(titulo.innerText);
// Altera texto dentro do elemento
// titulo.innerText = "Batata";
// console.log(titulo.innerText);
// Imprime text + html que está dentro do elemento
// console.log(titulo.innerHTML);
// Altera text + html que está dentro do elemento
// titulo.innerHTML = "<h2>Arroz</h2>";

// console.log(titulo.innerHTML);
// console.log(titulo.innerText);

// Pega todos os elementos que possuem essa classe
// const titulos = document.getElementsByClassName("azul");
// console.log(titulos);
// Pega primeiro elemento da listagem
// titulos[0].innerText = "Primeiro da lista";
// titulos[1].innerText = "Segundo da lista";
// Mapeia lista com elementos
// for (const elemento of titulos) {
//   elemento.innerText = "Classe azul";
// }
// ! Não funciona na lista de elementos
// titulos.map((elemento) => console.log(elemento));
// titulos.forEach((elemento) => console.log(elemento));

// Pega primeiro elemento que encontrar de acordo com o seletor
// const elem = document.querySelector(".azul");
// console.log(elem);

// Pega todos os elementos de acordo com o seletor
// const elems = document.querySelectorAll("h1");
// console.log(elems);

// // Altera a estilização
// titulo.style.color = "red";
// titulo.style.backgroundColor = "blue";
// titulo.style.fontSize = "20px";

const titulo = document.getElementById("titulo-principal");

//Adiciona classe do elemento
titulo.classList.add("azul");
//Remove classe do elemento
titulo.classList.remove("azul");
//Adiciona se não existir a classe e remove se a classe 
//existir no elemento
titulo.classList.toggle("azul");

//Verifica se classe existe dentro do elemento
console.log(titulo.classList.contains("azul"));




























