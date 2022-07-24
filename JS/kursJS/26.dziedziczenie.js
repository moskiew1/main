class PierwszaKlasa {
    pierwsza() {
        return("Pierwsz klasa")
    }
}
// extends pozwala na dziedziczenie 
class DrugaKlasa extends PierwszaKlasa {
    druga() {
        return("Druga klasa")
    }
}

const obiekt1 = new PierwszaKlasa();
const obiekt2 = new DrugaKlasa();


// tylko dzięki dziedziczeniu mogliśmy do obiektu 1 przypisać funkcję druga
console.log(obiekt1.druga());
