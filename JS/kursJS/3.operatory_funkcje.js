 /* 
    Operatory matematyczne

    Dodawanie
    Odejmowanie
    Mnożenie
    Dzielenie 
    Potęgowanie(**)
    modulo (%) czyli reszta z dzielenia
    (2%2) = 0
    (5 % 2) = 1
    inkrementacja (++) zwiększa liczbę o 1


    Operatory przypisania 
    = 
    += 
    /=
    *=
    -=
    **=

    Operatory porównania
    ==  wartość jest taka sam ale nie koniecznie tego samego typu
    === wartość/zmienna jest taka sam oraz są tego samego typu
    != operator różny czyli czy 2 zmienne się różnią 
    > i < 
    >= i <=
    
    (?) operator trój składnikowy
    liczba1 == 53 ? console.log("Jest równa2") : console.log("Nie jest równa")

    operatory logiczne
    "i" = &&  lewa i prawa strona musi być spełniona
    "lub" = || jedna z dwóch stron musi być spełniona
    Logiczne odwórcenie:
    "!false" lub "!true"






let bool = 5 > 3;
console.log(bool);

let bool2 = 1 === 1;
console.log(bool2);

let bool3 = 1 !== 2;
console.log(bool3);

let bool4 = 'Kacper' === 'Kacper';
console.log(bool4);

let isBiggerThan10 = (number) => {
if(number > 10) {
    console.log('Liczba jest większa niż 10');
    }
    else {
        console.log("liczba nnie jest większa od 10");
    }
};

isBiggerThan10(20);
isBiggerThan10(5);