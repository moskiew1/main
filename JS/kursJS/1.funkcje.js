 // Pierwszy sposób 

 function wyswietlTekst() {
    console.log("Przykładowy tekst z funkcji")
 }

 wyswietlTekst();

// Drugi sposób

const wyswietltekst2 = function() {
    console.log("Przykładowy tekst z funkcji 2")
}

wyswietltekst2();

// Trzeci sposób deklarowania funkcji

const wyswietlTekst3 = () => {
    console.log("Przykładowy tekst z funkcji 3")
}

wyswietlTekst3();


const imie = "Alicja";
const wiek = 35;
const zwierze = "kot";

const zwrocTekst = () => {
    if(imie == "Alicja") {
        console.log("Imie jest równe Alicja")
    } else {
        console.log("Dostęp zabroniony!")
    }
}

zwrocTekst();


// Parametry funkcji

//prosty przykład bez parametrów
let pierwszaLiczba = 1;
let drugaLiczba = 2;
let suma;

const dodawanieLiczb = () => {
    suma = pierwszaLiczba + drugaLiczba;
}

dodawanieLiczb();

console.log(suma);

//przykład z parametrami

const dodawanieliczb1 = (pierwsza, druga) => {
    console.log("Wynik: " + Number(pierwsza + druga)) // standardowa opcja wywoływania metod w funckji 
    console.log(`Wynik: ${Number(pierwsza + druga)} 2 opcja z tyldą`) // nowsza forma klejenia zmienny i tworzenia metod
    return`Wynik: ${Number(pierwsza + druga)}  to jest opcja z return do zmiennej wynik`
}

dodawanieliczb1(35, 12);

// parametry jako zmienne
const a = 35;
const b = 45;

dodawanieliczb1(a, b);

// zwracanie po przez return wyniku z funkcji do zmiennej wynik
let wynik;

wynik = dodawanieliczb1(32, 43);
console.log(wynik);




let myFirstFunction = (name, greeting) => {
    console.log(greeting +"! Mam na imię " + name);
};
myFirstFunction('Radek', 'Hej');
myFirstFunction('Michał', 'Dzień dobry');



let mnozenie =(liczba) =>{
    console.log(2 * liczba);
};

mnozenie(2);
mnozenie(3);
mnozenie(4);

let multiply = (a, b) =>{
    console.log(a * b);
};

multiply(2, 5);
multiply(6, 8);

let square = (num) => {
    console.log( num * num);
};
square(16);
square(23)
square(45)




