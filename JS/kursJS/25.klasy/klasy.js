class Samochod {
    constructor(marka, model, rocznik, color) {
        this.markasamochodu = marka;
        this.modelSamochodu = model;
        this.rokSamochodu = rocznik;
        this.colorSamochodu = color;
    }

    przywitajSie() {
        console.log(`Jestem samochodem ${this.markasamochodu} modelu: ${this.modelSamochodu} jestem z rocznika ${rocznik} i posiadam kolor: ${this.color}`;)
    }

    pokazRocznik() {
        console.log(`Rocznik samochodu to: ${this.rocznik}`)
    }
}

const fiat = new Samochod("Fiat", "Punto", 2010, "Niebieski");
const ford = new Samochod("Ford", "Mondeo", 1999, "Zielony");
fiat.przywitajSie();
ford.przywitajSie();
fiat.pokazRocznik();