const h2Element = document.querySelector("#band h2");

/*function wykonajAlert()
{
    alert("Uwaga kliknąłeś w nagłówek");
}
*/

/*function wykonajAlert2()
{
    if(confirm("Akceptujesz regulamin?")) {
        console.log("Użytkownik zaakceptował regulamin")
    } else {
        console.log("Użytkownik odrzucił regulamin")
    }
    
}
*/

function wykonajAlert3() {
    const userName = prompt("Jak się nazywasz?\n", "Podaj imię ...");
    console.log("Użytkownik nazywa się " + userName);
}


h2Element.addEventListener("click", wykonajAlert3);