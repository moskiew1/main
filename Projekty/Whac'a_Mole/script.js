let x = 0;  // płaszczyzna pozioma
let y = 0;  // płaszczyzna pionowa
let mole = null; // kret
const moleWidth = 50; // szerokość kreta
const moleHeight = 50;  // wysokość kreta

let score = 0; // punkty do zdobycia
let maxPossibleScore = -1;
let scoreContainer = null; 

let time = 60; // seconds
let timeIntervalId = null;
let timeContainer = null;

let moleRotationInterval = 2 // seconds
let moleRotationIntervalId = null;

let moleRotationIntervalIncTime = 10;  // seconds co ile mole będzie przyśpieszał
const moleRotationIntervalIncFactor = 0.85 // o ile będzie mnożone przyśpieszenie mola co 10 sekund

const incMacPossibleScore = () => {
    maxPossibleScore = maxPossibleScore + 1;
    displayScore();
}

const makeTimeContainer = () => { // kontener na czas w grze
    const div = document.createElement('div');

    div.style.position = 'fixed';
    div.style.right = 0 + 'px';
    div.style.top = 0 + 'px';
    div.style.fontFamily = 'sans-serif';
    div.style.fontSize = 20 + 'px'
    div.style.cursor = 'pointer';
        
    document.body.appendChild(div);

    timeContainer = div;
}

const displayTime = () => { // upływający czas w grze
    timeContainer.innerText = time + ' seconds';    
}

const speedUp = () => {
    if (time % moleRotationIntervalIncTime !== 0) return
    moleRotationInterval = moleRotationInterval * moleRotationIntervalIncFactor;
    startMoleRotationInterval()
}

const decTime = () => {  // tykanie zegara
    time = time - 1;
    if(time === 0) 
        endGame()
        speedUp()
    displayTime();
}

const makeScoreContainer = () => { // kontener na punkty
    const div = document.createElement('div');

    div.style.position = 'fixed';
    div.style.left = 0 + 'px';
    div.style.top = 0 + 'px';
    div.style.fontFamily = 'sans-serif';
    div.style.fontSize = 20 + 'px'
        
    document.body.appendChild(div);

    scoreContainer = div;
}

const displayScore = () => { // zdobywanie punktów
    scoreContainer.innerText = score + '/' + maxPossibleScore + ' points';    
}

const incScore = () => { // dodawanie punktów
    score = score + 1;
    displayScore();
}

const randomizeNumber = (min, max) => { // numer randomowy do określania miejsca kreta
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const randomizeMolePosition = () => { // przeskakiwanie kreta
    const xMax = window.innerWidth - moleWidth;
    const yMax = window.innerHeight - moleHeight;

    x = randomizeNumber(0, xMax);
    y = randomizeNumber(0, yMax);
}

const removeMole = () => { // usuwanie kreta 
    if( mole === null) return;

    mole.remove();
}

const makeMole = () => { // tworzenie kreta w html
    removeMole();
    incMacPossibleScore();

    const div = document.createElement("div");

    div.style.width = moleWidth + 'px';
    div.style.height = moleHeight + 'px';
    div.style.position = 'fixed';
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.backgroundImage = 'url("./mole.png")';
    div.style.backgroundSize = 'cover';

    div.addEventListener(
        'click', clickOnMole
    )

    document.body.appendChild(div)

    mole = div;
}

const makeNewMole = () => { // tworzenie nowego mola
    randomizeMolePosition();
    makeMole();
}

const clickOnMole = () => { // kliknięcie w mola
    startMoleRotationInterval();
    incScore();
    makeNewMole();
}

const endGame = () => {
    alert('Your score is: ' + score + 'out of' + maxPossibleScore);
    resetGame()
}

const resetGame = () => {
    window.location = '';    
}

const startTimeInterval = () => {
    timeIntervalId = setInterval(decTime,1000)
}

const startMoleRotationInterval = () => {
    stopMoleRotationInterval()
    moleRotationIntervalId = setInterval(
        makeNewMole,
        moleRotationInterval * 1000
    )
}

const stopMoleRotationInterval = () => {
    if(moleRotationIntervalId === null) return
    clearInterval(moleRotationIntervalId);
}

const init = () => {

    makeScoreContainer();
    displayScore();
    makeTimeContainer();
    displayTime();
    makeNewMole();
    startTimeInterval();
    startMoleRotationInterval();
}

init();
