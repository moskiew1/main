// zapisywanie do localStorage

localStorage.setItem("title", "Super gra komputerowa");
localStorage.setItem("Score", "24");
localStorage.setItem("name", "Steve");
localStorage.setItem("rank", "silver");

// odczytywanie z localStorage

const titleGame = localStorage.getItem("title");
console.log(titleGame);

// usuwanie elementów z localStorage

localStorage.removeItem("title");

// usuwanie wszytskich elementów z localStorage
if(confirm("Czy na pewno chcesz usunąć dane")) {
    localStorage.clear();
    alert("udało się wyczyścić dane");
} else {
    alert("Twoje dane zostały zachowane");
}


