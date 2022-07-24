// Pierwszy sposób pobierania elementów querySelector

const h2Band = document.querySelector("div#band h2.w3-wide");
const bandBox = document.querySelector("div#band");
const snapChatIcon = document.querySelector("footer i:nth-child(3)");
const div = document.querySelector("div") // zaciągnie tylko 1 napotkanego diva w html

console.log(h2Band);
console.log(bandBox);

// Drugi sposób dodawania elementów - querySelectroAll

const div2 = document.querySelectorAll("div");

console.log(div);
console.log(div2);

// trzeci sposób pobierania getElementByClassName

const specialButton = document.getElementsByClassName("special")

// czwarty sposób pobierania elementów 

const navDemo = document.getElementById("navDemo");

// piąty sposób pobierania elementów getElementByTagName

const imgElement = document.getElementsByTagName("img");

