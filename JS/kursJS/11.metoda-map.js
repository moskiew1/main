const imiona = ["Alicja", "Tomasz", "Agniszka", "Beata", "Rafał", "Klaudisz"];
const liczby = [24, 63, 41, 42, 68, 85];
let dziewczyny = [];

//Wykorzystanie metody map w praktyce
// liczby.map((liczba, index) => {
//     console.log(`${liczba} kryje się pod indeksem - ${index}`)
// })

imiona.map(imie => {
    if(imie[imie.length-1] == 'a') {
        dziewczyny.push(imie)
    }
})

console.log(dziewczyny)

