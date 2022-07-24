let x = 0;
let y = 0;
let mole = null;
const moleWidth = 50;
const moleHeight = 50;

let score = 0;
let scoreContainer = null;

let time = 60; // seconds
let timeContainer = null;
let moleRotationInterval = 2; // seconds

const makeTimeTick = () =>  // zegar gry
{
    time = time - 1;   
}

const makeScoreContainer = () =>
{
    const div = document.createElement('div');

    div.style.position = 'fixed';
    div.style.left = 0 + 'px';
    div.style.top = 0 + 'px';  

    document.body.appendChild(div);

    scoreContainer = div;
}

const displayScore = () => 
{
    scoreContainer.innerText = score +' points';   
}

const incScore = () => // funkcja dodająca punkty
{
    score = score + 1;
    displayScore();
}

const randomizeNumber = (min , max) => 
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const randomizeMolPosition = () =>  // wyświetlenie losowej pozycji kreta
{
    const xMax = window.innerHeight;
    const yMax = window.innerWidth;

    x = randomizeNumber(0, xMax);
    y = randomizeNumber(0, yMax);


}

const removeMole = () =>
{
    if(mole === null) return;

    mole.remove();
}
const makeMole = () =>
{
    const div = document.createElement('div')

    div.style.width = moleWidth + 'px';
    div.style.height = moleHeight + 'px';
    div.style.backgroundColor = 'black';
    div.style.position = 'fixed';
    div.style.left = x + 'px';
    div.style.top = y + 'px';

    div.addEventListener('click',clickOnMole)

    document.body.appendChild(div);

    mole = div;
}
const makeNewMole = () =>
{
    randomizeMolPosition();
    makeMole();
}

const clickOnMole = () => 
{
    incScore();
    makeMole();
}

makeScoreContainer();
displayScore();
makeMole();
