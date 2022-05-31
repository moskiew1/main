const sayHi = (name = '') => {
    const args = process.argv.splice(2) // pokaże tablicę z danymi od 2 pozycji
    for (const a of args) {
        const arr = a.split('=');

    if(arr[0] === '--name'){
        name = arr[1];
    }
    }

console.log('Cześć' + name + 'xD')
}

sayHi('Tomek')


    



