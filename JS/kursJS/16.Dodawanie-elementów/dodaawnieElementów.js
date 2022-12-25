// tworzenie nowego elementu np. div

const divElement = document.createElement("div");


divElement.style.width = "100px";
divElement.style.height = "100px";
divElement.style.backgroundColor = "red";

console.log(divElement);

const p = document.createElement("p");

p.innerText = "Nowy super paragraf"



// wstawianie elementu do HTML (DOM)

const form = document.querySelector("form");
const boxBend = document.querySelector("div#band"); 

form.appendChild(divElement);
boxBend.appendChild(p);