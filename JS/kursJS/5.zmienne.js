let color = null; // null występuje jako obiekt
let imiePsa; //  null to typ undefined
console.log(typeof(imiePsa))// pozwala sprawdzić typ zmiennej


//tablice

const tablica = ["Radek", "Tomasz", "Bartosz", 2, true]

console.log(tablica[0]) // wyjmie pierwszy element z tablicy "Radek"
console.log(tablica[1].toUpperCase()) // wypisze imię tomasz z dużych liter, toLowerCase() działa odwrotnie


// typ obiekt
const osoba = {
    imie: "Tomasz",
    wiek: 29,
    kolorOczu: "niebieskie",
    plec: "Mężczyzna"
}

console.log(osoba.imie); // wyjmie zmienną imie
console.log(osoba.kolorOczu.length); // wypisze długość stringa
console.log(typeof(osoba.plec)) // wskaże typ zmiennej w obiekcie


//Dodawanie zmiennych o róznych typach

let pies = "Rocky";
const wiek = 29;

console.log(wiek + pies); // nie wyskoczy błąd w JS on skleji 2 typy danych ze sobą i zmieni na wartość typu string

// zaokrąglanie liczb po przecinku 

let liczba1 = 20;
let liczba2 = 25.34;

console.log(liczba2.toFixed(0) + liczba1); // nie doda zmiennych typu int tylko je sklei
console.log(liczba2); // powyższy console log nie zmienia wartości zmiennej 
console.log(liczba1 + liczba2); // dodaje 2 zmienne typu int i wychodzi 45.34
liczba2 =liczba2.toFixed(0); // towrzy zmienną typu string ucinając liczby po przecinku czyli do liczby "25"
console.log(typeof(liczba2)); // wskazuje typ czyli string
console.log(liczba2 + liczba1); // klei 2 różne zmienne jedna typu string drugia typu int

liczba2 = parseInt(liczba2); // zmienną typu string zmienia na int
console.log(typeof(liczba2)); // wskazuje typ zmiennej jako number czyli in 
console.log(liczba1 + liczba2); // dodaje 2 inty i wychodzi 45

