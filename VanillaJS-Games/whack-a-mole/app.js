const squares =  document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
let result = 0;
let currentTime = parseInt(timeLeft.textContent);
let hitPosition = null;
let timerId = null;
let countdownId

function randomSquare() {
  let lastPosition = hitPosition;
  let moleSquare = document.querySelector('.mole');
  let nextSquare = squares[Math.floor(Math.random() * 9)];

  if (moleSquare) {
    moleSquare.classList.remove('mole');
    moleSquare.removeEventListener('mouseUp', addToScore);
  }

  nextSquare.classList.add('mole');
  nextSquare.addEventListener('mouseup', addToScore, {once: true});
  hitPosition = nextSquare.id;
  if (lastPosition === hitPosition) {
    randomSquare();
  }
}

function addToScore() {
  if (this.id === hitPosition) {
    result += 1;
    score.textContent = result;
  }
}

function moveMole() {
  timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    gameOver();
  }
}

function gameOver() {
  clearInterval(timerId);
  clearInterval(countdownId);
}

countdownId = setInterval(countDown, 1000);
