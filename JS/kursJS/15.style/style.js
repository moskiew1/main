const h2Element = document.querySelector("div#band h2.w3-wide");
const navbar = document.querySelector("div.w3-bar");

let switchVariable = false;



h2Element.addEventListener("click", function() {
    //ziana koloru h2 na czerowny

    if(switchVariable === false)
    {
        this.style.color = "red";
        this.style.fontSize = "56px";
        
    } else {
        this.style.color = "black";
        this.style.fontSize = "22px";
    }

    switchVariable = !switchVariable;
    
    //this.style = "text-decoration: underline"; //skasuje poprzednie style nadpisze je. Nie zalecany sposób !
})

window.addEventListener("scroll", () => {
    if(window.scrollY > 350) {
        navbar.style.background = "blue";
    } else {
        navbar.style.background = "black";
        navbar.style.color = "white";

    }
})