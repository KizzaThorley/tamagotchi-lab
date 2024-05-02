/*-------------------------------- Constants --------------------------------*/
const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
};


/*---------------------------- Variables (state) ----------------------------*/
let timer = 0
let gameOver = null

/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.querySelector('#boredom-stat')

const hungerStatEl = document.querySelector('#hunger-stat')

const sleepinessStatEl = document.querySelector('#sleepiness-stat')

// console.log(boredomStatEl);
// console.log(hungerStatEl);
// console.log(sleepinessStatEl);
const buttonPlay = document.querySelector('#play')

const buttonFeed = document.querySelector('#feed')

const buttonSleep = document.querySelector('#sleep')
// console.log(buttonFeed);
// console.log(buttonPlay);
// console.log(buttonSleep);
const gameMessage = document.querySelector('#message')

const resetBtnEL = document.querySelector('#restart')

// console.log(gameMessage);
// console.log(resetBtnEL)
/*-------------------------------- Functions --------------------------------*/
function init() {
    resetBtnEL.classList.add('hidden')
    gameMessage.classList.add('hidden')
    gameOver = false
    state.boredom = 0
    state.hunger = 0
    state.sleepiness = 0
    timer = setInterval(runGame, 2000)
    render()
}

function runGame() {
    unpdateStates()
    checkGameOver()
    render()
}


function randomNum() {
    const randomNum = Math.floor(Math.random() * 4)
    return randomNum
}
function unpdateStates() {
    state.boredom = randomNum() + state.boredom
    state.hunger = randomNum() + state.hunger
    state.sleepiness = randomNum() + state.sleepiness
}

function render() {
    if (gameOver === true) {
        clearInterval(timer)
        resetBtnEL.classList.remove('hidden')
        gameMessage.classList.remove('hidden')
        boredomStatEl.innerText = state.boredom
        hungerStatEl.innerText = state.hunger
        sleepinessStatEl.innerText = state.sleepiness
    } else {
        boredomStatEl.innerText = state.boredom
        hungerStatEl.innerText = state.hunger
        sleepinessStatEl.innerText = state.sleepiness
    }
}

function checkGameOver() {
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
        gameOver = true
    }
}

function playBtnClick(event) {
    state.boredom = 0
    render()
    console.log('i was clicked');
}

function feedBtnClick(event) {
    state.hunger = 0
    render()
    console.log('i was clicked');
}


function sleepinessBtnClick(event) {
    state.sleepiness = 0
    render()
    console.log('i was clicked');
}

init()
/*----------------------------- Event Listeners -----------------------------*/
buttonPlay.addEventListener('click', playBtnClick)
buttonFeed.addEventListener('click', feedBtnClick)
buttonSleep.addEventListener('click', sleepinessBtnClick)
resetBtnEL.addEventListener('click', init)

// It’s a one player game.
// The player is tasked with keeping a creature happy.
// Each creature a player ‘raises’ has three main statistics.
// The stats are:
// Boredom
// Hunger
// Sleepiness
// To keep the creature happy, a player must keep 3 
// stats within a given range - greater than 0, and less than 10.

// Display three buttons when the page is initially displayed.
// Display three stats that randomly increment a value between 0 and 3 at a set interval.
// A player can click on a button to set the corresponding stat to 0.
// Provide lose logic, and display a losing message.
// Provide a Play Again button that will reset the game.