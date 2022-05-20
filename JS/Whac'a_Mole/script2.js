let x = 0
let y = 0
let mole = null
const moleWidth = 50
const moleHeight = 50

let score = 0
let maxPossibleScor = 0
let scoreContainer = null


let time = 60 // seconds
let timeIntervalId = null
let timeContainer = null

let moleRotationInterval = 2 // seconds
let moleRotationIntervalId = null

let moleRotationIntervalIncTime = 10 // seconds
const moleRotationIntervalIncFactor = 0.75


const makeTimeContainer = () => {
    const div = document.createElement('div')

    div.style.position = 'fixed'
    div.style.right = 0 + 'px'
    div.style.top = 0 + 'px'
    div.style.fontFamily = 'sans-serif'
    div.style.fontSize = '28px'

    document.body.appendChild(div)

    timeContainer = div
}

const displayTime = () => {
    timeContainer.innerText = time + ' seconds' 
}

const speedUp = () => {
    if(time % moleRotationIntervalIncTime !== 0) return 
    moleRotationInterval = moleRotationInterval * moleRotationIntervalIncFactor
    startMoleRotationInterval()
}

const decTime = () => {
    time = time - 1
    if(time === 0) endGame()
    speedUp()
    displayTime()
}

const makeScoreContainer = () => {
    const div = document.createElement('div')

    div.style.position = 'fixed'
    div.style.left = 0 + 'px'
    div.style.top = 0 + 'px'
    div.style.fontSize = '28px'
    div.style.fontFamily = 'sans-serif'

    document.body.appendChild(div)

    scoreContainer = div
}
const displayScore = () => {
    scoreContainer.innerText = score + ' points' 
}

const intScore = () => {
    score = score + 1
    displayScore()
}

const randomizeNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min+1) + min)
}

const randomizeMolePosition = () => {
    const xMax = window.innerHeight - moleHeight
    const yMax = window.innerWidth - moleWidth

    x = randomizeNumber(0, xMax)
    y = randomizeNumber(0, yMax)

    console.log(x,y)
}

const removeMole = () => {
    if(mole === null) return

    mole.remove()
}

const makeMole = () => {
    removeMole()

    const div = document.createElement('div')

    div.style.width = moleWidth + 'px'
    div.style.height = moleHeight + 'px'
    div.style.backgroundColor = 'black'
    div.style.position = 'fixed'
    div.style.left = x + 'px'
    div.style.top = y + 'px'

    div.addEventListener(
        'click',
        clickOnMole
    )

    document.body.appendChild(div)

    mole = div
}

const makeNewMole = () => {
    randomizeMolePosition()
    makeMole()
}

const clickOnMole = () => {
    startMoleRotationInterval()
    intScore()
    makeNewMole()
}

const endGame = () => {
    resetGame()
    alert('Your score is: ' + score)
}

const resetGame = () =>{
    window.location =''
}

const startTimeInterval = () => {
   timeIntervalId = setInterval(decTime,1000)
}

const startMoleRotationInterval = () => {
    stopMoleRotationInterval()
   moleRotationIntervalId = setInterval(makeNewMole, moleRotationInterval * 1000)
}

const stopMoleRotationInterval = () => {
    if(moleRotationIntervalId === null) return
    clearInterval(moleRotationIntervalId)
}

const init = () =>{
    makeScoreContainer()
    displayScore()
    makeTimeContainer()
    displayTime()
    makeNewMole()
    startTimeInterval()
    startMoleRotationInterval()
}

init()



