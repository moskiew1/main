const plec = "kobieta";
const wiek = 35;
const zwierzeta = "kot";

if(plec == "kobieta") {
    console.log("Hej! Wiem, że jesteś kobietą!")
} else if (plec == "robot"){
    console.log("Hej! Wiem, że jesteś robotem!")
} else {
    console.log("Hej, Wiem, że jesteś mężczyzną!")
}


if(wiek > 30 && zwierzeta == "pies") {  // %%  muszą byc spełnione 2 warunki  || wystarczy zę będzie tylko jeden oznacza lub
    console.log("Warunk został spełniony")
} else {
    console.log("Warunek nie został spełniony")
}