const boxBand = document.querySelector("div#band"); // tworzy diva o nazwie band w html 

const p = document.createElement("p");
const link = document.createElement("a")

p.innerText = "Nowy super paragraf" // dodaje do paragrafu text
link.innerHTML = "Przekierowanie do google.com";

p.classList.add("active"); // dodaje classe w html o nazwie active
p.classList.add("active2");
p.classList.remove("active"); // usuwa classe z html

link.setAttribute("href", "https://google.com"); // dodawanie linku
link.removeAttribute("href"); // usuwanie linku

link.id = "super-link"; // dodawanie znacznika id

boxBand.appendChild(p); // dodaje do rodzica paragraf
boxBand.appendChild(link); // dodaje do rodzica link 