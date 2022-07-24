const h2Band = document.querySelector("div#band h2");

//zdarzenie kliknięcie
h2Band.addEventListener("click", () => {
    console.log("kliknąłem w nagłówek!");
})

function showText() {
    console.log("Klinałem w tekst")
}
h2Band.addEventListener("click", showText);

// słowo kluczowe this

  const p = document.querySelector("p.w3-justify");

 /* p.addEventListener("click", function() {
      console.log(this);  // odwołuje się bezpośrednio do paragrafu dzięki function 
  })
*/

/*p.addEventListener("click", () => {
    console.log(this);  // odwołuje się do okna window dzięki funkcji strzałkowej
})
*/

// Event 

p.addEventListener("click", e=> {
    console.log(e.clientX);   // pointerEvent  posiada wszystkie parametry kliknięcia lokalizację x,y typ=click  itp. // clientX wyśietli pozycję w płaszczyźnie x
})

// Mouseover i mouseout

const buyTicketBtn = document.querySelector("#buy-ticket");

buyTicketBtn.addEventListener("mouseover", () => {
    console.log("Zadziało się!")  // działa w momencie najechania na button 
})

buyTicketBtn.addEventListener("mouseout", () => {
    console.log("działo się") // działa kiedy myszka zjedzie z danego elementu
})

// Prevent default 

const formContact = document.querySelector("form");

formContact.addEventListener("submit", e=> {
    e.preventDefault(); // zablokuje wykonywanie się funkcji po kliknięciu w przycisk
    console.log("Test");  
})

const link = document.querySelector(`div.w3-top div.w3-bar a[href="#contact"]`);
 
link.addEventListener("click", event => {
    event.preventDefault(); // blokuje przekierowanie, który pozwala inaczej zaprogramować przekierowanie.
})

// Keydown, keyup

const inputName = document.querySelector(`input[name="Name"]`);

inputName.addEventListener("keydown", () => {
    console.log("Uruchomiono zdarzenie keydown !"); // uruchomił zdarzenie po kliknięciu w dowolny przycisk
    console.log(e.key); // wyśiwetli nam jaki klawisz został kliknięty
})

inputName.addEventListener("keyup", () => {
    console.log("Uruchomiono zdarzenie !"); // po kliknięciu gdy przycisk wraca do swojej normalne formy wtedy dopiero wykonuje się zdarzenie keyup
})

//Scroll

window.addEventListener("scroll", () => {
    console.log("Scroll!"); // informuje nas o tym, że użytkownik scroluje apkę 
})

window.addEventListener("scroll", e => {
    console.log(e); // funkcja evenet wyświetli dane obiektu.
})

// wykonanie zdarzenia po wczytaniu się w pełni DOM 

window.addEventListener("DOMContentLoaded", () => {
    console.log("Dom wczytał się poprawnie!")
})
