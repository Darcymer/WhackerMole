//Text//

document.querySelector('#Projectintro').textContent = "Week 6 Project";
document.querySelector('#title').textContent = "Welcome To Whack-A-Mole.";
document.querySelector('#p2').textContent = "Try to hit the Mole";
document.querySelector('#p3').textContent = "Get as many as you possibly can!!!";
document.querySelector('#startButton').textContent = "Press me for speed";
///

const holes = document.querySelectorAll('.hole')
const mole = document.querySelector('.mole')
let touchdown
const score = document.querySelector ('#score')
let Yscore = 0
let buttonElement2 = document.querySelector('#startButton')


//sets a timer for the game
function randomhole(){
    holes.forEach(look => {
        look.classList.remove('mole')
    })
    let randomhole = holes[Math.floor(Math.random()* 11)]
    randomhole.classList.add('mole')

    touchdown = randomhole
}


function mover() {
    let timertruth = null
    timertruth = setInterval(randomhole, 500)
}

buttonElement2.addEventListener('click', mover)
