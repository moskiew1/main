// Pętla for
let licznik = 0;

for(licznik; licznik <= 5; licznik++)
{
    console.log(licznik + " " + "Test")
}

// Pętla while

let licznik1 = 0;

const imionaOsob = ["Alicja", "Rafał", "Katarzyna", "Robert"]

while(licznik < imionaOsob.length) {
    console.log(imionaOsob[licznik]);
    licznik++;
}

while(imionaOsob[licznik1] !== "Katarzyna") {
    console.log(imionaOsob[licznik1]);
    licznik1++;
}

// Pętla do while

let licznik3 = 0;


do {
    console.log(imionaOsob[licznik1]);
    licznik1++;

} while(licznik3 <= 5) 

// Pętla for of

const liczby = [1, 6, 1, 7];

for(let value of liczby){
    console.log(value * 52);
}

for(let value of imionaOsob) {
    console.log(value + " Witaj użytkowniku!")
}




let nOddNumbers = (n) => {
    for(let i = 1; i <= n; i++){
        console.log(2*i - 1);
    } 
};
nOddNumbers(20);

let circleLenght = (radius) => {
    console.log(2*radius*3.14);
};

for(let i = 1; i <= 20; i++) {
circleLenght(i);
} 
