test();
test1();

// Stary sposób tworzenia funkcji pozwoli na wywołanie powyższej funkcji
function test() {
    console.log("test")
}

// tworzenie funkcji strzałkowej nie pozwoli na wywołanie jej w ten sposób wywołanie funkcji musi być po jej zadeklarowaniu !!!!
const test1 = () => {
    console.log("Test1")
    let nazwisko = "Nowak"
}

console.log(nazwisko) // zmienna nie zostanie znaleziona/wywołana z powodu tego że jest stworzona wewnątrz funkcji 