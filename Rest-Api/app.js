console.log("test");
const API_URL_ALL = "https://restcountries.com/v2/all";

let countries;

fetch(API_URL_ALL)
.then((res) => res.json())
.then((countriesRaw) => {
    countries = countriesRaw.map((country) => {
        return {
            capital: country.capital || "brak",
            population: country.population,
            name: country.name,
            region: country.region,
            flagUrl: country.flags.png,

        };
    })
    console.log(countries);
});