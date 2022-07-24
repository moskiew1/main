 // sposoby deklarowania tablic

 const tablica1 = ["Alicja"];
 tablica1.push(2);
 console.log(tablica1 + "<- pushem dodaliśmy ");
 //console.log(typeof(tablica1));

 // Sposób 2 

 const tablica2 = new Array(5);

 tablica2[3] = "Kamil";
 console.log(tablica2 );


 // Metody na tablicach

 const tablica3 = ["Klaudia", 2, 5.35, true, {name: "Tomasz", age:24}];
 const liczby = [1,6,4,9,2,4,2];

 //weryfikacja długości tablicy

 console.log(tablica3.length + "<- Długość tablicy")

 //Dodawanie elemntów do tablicy

 liczby.push(10);
 console.log(liczby + "<- Tutaj dodaliśmy nową liczbę do tablicy");
 
// usuwanie elemntów z końca tablicy

liczby.pop();
console.log(liczby + "<- usunęliśmy ostatni element z tablicy"); 

// usuwanie elementu z początku tablicy

tablica3.shift();
console.log(tablica3 + "<- usunęliśmy pierwszy element z tablicy");

// znajdowanie elementu w tabli po jej wartości

const indexElement = liczby.indexOf(2)
const indexElement2 = liczby.indexOf(20)
console.log(indexElement + "<- znalazł liczbę numer 2 na pozycjach"); 
console.log(indexElement + "liczba -1 oznacza, że nie znaleziono elementu w tablicy");

// usuwanie dowolnego elementu z tablicy

liczby.splice(indexElement, 1) // usunie 1 element od indexElement jeśli damy 2 to usunie 2 elementy
console.log(liczby) 

// przekształcenie tablicy na typ string
const string = liczby.join(" "); // Przekształcił tablicę liczb w jeden długi string oddzielony spacjami
console.log(string);

const imiona = ["Rafał", "Krzyś", "Ola", "Ania"]
const stringImiona = imiona.join("-");
console.log(stringImiona);

// odwrócenie tablicy

 imiona.reverse();
 console.log(imiona);

 // sortowanie tablicy

 imiona.sort();
 console.log(imiona);

// łączenie tablic 
const superTablica = liczby.concat(imiona);
console.log(superTablica);

