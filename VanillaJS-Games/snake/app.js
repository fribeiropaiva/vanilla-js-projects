const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const foodImg = new Image();
let score = 0;
const box = 32;
let snake = [];
let food = {};
let gameLoop;
let dir = "UP";

foodImg.src = "images/food.png"

snake[0] = {
  x: 9 * box,
  y: 10 * box
}

randomizeFoodPosition();

function direction(event) {
  if ((event.key === 'ArrowLeft' && !(dir == "RIGHT"))) {
    dir = "LEFT";
  }

  if (event.key === 'ArrowUp' && !(dir == "DOWN")) {
    dir = "UP";
  }

  if (event.key === "ArrowRight" && !(dir == "LEFT")) {
    dir = "RIGHT";
  }

  if (event.key === "ArrowDown" && !(dir == "UP")) {
    dir = "DOWN";
  }
}

function draw() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.height);

  for (let i = 0; i < snake.length; i++) {
    context.fillStyle = (i == 0) ? "green" : "white";
    context.fillRect(snake[i].x, snake[i].y, box, box);
    context.strokeStyle = "grey";
    context.strokeRect(snake[i].x, snake[i].y, box, box)
  }

  context.drawImage(foodImg, food.x, food.y);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (dir === "LEFT") snakeX -= box;
  if (dir === "UP") snakeY -= box;
  if (dir === "DOWN") snakeY += box;
  if (dir === "RIGHT") snakeX += box;



  if (snakeX == food.x && snakeY == food.y) {
    score++;
    randomizeFoodPosition();

  } else {
    const tail = snake.pop();
  }

  let newHead = {
    x: snakeX,
    y: snakeY
  }

  context.fillStyle = "white";
  context.font = "45px Arial";
  context.fillText(score, 1*box, 1.6*box);

  if (snakeX <= -box || snakeX > 18*box || snakeY <= -box || snakeY > 18*box || collision(newHead, snake)) {
    clearInterval(gameLoop);
  }

  snake.unshift(newHead);
}

function collision(object, array) {
  for (let i = 0; i < array.length; i++) {
    if (object.x == array[i].x && object.y == array[i].y) {
      return true;
    }
  }
  return false;
}

function randomizeFoodPosition() {
  food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 17 + 1) * box
  }

  if (collision(food, snake)) {
    randomizeFoodPosition();
  }
}

gameLoop = setInterval(draw, 200);

document.addEventListener("keydown", direction);

