for(let i = 0; i < 10; i++) {
    if(i === 4) {
        console.log("jest równe")
        break;
    } else {
        console.log(i)
    }


//continue

    if(i === 4 || i === 6) {
        console.log("Jest równe");
        continue;  // nie wyświetli się cyfra 4 i 6 dlatego że jest continue..
    }else {
        console.log(i);
    }
}