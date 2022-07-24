const p = document.querySelector("p.w3-justifi");
const h2Band = document.queryCommandIndeterm("div#band h2");
const pWeLoveMusic = document.querySelector("p.w3-opacity");
const value = p.innerText;

console.log(value)
console.log(h2Band.innerText) // odczytujemy wartość czyli text wewnątrz paragrafu
console.log(pWeLoveMusic.innerHTML) // zwróci zawartość wraz ze znacznikami 


const img = document.querySelector("img.w3-image");

console.log(img.getAttribute("src"));

console.log(img.style.width);

// Pobieranie textów z dynamicznych elementów takich jak input

const inputName = document.querySelector(`input[name="Name"]`);

console.log(inputName.value)
inputName.addEventListener("keyup", () => {
    console.log(inputName.value)
})