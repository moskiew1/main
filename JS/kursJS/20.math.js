const pi = Math.PI;
const pierwiastek2 = Math.SQRT2;
const logrytm2 = Math.LN2;
const logrytm10 = Math.LN10;

const zaokraglenie1 = Math.round(logrytm10) // do najbliższej liczby całkowitej
const zaokraglenie2 = Math.ceil(2.1) // zaokrągla w górę do liczby całkowite
const zaokraglenie3 = Math.floor(1.9) // zaokrągla w dół do liczby całkowitej
const zaokraglenie4 = Math.trunc(2.8567456) // usuwa liczby po przecinku
const signMetoda = Math.sign(-347) // ujemna = -1, wynosi 0 = 0, dodatnia = 1; 
const potegowanie = Math.pow(2, 6) // potęgowanie
const pierwiastek = Math.sqrt(64) // pierwiastek z liczby 
const zwrocenieWartosciBezwzglednej = Math.abs(-5.55); // zwórcenie wartości bezwzględnej dodatniej
const minimalnaLiczba = Math.min(-4, -12, 5, 7, 10, 12) // zwróci najniższą liczbę z podanego zbioru
const maksymalnaLiczba = Math.max() // zwróci najwyższą liczbę z podanego zbioru

const losowanieLiczb = Math.floor((Math.random() * (50-1) + 1)); // losowa liczba od 1 do 50 zaokrąglona do pełnej cyfry

console.log(zaokraglenie1);
console.log(Math.random()) // losuje przypadkowe liczby
