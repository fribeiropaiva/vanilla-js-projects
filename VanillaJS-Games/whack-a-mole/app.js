const squares =  document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
let timerId = null;
let result = 0;
let currentTime = parseInt(timeLeft.textContent);
let hitPosition = null;

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole');
  });
  let nextSquare = squares[Math.floor(Math.random() * 9)];
  nextSquare.classList.add('mole');

  hitPosition = nextSquare.id;
}

squares.forEach(square => {
  square.addEventListener('mouseup', () => {
    if (square.id === hitPosition) {
      result += 1;
      score.textContent = result;
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    clearInterval(countdownId);
  }
}


let countdownId = setInterval(countDown, 1000);
