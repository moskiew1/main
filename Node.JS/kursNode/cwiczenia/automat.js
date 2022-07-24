
const options = {};

const arg = process.argv.splice(2).forEach(x => {
    const parts = x.split('=');
    options[parts[0]] = parts[1];
});

//console.log(options)

function makeDrink(name, size) {
    let drink;
    switch (name){
        case 'juice': drink = 'sok'; break;
        case 'coffe': drink = 'kawę'; break;
        default: drink = 'Napój'
    }
    
    const text = `przygotowuję ${drink} o pojemności: ${size} ml`;
    console.log(text);

}

