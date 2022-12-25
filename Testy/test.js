const body = document.querySelector("body");

const divElement = document.createElement("div");
divElement.style.width = "100px";
divElement.style.height = "100px";
divElement.style.backgroundColor = "red";


const p = document.createElement("p");
p.innerText = "JA pierdolę";

console.log(divElement);
console.log(p);

body.append(divElement, );


class Samochod {
    constructor(marka, model) {
        this.markaSamochodu = marka;
        this.modelSamochodu = model;
    }
    przywitajSie() {
        body.append(`Cześć jestem samochodem Marki : ${this.markaSamochodu}, \n 
        oraz modelem typu: ${this.modelSamochodu} `);
    }
}

const fiat = new Samochod("Fiat", "Punto");

fiat.przywitajSie();